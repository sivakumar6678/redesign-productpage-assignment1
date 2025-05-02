import { Navigate, Outlet } from 'react-router-dom'
import appConfig from '@/configs/app.config'
import { useAuth } from '@/auth'

const { authenticatedEntryPath } = appConfig

const PublicRoute = () => {
    const { authenticated } = useAuth()

    // If user is authenticated and trying to access auth pages, redirect to home
    // Otherwise, render the outlet to show the child routes
    return authenticated && window.location.pathname.includes('/sign-') ? 
        <Navigate to={authenticatedEntryPath} /> : 
        <Outlet />
}

export default PublicRoute
