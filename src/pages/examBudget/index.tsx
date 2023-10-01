import Calendar from '../../components/Calendar';

const ExamBudget = () => {
    
    const myEventsList = [
        {
            start: new Date(2023,7,27,12,0,0),
            end: new Date(2023,7,27,13,0,0),
            title: 'Consulta com o Dr Alexandre'
        },
        {
            start: new Date(2023,7,27,14,0,0),
            end: new Date(2023,7,27,14,30,0),
            title: 'Exame de endocrinologia',
        },
        {
            start: new Date(2023,7,28,14,0,0),
            end: new Date(2023,7,28,14,30,0),
            title: 'Consulta de pediatria'
        },
        {
            start: new Date(2023,7,12,14,15,0),
            end: new Date(2023,7,12,14,45,0),
            title: 'Exame neurológico',
        },
        {
            start: new Date(2023,7,27,22,15,0),
            end: new Date(2023,7,27,22,45,0),
            title: 'Exame neurológico',
        },
        {
            start: new Date(2023,7,27,23,15,0),
            end: new Date(2023,7,27,23,45,0),
            title: 'Exame neurológico',
        },
    ];
      
    return <>
        <Calendar myEventsList={myEventsList} />
    </>
}

export default ExamBudget
