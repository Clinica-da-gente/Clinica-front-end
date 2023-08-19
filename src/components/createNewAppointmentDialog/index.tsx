import { Container } from '@mui/material';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CreateSteps from './createSteps';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateNewAppointmentDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        size="small"
        style={{ fontSize: '0.7rem' }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Agendar
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar enableColorOnDark sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Agendar nova consulta
            </Typography>
            {/* Setar dinâmicamente médico e a data e hora */}
            <Typography variant="h6" component="div">
              Dr. Albert - 10/05/2023 18:30
            </Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: '5rem' }}>
          <CreateSteps handleClose={handleClose} />
        </Container>
      </Dialog>
    </div>
  );
}
