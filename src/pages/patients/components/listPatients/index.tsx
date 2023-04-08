import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Button from "../../../../components/Button";
import { useTheme } from "../../../../providers/theme";
import { usePatients } from "../../../../providers/patients";
import { useEffect, useState } from "react";
import api from "../../../../services";
import ModalAddPatient from "../../../../components/modalAddPatient";

export const ListPatient = () => {
  const [patients, setPatients] = useState<any>([]);
  // dentro de selectPatient terá o paciente selecionado no campo de pesquisa
  // dentro desses dados terão tbm os dados de últimos atendimentos, ou precisa ser buscado assim que o paciente for selecionado, criar um state e mostrar
  // na tela de últimos atenidmentos
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [lastAppointment, setLastAppointment] = useState<any>([
    { data: "25/02/2023", tipo: "consulta", profissional: "Dr. Lin Habey" },
    { data: "29/02/2023", tipo: "exame geral", profissional: "Dra. Isadora" },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { currentTheme } = useTheme();
  // const { patients, fetchPatients } = usePatients();

  const getPatients = async () => {
    await api.get("/pacientes").then((res) => setPatients(res.data));
  };

  useEffect(() => {
    getPatients();
  }, [patients]);

  // const teste = async () => {
  //   await getPatients().then((res: any) => console.log(res));
  // };

  const verConsulta = (value: any) => {
    try {
      setIsLoading(true);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
    console.log(value);
  };

  const atualizarDadosPaciente = (value: any) => {
    try {
      setIsLoading(true);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
    console.log(value);
  };

  return (
    <Box pt={2}>
      <Card
        sx={{
          width: "95%",
          height: "89vh",
          alignItems: "center",
          justifyContent: "center",
          m: "auto",
        }}
      >
        <CardContent sx={{ height: "100%" }}>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            height="100%"
            gap={3}
          >
            <Box flex={1}>
              <Autocomplete
                getOptionLabel={(option: any) => option.nome || ""}
                isOptionEqualToValue={(option: any, value: any) => {
                  if (!option || !value) {
                    return false;
                  }
                  return option.nome === value.nome;
                }}
                options={patients}
                value={selectedPatient}
                onChange={(event, value: any) => {
                  setSelectedPatient(value);
                }}
                noOptionsText="Nenhum paciente encontrado"
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    label="Digite ou selecione o nome do paciente"
                    value={selectedPatient ? selectedPatient.nome : ""}
                  />
                )}
              />
              <Box
                display="flex"
                height="88%"
                justifyContent={selectedPatient ? "flex-start" : "center"}
                pt={3}
                sx={{ background: currentTheme === "dark" ? "" : "" }}
              >
                {selectedPatient && selectedPatient !== undefined ? (
                  <Box width="100%" display="flex">
                    <Box
                      // width="50%"
                      display="flex"
                      flex={1}
                      flexDirection="column"
                      gap={3}
                    >
                      <Typography fontSize={20}>
                        Nome: {selectedPatient.nome}
                      </Typography>
                      <Typography fontSize={20}>
                        CPF: {selectedPatient.cpf}
                      </Typography>
                      <Typography fontSize={20}>
                        Data de nascimento: {selectedPatient.data_nascimento}
                      </Typography>
                      <Typography fontSize={20}>
                        Telefone: {selectedPatient.telefone}
                      </Typography>
                      <Typography fontSize={20}>
                        Convênio: {selectedPatient.id_convenio}{" "}
                        {/* vai ser feito a busca no db pelo nome do convenio correspondente ao id */}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                    >
                      <Button
                        title="Atualizar dados"
                        variant="contained"
                        disabled={isLoading}
                        sx={{
                          width: "220px",
                          background: currentTheme === "dark" ? "" : "",
                        }}
                        startIcon={<EditIcon />}
                        onClick={() => atualizarDadosPaciente(selectedPatient)}
                      />
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
                  sx={{ cursor: selectedPatient ? "pointer" : "default" }}
                >
                  {selectedPatient && selectedPatient !== undefined ? (
                    lastAppointment.map((item: any, index: any) => {
                      return (
                        <Box
                          onClick={() => verConsulta(item)}
                          sx={{ borderBottom: "1px solid white" }}
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
        </CardContent>
      </Card>
    </Box>
  );
};
