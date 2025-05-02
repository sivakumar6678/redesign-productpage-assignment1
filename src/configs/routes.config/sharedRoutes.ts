import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

/**
 * Shared routes configuration
 * Routes defined here are accessible to both authorized and unauthorized users
 */
const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: '/',
        component: lazy(() => import('@/views/Home')),
        authority: []
    }
    // Add more shared routes here as needed
]

export default sharedRoutes
