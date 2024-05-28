import { SidebarItemsType } from "./interfaces/sidebar";

import { faUser, faComments, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const accountSection = [
  {
    href: "/usuarios/perfil/",
    icon: faUser,
    title: "Perfil",
  },
] as SidebarItemsType[];

const infoSection = [
  {
    href: "/status/",
    icon: faCheckCircle,
    title: "Meu status",
  },
  {
    href: "/atendimentos/",
    icon: faComments,
    title: "Meus atendimentos",
  }
] as SidebarItemsType[];

const navItems = [
  {
    title: "Gerenciar",
    pages: infoSection,
  },
  /*{
    title: "Minha conta",
    pages: accountSection,
  },*/
];

export default navItems;