import { Content, ContentUl } from "./styled";
import { useDoctor } from "../../providers/doctor";
import AppointmentDoctor from "../../components/Doctor/AppointmentDoctor";
import Box from "../../components/Doctor/Box";
import { Loader } from "../../components/Doctor/Loader";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const status = [
  { color: "green", value: "Atendimento" },
  { color: "blue", value: "Sala de espera" },
  { color: "red", value: "Horário vago ou ausente" },
];

const DoctorPage = () => {
  const { consults, getConsults } = useDoctor();

  useEffect(() => {
    getConsults();
    let interval = setInterval(() => {
      getConsults();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!localStorage.getItem("@UserToken")) {
    return <Navigate to={"/"} />;
  }

  return (
    <Box>
      <h1>Seus próximos atendimentos</h1>
      <Content>
        {consults ? (
          consults.length ? (
            <ContentUl>
              {consults.map((value) => (
                <AppointmentDoctor key={value._id} consult={value} />
              ))}
            </ContentUl>
          ) : (
            <div className='no_consult_div'>
              <p>Sem consulta no momento!</p>
            </div>
          )
        ) : (
          <Loader />
        )}

        <div className='legenda_div'>
          <h3>Legenda:</h3>
          <div className='legenda_legendas'>
            {status.map((status) => (
              <div key={status.color}>
                <div
                  style={{
                    background: status.color,
                    borderRadius: "25px",
                    width: "30px",
                    height: "30px",
                  }}
                />{" "}
                <span>{status.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </Box>
  );
};

export default DoctorPage;
