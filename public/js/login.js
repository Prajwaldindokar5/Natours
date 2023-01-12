/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password
      }
    });
    // console.log(email, password);
    if (res.data.status === 'success') {
      showAlert('success', 'Successfully Logged in');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) {
      showAlert('success', 'Logout Successfully');
      location.reload(true);
      location.assign('/');
    }
  } catch (error) {
    showAlert('error', 'Error Logging out! try again later');
  }
};
