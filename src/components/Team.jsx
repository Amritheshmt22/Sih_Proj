import teamMembers from "../data/teamData";

function Team() {
  return (
    <section id="team">
      <h2>Meet Our Team</h2>

      <div className="team-cards">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.name}>
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>

            <a href={member.portfolio} target="_blank" rel="noreferrer">
              View Portfolio →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;