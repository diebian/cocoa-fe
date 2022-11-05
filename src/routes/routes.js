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
import CreateProducer from "@/pages/web/Producers/CreateProducer.vue";
import ListCollector from "@/pages/web/Collectors/ListCollector.vue";
import EditCollector from "@/pages/web/Collectors/EditCollector.vue";
import ViewCollector from "@/pages/web/Collectors/ViewCollector.vue";
import CreateCollector from "@/pages/web/Collectors/CreateCollector.vue";
import ListSaf from "@/pages/web/SafTracking/ListSaf.vue";
import EditSaf from "@/pages/web/SafTracking/EditSaf.vue";
import ViewSaf from "@/pages/web/SafTracking/ViewSaf.vue";
import CreateSaf from "@/pages/web/SafTracking/CreateSaf.vue";
import ListWild from "@/pages/web/WildTracking/ListWild.vue";
import EditWild from "@/pages/web/WildTracking/EditWild.vue";
import ViewWild from "@/pages/web/WildTracking/ViewWild.vue";
import CreateWild from "@/pages/web/WildTracking/CreateWild.vue";

import MapsProducer from "@/pages/web/Maps/MapsProducer.vue";
import MapsCollector from "@/pages/web/Maps/MapsCollector.vue";

//import Reports from "@/pages/web/Reports/Prueba.vue";
import ReportProducer from "@/pages/web/Reports/ProducerReport.vue";

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
        name: "Lista de Productores", //name: "ListProducer",
        component: ListProducer,
      },
      {
        path: "/editproducer/:id",
        name: "Editar Datos del Productor", //name: "EditProducer",
        component: EditProducer,
      },
      {
        path: "/createproducer",
        name: "Nuevo Productor", //name: "CreateProducer",
        component: CreateProducer,
      },
      {
        path: "/viewproducer/:id",
        name: "Datos del Productor", //name: "ViewProducer",
        component: ViewProducer,
      },
      {
        path: "/listcollector",
        name: "Lista de Recolectores", //name: "ListCollector",
        component: ListCollector,
      },
      {
        path: "/editcollector/:id",
        name: "Editar Datos de Recolector", //name: "EditCollector",
        component: EditCollector,
      },
      {
        path: "/createcollector",
        name: "Nuevo Recolector", //name: "CreateCollector",
        component: CreateCollector,
      },
      {
        path: "/viewcollector/:id",
        name: "Datos del Recolector", //name: "ViewCollector",
        component: ViewCollector,
      },
      {
        path: "/listsaf/:id",
        name: "Lista de SAF", //name: "ListSaf",
        component: ListSaf,
      },
      {
        path: "/editsaf/:id",
        name: "Editar Datos de SAF", //name: "EditSaf",
        component: EditSaf,
      },
      {
        path: "/createsaf",
        name: "Nuevo SAF", //name: "CreateSaf",
        component: CreateSaf,
      },
      {
        path: "/viewsaf/:id",
        name: "Datos de SAF", //name: "ViewSaf",
        component: ViewSaf,
      },
      {
        path: "/listwild/:id",
        name: "Lista de BOSQUES", //name: "ListWild",
        component: ListWild,
      },
      {
        path: "/editwild/:id",
        name: "Editar Datos de BOSQUES", //name: "EditWild",
        component: EditWild,
      },
      {
        path: "/createwild",
        name: "Nuevo BOSQUE", //name: "CreateWild",
        component: CreateWild,
      },
      {
        path: "/viewwild/:id",
        name: "Datos de BOSQUE", //name: "ViewWild",
        component: ViewWild,
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
        path: "/mapsproducer",
        name: "Mapas de Geolocalización de Productores",
        meta: {
          hideFooter: true,
        },
        component: MapsProducer,
      },
      {
        path: "/mapscollector",
        name: "Mapas de Geolocalización de Recolectores",
        meta: {
          hideFooter: true,
        },
        component: MapsCollector,
      },
      /* {
        path: "/reports",
        name: "Reportes",
        component: Reports,
      }, */
      {
        path: "/reportsProducer",
        name: "Reportes Productor",
        component: ReportProducer,
      },
      {
        path: "/maps",
        name: "Mapas demo",
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
