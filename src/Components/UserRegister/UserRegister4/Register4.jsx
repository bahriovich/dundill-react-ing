import React from "react";

function UserRegister4({ signUpData, setSignUpData, fieldErrors }) {
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setSignUpData((prev) => {
      let data = { ...prev };
      data[name] = value;
      return data;
    });
  };

  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <h2>give us your profile title ?</h2>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-form">
          <div className="form">
            <form action="">
              <div className="form-group">
                <label
                  style={fieldErrors["title"] && { color: "red" }}
                  className="form-label"
                >
                  Title{" "}
                </label>
                <input
                  style={
                    fieldErrors[`title`] && {
                      backgroundImage:
                        "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                    }
                  }
                  required="required"
                  className="form-input"
                  type="text"
                  name="title"
                  value={signUpData.title}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {fieldErrors[`title`] && (
                  <span style={{ color: "red" }}>{fieldErrors[`title`]}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister4;
