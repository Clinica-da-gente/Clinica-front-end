import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Autocomplete,
    Container,
    DialogContentText,
    Divider,
    List,
    ListItem,
    ListItemText,
    TextField,
} from '@mui/material';
import { top100Films } from '../../pages/attendantPages/newAppointment/mockData';
import { SelectPatient } from '../SelectPatient';

const steps = [
    'Selecionar paciente',
    'Selecionar tipo atendimento e plano',
    'Revisar informações',
];

interface IStepper {
  handleClose: () => void;
}

export default function CreateSteps({ handleClose }: IStepper) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        if (completedSteps() === totalSteps()) {
            handleClose();
        }
    
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
      isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;

        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;

        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    return (
        <Box sx={{ width: '100%', mb: 4 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
              Todos os passos completos - criar consulta
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {activeStep === 0 && (
                            <Container sx={{ mt: 8, mb: 2 }}>
                                <SelectPatient />
                                <List>
                                    <ListItem button>
                                        <ListItemText primary="CPF" secondary="123.233.543-23" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText
                                            primary="Telefone"
                                            secondary="(24)99239-4234"
                                        />
                                    </ListItem>
                                    <Divider />
                                </List>
                                <Typography sx={{ mt: 2, mb: 1 }}>Histórico</Typography>
                                <List>
                                    <ListItem button>
                                        <ListItemText
                                            primary="Ginecologista"
                                            secondary="02/11/2023 - Dr Leandro"
                                        />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Container>
                        )}
                        {activeStep === 1 && (
                            <Container sx={{ mt: 8, mb: 2 }}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={['Particular', 'Unimed']}
                                    sx={{ mb: 4, mt: 2 }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Plano Médico" />
                                    )}
                                />
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={['Ginecologista', 'Dentista']}
                                    sx={{ mb: 4, mt: 2 }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Tipo Atendimento" />
                                    )}
                                />
                            </Container>
                        )}
                        {activeStep === 2 && (
                        // Guiar pelos dados mocados
                            <Container sx={{ mt: 8, mb: 2 }}>
                                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  Dados da consulta
                                </Typography>
                                <List>
                                    <ListItem button>
                                        <ListItemText primary="Médico" secondary="Dr Albert" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText
                                            primary="Data e horário"
                                            secondary="10/05/2023 14:30"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText
                                            primary="Atendimento"
                                            secondary="Ginecologista"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText primary="Paciente" secondary="José" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText primary="CPF" secondary="123.233.543-23" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText primary="Plano" secondary="Particular" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText
                                            primary="Telefone"
                                            secondary="(24)99239-4234"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText
                                            primary="Valor da Consulta"
                                            secondary="R$ 150,00"
                                        />
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Container>
                        )}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                Voltar
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {activeStep !== steps.length &&
                (completed[activeStep] ? (
                    <Typography
                        variant="caption"
                        sx={{ display: 'inline-block' }}
                    >
                        <Button onClick={handleNext}>Avançar</Button>
                    </Typography>
                ) : (
                    <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                            ? 'Criar'
                            : 'Completar passo'}
                    </Button>
                ))}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}
