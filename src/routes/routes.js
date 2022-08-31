/* eslint-disable */
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import InicioLayout from "@/pages/Layout/InicioLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

import Inicio from "@/pages/web/Inicio.vue";
import Login from "@/pages/web/Login.vue";
import Register from "@/pages/web/Register.vue";
import UserCipca from "@/pages/web/Users/List.vue";
import Edit from "@/pages/web/Users/Edit.vue";
import ListProducer from "@/pages/web/Producers/ListProducer.vue";
import EditProducer from "@/pages/web/Producers/EditProducer.vue";
import ViewProducer from "@/pages/web/Producers/ViewProducer.vue";

const routes = [
  {
    path: "/",
    component: InicioLayout,
    redirect: "inicio",
    children: [
      {
        path: "inicio",
        name: "Inicio",
        component: Inicio,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      }
    ]
  },
  {
    path: "/dash",
    component: DashboardLayout,
    redirect: "/dash/dashboard",
    children: [
      {
        path: "dashboard/",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/usercipca",
        name: "Usuarios",
        component: UserCipca,
      },
      {
        path: "/edit/:id",
        name: "Edit",
        component: Edit,
      },
      {
        path: "/listproducer",
        name: "ListProducer",
        component: ListProducer,
      },
      {
        path: "/editproducer/:id",
        name: "EditProducer",
        component: EditProducer,
      },
      {
        path: "/viewproducer/:id",
        name: "ViewProducer",
        component: ViewProducer,
      },
      {
        path: "/user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "/table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "/typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "/icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "/maps",
        name: "Maps",
        meta: {
          hideFooter: true,
        },
        component: Maps,
      },
      {
        path: "/notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "/upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
    ],
  },
];

export default routes;
