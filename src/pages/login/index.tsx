import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Lottie from "react-lottie";
import SuccessLotie from "../../assets/lotties/success.json";
import {
  Backdrop,
  // Button,
  Card,
  CardContent,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../../assets/img/logo.png";
import { useForm } from "react-hook-form";
import { useLogin } from "../../providers/login";
import { toast } from "react-hot-toast";
import { IUserTypes } from "../../interfaces";
import Button from "../../components/Button";

const LoginPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SuccessLotie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const [loading, setLoading] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { handleSubmit, register } = useForm();

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const { login, changeLoggedUser } = useLogin();

  const handleLogin = async ({ email, password }: any) => {
    setLoading(true);
    await login({ email, password })
      .then(async (userType) => {
        await new Promise((resolve) => handleSuccessLogin(resolve, userType));
      })
      .catch((err) => toast.error("Credenciais inválidas"));
    setLoading(false);
  };

  const handleSuccessLogin = (resolve: any, userType: IUserTypes) => {
    handleOpen();
    setTimeout(() => {
      handleClose();
      resolve();
      changeLoggedUser(userType);
    }, 1000);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
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
        >
          <img src={Logo} style={{ width: "160px" }} />
          <Card variant="outlined" sx={{ padding: "0.4rem" }}>
            <CardContent>
              <form onSubmit={handleSubmit(handleLogin)}>
                <FormGroup>
                  <Typography
                    variant="h5"
                    component="h1"
                    sx={{ margin: "0px 0 12px" }}
                  >
                    Login
                  </Typography>
                  <TextField
                    margin="dense"
                    size="small"
                    label="Email"
                    {...register("email")}
                    type={"email"}
                    required
                  />
                  <FormControl
                    size="small"
                    margin="dense"
                    variant="outlined"
                    required
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      {...register("password")}
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            size="small"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <LoadingButton
                    sx={{ margin: "8px 0 0" }}
                    startIcon={<LockOpenIcon />}
                    size="medium"
                    type="submit"
                    variant="contained"
                    loading={loading}
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
        </Grid>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Lottie options={defaultOptions} width={"300px"} height={"300px"} />
      </Backdrop>
    </Container>
  );
};

export default LoginPage;
