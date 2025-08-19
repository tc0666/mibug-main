import React, {FC} from "react";
import {Collapse} from "@mui/material";


interface FormHintProps {
  text?: string;
  className?: string;
  show: boolean;
}

export const FormHint: FC<FormHintProps> = ({ text, show, className }: FormHintProps) => text ? (
  <Collapse in={show} unmountOnExit>
    <p className={className}>{text}</p>
  </Collapse>
) : null;
