import hero from "./illustration-hero.svg";
import Plan from "./Plan";
function App() {
  return (
    <main className="card">
      <img className="hero-img" src={hero} alt="hero" />
      <div className="details-container">
        <h2>Order Summary</h2>
        <p className="desc">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <Plan />
        <section className="button-grp">
          <button className="btn-payment">Proceed to Payment</button>
          <p className="btn-cancel">Cancel Order</p>
        </section>
      </div>
    </main>
  );
}

export default App;
