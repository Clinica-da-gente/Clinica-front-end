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
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { columns, rows } from './mockData';
import ReceiveScreen from '../receiveScreen';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
    children: React.ReactElement;
  },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AppointmentDialog({ doctor, date }: any) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton size="small" onClick={handleClickOpen}>
                <RemoveRedEyeIcon style={{ fontSize: '1rem' }} />
            </IconButton>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
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
              Atendimento
                        </Typography>
                        <Typography variant="h6" component="div">
                            {doctor} - {date.split('-').reverse().join('/')}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TableContainer>
                    <Table size="small" stickyHeader aria-label="a dense sticky table ">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, i) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                        {columns.map((column) => {
                                            const value = row[column.id];

                                            if (column.id === 'actions') {
                                                return (
                                                // Abre modal consulta
                                                    <TableCell key={column.id} align={column.align}>
                                                        <ReceiveScreen />
                                                        <Button
                                                            sx={{ margin: '0 2px', fontSize: '0.6rem' }}
                                                            variant="contained"
                                                            size="small"
                                                        >
                              Desmarcar
                                                        </Button>
                                                    </TableCell>
                                                );
                                            }
                      
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Dialog>
        </div>
    );
}
