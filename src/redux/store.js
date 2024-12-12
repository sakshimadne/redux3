import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import actionTypeLogger from './middlewares/actionTypeLogger'
import payloadLogger from './middlewares/payloadLogger'

// Create store with middleware
const store = createStore(
  rootReducer,
  applyMiddleware(actionTypeLogger, payloadLogger)
)

export default store
