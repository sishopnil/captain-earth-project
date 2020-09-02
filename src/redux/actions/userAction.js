import {
  auth,
  googleProvider,
  facebookProvider,
  db,
} from "../../firebase/util";
import {
  SET_AUTHENTICATED,
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_ERRORS,
} from "../types";
import { upgradeLevel } from "../../utils/utils";

// Sign in with Google
export const signInWithGoogle = () => (dispatch) => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      // console.log(res);
      db.doc(`/users/${res.user.uid}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            dispatch({ type: SET_AUTHENTICATED });
            dispatch(getAuthenticatedUser(res.user.uid));
          } else {
            db.doc(`/users/${res.user.uid}`)
              .set({
                ref: res.user.uid,
                userName: res.user.displayName,
                userImage: res.user.photoURL,
                email: res.user.providerData[0].email,
                level: 0,
                score: 0,
                completedTasks: 0,
              })
              .then(() => {
                dispatch({ type: SET_AUTHENTICATED });
                dispatch(getAuthenticatedUser(res.user.uid));
              });
          }
        });
    })
    .catch((err) => dispatch({ type: SET_ERRORS, payload: err }));
};
// Sign in with Facebook
export const signInWithFacebook = () => (dispatch) => {
  auth
    .signInWithPopup(facebookProvider)
    .then((res) => {
      db.doc(`/users/${res.user.uid}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            dispatch({ type: SET_AUTHENTICATED });
            getAuthenticatedUser(res.user.uid);
          } else {
            db.doc(`/users/${res.user.uid}`)
              .set({
                ref: res.user.uid,
                userName: res.user.displayName,
                userImage: res.user.photoURL,
                email: res.user.providerData[0].email,
                level: 0,
                score: 0,
                completedTasks: 0,
              })
              .then(() => {
                dispatch({ type: SET_AUTHENTICATED });
                dispatch(getAuthenticatedUser(res.user.uid));
              });
          }
        });
    })
    .catch((err) => dispatch({ type: SET_ERRORS, payload: err }));
};

// logout
export const logout = () => (dispatch) => {
  auth
    .signOut()
    .then(() => {
      dispatch({ type: SET_UNAUTHENTICATED });
    })
    .catch((err) => console.log(err));
};

// get authenticated user details
export const getAuthenticatedUser = (uid) => (dispatch) => {
  db.doc(`/users/${uid}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        dispatch({
          type: SET_USER,
          payload: {
            ...doc.data(),
          },
        });
      }
    });
};

// change user level
export const changeLevel = (userRef) => (dispatch) => {
  // console.log(userRef);
  // console.log(answers);
  // let userLevel;
  console.log(upgradeLevel("commoner"));
  db.doc(`/users/${userRef}`)
    .get()
    .then((doc) => {
      // console.log(doc.data().completedTasks);
      const currLevel = doc.data().userLevel;
      if (doc.data().completedTasks === 3) {
        db.doc(`/users/${userRef}`).update({
          userLevel: upgradeLevel(currLevel),
          completedTasks: 0,
        });
      }
    });
};
