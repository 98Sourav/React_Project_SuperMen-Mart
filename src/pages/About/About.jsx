import '../../shared/styles/about.css';

const About = () => {
  return (
    <>
      <header className="hero">
        <h1>
          About <span>SuperMenMart</span>
        </h1>
        <p>Empowering you with quality, style, and unbeatable deals.</p>
      </header>

      <section className="about-content">
        <div className="card fade-in">
          <h2>🧾 Our Story</h2>
          <p>
            Founded in 2025, SuperMenMart started as a small dream to deliver
            high-quality products to the everyday superhero. From fashion to
            gadgets, we’ve got it all — curated with care and delivered with
            passion.
          </p>
        </div>

        <div className="card fade-in">
          <h2>🚀 Our Mission</h2>
          <p>
            We aim to redefine online shopping by offering exclusive products
            with unbeatable prices and top-notch customer service. Your
            satisfaction is our superpower.
          </p>
        </div>

        <div className="card fade-in">
          <h2>🤝 Our Values</h2>
          <ul>
            <li>✔️ Trust & Transparency</li>
            <li>✔️ Customer-First Approach</li>
            <li>✔️ Innovation & Improvement</li>
            <li>✔️ Sustainable Practices</li>
          </ul>
        </div>
      </section>

      {/* <footer className="footer">
        <p>&copy; 2025 SuperMenMart. All rights reserved.</p>
      </footer> */}
    </>
  );
};

export default About;
