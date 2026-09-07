import solutionPic from "../images/sections/solution.jpg";

function Solution() {
  return (
    <section id="solution" className="content-section">
      <div className="section-content">
        <img
          src={solutionPic}
          alt="Aaru Bytes solution"
          className="section-image"
        />

        <div>
          <h2>Our Solution</h2>

          <p>
            Aaru Bytes is an AI-powered cognitive gaming and memory assistance
            platform designed to support elderly dementia patients.
          </p>

          <p>
            The platform combines cognitive games, memory assistance, and
            caregiver alerts to improve cognitive engagement, monitoring,
            and patient safety.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Solution;