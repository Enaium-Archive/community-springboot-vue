/*
 * Copyright (c) 2022 Enaium
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 */

import {createRouter, createWebHistory} from "vue-router";
import Login from '@/pages/Login.vue';
import Home from "@/pages/main/Home.vue";
import Register from "@/pages/Register.vue";
import Publish from "@/pages/main/Publish.vue";
import Profile from "@/pages/main/Profile.vue";
import Main from "@/layouts/Main.vue";
import Logout from "@/pages/main/Logout.vue";
import Post from "@/pages/main/Post.vue";
import Space from "@/pages/main/Space.vue";
import Backend from "@/layouts/Backend.vue";
import Welcome from "@/pages/backend/Welcome.vue";
import UserList from "@/pages/backend/user/UserList.vue";
import UserRole from "@/pages/backend/user/UserRole.vue";
import RoleList from "@/pages/backend/role/RoleList.vue";
import RolePermission from "@/pages/backend/role/RolePermission.vue";
import UserCreate from "@/pages/backend/user/UserCreate.vue";
import UserBan from "@/pages/backend/user/UserBan.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "main",
            component: Main,
            children: [
                {
                    path: "",
                    name: "home",
                    component: Home,
                },
                {
                    path: "profile",
                    name: "profile",
                    component: Profile,
                },
                {
                    path: "publish",
                    name: "publish",
                    component: Publish,
                },
                {
                    path: "logout",
                    name: "logout",
                    component: Logout
                },
                {
                    path: "post",
                    name: "post",
                    component: Post
                },
                {
                    path: "space",
                    name: "space",
                    component: Space
                }
            ]
        },
        {
            path: "/backend",
            name: "backend",
            component: Backend,
            children: [
                {
                    path: "",
                    name: "welcome",
                    component: Welcome
                },
                {
                    path: "user/list",
                    name: "user-list",
                    component: UserList
                },
                {
                    path: "user/create",
                    name: "user-create",
                    component: UserCreate
                },
                {
                    path: "user/ban",
                    name: "user-ban",
                    component: UserBan
                },
                {
                    path: "user/role",
                    name: "user-role",
                    component: UserRole
                },
                {
                    path: "role/list",
                    name: "role-list",
                    component: RoleList
                },
                {
                    path: "role/permission",
                    name: "role-permission",
                    component: RolePermission
                }
            ]
        },
        {
            path: "/register",
            name: "register",
            component: Register,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        }
    ]
});

export default router