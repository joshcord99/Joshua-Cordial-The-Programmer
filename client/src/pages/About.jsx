import "../css/About.css";
export default function About() {
  return (
    <div className="main-container">
      <p className="aboutHead">Joshua Cordial</p>
      <div>
        <a href="https://github.com/joshcord99" target="_blank">
          <img src="/me.jpg" className="avatarImage" alt="Avatar" />
        </a>
      </div>
      <p className="aboutText">
        Joshua is a 25-year-old software developer based in California with a
        passion for creating web applications that have a real-world impact. He
        specializes in full-stack development and enjoys using modern frameworks
        and tools to bring ideas to life. Known for being a quick learner and a
        dependable team player, Joshua approaches challenges with a positive
        attitude and a strong problem-solving mindset. He communicates
        effectively, adapts easily to new environments, and is always eager to
        contribute to meaningful projects while continuing to grow as a
        developer.
      </p>
    </div>
  );
}
