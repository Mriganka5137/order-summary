import music from "./icon-music.svg";
function Plan() {
  return (
    <section className="plan-container">
      <div className="inner-div">
        <img src={music} alt="music logo" />
        <div>
          <p className="plan">Annual Plan</p>
          <p className="price">$59.99/year</p>
        </div>
      </div>
      <a href="#" className="change-link">
        Change
      </a>
    </section>
  );
}

export default Plan;
