import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";

import Button from "../Button";
import { LoadingButton } from "@mui/lab";
import {
  Grid,
  Card,
  CardContent,
  FormGroup,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "inherit",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalAddPatient = () => {
  const convenioList = ["Privado", "São Judas Tadeu", "Bom Plano"];

  const handleChange = (event: SelectChangeEvent) => {
    setTest(event.target.value as string);
  };

  const [value, setValue] = useState<Dayjs | null>(null);
  const [test, setTest] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button title="Cadastrar Paciente" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Grid
            container
            sx={{
              flexGrow: 1,
              minHeight: "100vh",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "12px",
            }}
          > */}
          {/* <img src={Logo} style={{ width: "160px" }} /> */}
          <Card sx={{ padding: "0.4rem" }}>
            <CardContent>
              <form>
                <FormGroup>
                  <Typography
                    variant="h5"
                    component="h1"
                    sx={{ margin: "0px 0 12px" }}
                  >
                    Cadastro de paciente
                  </Typography>
                  <TextField
                    margin="dense"
                    size="small"
                    label="CPF"
                    // {...register("email")}
                    type={"text"}
                    required
                  />
                  <TextField
                    margin="dense"
                    size="small"
                    label="Nome completo"
                    // {...register("email")}
                    type={"text"}
                    required
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Data de nascimento"
                      inputFormat="dd/MM/yyyy"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          margin="dense"
                          size="small"
                          required
                        />
                      )}
                    />
                  </LocalizationProvider>
                  <TextField
                    margin="dense"
                    size="small"
                    label="Telefone"
                    // {...register("email")}
                    type={"text"}
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
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={test}
                      label="Convênio"
                      margin="dense"
                      size="small"
                      onChange={handleChange}
                    >
                      {convenioList.map((item, index) => {
                        return (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <TextField
                    margin="dense"
                    size="small"
                    label="Observações"
                    // {...register("email")}
                    type={"text"}
                  />

                  <LoadingButton
                    sx={{ margin: "8px 0 0" }}
                    // startIcon={<LockOpenIcon />}
                    size="medium"
                    type="submit"
                    variant="contained"
                    // loading={loading}
                  >
                    Login
                  </LoadingButton>
                  <Button
                    title="Esqueci a senha"
                    sx={{ margin: "12px 0 0" }}
                    variant="outlined"
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

export default ModalAddPatient;
