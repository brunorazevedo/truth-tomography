import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tomografias } from "./pages/Tomografias";
import { Termo } from "./pages/Termo";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";


export function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tomografias" element={<Tomografias />} />
                <Route path="/termo" element={<Termo />} />
            </Routes>
        </BrowserRouter>
    )
}