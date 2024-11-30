import "../css/Portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <header className="portfolioHead text-center"> Completed Projects</header>
      <p className="text-center portfolioText">
        If interested in seeing the repositories for these projects, please
        click on the image you would like to see. Then you will be redirected to
        a new page.
      </p>
      <section className="parentCard">
        <div className="card">
          <a
            href="https://github.com/joshcord99/Personal-README-Generator"
            target="_blank"
          >
            <img
              src="/PersonalReadMeProject.png"
              className="readMeImage"
              alt="Project1"
            />
          </a>
          <p className="portfolioText">Personal-README-Generator</p>
        </div>
        <div className="card">
          <a
            href="https://github.com/joshcord99/Personal-Vehicle-Builder-Generator"
            target="_blank"
          >
            <img
              src="/VehicleBuilder.jpg"
              className="VehicleBuilderImage"
              alt="Project2"
            />
          </a>

          <p className="portfolioText">Personal-Vehicle-Builder-Generator</p>
        </div>
        <div className="card">
          <a
            href="https://github.com/joshcord99/Efficient-Studying"
            target="_blank"
          >
            <img
              src="/shortcutlogo.jpeg"
              className="shortculogo"
              alt="Project4"
            />
          </a>
          <p className="portfolioText">Efficient-Studying</p>
        </div>
        <div className="card">
          <a
            href="https://github.com/joshcord99/Personal-Weather-Information"
            target="_blank"
          >
            <img
              src="/weatherimage.jpg"
              className="weatherimage"
              alt="Project5"
            />
          </a>
          <p className="portfolioText">Personal-Weather-Information</p>
        </div>
        <div className="card">
          <a
            href="https://github.com/joshcord99/Joshua-Cordial-The-Programmer"
            target="_blank"
          >
            <img
              src="/AvatarMaker-2.png"
              className="avatarimage"
              alt="Project6"
            />
          </a>
          <p className="portfolioText">Joshua-Cordial-The-Programmer</p>
        </div>
      </section>
    </div>
  );
}
