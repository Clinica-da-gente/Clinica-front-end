import { Box, Button, Grid, Typography } from "@mui/material";
import Lottie from "react-lottie";
import Lottie404 from "../../assets/lotties/404.json";

const PageNotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Lottie404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          aspectRatio: "1.408695652 / 1",
          width: "400px",
          maxWidth: "95%",
          gap: "12px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie
          options={defaultOptions}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        />
        <Typography variant="h6" component={"h1"}>
          Página não encontrada!
        </Typography>
        <Button href="/" variant="contained">
          Voltar
        </Button>
      </Box>
    </Grid>
  );
};

export default PageNotFound;
