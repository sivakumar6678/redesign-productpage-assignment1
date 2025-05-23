
import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import sharedRoutes from './sharedRoutes'
import type { Routes } from '@/@types/routes'

/**
 * Public routes configuration
 * These routes are accessible to unauthorized users
 * Includes shared routes that are accessible to both authorized and unauthorized users
 */
export const publicRoutes: Routes = [
    ...authRoute,
    ...sharedRoutes
]

/**
 * Protected routes configuration
 * These routes are accessible only to authorized users
 * Includes shared routes that are accessible to both authorized and unauthorized users
 */
export const protectedRoutes: Routes = [
    ...sharedRoutes,
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: lazy(() => import('@/views/demo/SingleMenuView')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: lazy(() => import('@/views/demo/GroupSingleMenuItemView')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: lazy(
            () => import('@/views/demo/GroupCollapseMenuItemView1'),
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: lazy(
            () => import('@/views/demo/GroupCollapseMenuItemView2'),
        ),
        authority: [],
    },
    ...othersRoute
]
