import { combineEpics } from 'redux-observable';
import { auth, authEpic, fetchMeEpic, fetchStreamEpic } from './auth';
import {setTracks} from './track';


const rootEpic = combineEpics(
  authEpic,
  fetchMeEpic,
  fetchStreamEpic
);

export {
    auth,
    setTracks,

    rootEpic // redux-observable
};