import { MENUITEMS } from "../../app/shared/MENUITEMS";

export const selectAllMenuItems = () => {
      return MENUITEMS;
};

export const selectRandomMenuItem = () => {
      return MENUITEMS[Math.floor(MENUITEMS.length * Math.random())];
};

export const selectMenuItemById = (id) => {
      return MENUITEMS.find((menuitem) => menuitem.id === id);
};