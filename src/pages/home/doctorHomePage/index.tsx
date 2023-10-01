import { Content, ContentUl1, ContentUl2 } from "./styled";
import { useDoctor } from "../../../providers/doctor";
import AppointmentDoctor from "../../../components/Doctor/AppointmentDoctor";
import Box from "../../../components/Doctor/Box";
import { Loader } from "../../../components/Doctor/Loader";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const status = [
    { color: "whitesmoke", value: "Agendado" },
    { color: "red", value: "Ausente" },
    { color: "green", value: "Atendido" },
    { color: "yellow", value: "Confirmado" },
    { color: "blue", value: "Sala de espera" },
];

const DoctorPage = () => {
    const { consultsWaiting, consultsToday, getConsults } = useDoctor();

    useEffect(() => {
        getConsults();
        const interval = setInterval(() => {
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
                {consultsWaiting && consultsWaiting.length ? (
                    <ContentUl1>
                        {consultsWaiting.map((value) => (
                            <AppointmentDoctor key={value._id} consult={value} />
                        ))}
                    </ContentUl1>
                ) : (
                    <></>
                )}
                {consultsToday ? (
                    consultsToday.length ? (
                        <ContentUl2>
                            {consultsToday.map((value) => (
                                <AppointmentDoctor key={value._id} consult={value} />
                            ))}
                        </ContentUl2>
                    ) : (
                        <div className="no_consult_div">
                            {!consultsWaiting?.length ? <p>Sem consultas hoje!</p> : <></>}
                        </div>
                    )
                ) : (
                    <Loader />
                )}

                <div className="legenda_div">
                    <h3>Legenda:</h3>
                    <div className="legenda_legendas">
                        {status.map((status) => (
                            <div key={status.color}>
                                <div
                                    style={{
                                        background: status.color,
                                        borderRadius: "25px",
                                        border: "1px solid grey",
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
