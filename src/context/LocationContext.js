import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }
        default:
            return state
    }
}

const startRecording = dispatch => () => { }
const startstopRecording = dispatch => () => { }
const addLocation = dispatch => (location) => {
    console.log('I am Tracking')
    dispatch({ type: 'add_current_location', payload: location })
}


export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, startstopRecording, addLocation },
    { recording: false, location: [], currentLocation: null }
)