import { useState } from 'react'

import Box from '@mui/material/Box'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Dayjs } from 'dayjs'

import Button from '../../../../../components/Button'
import { LoadingButton } from '@mui/lab'
import {
    Card,
    CardContent,
    FormGroup,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useForm } from 'react-hook-form'
import api from '../../../../../services'
import { toast } from 'react-hot-toast'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    boxShadow: 24,
}

const ModalAddPatient = () => {
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [convenio, setConvenio] = useState('')
    const [value, setValue] = useState<Dayjs | null>(null)

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        reset()
        setValue(null)
        setConvenio('')
        setOpen(false)
    }

    const convenioList = [
        { id: 1, nome: 'Privado' },
        { id: 2, nome: 'São Judas Tadeu' },
        { id: 3, nome: 'Bom Plano' },
    ]

    const formSchema = yup.object().shape({
        nome: yup.string().required('Nome obrigatório'),
        cpf: yup
            .string()
            .required('CPF obrigatório')
            .max(14, 'CPF inválido')
            .min(14, 'CPF inválido'),
        telefone: yup.string().required('Telefone obrigatório'),
        data_nascimento: yup.string().required('Data de nascimento obrigatória'),
        id_convenio: yup.string().required('Convênio obrigatório'),
        observacoes: yup
            .string()
            .max(256, 'Observações deve ter, no máximo, 256 caracteres'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(formSchema),
    })

    const handleChange = (event: SelectChangeEvent) => {
        setConvenio(event.target.value as string)
    }

    const handleFunction = async (data: any) => {
        const token = localStorage.getItem('@UserToken')

        setIsLoading(true)
        try {
            await api.post('/pacientes', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            toast.success('Paciente cadastrado com sucesso!')
        } catch (error) {
            console.log(error)
            toast.error('Ocorreu um erro, tente novamente!')
        } finally {
            setIsLoading(false)
            handleClose()
        }
    }

    return (
        <>
            <Button
                title="Cadastrar Paciente"
                onClick={handleOpen}
                variant="contained"
                sx={{
                    width: '100%',
                    height: '58px',
                    marginBottom: '1rem',
                }}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card sx={{ padding: '0.4rem' }}>
                        <CardContent>
                            <form onSubmit={handleSubmit(handleFunction)}>
                                <FormGroup>
                                    <Typography
                                        variant="h5"
                                        component="h1"
                                        sx={{ margin: '0px 0 12px' }}
                                    >
                    Cadastro de paciente
                                    </Typography>
                                    {/* <InputMask mask="999.999.999-99" {...register("cpf")}>
                    {(inputProps: any) => (
                      <TextField
                        {...inputProps}
                        margin="dense"
                        size="small"
                        label="CPF"
                        type={"text"}
                        error={!!errors.cpf}
                        helperText={errors.cpf?.message?.toString()}
                        required
                      />
                    )}
                  </InputMask> */}
                                    <TextField
                                        {...register('cpf')}
                                        margin="dense"
                                        size="small"
                                        label="CPF"
                                        type={'text'}
                                        error={!!errors.cpf}
                                        helperText={errors.cpf?.message?.toString()}
                                        required
                                    />
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        label="Nome completo"
                                        {...register('nome')}
                                        type={'text'}
                                        error={!!errors.nome}
                                        helperText={errors.nome?.message?.toString()}
                                        required
                                    />
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            mask="__/__/____"
                                            label="Data de nascimento"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue)
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    margin="dense"
                                                    size="small"
                                                    type="date"
                                                    {...register('data_nascimento')}
                                                    error={!!errors.data_nascimento}
                                                    helperText={errors.data_nascimento?.message?.toString()}
                                                    required
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                    {/* <InputMask mask="(99) 99999-9999" {...register("telefone")}>
                    {(inputProps) => (
                      <TextField
                        {...inputProps}
                        margin="dense"
                        size="small"
                        label="Telefone"
                        {...register("telefone")}
                        error={!!errors.telefone}
                        helperText={errors.telefone?.message?.toString()}
                        type={"text"}
                        required
                      />
                    )}
                  </InputMask> */}
                                    <TextField
                                        {...register('telefone')}
                                        margin="dense"
                                        size="small"
                                        label="Telefone"
                                        {...register('telefone')}
                                        error={!!errors.telefone}
                                        helperText={errors.telefone?.message?.toString()}
                                        type={'text'}
                                        required
                                    />
                                    <FormControl>
                                        <InputLabel
                                            id="demo-simple-select-label"
                                            margin="dense"
                                            size="small"
                                            required
                                        >
                      Convênio
                                        </InputLabel>
                                        <Select
                                            labelId="convenio-label"
                                            id="convenio"
                                            value={convenio}
                                            {...register('id_convenio')}
                                            error={!!errors.id_convenio}
                                            onChange={handleChange}
                                        >
                                            {convenioList.map((item, index) => {
                                                return (
                                                    <MenuItem key={index} value={item.id}>
                                                        {item.nome}
                                                    </MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        label="Observações"
                                        {...register('observacoes')}
                                        error={!!errors.observacoes}
                                        helperText={errors.observacoes?.message?.toString()}
                                        type={'text'}
                                    />

                                    <LoadingButton
                                        sx={{ margin: '8px 0 0' }}
                                        // startIcon={<LockOpenIcon />}
                                        size="medium"
                                        type="submit"
                                        variant="contained"
                                        loading={isLoading}
                                    >
                    Cadastrar
                                    </LoadingButton>
                                    <Button
                                        title="Cancelar"
                                        sx={{ margin: '12px 0 0' }}
                                        variant="contained"
                                        color="error"
                                        onClick={handleClose}
                                    />
                                </FormGroup>
                            </form>
                        </CardContent>
                    </Card>
                    {/* </Grid> */}
                </Box>
            </Modal>
        </>
    )
}

export default ModalAddPatient
