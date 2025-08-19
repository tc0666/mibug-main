import React from 'react';
import { Box, Button, Typography, Theme, generateUtilityClasses } from '@mui/material';
import clsx from 'clsx';

const classes = generateUtilityClasses('CreditRequirements', [
  'root',
  'imageSection',
  'contentSection',
  'title',
  'list',
  'listItem',
  'button',
  'wrap',
  'description',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    minHeight: "429px",
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  [`& .${classes.wrap}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: "-24px",
    marginLeft: "-24px",
    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
      margin: 0,
    }
  },
  [`& .${classes.imageSection}`]: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    paddingTop: '56px',
    flex: "0 0 50%",
    maxWidth: "50%",
    minHeight: "429px",
    [theme.breakpoints.down(900)]: {
      maxWidth: "100%",
      minHeight: "235px",
    }
  },
  [`& .${classes.contentSection}`]: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '60px 0 88px 51px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    [theme.breakpoints.up('xs')]: {
      maxWidth: '540px',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: 'calc(720px / 2)',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 'calc(1248px / 2)',
    },
    [theme.breakpoints.down(900)]: {
      padding: "24px 12px",
    }
  },
  [`& .${classes.title}`]: {
    fontWeight: 700,
    marginBottom: '16px',
    fontSize: "24px",
    lineHeight: "32px",
    color: '#fff',
  },
  [`& .${classes.description}`]: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    color: '#fff',
    a: {
      color: '#fff',
    }
  },
  [`& .${classes.list}`]: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '24px',
  },
  [`& .${classes.listItem}`]: {
    marginBottom: '8px',
    '&::before': {
      content: '"✓"',
      color: '#fff',
      marginRight: '8px',
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
  [`& .${classes.button}`]: {
    backgroundColor: '#fff',
    color: theme.palette.primary.main,
    textTransform: 'none',
    padding: '8px 16px',
    maxWidth: "304px",
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
});

interface CreditRequirementsProps {
  className?: string;
  title: string;
  description: string;
  list?: string[];
  buttonText?: string;
  backgroundImage: string;
}

const CreditRequirements: React.FC<CreditRequirementsProps> = ({
   className,
   title,
   description,
   list,
   buttonText,
   backgroundImage,
}) => {
  return (
    <Box className={clsx(classes.root, className)} sx={styles}>
      <Box className={classes.wrap}>
        <Box
          className={classes.imageSection}
          sx={{ backgroundImage: `url(${backgroundImage})` }}
        ></Box>
        <Box className={classes.contentSection}>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.description} dangerouslySetInnerHTML={{ __html: description }} />
          <ul className={classes.list}>
            {list?.map((item, index) => (
              <li key={item} className={classes.listItem}>
                {item}
              </li>
            ))}
          </ul>
          {buttonText ? (
            <Button className={classes.button}>{buttonText}</Button>
          ): null}
        </Box>
      </Box>
    </Box>
  );
};

export default CreditRequirements;
