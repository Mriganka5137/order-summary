import hero from "./illustration-hero.svg";
import Plan from "./Plan";
function App() {
  return (
    <main className="card">
      <img className="hero-img" src={hero} alt="hero" />
      <h2>Order Summary</h2>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhre you like!
      </p>
      <Plan />
      <button>Proceed to Payment</button>
      <button>Cancel Order</button>
    </main>
  );
}

export default App;
