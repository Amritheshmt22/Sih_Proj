import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { id: "home", name: "Home" },
    { id: "problem", name: "Problem" },
    { id: "solution", name: "Solution" },
    { id: "features", name: "Features" },
    { id: "workflow", name: "Workflow" },
    { id: "impact", name: "Impact" },
    { id: "team", name: "Team" },
    { id: "technologies", name: "Technologies" },
    { id: "contact", name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Home is active only when near the top
      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }

      // Contact is active when we reach the bottom
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && scrollPosition >= section.offsetTop - 180) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#home" className="logo">
        Aaru Bytes
      </a>

      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;