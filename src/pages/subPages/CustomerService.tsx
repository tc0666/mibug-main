import React, { useState } from 'react';
import {Box, Button, TextField, Typography, Modal, Container, generateUtilityClasses, Theme} from '@mui/material';
import customerService from '../../icons/customerService.png'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const classes = generateUtilityClasses('CustomerService', [
  'container',
  'header',
  'searchSection',
  'searchInput',
  'buttonGrid',
  'button',
  'contentBox',
  'supportButton',
  'chatWindow',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.container}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  [`& .${classes.searchSection}`]: {
    width: '100%',
    padding: '40px 16px',
    backgroundImage: `url(${customerService})`, // Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    marginBottom: '32px',
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  [`& .${classes.header}`]: {
    color: '#fff',
    marginBottom: "10px",
    fontWeight: 700,
    fontSize: "22px",
  },
  [`& .${classes.searchInput}`]: {
    width: '100%',
    maxWidth: '600px',
    widths: "100%",
    marginTop: '16px',
    background: '#fff',
    borderRadius: '30px',
    height: "40px",
    color: "#999",
    border: "1px solid #fff",
    margin: "0 auto",
    svg: {
      fill: "#ddd"
    },
  },
  [`& .${classes.buttonGrid}`]: {
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: '32px',
  },
  [`& .${classes.button}`]: {
    border: '1px solid rgba(57, 169, 73, 1)',
    color: 'rgba(57, 169, 73, 1)',
    fontSize: '16px',
    boxSizing: "border-box",
    flex: "1 0 340px",
    fontWeight: 400,
    textTransform: 'none',
    borderRadius: '4px',
    padding: '12px 16px',
    margin: "0 15px 30px",
    '&:hover': {
      backgroundColor: '#E6F4E6',
      color: '#007A00',
    },
  },
  [`& .${classes.contentBox}`]: {
    fontSize: '16px',
    color: '#333',
    maxWidth: '800px',
    margin: "20px 0",
    textAlign: 'center',
  },
  [`& .${classes.supportButton}`]: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    fontSize: '1.07143rem',
    fontWeight: 600,
    borderRadius: '999rem',
    padding: ".92857rem 1.57143rem",
    width: '136',
    height: '45px',
    boxSizing: "border-box",
    svg: {
      marginRight: "8px",
    }
  },
  [`& .${classes.chatWindow}`]: {
    position: 'fixed',
    bottom: '50%',
    right: '50%',
    width: '300px',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    zIndex: 1000,
  },
});

const buttonData = [
  { label: 'Account & Einstellungen', content: 'Information about account settings and configuration.' },
  { label: 'Produkt & Service', content: 'Details about our products and services.' },
  { label: 'Sicherheit', content: 'Learn about security measures and best practices.' },
  { label: 'Kreditanfrage', content: 'Guidance on submitting loan requests and related FAQs.' },
];

const CustomerService: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<string>('');
  const [chatOpen, setChatOpen] = useState<boolean>(false);

  const handleButtonClick = (content: string) => {
    setSelectedContent(content);
  };

  return (
    <Box sx={styles} className={classes.container}>
      <Box className={classes.searchSection}>
        <Typography variant="h4" className={classes.header}>
          Kundenservice
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Suchen..."
          fullWidth
          slotProps={{
            input: {
              className: classes.searchInput,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      <Container maxWidth="lg">


        {selectedContent && (
          <Box className={classes.contentBox}>
            <Typography>{selectedContent}</Typography>
          </Box>
        )}

        {/* Button Grid */}
        <Box className={classes.buttonGrid}>
          {buttonData.map((button) => (
            <Button
              key={button.label}
              className={classes.button}
              onClick={() => handleButtonClick(button.content)}
            >
              {button.label}
            </Button>
          ))}
        </Box>

        <Button
          className={classes.supportButton}
          onClick={() => setChatOpen(true)}
        >
          <HelpOutlineIcon />
          Support
        </Button>

        <Modal sx={styles} open={chatOpen} onClose={() => setChatOpen(false)}>
          <Box className={classes.chatWindow}>
            <Typography variant="h6">Chatbot</Typography>
            <Typography variant="body2" sx={{ marginBottom: '16px' }}>
              Stellen Sie eine Frage. Ich werde die Antwort finden.
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
            />
            <Button
              className={classes.button}
              onClick={() => setChatOpen(false)}
            >
              submit
            </Button>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default CustomerService;
