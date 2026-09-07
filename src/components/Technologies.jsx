import technologies from "../data/technologyData";
import technologyPic from "../images/sections/technologies.jpg";

function Technologies() {
  return (
    <section id="technologies">
      <div className="technology-intro">
        <div>
          <h2>Technologies We Use</h2>

          <p>
            Our platform combines modern AI, web, backend, database,
            and IoT technologies.
          </p>
        </div>

        <img
          src={technologyPic}
          alt="Technologies used by Aaru Bytes"
          className="section-image"
        />
      </div>

      <div className="technology-cards">
        {technologies.map((technology) => (
          <div key={technology.name}>
            <h3>{technology.name}</h3>
            <p>{technology.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;