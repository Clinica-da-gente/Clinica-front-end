import LoginPage from '../login'
import DoctorPage from './doctorHomePage'
import AttendantPage from './attendantHomePage'
import AdminPage from './adminHomePage'
import { useLogin } from '../../providers/login'
import { IPages } from '../../interfaces'

const pages = {
    doctor: <DoctorPage />,
    attendant: <AttendantPage />,
    admin: <AdminPage />,
    login: <LoginPage />,
}

const HomePage = () => {
    const { currentloggedUserType } = useLogin()

    const page: IPages = currentloggedUserType ? currentloggedUserType : 'login'

    return <>{pages[page]}</>
}

export default HomePage
