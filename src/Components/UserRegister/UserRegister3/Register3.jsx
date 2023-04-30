import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const UserRegister3 = ({ signUpData, setSignUpData }) => {
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setSignUpData((prev) => {
      let data = { ...prev };
      data[name] = value;
      return data;
    });
  };

  const options = [
    { value: "MALE", label: "male" },
    { value: "FEMALE", label: "female" },
  ];
  const changeHandler = (value) => {
    let genderData = value.value;
    setSignUpData((prev) => {
      let data = { ...prev };
      data.gender = genderData;
      return data;
    });
  };
  console.log(signUpData);
  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <h2>Now, Give more information about you</h2>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-form">
          <div className="form">
            <form action="">
              <div className="form-group">
                <label className="form-label">Birthdate </label>
                <DatePicker
                  name="birthDate"
                  className="form-input"
                  selected={new Date(signUpData?.birthDate)}
                  onChange={(date) =>
                    setSignUpData((prev) => {
                      let data = { ...prev };
                      data.birthDate = new Date(date).toISOString();
                      return data;
                    })
                  }
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Gender </label>
                <Select
                  className="form-input"
                  required="required"
                  name="gender"
                  value={
                    signUpData.gender !== ""
                      ? {
                          value: signUpData?.gender,
                          label: signUpData?.gender?.toLowerCase(),
                        }
                      : ""
                  }
                  options={options}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number </label>
                <input
                  required="required"
                  className="form-input"
                  name="phoneNumber"
                  value={signUpData.phoneNumber}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister3;
