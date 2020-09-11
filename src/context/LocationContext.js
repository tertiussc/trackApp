import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const startRecording = dispatch => () => { }
const startstopRecording = dispatch => () => { }
const addLocation = dispatch => () => { }


export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, startstopRecording, addLocation },
    { recording: false, location: [], currentLocation: null }
)