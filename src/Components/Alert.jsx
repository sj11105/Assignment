import { useState } from "react";
import { GoBell } from "react-icons/go";

const Alert = () => {
  const [visible, setVisible] = useState(true);

  const style2 = {
    float: "left",
    margin: "3px",
  };
 

  return (
    <div
      className={`alert alert-primary alert-dismissible fade show ${
        visible ? "" : "d-none"
      }`}
      role="alert"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="text " style={{marginLeft:'500px'}}>
            Enable browser notifications to avoid missing out on important activity
          </div>
          <div className=" btndiv d-flex "  >
            <button type="button" className="nbtn"  style={{marginRight:'1200px'}}>
              <GoBell style={style2} />
              Enable notifications
            </button>
          </div>
        </div>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    </div>
  );
};

export default Alert;