import { Navigate, Outlet } from 'react-router-dom'
import appConfig from '@/configs/app.config'
import { useAuth } from '@/auth'

const { authenticatedEntryPath } = appConfig
const { unAuthenticatedEntryPath } = appConfig

const PublicRoute = () => {
    const { authenticated } = useAuth()

    return authenticated ? <Navigate to={authenticatedEntryPath} /> : <Navigate to={unAuthenticatedEntryPath} />
}

export default PublicRoute
