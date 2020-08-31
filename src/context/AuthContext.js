import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const signup = (dispatch) => {
    return ({ email, password }) => {
        // Make api request to signup
        // If sign up then update state with authenticated
        // If error show error message
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