import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Produto from "./Produto/Produto";
import Inicio from "./Inicio/Inicio";
import Conta from "./Conta/Conta";
import Pedidos from "./Pedidos/Pedidos";
function App() {
return (
<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/produto" element={<Produto />} />
    <Route path="/conta" element={<Conta />} />
    <Route path="/pedidos" element={<Pedidos />} />
</Routes>
</BrowserRouter> </> ); }
export default App;