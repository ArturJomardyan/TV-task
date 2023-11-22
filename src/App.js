import { Backdrop, Menu, Home } from "./components";

import './App.scss';

function App() {
    return (
        <div className="App">
            <Menu />
            <Backdrop />
            <Home />
        </div>
    );
}

export default App;
