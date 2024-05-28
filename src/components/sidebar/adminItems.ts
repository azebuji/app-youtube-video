import { SidebarItemsType } from "./interfaces/sidebar";

import { faUser, faComments } from "@fortawesome/free-solid-svg-icons";

const accountSection = [
  {
    href: "/usuarios/perfil/",
    icon: faUser,
    title: "Perfil",
  },
] as SidebarItemsType[];

const infoSection = [
  {
    href: "/atendimentos/",
    icon: faComments,
    title: "Atendimentos",
  }
] as SidebarItemsType[];

const navItems = [
  {
    title: "Gerenciar",
    pages: infoSection,
  },
  {
    title: "Minha conta",
    pages: accountSection,
  },
];

export default navItems;