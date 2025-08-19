import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {generateUtilityClasses, Theme} from '@mui/material';
import menu from '../icons/home/menu.svg';
import {NAVIGATION, NavigationItem} from "./Navigation";
import clsx from "clsx";

enum Anchor {
  Right = 'right',
}

const classes = generateUtilityClasses('MobileNavigation', [
  'root',
  'drawer',
  'listItem',
  'nestedList',
  'collapse',
  'menuIcon',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
  },
  [`& .${classes.drawer}`]: {
    minWidth: "240px",
    width: "240px",
    [theme.breakpoints.up(900)]: {
      display: 'none',
    },
  },
  [`&.${classes.nestedList}`]: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)"
    }
  },
  [`&.${classes.listItem}`]: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)"
    },
  },

});

const RenderNavigationItem: React.FC<NavigationItem> = ({
                                                          title,
                                                          link,
                                                          children,
                                                        }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  const hasChildren = Boolean(children);

  return (
    <>
      <ListItem
        key={title + link}
        className={classes.listItem}
        {...(!hasChildren && link
          ? {component: 'a', href: link || '#' }
          : { onClick: handleToggle })}
        sx={styles}
      >
        <ListItemText primary={title} />
        {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {hasChildren && (
        <Collapse
          className={classes.collapse}
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <List className={classes.nestedList} component="div" disablePadding>
            {children?.map((child) => (
              <RenderNavigationItem key={`${child.title}`} {...child} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

interface MobileNavigationProps {
  className: string;
}

const MobileNavigation = ({className}: MobileNavigationProps) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box className={clsx(classes.root, className)} sx={styles}>
      <img onClick={toggleDrawer(true)} className={classes.menuIcon} src={menu} alt="menu" />

      <SwipeableDrawer
        anchor={Anchor.Right}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        elevation={0}
        className={classes.drawer}
        sx={styles}
      >
        <Box
          className={classes.drawer}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {NAVIGATION.map((item) => (
              <RenderNavigationItem key={item.title} {...item} />
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default MobileNavigation;
