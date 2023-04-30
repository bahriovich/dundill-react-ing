import React, { useRef, useState } from "react";
import { techData } from "../../../utils/techStackData";
import Select from "react-select";

function UserProfileRegister2({
  userProfileData,
  setUserProfileData,
  handleChange,
}) {
  const filteredSkills = techData.filter((skill) => {
    return skill.skill_stacks.some(
      (stack) =>
        stack.name.toLocaleLowerCase() ===
        userProfileData.signUpProfileData.role.toLocaleLowerCase()
    );
  });

  const techStack = filteredSkills.map((elem) => ({
    ...elem,
    value: elem.name,
    label: elem.name,
  }));

  const handleChangeTeck = (selectedOption) => {
    let teckData = selectedOption.map((el) => ({
      ...el,
      practicalPeriod: "",
      proficiencyLevelName: "",
    }));

    handleChange(null, "signUpProfileData", 0, "techStack", teckData);
  };

  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <h2>What's your tech stack ?</h2>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-form">
          <div className="form">
            <form action="">
              <div className="form-group">
                <div>
                  <h3>search the skill you’re looking for</h3>
                  <Select
                    onChange={handleChangeTeck}
                    isMulti
                    name="teckStack"
                    options={techStack}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileRegister2;
