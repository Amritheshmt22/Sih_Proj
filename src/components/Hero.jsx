import heroPic from "../images/sections/hero.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div>
          <p className="problem-id">SIH26-26003</p>

          <h1>Aaru Bytes</h1>

          <h2>
            AI-Based Cognitive Gaming and Memory Assistance Platform
            for Elderly Dementia Patients in North Eastern Region
          </h2>

          <p>
            An AI-powered platform combining cognitive games, memory
            assistance, and caregiver alerts to support elderly patients
            and improve their safety.
          </p>

          <a href="#team" className="hero-button">
            Meet Our Team
          </a>
        </div>

        <img
          src={heroPic}
          alt="Aaru Bytes elderly care technology"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;