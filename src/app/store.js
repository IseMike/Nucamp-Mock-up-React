import { configureStore } from '@reduxjs/toolkit';
import { menuItemsReducer } from '../features/menuitems/menuItemsSlice';

export const store = configureStore({
  reducer: {
    menuItems: menuItemsReducer
  }
});
