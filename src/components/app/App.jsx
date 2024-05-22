import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Navbar from "../navbar/Navbar";
import {MainPage, ListPage, Page404} from "../pages";

const App = () => {

    return (
        <Router>
            <div className="app">
            <Navbar/>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/countrieslist">
                            <ListPage/>
                        </Route>
                        <Route to="*">
                            <Page404/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}


export default App;