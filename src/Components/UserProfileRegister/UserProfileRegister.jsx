import React, { useState } from "react";
import Logo from "../../img/Logo.png";
import UserProfileRegister1 from "./UserProfileRegister1/UserProfileRegister1";
import { useMutation } from "@apollo/client";
import { updateUserProfile } from "../../graphql/queries";
import UserProfileRegister2 from "./UserProfileRegister2/UserProfileRegister2";
import UserProfileRegister3 from "./UserProfileRegister3/UserProfileRegister3";
import UserProfileRegister4 from "./UserProfileRegister4/UserProfileRegister4";
import UserProfileRegister5 from "./UserProfileRegister5/UserProfileRegister5";
import UserProfileRegister6 from "./UserProfileRegister6/UserProfileRegister6";
import UserProfileRegister7 from "./UserProfileRegister7/UserProfileRegister7";

function UserProfileRegister() {
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
        startDate: "",
        endDate: "",
      },
    ],
    professionalExperienceData: [
      {
        companyName: "",
        startDate: new Date(),
        endDate: new Date(),
        stillWorking: "",
        title: "",
        description: "",
        duration: "",
      },
    ],
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

  const [signUpNumber, setSignUpNumber] = useState(0);

  const handleClick = () => {
    setSignUpNumber(signUpNumber + 1);
  };

  const prevClick = () => {
    setSignUpNumber(signUpNumber - 1);
  };

  const signUpChoice = (signUpNumber) => {
    switch (signUpNumber) {
      case 0:
        return (
          <UserProfileRegister1
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
          />
        );
      case 1:
        return (
          <UserProfileRegister2
            handleChange={handleChange}
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
          />
        );
      case 2:
        return (
          <UserProfileRegister3
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <UserProfileRegister4
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
          />
        );
      case 4:
        return (
          <UserProfileRegister5
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
          />
        );
      case 5:
        return <UserProfileRegister6 />;
      case 6:
        return <UserProfileRegister7 />;
      default:
        return <UserProfileRegister1 />;
    }
  };

  // const [createUsers] = useMutation(updateUserProfile, {
  //     variables: {
  //         input: {
  //             role: signUpProfileData.role,
  //             techStack: signUpProfileData.techStack

  //         }
  //     }
  // })

  const formSubmit = () => {
    console.log(userProfileData);
    // createUsers({
    //     variables: signUpProfileData
    // })
  };

  return (
    <>
      <div className="register">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        {signUpChoice(signUpNumber)}

        {signUpNumber >= 0 && signUpNumber < 6 && (
          <div className="form-next-button">
            <button onClick={handleClick}>Next</button>
          </div>
        )}

        {signUpNumber >= 1 && (
          <div className="form-back-button" id="form-back-button">
            <button onClick={prevClick}>Back</button>
          </div>
        )}

        {/* {(signUpNumber === 3) &&
                <div className='form-next-button'>
                    <button type='button' onClick={formSubmit}> <a href=''> Next </a> </button>
                </div>
            } */}
      </div>
    </>
  );
}

export default UserProfileRegister;
