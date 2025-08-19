import React from 'react'
import {Box, generateUtilityClasses, Theme, Typography, List, ListItem, ListItemText, IconButton, Snackbar, Alert} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import clsx from 'clsx'

export interface FilePayload extends File {
  id: number;
}

export type FileUploadProps = {
  imageButton?: boolean
  accept: string
  hoverLabel?: string
  dropLabel?: string
  width?: string
  height?: string
  uploadedFiles: Array<FilePayload>
  backgroundColor?: string
  maxFiles?: number
  maxSize?: number // in bytes
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onDrop: (event: React.DragEvent<HTMLElement>) => void
}

const classes = generateUtilityClasses('PersonalInfo', [
  'root',
  'noMouseEvent',
  'iconText',
  'hidden',
  'onDragOver',
  'previewList',
  'previewItem',
]);
const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    cursor: 'pointer',
    textAlign: 'center',
    display: 'flex',
    '&:hover p,&:hover svg,& img': {
      opacity: 1,
    },
    '& p, svg': {
      opacity: 0.4,
    },
    '&:hover img': {
      opacity: 0.3,
    },
  },
  [`& .${classes.noMouseEvent}`]: {
    pointerEvents: 'none',
  },
  [`& .${classes.iconText}`]: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    svg: {
      fill: theme.palette.primary.main,
    }
  },
  [`& .${classes.hidden}`]: {
    display: 'none',
  },
  [`& .${classes.onDragOver}`]: {
    '& img': {
      opacity: 0.3,
    },
    '& p, svg': {
      opacity: 1,
    },
  },
  [`& .${classes.previewList}`]: {
    marginTop: theme.spacing(2),
  },
  [`& .${classes.previewItem}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& img': {
      maxWidth: '50px',
      maxHeight: '50px',
      marginRight: theme.spacing(2),
    },
  },
})

const FileUploader: React.FC<FileUploadProps> = ({
   accept,
   imageButton = false,
   hoverLabel = 'Klicken oder ziehen, um Datei hochzuladen',
   dropLabel = 'Datei hier ablegen',
   width = '100%',
   height = '100px',
   backgroundColor = '#fff',
   maxFiles = 5,
   maxSize = 10485760, // 10 MB standardmäßig
   onChange,
   onDrop,
   uploadedFiles,
 }) => {
  const [files, setFiles] = React.useState<File[]>([...uploadedFiles])
  const [labelText, setLabelText] = React.useState<string>(hoverLabel)
  const [isDragOver, setIsDragOver] = React.useState<boolean>(false)
  const [alertMessage, setAlertMessage] = React.useState<string>('')
  const [openAlert, setOpenAlert] = React.useState<boolean>(false)
  const stopDefaults = (e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }
  const dragEvents = {
    onDragEnter: (e: React.DragEvent) => {
      stopDefaults(e)
      setIsDragOver(true)
      setLabelText(dropLabel)
    },
    onDragLeave: (e: React.DragEvent) => {
      stopDefaults(e)
      setIsDragOver(false)
      setLabelText(hoverLabel)
    },
    onDragOver: stopDefaults,
    onDrop: (e: React.DragEvent<HTMLElement>) => {
      stopDefaults(e)
      setLabelText(hoverLabel)
      setIsDragOver(false)

      const newFiles = Array.from(e.dataTransfer.files).filter((file) => (
        files.length < maxFiles && file.size <= maxSize
      ))

      if (newFiles.length + files.length > maxFiles) {
        setAlertMessage(`Es können nicht mehr als ${maxFiles} Dateien hochgeladen werden`)
        setOpenAlert(true)
        return
      }

      const totalSize = newFiles.reduce((acc, file) => acc + file.size, 0) + files.reduce((acc, file) => acc + file.size, 0)
      if (totalSize > maxSize) {
        setAlertMessage(`Die Gesamtdateigröße darf ${(maxSize / (1024 * 1024)).toFixed(2)} MB nicht überschreiten`)
        setOpenAlert(true)
        return
      }
      console.log('e', e)

      setFiles((prevFiles) => [...prevFiles, ...newFiles])
      onDrop(e)
    },
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filesList = event.target.files;
    if(filesList) {
      const newFiles = Array.from(filesList).filter((file) => (
        files.length < maxFiles && file.size <= maxSize
      ))

      if (newFiles.length + files.length > maxFiles) {
        setAlertMessage(`Es können nicht mehr als ${maxFiles} Dateien hochgeladen werden`)
        setOpenAlert(true)
        return
      }

      const totalSize = newFiles.reduce((acc, file) => acc + file.size, 0) + files.reduce((acc, file) => acc + file.size, 0)
      if (totalSize > maxSize) {
        setAlertMessage(`Die Gesamtdateigröße darf ${(maxSize / (1024 * 1024)).toFixed(2)} MB nicht überschreiten`)
        setOpenAlert(true)
        return
      }

      setFiles((prevFiles) => [...prevFiles, ...newFiles])
      onChange(event)
    }
  }

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  const handleCloseAlert = () => {
    setOpenAlert(false)
    setAlertMessage('')
  }

  return (
    <Box sx={styles}>
      {uploadedFiles?.length < 2 &&
      (
        <>
          <input
            onChange={handleChange}
            accept={accept}
            className={classes.hidden}
            id="file-upload"
            type="file"
            multiple
          />

          <label
            htmlFor="file-upload"
            {...dragEvents}
            className={clsx(classes.root, isDragOver && classes.onDragOver)}
          >
            <Box
              width={width}
              height={height}
              bgcolor={backgroundColor}
              className={classes.noMouseEvent}
            >
              <Box
                height={height}
                width={width}
                className={classes.iconText}
              >
                <CloudUploadIcon fontSize="large" />
                <Typography>{labelText}</Typography>
              </Box>
            </Box>
          </label>
        </>
      )
      }


      <List className={classes.previewList}>
        {(files as FilePayload[]).map((file, index) => (
          <ListItem key={index} className={classes.previewItem}>
            {file?.type?.startsWith('image/') && (
              <img alt="Vorschau" src={URL.createObjectURL(file)} />
            )}
            <ListItemText primary={file.name} secondary={`${(file?.size / 1024).toFixed(2)} KB`} />
            {!file?.id && (
              <IconButton edge="end" onClick={() => handleRemoveFile(index)}>
                <DeleteIcon />
              </IconButton>
            )}
          </ListItem>
        ))}
      </List>

      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseAlert} severity="warning">
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default FileUploader
