import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function ReceiveScreen() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{ margin: "0 2px", fontSize: "0.6rem", display: "inline-block" }}
        variant="outlined"
        size="small"
        onClick={handleClickOpen}
      >
        Receber
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography gutterBottom>
            Recebimento do Paciente - André - 01/01/2023 - 10:00
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <TextField
              sx={{ width: "100%", mt: 1, mb: 0 }}
              label="Pedido exame"
              size="small"
            />
            <TextField
              sx={{ width: "100%", mt: 1, mb: 0 }}
              label="Valor"
              size="small"
            />
            <FormControl variant="outlined" sx={{ mt: 0, width: "100%" }}>
              <InputLabel id="demo-simple-select-helper-label">
                Banco de recebimento
              </InputLabel>
              <Select
                sx={{ width: "100%", mt: 1, mb: 0 }}
                label="Banco de recebimento"
                size="small"
              >
                <MenuItem>Banco 1</MenuItem>
                <MenuItem>Banco 2</MenuItem>
                <MenuItem>Banco 3</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Receber
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
