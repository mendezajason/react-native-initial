import {configureStore} from '@reduxjs/toolkit';
import selectUser from '../features/users/selectUser';

export default configureStore({
  reducer: {
    selectUser: selectUser,
  },
});
