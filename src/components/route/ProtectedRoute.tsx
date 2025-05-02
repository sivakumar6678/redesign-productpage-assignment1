import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/auth'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {
    const { authenticated } = useAuth()
    const { pathname } = useLocation()

    // For paths other than root, store the path for redirect after login
    const getPathName = 
        pathname === '/' ? '' : `?${REDIRECT_URL_KEY}=${pathname}`

    if (!authenticated) {
        // If the user is trying to access the home page, let them through
        // as we want the home page to be accessible to everyone
        if (pathname === '/') {
            return <Outlet />
        }
        
        return (
            <Navigate
                replace
                to={`${unAuthenticatedEntryPath}${getPathName}`}
            />
        )
    }

    return <Outlet />
}

export default ProtectedRoute
