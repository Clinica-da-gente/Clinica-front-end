import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import { rows, top100Films } from './mockData'
import CreateNewAppointmentDialog from '../../../components/createNewAppointmentDialog'

export default function NewAppointment() {
    const [doctor, setDoctor] = React.useState('')

    return (
        <TableContainer style={{ padding: '0px 0 20px' }} component={Paper}>
            <Box
                style={{
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="h6">Nova Consulta</Typography>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 250 }}
                    size="small"
                    onChange={(e, value: any) => setDoctor(value)}
                    renderInput={(params) => (
                        <TextField value={doctor} {...params} label="Médicos" />
                    )}
                />
            </Box>
            {doctor ? (
                <Table size="small" aria-label="simple table a dense">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ minWidth: 20 }}>Dia</TableCell>
                            <TableCell style={{ minWidth: 20 }}>Horário</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.calories}</TableCell>
                                <TableCell align="right">
                                    <CreateNewAppointmentDialog />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <Box
                    style={{
                        padding: '80px 60px',
                        textAlign: 'center',
                        width: '100%',
                    }}
                >
                    <Typography variant="body2">
            Selecione um profissional para consultar horários disponíveis
                    </Typography>
                </Box>
            )}
        </TableContainer>
    )
}
