import problemPic from "../images/sections/problem.jpg";

function Problem() {
  return (
    <section id="problem" className="content-section">
      <div className="section-content">
        <div>
          <h2>Problem Statement</h2>

          <p>
            Elderly dementia patients often face memory loss, confusion,
            difficulty performing daily activities, and increased safety risks.
          </p>

          <p>
            Caregivers may also struggle to continuously monitor patients
            and identify changes in their cognitive condition.
          </p>
        </div>

        <img
          src={problemPic}
          alt="Dementia care challenges"
          className="section-image"
        />
      </div>
    </section>
  );
}

export default Problem;