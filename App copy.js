import AppContainer from './src/routes'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';




export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <AppContainer />
   </Provider> 
  );
}
