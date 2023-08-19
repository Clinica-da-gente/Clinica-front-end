import {
  Autocomplete,
  Box,
  TextField,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { DefaultScreenLayout } from '../../components/DefaultScreenLayout';
import { SelectPatient } from '../../components/SelectPatient';
import { useEffect, useState } from 'react';
import { usePatients } from '../../providers/patients';
import ModalBookNewAppointment from '../modalBookNewAppointment';

const ListDoctorAvailability = () => {
  const { patients, selectedPatient } = usePatients();
  const [specialty, setSpecialty] = useState('');
  const [bookNewAppointment, setBookNewAppointment] = useState<any>([]);
  const [filteredSpecialty, setFilteredSpecialty] = useState<any>([]);

  const lastAppointment = [
    { data: '25/02/2023', tipo: 'consulta', profissional: 'Dr. Lin Habey' },
    { data: '29/02/2023', tipo: 'exame geral', profissional: 'Dra. Isadora' },
  ];

  // lista de horários e especialistas disponíveis
  const nextAppointments = [
    {
      date: '01/01/2023',
      doctor: 'Arnoldo Boapinta',
      specialty: 'dentista',
      available: '50%',
    },
    {
      date: '05/01/2023',
      doctor: 'Cleber Bossanova',
      specialty: 'dentista',
      available: '80%',
    },
    {
      date: '11/01/2023',
      doctor: 'Osvaldo Benesser',
      specialty: 'ortopedista',
      available: '10%',
    },
    {
      date: '11/01/2023',
      doctor: 'Osvaldo Benesser',
      specialty: 'ortopedista',
      available: '10%',
    },
    {
      date: '11/01/2023',
      doctor: 'Osvaldo Benesser',
      specialty: 'ortopedista',
      available: '10%',
    },
    {
      date: '11/01/2023',
      doctor: 'Osvaldo Benesser',
      specialty: 'terapeuta',
      available: '10%',
    },
    {
      date: '11/01/2023',
      doctor: 'Osvaldo Benesser',
      specialty: 'dentista',
      available: '10%',
    },
    {
      date: '11/01/2023',
      doctor: 'Osvaldo Benesser',
      specialty: 'terapeuta',
      available: '10%',
    },
  ];

  // array de especialidades
  // const specialtyType = ["Dentista", "Ortopedista", "Terapeuta"];

  const seeAppointment = (value: any) => {
    try {
      // setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
    console.log(value);
  };

  const bookAppointment = (value: any) => {
    try {
      // setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
    console.log(value);
  };

  // useEffect para detectar alterações no seletor de especialidade e refazer a consulta, mostrando apenas a especialidade selecionada
  useEffect(() => {
    if (specialty) {
      const filter = nextAppointments.filter(
        (app) => app.specialty === specialty.toLowerCase(),
      );

      setFilteredSpecialty(filter);
    }
  }, [specialty]);

  return (
    <DefaultScreenLayout>
      <Box display="flex" gap={2} flexDirection="column">
        <SelectPatient />
        <Autocomplete
          getOptionLabel={(option: any) => option || ''}
          isOptionEqualToValue={(option: any, value: any) => {
            if (!option || !value) {
              return false;
            }
            
            return option === value;
          }}
          options={[
            ...new Set(
              nextAppointments.map((app) => app.specialty.toUpperCase()),
            ),
          ]}
          value={specialty}
          onChange={(event, value: any) => {
            setSpecialty(value);
          }}
          noOptionsText="Nenhum especialidade encontrada"
          renderInput={(params: any) => (
            <TextField
              {...params}
              label="Digite ou selecione uma especialidade"
              value={specialty ? specialty : ''}
            />
          )}
        />
        <Box display="flex" height="76vh">
          <Box
            display="flex"
            width="60%"
            flexDirection="column"
            flex={1}
            p={2}
            overflow={nextAppointments.length > 9 ? 'scroll' : 'hidden'}
          >
            <Typography align="center" variant="h6" pb={2}>
              Próximos atendimentos encontrados
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              {filteredSpecialty.map((app: any, index: any) => (
                <Card
                  sx={{
                    width: 200,
                    // border: 1,
                    background: '#DDEEDD',
                  }}
                  key={index}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: 'bold' }}
                      color="black"
                      gutterBottom
                    >
                      {app.date}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5 }}
                      color="black"
                      fontWeight="bolder"
                    >
                      {app.doctor}
                    </Typography>
                    <Typography variant="body2" color="black">
                      Foram agendadas {app.available} das vagas até o momento
                    </Typography>
                    <Typography variant="body2" color="black">
                      Especialidade: {app.specialty}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button
                      size="small"
                      variant="contained"
                      onClick={() => setBookNewAppointment(app)}
                    >
                      Agendar
                    </Button> */}
                    <ModalBookNewAppointment
                      app={app}
                      patient={selectedPatient}
                    />
                  </CardActions>
                </Card>
              ))}
            </Box>
          </Box>
          <Box width="35%">
            <Box
              height="91%"
              border={1}
              borderRadius="15px"
              borderColor="#c9c9c9"
              p={2}
            >
              {/* //principal */}
              <Typography variant="h5" marginBottom={5} align="center">
                Histórico do paciente
              </Typography>
              <Box display="flex" gap={2} flexDirection="column">
                {selectedPatient && selectedPatient !== undefined ? (
                  lastAppointment.map((item: any, index: any) => {
                    return (
                      <Box
                        onClick={() => seeAppointment(item)}
                        sx={{
                          borderBottom: '1px solid white',
                          cursor: selectedPatient ? 'pointer' : 'default',
                        }}
                        key={index}
                      >
                        <Typography>
                          {item.data} - {item.tipo} - {item.profissional}
                        </Typography>
                      </Box>
                    );
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
      </Box>
    </DefaultScreenLayout>
  );
};

export default ListDoctorAvailability;
