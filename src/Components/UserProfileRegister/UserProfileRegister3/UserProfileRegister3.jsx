import { Select } from "antd";
import React from "react";
import "./UserProfileRegister3.css";

function UserProfileRegister3({
  userProfileData,
  setUserProfileData,
  handleChange,
}) {
  const options = [
    { value: "AWARE", label: "Aware" },
    { value: "EXPERIENCED", label: "Experienced" },
    { value: "PROFESSIONAL", label: "Professional" },
    { value: "EXPERT", label: "Expert" },
  ];
  function handleDataChange(e, index, name, value) {
    const newValue = value !== undefined ? value : e.target.value;
    setUserProfileData((prev) => {
      let data = { ...prev };
      let arr = [...data.signUpProfileData.techStack];
      arr[index][name] = newValue;
      return data;
    });
  }

  return (
    <>
      <div className="left-side">
        <div className="left-side-content" style={{ width: "80%" }}>
          <h2>Can you tell us more about your skills?</h2>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-form">
          <div className="form">
            <form action="">
              <div className="form-group">
                {userProfileData.signUpProfileData.techStack.map(
                  (elem, index) => (
                    <div className="skill">
                      <div className="skillnameskillimage">
                        <img
                          src={elem.image_url}
                          alt=""
                          height={25}
                          width={25}
                        />
                        <span> {elem.name} </span>
                      </div>
                      <div className="years_and_preficiency">
                        <input
                          type="text"
                          name="practicalPeriod"
                          value={elem?.practicalPeriod}
                          onChange={(e) =>
                            handleDataChange(e, index, "practicalPeriod")
                          }
                          style={{ "border-radius": "5px", height: "27px" }}
                        />
                        <span>years</span>
                        <Select
                          onChange={(val) =>
                            handleDataChange(
                              null,
                              index,
                              "proficiencyLevelName",
                              val
                            )
                          }
                          options={options}
                          name="proficiencyLevelName"
                          style={{ width: "130px" }}
                          defaultValue={"Aware"}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileRegister3;
