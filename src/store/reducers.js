import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signInReducer from '../apps/SignIn/store';
import signUpReducer from '../apps/SignUp/store';
// import homeReducer from '../apps/Home/store';


const reducers = combineReducers({
    router: routerReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    // home: homeReducer
});

export default reducers;