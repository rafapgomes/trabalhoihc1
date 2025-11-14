import { BrowserRouter, Route, Routes} from "react-router-dom";
import Produto from "./Produto/Produto";
import Inicio from "./Inicio/Inicio";
import Conta from "./Conta/Conta";
import Pedidos from "./Pedidos/Pedidos";
import Navbar from "./Navbar/Navbar";
function App() {
return (
<>
<BrowserRouter>
<Navbar />
<Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/produto" element={<Produto />} />
    <Route path="/conta" element={<Conta />} />
    <Route path="/pedidos" element={<Pedidos />} />
</Routes>
</BrowserRouter> </> ); }
export default App;