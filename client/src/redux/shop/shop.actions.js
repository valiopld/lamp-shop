import ShopActionsTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
export const fetchCollectionsStart = (collectionsMap) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START,
});
export const fetchColletionsSucces = (collectionsMap) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCES,
  payload: collectionsMap,
});
export const fetchColectionsFailure = (error) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snap) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snap);
        dispatch(fetchColletionsSucces(collectionsMap));
      })
      .catch((error) => dispatch(fetchColectionsFailure(error.message)));
  };
};
