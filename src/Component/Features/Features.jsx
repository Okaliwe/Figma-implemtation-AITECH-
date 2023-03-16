import './Features.css';

const Features = ({ title, text }) => (
  <div className="featur">
    <div className="title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Features;
