import { Box } from '@mui/material';
import React, { FC } from 'react';
import {arrowClasses, arrowStyles} from './arrowUtilityClasses';

interface ArrowProps {
  direction: 'next' | 'prev';
  className?: string;
  onClick?: () => void;
}

export const Arrow: FC<ArrowProps> = ({ direction, className = '', onClick }) => {
  const baseClass = direction === 'next' ? arrowClasses.next : arrowClasses.prev;
  const baseIconClass = direction === 'next' ? arrowClasses.nextIcon : arrowClasses.prevIcon;

  return (
    <Box
      className={`${arrowClasses.root} ${baseClass} ${arrowClasses.zoomEffect} ${className}`}
      onClick={onClick}
      sx={arrowStyles}
    >
      <i className={`${arrowClasses.icon} ${baseIconClass}`} />
    </Box>
  );
};
