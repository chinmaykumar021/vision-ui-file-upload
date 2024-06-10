import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src="/ethereal_vision.svg" alt="" height={254} width={353} />
      <h1>Covenant Vision</h1>
      <p>
        Powered by{" "}
        <span>
          <a href="https://etherealcovenant.com/" target="_blank">
            Ethereal Covenant
          </a>
        </span>
      </p>
    </div>
  );
};

export default Hero;
