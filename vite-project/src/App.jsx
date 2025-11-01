import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Produto from "./Produto/Produto";
import Inicio from "./Inicio/Inicio";
function App() {
return (
<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/produto" element={<Produto />} />
</Routes>
</BrowserRouter> </> ); }
export default App;