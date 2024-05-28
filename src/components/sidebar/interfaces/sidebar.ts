import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface SidebarItemsType {
  href: string;
  title: string;
  icon: IconDefinition;
  children: SidebarItemsType[];
  badge?: string;
};
