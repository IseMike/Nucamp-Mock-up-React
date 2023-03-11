import { MENUITEMS } from "../../app/shared/MENUITEMS";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      menuItemsArray: MENUITEMS
};

const menuItemsSlice = createSlice({
      name: 'menu items',
      initialState
});

export const menuItemsReducer = menuItemsSlice.reducer;

export const selectAllMenuItems = (state) => {
      return state.menuItems.menuItemsArray;
};

export const selectRandomMenuItem = () => {
      return MENUITEMS[Math.floor(MENUITEMS.length * Math.random())];
};

export const selectMenuItemById = (id) => (state) => {
      return state.menuItems.menuItemsArray.find(
            (menuItem) => menuItem.id === parseInt(id)
      );
};

export const selectMenuItemByQuantity = (state) => {
      return state.menuItems.menuItemsArray.filter(function (item) {
            return item.quantity > 0
      });
};