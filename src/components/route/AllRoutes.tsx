import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import AuthorityGuard from './AuthorityGuard'
import AppRoute from './AppRoute'
import PageContainer from '@/components/template/PageContainer'
import LayoutBase from '@/components/template/LayoutBase'
import appConfig from '@/configs/app.config'
import { useAuth } from '@/auth'
import { Routes, Route, Navigate } from 'react-router-dom'
import type { LayoutType } from '@/@types/theme'
import { protectedRoutes, publicRoutes } from '@/configs/routes.config'  // ✅ ONLY import protectedRoutes and publicRoutes

interface ViewsProps {
    pageContainerType?: 'default' | 'gutterless' | 'contained'
    layout?: LayoutType
}

type AllRoutesProps = ViewsProps

const { authenticatedEntryPath } = appConfig

const AllRoutes = (props: AllRoutesProps) => {
    const { user, authenticated } = useAuth()

    return (
        <Routes>
            {/* Public routes - accessible to everyone */}
            <Route element={<PublicRoute />}>
                {/* Render public + shared routes */}
                {publicRoutes.map((route, index) => (
                    <Route
                        key={route.key + index}
                        path={route.path}
                        element={
                            <LayoutBase type={props.layout || 'classic'}>
                                <PageContainer {...props} {...route.meta}>
                                    <AppRoute
                                        routeKey={route.key}
                                        component={route.component}
                                        {...route.meta}
                                    />
                                </PageContainer>
                            </LayoutBase>
                        }
                    />
                ))}
            </Route>

            {/* Protected routes - only for authenticated users */}
            <Route element={<ProtectedRoute />}>
                {/* Render protected routes (excluding shared routes which are already handled above) */}
                {protectedRoutes
                    .filter(route => !publicRoutes.some(pr => pr.path === route.path))
                    .map((route, index) => (
                        <Route
                            key={route.key + index}
                            path={route.path}
                            element={
                                <AuthorityGuard
                                    userAuthority={user.authority}
                                    authority={route.authority}
                                >
                                    <LayoutBase type={props.layout || 'classic'}>
                                        <PageContainer {...props} {...route.meta}>
                                            <AppRoute
                                                routeKey={route.key}
                                                component={route.component}
                                                {...route.meta}
                                            />
                                        </PageContainer>
                                    </LayoutBase>
                                </AuthorityGuard>
                            }
                        />
                    ))
                }
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes
