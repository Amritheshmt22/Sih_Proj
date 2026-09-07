import impactPic from "../images/sections/impact.jpg";

function Impact() {
  return (
    <section id="impact" className="content-section">
      <div className="section-content">
        <div>
          <h2>Expected Impact</h2>

          <p>
            Aaru Bytes encourages regular cognitive activities for elderly
            users while helping caregivers stay informed and improving
            technology-assisted safety.
          </p>
        </div>

        <img
          src={impactPic}
          alt="Positive impact of Aaru Bytes"
          className="section-image"
        />
      </div>
    </section>
  );
}

export default Impact;