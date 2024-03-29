import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Box, FormGroup, TextField, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import CloseIcon from '@mui/icons-material/Close'
import Button from '../../../../components/Button'

import { useTheme } from '../../../../providers/theme'
import { usePatients } from '../../../../providers/patients'
import ModalAddPatient from '../modalAddPatient'
import * as Yup from 'yup'
// import InputMask from "react-input-mask";
import { yupResolver } from '@hookform/resolvers/yup'
import { SelectPatient } from '../../../../components/SelectPatient'
import { DefaultScreenLayout } from '../../../../components/DefaultScreenLayout'

export const ListPatient = () => {
    const schema = Yup.object().shape({
        cpf: Yup.string().required('CPF é obrigatório'),
        data_nascimento: Yup.string().required('Data de nascimento é obrigatória'),
        email: Yup.string()
            .email('E-mail inválido')
            .required('E-mail é obrigatório'),
        id_convenio: Yup.string().required('ID do convênio é obrigatório'),
        nome: Yup.string().required('Nome é obrigatório'),
        telefone: Yup.string().required('Telefone é obrigatório'),
    })

    const [lastAppointment] = useState<any>([
        { data: '25/02/2023', tipo: 'consulta', profissional: 'Dr. Lin Habey' },
        { data: '29/02/2023', tipo: 'exame geral', profissional: 'Dra. Isadora' },
    ])

    const { currentTheme } = useTheme()
    const {
        selectedPatient,
        editPatient,
        setEditPatient,
        updatePatientAux,
        isLoading,
    } = usePatients()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const verConsulta = (value: any) => {
        try {
            // setIsLoading(true);
        } catch (error) {
            console.log(error)
        } finally {
            // setIsLoading(false);
        }
        console.log(value)
    }

    // const setPatientDataEditable = (value: any) => {
    //   setEditPatient(value);
    // };

    return (
        <DefaultScreenLayout>
            <Box
                display="flex"
                flexDirection="row"
                width="100%"
                height="100%"
                gap={3}
            >
                <Box flex={1}>
                    <SelectPatient />
                    <Box
                        display="flex"
                        height="88%"
                        justifyContent={selectedPatient ? 'flex-start' : 'center'}
                        pt={3}
                        sx={{ background: currentTheme === 'dark' ? '' : '' }}
                    >
                        {selectedPatient && selectedPatient !== undefined ? (
                            <Box width="100%" display="flex" gap={3}>
                                <FormGroup
                                    sx={{
                                        display: 'flex',
                                        flex: 1,
                                        flexDirection: 'column',
                                        gap: 3,
                                    }}
                                    onSubmit={handleSubmit(updatePatientAux)}
                                >
                                    {editPatient ? (
                                        <>
                                            <TextField
                                                {...register('nome')}
                                                label="Nome"
                                                value={editPatient.nome}
                                                fullWidth
                                                onChange={(e) =>
                                                    setEditPatient({
                                                        ...editPatient,
                                                        nome: e.target.value,
                                                    })
                                                }
                                                error={!!errors.nome}
                                                helperText={errors.nome?.message?.toString()}
                                            />
                                            <TextField
                                                {...register('cpf')}
                                                value={editPatient.cpf}
                                                onChange={(e) =>
                                                    setEditPatient({
                                                        ...editPatient,
                                                        cpf: e.target.value,
                                                    })
                                                }
                                                error={!!errors.cpf}
                                                helperText={errors.cpf?.message?.toString()}
                                            />
                                            {/* <InputMask
                        mask="999.999.999-99"
                        {...register("cpf")}
                        value={editPatient.cpf}
                        onChange={(e) =>
                          setEditPatient({
                            ...editPatient,
                            cpf: e.target.value,
                          })
                        }
                        error={!!errors.cpf}
                        helperText={errors.cpf?.message?.toString()}
                      >
                        {(inputProps: any) => (
                          <TextField {...inputProps} label="CPF" />
                        )}
                      </InputMask> */}
                                            {/* <TextField
                            label="CPF"
                            value={editPatient.cpf}
                            {...register("cpf")}
                            onChange={(e) =>
                              setEditPatient({
                                ...editPatient,
                                cpf: e.target.value,
                              })
                            }
                          /> */}
                                            <TextField
                                                label="Data de Nascimento"
                                                value={editPatient.data_nascimento}
                                                {...register('data_nascimento')}
                                                onChange={(e) =>
                                                    setEditPatient({
                                                        ...editPatient,
                                                        data_nascimento: e.target.value,
                                                    })
                                                }
                                                error={!!errors.data_nascimento}
                                                helperText={errors.data_nascimento?.message?.toString()}
                                            />
                                            <TextField
                                                label="Data de Nascimento"
                                                {...register('telefone')}
                                                value={editPatient.telefone}
                                                onChange={(e) =>
                                                    setEditPatient({
                                                        ...editPatient,
                                                        telefone: e.target.value,
                                                    })
                                                }
                                                error={!!errors.telefone}
                                                helperText={errors.telefone?.message?.toString()}
                                            />
                                            {/* <InputMask
                        mask="(99) 99999-9999"
                        {...register("telefone")}
                        value={editPatient.telefone}
                        onChange={(e) =>
                          setEditPatient({
                            ...editPatient,
                            telefone: e.target.value,
                          })
                        }
                        error={!!errors.telefone}
                        helperText={errors.telefone?.message?.toString()}
                      >
                        {(inputProps: any) => (
                          <TextField {...inputProps} label="Telefone" />
                        )}
                      </InputMask> */}
                                            <TextField
                                                label="Convênio"
                                                value={editPatient.id_convenio}
                                                {...register('id_convenio')}
                                                onChange={(e) =>
                                                    setEditPatient({
                                                        ...editPatient,
                                                        id_convenio: e.target.value,
                                                    })
                                                }
                                                error={!!errors.id_convenio}
                                                helperText={errors.id_convenio?.message?.toString()}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <TextField
                                                label="Nome"
                                                value={selectedPatient.nome}
                                                disabled
                                            />
                                            <TextField
                                                label="CPF"
                                                value={selectedPatient.cpf}
                                                disabled
                                            />
                                            <TextField
                                                label="Data de Nascimento"
                                                value={selectedPatient.data_nascimento}
                                                disabled
                                            />

                                            <TextField
                                                label="Telefone"
                                                value={selectedPatient.telefone}
                                                disabled
                                            />
                                            <TextField
                                                label="Convênio"
                                                value={selectedPatient.id_convenio}
                                                disabled
                                            />
                                        </>
                                    )}
                                </FormGroup>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="flex-end"
                                    gap={3}
                                >
                                    {!editPatient ? (
                                        <Button
                                            title="Atualizar dados"
                                            variant="contained"
                                            disabled={isLoading}
                                            sx={{
                                                width: '220px',
                                                height: '56px',
                                                background: currentTheme === 'dark' ? '' : '',
                                            }}
                                            startIcon={<EditIcon />}
                                            onClick={() => setEditPatient(selectedPatient)}
                                        />
                                    ) : (
                                        <>
                                            <Button
                                                type="submit"
                                                title="Salvar edição"
                                                variant="contained"
                                                color="warning"
                                                disabled={isLoading}
                                                sx={{
                                                    width: '220px',
                                                    height: '56px',
                                                    background: currentTheme === 'dark' ? '' : '',
                                                }}
                                                startIcon={<SaveAsIcon />}
                                                onClick={() => updatePatientAux(selectedPatient)}
                                            />
                                            <Button
                                                title="Cancelar edição"
                                                variant="contained"
                                                color="error"
                                                // disabled={isLoading}
                                                sx={{
                                                    width: '220px',
                                                    height: '56px',
                                                    background: currentTheme === 'dark' ? '' : '',
                                                }}
                                                startIcon={<CloseIcon />}
                                                onClick={() => setEditPatient(null)}
                                            />
                                        </>
                                    )}
                                </Box>
                            </Box>
                        ) : (
                            <Box>
                                <Typography>
                  Selecione um paciente para ver suas informações
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Box>
                <Box width="35%">
                    <ModalAddPatient />
                    <Box
                        // width="100%"
                        height="91%"
                        border={1}
                        borderRadius="15px"
                        borderColor="#c9c9c9"
                        p={2}
                    >
                        {/* //principal */}
                        <Typography variant="h5" marginBottom={5} align="center">
              Últimos Atendimentos
                        </Typography>
                        <Box
                            display="flex"
                            gap={2}
                            flexDirection="column"
                            sx={{ cursor: selectedPatient ? 'pointer' : 'default' }}
                        >
                            {selectedPatient && selectedPatient !== undefined ? (
                                lastAppointment.map((item: any, index: any) => {
                                    return (
                                        <Box
                                            onClick={() => verConsulta(item)}
                                            sx={{ borderBottom: '1px solid white' }}
                                            key={index}
                                        >
                                            <Typography>
                                                {item.data} - {item.tipo} - {item.profissional}
                                            </Typography>
                                        </Box>
                                    )
                                })
                            ) : (
                                <Typography align="center">
                  Selecione um paciente para ver os últimos atendimentos
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </DefaultScreenLayout>
    )
}
