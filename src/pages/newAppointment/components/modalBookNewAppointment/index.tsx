import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import * as yup from "yup";
import Button from "../../../../components/Button";
import { LoadingButton } from "@mui/lab";
import {
  Card,
  CardContent,
  FormGroup,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import api from "../../../../services";
import { toast } from "react-hot-toast";
import { useLogin } from "../../../../providers/login";
import { yupResolver } from "@hookform/resolvers/yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  boxShadow: 24,
};

const ModalBookNewAppointment = ({ app, patient }: any) => {
  const { user } = useLogin();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [convenio, setConvenio] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const convenioList = ["Privado", "São Judas Tadeu", "Bom Plano"];
  const appTypeList = ["Consulta", "Exame"];

  const hourTest = ["08:00", "09:00", "10:00", "13:00", "14:00", "15:00"];

  const formSchema = yup.object().shape({
    hora: yup.string().required("Selecione um horário"),
    appType: yup.string().required("Selecione um tipo de atendimento"),
    convenio: yup.string().required("Selecione um convênio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleChange = (event: any) => {
    setConvenio(event.target.value as string);
  };

  const handleFunction = async (data: any) => {
    data.paciente = patient;
    data.medico = app.doctor;
    data.horario = app.date + " às " + data.hora;
    data.descricao = "";
    data.usuario = user;

    const token = localStorage.getItem("@UserToken");
    setIsLoading(true);
    try {
      await api.post("/consultas", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Agendamento realizado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro, tente novamente!");
    } finally {
      setIsLoading(false);
      handleClose();
    }
  };

  return (
    <>
      <Button
        title="Agendar"
        onClick={handleOpen}
        fullWidth
        variant="contained"
        disabled={!patient}
        sx={{
          "&.Mui-disabled": {
            background: "#ccc4c4",
            color: "#ffffff",
          },
        }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ padding: "0.4rem" }}>
            <CardContent>
              <form onSubmit={handleSubmit(handleFunction)}>
                <FormGroup sx={{ gap: 2 }}>
                  <Typography
                    variant="h5"
                    component="h1"
                    sx={{ margin: "0px 0 12px" }}
                  >
                    Agendamento de consulta
                  </Typography>
                  <TextField label="Nome" value={patient?.nome} disabled />
                  <Controller
                    name="hora"
                    control={control}
                    render={({ field }) => {
                      const { onChange, value } = field;
                      return (
                        <Autocomplete
                          getOptionLabel={(option: any) => option || ""}
                          isOptionEqualToValue={(option: any, value: any) => {
                            if (!option || !value) {
                              return false;
                            }
                            return option === value;
                          }}
                          options={hourTest}
                          value={value}
                          onChange={(event, newValue: any) => {
                            onChange(newValue);
                          }}
                          noOptionsText="Nenhum horário disponível"
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              label="Digite ou selecione um horário"
                              value={value ? value : ""}
                              error={!!errors.hora}
                              helperText={errors.hora?.message?.toString()}
                            />
                          )}
                        />
                      );
                    }}
                  />
                  <Controller
                    name="appType"
                    control={control}
                    render={({ field }) => {
                      const { onChange, value } = field;
                      return (
                        <Autocomplete
                          getOptionLabel={(option: any) => option || ""}
                          isOptionEqualToValue={(option: any, value: any) => {
                            if (!option || !value) {
                              return false;
                            }
                            return option === value;
                          }}
                          options={appTypeList}
                          value={value}
                          onChange={(event, newValue: any) => {
                            onChange(newValue);
                          }}
                          noOptionsText="Sem dados disponíveis"
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              label="Tipo de atendimento"
                              value={value ? value : ""}
                              error={!!errors.appType}
                              helperText={errors.appType?.message?.toString()}
                            />
                          )}
                        />
                      );
                    }}
                  />

                  <Controller
                    name="convenio"
                    control={control}
                    render={({ field }) => {
                      const { onChange, value } = field;
                      return (
                        <Autocomplete
                          getOptionLabel={(option: any) => option || ""}
                          isOptionEqualToValue={(option: any, value: any) => {
                            if (!option || !value) {
                              return false;
                            }
                            return option === value;
                          }}
                          options={convenioList}
                          value={value}
                          onChange={(event, newValue: any) => {
                            onChange(newValue);
                          }}
                          noOptionsText="Nenhuma data disponível"
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              label="Digite ou selecione uma data"
                              value={value ? value : ""}
                              error={!!errors.convenio}
                              helperText={errors.convenio?.message?.toString()}
                            />
                          )}
                        />
                      );
                    }}
                  />

                  <LoadingButton
                    sx={{ margin: "8px 0 0" }}
                    // startIcon={<LockOpenIcon />}
                    size="medium"
                    type="submit"
                    variant="contained"
                    loading={isLoading}
                  >
                    Agendar
                  </LoadingButton>
                  <Button
                    title="Cancelar"
                    sx={{ margin: "12px 0 0" }}
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
  );
};

export default ModalBookNewAppointment;
