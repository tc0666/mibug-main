import React from 'react';
import { Box, Typography, Avatar, generateUtilityClasses } from '@mui/material';
import { Theme } from '@mui/material/styles';

const classes = generateUtilityClasses('ProfileCard', [
  'root',
  'avatar',
  'textContainer',
  'name',
  'role',
  'content',
  'footer',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: "column",
    padding: "25px",
    boxShadow: '0 3px 8px 0 rgba(44,50,39,.25)',
    backgroundColor: theme.palette.background.paper,
  },
  [`& .${classes.avatar}`]: {
    marginRight: theme.spacing(2),
    flexShrink: 0,
    display: "flex",
    '& img': {
      borderRadius: '50%',
      boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.2)',
    },
    flexDirection: "row",
    marginBottom: "1rem",
    [theme.breakpoints.down(900)]: {
      margin: "0 auto",
      flexDirection: "column",
      alignItems: "center",
    }
  },
  [`& .${classes.textContainer}`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",
  },
  [`& .${classes.content}`]: {
    fontStyle: 'italic',
    color: "#212529",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    display: "block",
    marginLeft: "26px",
    [theme.breakpoints.down(900)]: {
      marginLeft: 0,
      margin: "24px 0"
    }
  },
  [`& .${classes.footer}`]: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "226px",
    [theme.breakpoints.down(900)]: {
      paddingLeft: 0,
      flexWrap: "wrap",
    }
  },
  [`& .${classes.name}`]: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    marginRight: "20px",
    fontSize: "16px"
  },
  [`& .${classes.role}`]: {
    fontWeight: 400,
    fontSize: "14px",
    color: "#212529",
  },
});
interface ProfileCardProps {
  content: string;
  name: string;
  role: string;
  avatar: string;
}

const ProfileCard = ({content, name, role, avatar}: ProfileCardProps) => {

  return (
    <Box className={classes.root} sx={styles}>
      <Box className={classes.avatar}>
        <Avatar src={avatar} alt="Felix Tillmann" sx={{width: 200, height: 200}} />
        <i className={classes.content}>{content}</i>
      </Box>
      <Box className={classes.footer}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.role}>
          {role}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileCard;
