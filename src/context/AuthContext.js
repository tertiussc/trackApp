import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password })
            console.log(response.data)
        } catch (err) {
            console.log(err.response.data)
        }
    }
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // If sign in update state to authenticated
        // If fail show error
    }
}

const signout = (dispatch) => {
    return () => {
        // Just sign out
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false }
)