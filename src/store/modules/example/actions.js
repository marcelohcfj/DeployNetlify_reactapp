import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
    payload,
  };
}
