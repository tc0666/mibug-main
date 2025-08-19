import React from "react";
import {Box, Divider, Theme, Typography} from "@mui/material";
import { generateUtilityClasses } from "@mui/material";

const classes = generateUtilityClasses("SingleAuthorList", [
  "root",
  "singleAuthor",
  "authorInfoImage",
  "authorInfoWrap",
  "divider",
  "authorImage",
  "authorRole",
  "authorInfo",
  "authorDescription",
]);

interface Author { name: string; role: string; title: string; description: string; image: string; };


interface SingleAuthorListProps {
  authors: Author[]
}
const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    padding: "4px 16px 0 16px",
    border: "1px solid #e8e8e8",
    flexWrap: "wrap",
    marginTop: "24px",
    marginLeft: "18%",
    [theme.breakpoints.down(900)]: {
      marginLeft: 0,
    }
  },
  [`& .${classes.divider}`]: {
    margin: "8px 0"
  },
  [`& .${classes.singleAuthor}`]: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    marginRight: "16px",
    "&:hover .author-info": {
      display: "block",
    },
  },
  [`& .${classes.authorInfoWrap}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: "10px",
    span: {
      fontSize: "14px",
    },
  },
  [`& .${classes.authorImage}`]: {
    width: "25px",
    height: "25px",
    overflow: "hidden",
    borderRadius: "50%",
    marginRight: "5px",
  },
  [`& .${classes.authorInfoImage}`]: {
    display: "flex",
    img: {
      width: "80px",
      height: "80px",
      overflow: "hidden",
      borderRadius: "50%",
      objectFit: "cover",
    },
  },
  [`& .${classes.authorRole}`]: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "50px",
    span: {
      marginLeft: "5px",
    },
  },
  [`& .${classes.authorInfo}`]: {
    display: "none",
    position: "absolute",
    top: "0",
    left: "0",
    width: "400px",
    boxSizing: "border-box",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "10px",
    zIndex: 10,
    boxShadow: "0 3px 8px 0 rgba(44,50,39,.25)",
  },
  [`& .${classes.authorDescription}`]: {
    fontSize: "12px",
    lineHeight: "18px",
    marginBottom: "16px"
  },
})

const SingleAuthorList = ({ authors }: SingleAuthorListProps) => {
  return (
    <Box
      className={classes.root}
      sx={styles}
    >
      {authors.map((author, index) => (
        <Box key={index} className={classes.singleAuthor}>
          <Box className={classes.authorImage}>
            <img src={author.image} alt={author.name} width="25" height="25" />
          </Box>
          <Typography className={classes.authorRole}>
            {author.role}
            <Typography component="span" sx={{ fontWeight: 700 }}>
              {author.name}
            </Typography>
          </Typography>
          <Box className={`${classes.authorInfo} author-info`}>
            <Box className={classes.authorInfoImage}>
              <img src={author.image} alt={author.name} />
              <Box className={classes.authorInfoWrap}>
                  <span>
                    {author.role}
                  </span>
                <Typography component="span" sx={{ fontWeight: 700 }}>
                  {author.name}
                </Typography>
                <span>
                    {author.title}
                  </span>
              </Box>
            </Box>

            <Divider className={classes.divider} />
            <Typography className={classes.authorDescription}>{author.description}</Typography>
            <Typography className={classes.authorDescription}>Kontakt: Info@mibugcredit.de</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SingleAuthorList;
export { classes as SingleAuthorListClasses };
