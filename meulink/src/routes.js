import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Links from './pages/Links';
import Error from './pages/Error';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/links" element={<Links />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes >
        </BrowserRouter>
    );
}