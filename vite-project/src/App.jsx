import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Produto from "./Produto/Produto";
function App() {
return (
<>
<BrowserRouter>
<Routes>
<Route path="/" element={<Produto />} />
</Routes>
</BrowserRouter> </> ); }
export default App;