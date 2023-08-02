import music from "./icon-music.svg";
function Plan() {
  return (
    <section className="plan-container">
      <img src={music} alt="music logo" />
      <div>
        <p>Annual Plan</p>
        <p>$59.99/year</p>
      </div>
      <a href="#">Change</a>
    </section>
  );
}

export default Plan;
