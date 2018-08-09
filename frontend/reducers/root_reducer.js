import { combineReducers } from 'redux';

import errorsReducer from './errors/errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities/entities_reducer';
import ui from './ui/ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  ui
});

export default rootReducer;
