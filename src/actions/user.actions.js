import swal from 'sweetalert2';
import userConstants from '../constants/user.constants';
import userService from '../services/user.service';
import alertActions from './alert.actions';
import history from '../helpers/history';

function login(username, password, from = null) {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push(from || '/');
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
        swal.fire({
          title: 'Error',
          text: 'Email o contraseña incorrectos',
          icon: 'error',
        });
      }
    );
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

const userActions = {
  login,
  logout,
};

export default userActions;
