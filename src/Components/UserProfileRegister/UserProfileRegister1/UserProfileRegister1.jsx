import React from "react";
import { Radio } from "antd";

import "./UserProfileRegister1.css";

function UserProfileRegister1({
  userProfileData,
  setUserProfileData,
  handleChange,
}) {
  const options = [
    { value: "FRONTEND", label: "frontend" },
    { value: "BACKEND", label: "backend" },
    { value: "MOBILE", label: "mobile" },
    { value: "DESIGN", label: "ui/ux" },
    { value: "QA", label: "QA" },
    { value: "DEVOPS", label: "devops" },
    { value: "DATA SCIENCE", label: "data science" },
    { value: "DATA ENGINEERING", label: "data engineering" },
    { value: "MACHINE LEARNING", label: "machine learning" },
    { value: "GAME DEVELOPMENT", label: "game Development" },
    { value: "FULLSTACK(BE-heavy)", label: "FULLSTACK(BE-heavy)" },
    { value: "FULLSTACK(FE-heavy)", label: "FULLSTACK(FE-heavy)" },
    { value: "FULLSTACK", label: "FULLSTACK" },
  ];
  console.log(userProfileData);
  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <h2>What's your role ?</h2>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-form">
          <div className="form">
            <form action="">
              <div className="form-group">
                <label className="form-label">Role </label>
                <Radio.Group defaultValue="a" size="large">
                  {options.map((elem, index) => (
                    <div key={index}>
                      <Radio.Button
                        onChange={(e) =>
                          handleChange(
                            e,
                            "signUpProfileData",
                            undefined,
                            "role"
                          )
                        }
                        value={elem.value}
                        name="role"
                        className="radio-button"
                      >
                        {elem.label}
                      </Radio.Button>
                    </div>
                  ))}
                </Radio.Group>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileRegister1;
