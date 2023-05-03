import React, { useState } from "react";
import "./UserRegister.css";
import Logo from "../../img/Logo.png";
import Register1 from "./UserRegister1/Register1";
import Register2 from "./UserRegister2/Register2";
import Register3 from "./UserRegister3/Register3";
import Register4 from "./UserRegister4/Register4";
import { useMutation } from "@apollo/client";

import UserProfileRegister from "../UserProfileRegister/UserProfileRegister";
function UserRegister() {
  const [userProfile, setUserProfile] = useState(false);
  const [userProfileData, setUserProfileData] = useState({
    signUpProfileData: {
      role: "",
      techStack: [],
      professionalExperience: [],
    },
    educationData: [
      {
        degreeName: "",
        fieldOfStudy: "",
        school: "",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
    ],
    professionalExperienceData: [
      {
        companyName: "",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        stillWorking: false,
        title: "",
        description: "",
        duration: "",
      },
    ],
    certifications: [
      {
        certificationName: "",
        certificationDescription: "",
        certificationLink: "",
        certificationDate: new Date().toISOString(),
        doesItExpire: false,
        expDate: new Date().toISOString(),
      },
    ],
    profileSummary: {
      profile: "",
      commitment: "",
      availability: "",
      availabilityDate: new Date().toISOString(),
      linkedInUrl: "",
      githubUrl: "",
    },
  });

  const handleChange = (event, stateKey, index, nestedKey, value) => {
    const newValue = value !== undefined ? value : event.target.value;
    const type = event?.target?.type;
    const checked = event?.target?.checked;

    // Create a copy of the state object
    const newState = { ...userProfileData };

    // Update the state based on the state key, index, and nested key (if provided)
    if (nestedKey !== undefined) {
      if (Array.isArray(newState[stateKey])) {
        newState[stateKey][index][nestedKey] =
          type === "number" ? Number(newValue) : newValue;
      } else {
        newState[stateKey][nestedKey] =
          type === "number" ? Number(newValue) : newValue;
      }
    } else if (index !== undefined) {
      if (Array.isArray(newState[stateKey])) {
        newState[stateKey][index] = type === "checkbox" ? checked : newValue;
      } else {
        newState[stateKey][index] =
          type === "number" ? Number(newValue) : newValue;
      }
    } else {
      newState[stateKey] = type === "number" ? Number(newValue) : newValue;
    }

    // Update the state with the new value
    setUserProfileData(newState);
  };
  const [signUpData, setSignUpData] = useState({
    fullname: "",
    email: "",
    country: "",
    city: "",
    birthDate: new Date(),
    gender: "",
    phoneNumber: "",
    title: "",
    planningToMove: false,
  });
  const steps = [
    { requiredFields: ["fullname", "email"] },
    {
      requiredFields: ["country", "city"],
    },
    {
      requiredFields: ["birthDate", "gender", "phoneNumber"],
    },
    {
      requiredFields: ["title"],
    },
  ];

  const isStepValid = () => {
    const requiredFields = steps[signUpNumber].requiredFields;
    return requiredFields.every((fieldName) => signUpData[fieldName]);
  };
  const [signUpNumber, setSignUpNumber] = useState(0);

  const handleClick = () => {
    if (isStepValid()) {
      setSignUpNumber(signUpNumber + 1);
    }
  };

  const prevClick = () => {
    setSignUpNumber(signUpNumber - 1);
  };

  const signUpChoice = (signUpNumber) => {
    switch (signUpNumber) {
      case 0:
        return (
          <Register1 signUpData={signUpData} setSignUpData={setSignUpData} />
        );
      case 1:
        return (
          <Register2 signUpData={signUpData} setSignUpData={setSignUpData} />
        );
      case 2:
        return (
          <Register3 signUpData={signUpData} setSignUpData={setSignUpData} />
        );
      case 3:
        return (
          <Register4 signUpData={signUpData} setSignUpData={setSignUpData} />
        );
      default:
        return (
          <Register1 signUpData={signUpData} setSignUpData={setSignUpData} />
        );
    }
  };

  const formSubmit = () => {
    setUserProfile(true);
  };

  return (
    <>
      {userProfile ? (
        <UserProfileRegister
          userProfileData={userProfileData}
          setUserProfileData={setUserProfileData}
          handleChange={handleChange}
          signUpData={signUpData}
        />
      ) : (
        <div className="register">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          {signUpChoice(signUpNumber)}

          {signUpNumber >= 0 && signUpNumber < 3 && (
            <div className="form-next-button">
              <button
                style={
                  !isStepValid()
                    ? {
                        cursor: "pointer",
                        background: "gray",
                        opacity: 0.6,
                      }
                    : {
                        cursor: "pointer",
                      }
                }
                disabled={!isStepValid()}
                onClick={handleClick}
              >
                Next
              </button>
            </div>
          )}

          {signUpNumber >= 1 && (
            <div className="form-back-button" id="form-back-button">
              <button onClick={prevClick}>Back</button>
            </div>
          )}

          {signUpNumber === 3 && (
            <div className="form-next-button">
              <button
                style={
                  !isStepValid()
                    ? {
                        cursor: "pointer",
                        background: "gray",
                        opacity: 0.6,
                      }
                    : {
                        cursor: "pointer",
                      }
                }
                disabled={!isStepValid()}
                type="button"
                onClick={formSubmit}
              >
                {" "}
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default UserRegister;
