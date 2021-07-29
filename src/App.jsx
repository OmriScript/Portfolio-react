import { Route, Switch } from 'react-router-dom'

import { routes } from './routes'
import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home'

function App() {

  return (
    <div className="app">
      <AppHeader />
      <Home />

      {/* <Switch>
        {routes.map(route => {
          return <Route path={route.path} component={route.component} key={route.path} />
        })}
      </Switch> */}
    </div>
  );
}

export default App;