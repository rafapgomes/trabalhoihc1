import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Produto from "./Produto/Produto";
import Inicio from "./Inicio/Inicio";
import Conta from "./Conta/Conta";
function App() {
return (
<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/produto" element={<Produto />} />
    <Route path="/conta" element={<Conta />} />
</Routes>
</BrowserRouter> </> ); }
export default App;