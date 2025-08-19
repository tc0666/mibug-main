import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import {Container, generateUtilityClasses, Theme} from '@mui/material';
import clsx from "clsx";

export type NavigationItem = {
  segment?: string;
  title: string;
  link?: string;
  children?: NavigationItem[];
};

export const NAVIGATION: NavigationItem[] = [
  {
    segment: 'kredit',
    title: 'Kredit',
    link: '/kredit',
  },
  {
    segment: 'privatkredit',
    title: 'Privatkredit',
    link: "/privatkredit",
  },
  {
    segment: 'autokredit',
    title: 'Autokredit',
    link: '/autokredit',
  },
  {
    segment: 'umschuldung',
    title: 'Umschuldung',
    link: '/umschuldung',
  },
  {
    segment: 'sofortkredit',
    title: 'Sofortkredit',
    children: [
      { title: 'Sofortkredit', link: '/kredit/sofortkredit' },
    ]
  },
  {
    segment: 'sofortkredit',
    title: 'Über uns',
    children: [
      { title: 'Über Mibug Credit', link: '/ueber' },
    ]
  }
];

const classes = generateUtilityClasses('Navigation', [
  'root',
  'desktopMenu',
  'menuItem',
  'link',
  'submenu',
  'submenuTitle',
  'submenuItem',
  'hovered',
]);

const styles = (theme: Theme) => ({
    [`&.${classes.root}`]: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: "#F0F0F0",
      width: "100%",
      [theme.breakpoints.down(900)]: {
        display: 'none',
      },
    },

    [`& .${classes.submenu}`]: {
      backgroundColor: "#fff",
      boxShadow: '0px 1px 5px 0px #0000001F,0px 2px 2px 0px #00000024,0px 3px 1px -2px #00000033',
      padding: 0,
      opacity: 0,
      transform: "translateY(-20px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
      width: "max-content",
      position: 'absolute',
      top: '100%',
      left: '0',
      zIndex: 10
    },
    [`& .${classes.hovered}:hover .${classes.submenu}`]: {
      opacity: 1,
      transform: "translateY(0)",
      pointerEvents: "auto", // Enable interaction on hover
    },
    [`& .${classes.menuItem}`]: {
      display: 'flex',
      alignItems: 'center',
      a: {
        textDecoration: "none !important",
        textTransform: "uppercase",
      }
    },
    [`& .${classes.link}`]: {
      color: "#4A4A4A",
      textDecoration: "none",
      lineHeight: "24px",
      padding: "6px 16px",
      display: "flex",
      fontSize: "13px",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)"
      }
    },
    [`& .${classes.submenuTitle}`]: {
      padding: "0 !important",
      span: {
        padding: "6px 16px",
        color: "#4A4A4A",
        textDecoration: "none",
        lineHeight: "24px",
        display: "flex",
        fontSize: "12px",
      },
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)"
      }
    },
  }
)

interface NavigationProps {
  className: string;
}
const Navigation = ({className}: NavigationProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <Box className={clsx(classes.root, className)} sx={styles}>
      <Container maxWidth="lg" className={classes.menuItem}>
        {NAVIGATION.map((item) => (
          <Box
            key={item.title}
            onMouseEnter={() => item.children && handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
            position="relative"
            className={classes.hovered}
          >
            <a className={classes.link} href={item.link || '#'}>{item.title}</a>
            {item.children ? (
            <List
              className={classes.submenu}
            >
              {hoveredItem === item.title && item?.children?.map((child) => (
                <a
                  key={child.title}
                  href={child.link || '#'}
                  className={classes.submenuItem}
                >
                  <ListItemText className={classes.submenuTitle} primary={child.title} />
                </a>
              ))}
            </List>
            ) : null}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Navigation;
