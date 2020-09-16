import createDataContext from './createDataContext'

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const fetchTracks = dispatch => () => { }
const createTrack = dispatch => (name, locations) => {
    // make request to API
    console.log(name, locations.length)
}

export const { Provider, Context } = createDataContext(
    // first argument is the reducer
    trackReducer,
    // second argument is all the action functions 
    { fetchTracks, createTrack },
    // Third argument is the initial state array
    []
)