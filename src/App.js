import React, {Component} from 'react';
import Home from "./components/Home";

class App extends Component {
    render() {
        return (
            <div className={"header"}>
                <Home/>
            </div>
        );
    }
}

export default App;