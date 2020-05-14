import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.saga";
import { cartSaga } from "./cart/cart.saga";
export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSaga)]);
}
