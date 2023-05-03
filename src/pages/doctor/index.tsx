import { Content, ContentUl } from "./styled";
import { useDoctor } from "../../providers/doctor";
import AppointmentDoctor from "../../components/Doctor/appointmentDoctor";
import Box from "../../components/Doctor/Box";

const status = [
  { color: "green", value: "Atendimento" },
  { color: "blue", value: "Sala de espera" },
  { color: "red", value: "Horário vago ou ausente" },
];

const DoctorPage = () => {
  const { consults } = useDoctor();

  return (
    <Box>
      <h1>Seus próximos atendimentos</h1>
      <Content>
        <ContentUl>
          {consults.map((value) => (
            <AppointmentDoctor key={value.id} consult={value} />
          ))}
        </ContentUl>
        <div className='legenda_div'>
          <h3>Legenda:</h3>
          <div className='legenda_legendas'>
            {status.map((value) => (
              <div key={value.color}>
                <div
                  style={{
                    background: value.color,
                    borderRadius: "25px",
                    width: "30px",
                    height: "30px",
                  }}
                />{" "}
                <span>{value.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </Box>
  );
};

export default DoctorPage;
