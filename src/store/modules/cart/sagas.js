// Quando a UI disparar um evento, a funçao saga recebe esse evento faz a requisiçao
// depois dispara uma action que ira evoluir o estado;
import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './action';

function* addToCart(action) {
  const response = yield call(api.get, `/products/${action.id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
