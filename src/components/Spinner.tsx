import "./spinner.css";

function Spinner() {
  return (
    <div className="spinner-wrapper">
      <div className="lds-ring ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
