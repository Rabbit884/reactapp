import reducer from '../reducers/index'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

export default function configureStore () {
  return createStoreWithMiddleware(reducer)
}
