import { Autocomplete, TextField } from "@mui/material";
import { usePatients } from "../../providers/patients";

export const SelectPatient = () => {
  const { patients, selectedPatient, setSelectedPatient } = usePatients();
  return (
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
  );
};
