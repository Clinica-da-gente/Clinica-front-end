import { Outlet, useLocation, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import { IPages } from '../interfaces'
import { useLogin } from '../providers/login'

const DefaultLayout = () => {
  const { currentloggedUserType } = useLogin()
  const location = useLocation()

  if (location.pathname !== '/' && !localStorage.getItem('@UserToken')) {
    return <Navigate to={'/'} />
  }

  const page: IPages = currentloggedUserType ? currentloggedUserType : 'login'
  return (
    <>
      {page !== 'login' && <Header />}
      <Outlet />
    </>
  )
}

export default DefaultLayout
