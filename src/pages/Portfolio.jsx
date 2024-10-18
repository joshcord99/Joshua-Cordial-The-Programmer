import "../css/Portfolio.css";


export default function Portfolio() {
  return (
    <div>
      <h1 className="portfolioHead">Portfolio</h1>
      <p className="portfolioText">
        This is a list of all the projects i've completed so far.
      </p>
      <section className="parentCard">
      <div className="card">
        <a href="https://github.com/joshcord99/Personal-README-Generator" target="_blank">
          <img src="/PersonalReadMeProject.png" className="readMeImage" alt="Project1" />
        </a>
      </div>

      <div className="card">
        <a href="https://github.com/joshcord99/Personal-Vehicle-Builder-Generator" target="_blank">
          <img src="/VehicleBuilder.jpg" className="VehicleBuilderImage" alt="Project2" />
        </a>
      </div>

      <div className="card">
        <a href="https://github.com/joshcord99/Game-World" target="_blank">
          <img src="/GameWorld.png" className="GameWorldImage" alt="Project3" />
        </a>
      </div>
      </section>

    </div>
  );
}
