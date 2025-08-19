import {generateUtilityClasses} from "@mui/material";

export const arrowClasses = generateUtilityClasses('arrow', [
  'root',
  'nextIcon',
  'next',
  'prevIcon',
  'prev',
  'icon',
  'zoomEffect',
]);

export const arrowStyles = {
  [`&.${arrowClasses.root}`]: {
    border: 'none',
    outline: 'none',
    position: 'absolute',
    alignItems: 'center',
    userSelect: 'none',
    cursor: 'pointer',
    display: 'flex',
    padding: '0 1em',
    top: 0,
    height: '100%',
    margin: '0 -1em',
    background: 'transparent',
  },
  [`& .${arrowClasses.nextIcon}`]: {
    transform: "rotate(-45deg)"
  },
  [`& .${arrowClasses.prevIcon}`]: {
    transform: "rotate(135deg)"
  },
  [`&.${arrowClasses.next}`]: {
    right: '10px',
  },
  [`&.${arrowClasses.prev}`]: {
    left: '10px',
  },
  [`& .${arrowClasses.icon}`]: {
    display: 'block',
    height: '10px',
    width: '10px',
    borderColor: '#08B578',
    borderStyle: 'solid',
    borderWidth: '0px 2px 2px 0px',
    transition: 'all 0.25s',
  },
  [`:hover .${arrowClasses.icon}`]: {
    height: "20px",
    width: "20px",
    borderWidth: "0px 4px 4px 0px",
    boxShadow: "none",
    background: "transparent !important",
    backgroundColor: "transparent !important",
  },
};
