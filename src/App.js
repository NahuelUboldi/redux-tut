import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
import cartItems from "./cartItems"
function App() {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}
export default App;
