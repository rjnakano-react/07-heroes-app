import { authReducer } from "../../../src/auth/context";
import { types } from "../../../src/auth/types/types";

describe('Test authReducer function', () => {

    const initialState = {logged: false};
    const userTest = {name: 'Ryuma Nakano', id: '123'}
    const loginAction = {
        type: types.login,
        payload: userTest
    }
    const logoutAction = {
        type: types.logout,
    }

    test('should return a default value', () => {
        const newState = authReducer(initialState, {});
        expect(newState).toEqual(initialState);
    })

    test('should call login to authenticate and set the user', () => {
        const newState = authReducer(initialState, loginAction);
        
        expect(newState.logged).toBeTruthy()
        expect(newState.user).toEqual(userTest)

    })
    test('should call logout and delete username and set logged flag as false', () => {

        const loginState = authReducer(initialState, loginAction);

        const logoutState = authReducer(loginState, logoutAction);

        expect(logoutState.logged).toBeFalsy()

    })
})