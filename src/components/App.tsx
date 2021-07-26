import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Menu from './common/Menu'
import { Home, Videos, Projects, Resume, Contact } from './pages/'


function App() {
  return (
    <div>
      {/* normalize css */}
      <CssBaseline />

      {/* react routing */}
      <Router>
        <Menu />
        <Switch>
          <Route path={["/", "/Home"]} exact component={Home} />
          <Route path="/Videos" component={Videos} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  )
}

export default App