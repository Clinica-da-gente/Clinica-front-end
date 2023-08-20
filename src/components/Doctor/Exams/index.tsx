import { useMemo, useState } from 'react';
import Box from '../Box';
import Button from '../Button';
import { ContainerHeader, Container, Content, ContentButtons } from './styled';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import ExamListItem from '../ExamListItem';
import { CgClose } from 'react-icons/cg';
import { IExame, IExameId, ILastExames } from '../../../interfaces/Doctor';
import api from '../../../services';
import { Loader } from '../Loader';
import { useDoctor } from '../../../providers/doctor';
import { DropdownExames } from '../DropdownExames';
import { ModalConfirm } from '../ModalConfirm';
import { toast } from 'react-hot-toast';

const Exams = () => {
    const [examsSelected, setExamsSelected] = useState<IExameId[]>(
        localStorage.getItem('@Doctor_exams')
            ? JSON.parse(localStorage.getItem('@Doctor_exams')!)
            : [],
    );
    const [lastExames, setLastExams] = useState<ILastExames | undefined>();
    const [examsFilted, setExamsFilted] = useState<IExame[] | undefined>([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { consultSelected, exams } = useDoctor();

    const addExam = (id: string) => {
        setExamsSelected([...examsSelected, { id }]);
        localStorage.setItem(
            '@Doctor_exams',
            JSON.stringify([...examsSelected, { id }]),
        );
    };

    const removeExam = (exam_id: string) => {
        const result = examsSelected!.filter(({ id }) => id !== exam_id);

        setExamsSelected(result);
        localStorage.setItem('@Doctor_exams', JSON.stringify(result));
    };

    const confirmCloseConsult = () => {
        if (!localStorage.getItem('@Doctor_postExams')) {
            setIsOpenModal(true);
        } else {
            closeConsult();
        }
    };

    const onConfirm = () => {
        setIsOpenModal(false);
        closeConsult();
    };

    const closeConsult = async () => {
        localStorage.removeItem('@Doctor_postExams');
        localStorage.removeItem('@Doctor_textAnamnese');
        localStorage.removeItem('@Doctor_exams');
        localStorage.removeItem('@Doctor_postAnamnese');
        localStorage.removeItem('@Doctor_exams');
        navigate('/');
    };

    const onChange = (value: string) => {
        const result = exams!.filter((exam) =>
            exam.nome.toLowerCase().includes(value.toLowerCase()),
        );

        setExamsFilted(result);
    };

    const verifyExams = () => {
        if (localStorage.getItem('@Doctor_postExams')) {
            toast.error('Exames dessa consulta ja salvos!!', {
                duration: 3000,
                id,
            });
        } else if (!examsSelected.length) {
            toast.error('Selecione os exames antes de salvar!!', {
                duration: 2500,
                id,
            });
        } else {
            postExams();
        }
    };

    if (!localStorage.getItem('@UserToken')) {
        return <Navigate to={'/'} />;
    }

    const postExams = () => {
        const data = {
            exames: examsSelected,
            consulta_id: id!,
            medico_id: consultSelected!.medico_id,
            paciente_id: consultSelected!.paciente_id,
        };

        api.post('/examesSolicitados', data).then(() => {
            setLastExams(data);
        });
        localStorage.setItem('@Doctor_postExams', '1');
        setExamsSelected([]);
    };

    useMemo(() => {
        const examsInLocalStorage = localStorage.getItem('@Doctor_exams');

        if (examsInLocalStorage) {
            setExamsSelected(JSON.parse(examsInLocalStorage));
        }

        api.get(`/exames/last/${consultSelected?.paciente_id}`).then(({ data }) => {
            if (data) {
                setLastExams(data);
            } else {
                setLastExams({});
            }
        });
    }, []);

    return (
        <Box>
            <ContainerHeader>
                <h1>
                    {consultSelected?.horario} - {consultSelected?.paciente?.nome} -
          Exames{' '}
                </h1>
                <CgClose onClick={confirmCloseConsult} />
            </ContainerHeader>
            <Container>
                <Content>
                    <div className="div_input">
                        <input
                            placeholder="Digite o nome do exame"
                            onChange={(e) => onChange(e.target.value)}
                            disabled={
                                localStorage.getItem('@Doctor_postExams') ? true : false
                            }
                        />
                        <DropdownExames
                            exames={examsFilted && examsFilted.length ? examsFilted : exams}
                            addExam={addExam}
                        />
                    </div>
                    {examsSelected && examsSelected.length ? (
                        <ul>
                            {examsSelected.map(({ id }, index) => {
                                const result = exams!.find((exam) => exam._id == id);

                                return (
                                    <ExamListItem
                                        key={index}
                                        value={result}
                                        onClick={() => removeExam(id)}
                                    />
                                );
                            })}
                        </ul>
                    ) : (
                        <p>Sem exame selecionado</p>
                    )}
                </Content>
                <Content>
                    <h4>Ultimos exames solicitados</h4>
                    {lastExames ? (
                        lastExames.exames?.length ? (
                            lastExames.exames.map(({ id }, index) => {
                                const result = exams!.find((exam) => exam._id == id);

                                return <ExamListItem key={index} value={result} is_disable />;
                            })
                        ) : (
                            <p>Sem exames solicitados</p>
                        )
                    ) : (
                        <Loader />
                    )}
                </Content>
            </Container>
            <ContentButtons>
                <Button bgColor={'green'} onClick={verifyExams}>
          SALVAR
                </Button>
                <Button bgColor={'gray'}>RECEITA</Button>
                <Button
                    onClick={() => navigate(`/consult/${id}/anamnese`)}
                    bgColor={'#0062BC'}
                >
          ANAMNESE
                </Button>
            </ContentButtons>
            {isOpenModal && (
                <ModalConfirm onConfirm={onConfirm} setIsOpenModal={setIsOpenModal}>
          Gostaria de sair sem{' '}
                    {examsSelected.length ? 'salvar os exames' : 'solicitar nenhum exame'}
          ?
                </ModalConfirm>
            )}
        </Box>
    );
};

export default Exams;
