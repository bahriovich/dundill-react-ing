import React, { useCallback, useEffect, useState } from "react";
import Logo from "../../img/Logo.png";
import UserProfileRegister1 from "./UserProfileRegister1/UserProfileRegister1";

import UserProfileRegister2 from "./UserProfileRegister2/UserProfileRegister2";
import UserProfileRegister3 from "./UserProfileRegister3/UserProfileRegister3";
import UserProfileRegister4 from "./UserProfileRegister4/UserProfileRegister4";
import UserProfileRegister5 from "./UserProfileRegister5/UserProfileRegister5";
import UserProfileRegister6 from "./UserProfileRegister6/UserProfileRegister6";
import UserProfileRegister7 from "./UserProfileRegister7/UserProfileRegister7";
import { useMutation } from "@apollo/client";
import {
  CREATE_CERTIFICATION,
  CREATE_EDUCATION,
  CREATE_PROFESSIONAL_EXPERIENCE,
  CREATE_SKILL,
  CREATE_USER,
  CREATE_USER_PROFILE,
} from "../../graphql/queries";

function UserProfileRegister({
  userProfileData,
  setUserProfileData,
  handleChange,
  signUpData,
}) {
  const [submitted, setSubmitted] = useState(false);
  const [signUpNumber, setSignUpNumber] = useState(0);
  //// steps validations

  function mergeToArr(arr, objectName, fieldName) {
    let res = [];
    arr.map((el, index) => res.push(`${objectName}[${index}].${fieldName}`));
    return res;
  }

  const userProfilesteps = [
    {
      step: 0,
      requiredFields: ["signUpProfileData.role"],
    },
    {
      step: 1,
      requiredFields: ["signUpProfileData.techStack[0].id"],
    },
    {
      step: 2,
      requiredFields: [
        ...mergeToArr(
          userProfileData.signUpProfileData.techStack,
          "signUpProfileData.techStack",
          "practicalPeriod"
        ),
        ...mergeToArr(
          userProfileData.signUpProfileData.techStack,
          "signUpProfileData.techStack",
          "proficiencyLevelName"
        ),
      ],
    },
    {
      step: 3,
      requiredFields: [
        ...mergeToArr(
          userProfileData.professionalExperienceData,
          "professionalExperienceData",
          "companyName"
        ),
        ...mergeToArr(
          userProfileData.professionalExperienceData,
          "professionalExperienceData",
          "title"
        ),
        ...mergeToArr(
          userProfileData.professionalExperienceData,
          "professionalExperienceData",
          "startDate"
        ),
      ],
    },
    {
      step: 4,
      requiredFields: [
        ...mergeToArr(
          userProfileData.educationData,
          "educationData",
          "degreeName"
        ),
        ...mergeToArr(
          userProfileData.educationData,
          "educationData",
          "fieldOfStudy"
        ),
        ...mergeToArr(userProfileData.educationData, "educationData", "school"),
        ...mergeToArr(
          userProfileData.educationData,
          "educationData",
          "startDate"
        ),
      ],
    },

    {
      step: 5,
      requiredFields: [
        ...mergeToArr(
          userProfileData.certifications,
          "certifications",
          "certificationName"
        ),
        ...mergeToArr(
          userProfileData.certifications,
          "certifications",
          "certificationDate"
        ),
        ...mergeToArr(
          userProfileData.certifications,
          "certifications",
          "certificationDescription"
        ),
      ],
    },
    {
      step: 6,
      requiredFields: [
        "profileSummary.profile",
        "profileSummary.commitment",
        "profileSummary.availability",
        "profileSummary.availabilityDate",
        "profileSummary.linkedInUrl",
      ],
    },
  ];

  const [fieldErrors, setFieldErrors] = useState({});

  const isUserProfileStepValid = useCallback(() => {
    const step = userProfilesteps.find((step) => step.step === signUpNumber);
    if (!step) {
      return {}; // Step not found, consider it valid
    }

    const requiredFields = step.requiredFields;
    const errors = {};

    requiredFields.forEach((fieldName) => {
      const error = isFieldValid(userProfileData, fieldName);
      if (error) {
        errors[fieldName] = error;
      }
    });

    return errors;
  }, [userProfileData, signUpNumber]);

  const isFieldValid = (data, fieldName) => {
    const fieldValue = getFieldByPath(data, fieldName);

    if (fieldValue === null || fieldValue === undefined || fieldValue === "") {
      return "This field is required.";
    }

    // Validate start and end dates
    if (fieldName.includes("startDate") || fieldName.includes("endDate")) {
      const nestedFields = fieldName.split(".");
      const startDate = getFieldByPath(
        data,
        nestedFields.slice(0, -1).concat("startDate").join(".")
      );
      const endDate = getFieldByPath(
        data,
        nestedFields.slice(0, -1).concat("endDate").join(".")
      );

      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (start >= end) {
          return "Start date must be earlier than end date.";
        }
      }
    }

    return null;
  };

  const getFieldByPath = (data, path) => {
    const nestedFields = path.split(".");
    let fieldValue = data;

    for (let i = 0; i < nestedFields.length; i++) {
      const field = nestedFields[i];

      if (field.includes("[") && field.includes("]")) {
        const arrayFieldName = field.substring(0, field.indexOf("["));
        const arrayIndex = parseInt(
          field.substring(field.indexOf("[") + 1, field.indexOf("]")),
          10
        );

        fieldValue = fieldValue[arrayFieldName];

        if (
          !fieldValue ||
          !Array.isArray(fieldValue) ||
          fieldValue.length <= arrayIndex
        ) {
          return null;
        }

        fieldValue = fieldValue[arrayIndex];
      } else {
        if (
          !fieldValue ||
          fieldValue[field] === undefined ||
          fieldValue[field] === ""
        ) {
          return null;
        }

        fieldValue = fieldValue[field];
      }
    }

    return fieldValue;
  };
  useEffect(() => {
    const errors = isUserProfileStepValid();
    setFieldErrors(errors);
  }, [userProfileData, signUpNumber]);

  const handleClick = () => {
    setSignUpNumber(signUpNumber + 1);
  };

  const prevClick = () => {
    setSubmitted(false);
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
            fieldErrors={fieldErrors}
          />
        );
      case 1:
        return (
          <UserProfileRegister2
            handleChange={handleChange}
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            fieldErrors={fieldErrors}
          />
        );
      case 2:
        return (
          <UserProfileRegister3
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
            fieldErrors={fieldErrors}
          />
        );
      case 3:
        return (
          <UserProfileRegister4
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
            fieldErrors={fieldErrors}
          />
        );
      case 4:
        return (
          <UserProfileRegister5
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
            fieldErrors={fieldErrors}
          />
        );
      case 5:
        return (
          <UserProfileRegister6
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
            fieldErrors={fieldErrors}
          />
        );
      case 6:
        return (
          <UserProfileRegister7
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
            submitted={submitted}
            fieldErrors={fieldErrors}
          />
        );
      default:
        return (
          <UserProfileRegister1
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
            fieldErrors={fieldErrors}
          />
        );
    }
  };
  const hasElements = (obj) => {
    return Object.keys(obj).length > 0;
  };
  //setSubmitted(true);
  ///mutations
  const [createUserProfile] = useMutation(CREATE_USER_PROFILE);
  const [createProfessionalExperience] = useMutation(
    CREATE_PROFESSIONAL_EXPERIENCE
  );
  const [createEducation] = useMutation(CREATE_EDUCATION);
  const [createCertification] = useMutation(CREATE_CERTIFICATION);
  const [createSkill] = useMutation(CREATE_SKILL);
  const [createUser] = useMutation(CREATE_USER);

  const handleSignUp = async () => {
    try {
      const userData = await createUser({
        variables: {
          input: {
            fullname: signUpData.fullname,
            email: signUpData.email,
            password: "dundill2023",
            birthDate: signUpData.birthDate,
            phoneNumber: signUpData.phoneNumber,
            title: signUpData.title,
            gender: signUpData.gender,
            country: signUpData.country,
            city: signUpData.city,
          },
        },
      });
      const profileData = await createUserProfile({
        variables: {
          input: {
            userId: userData.data.createUser._id,
            role: userProfileData.signUpProfileData.role
              .toUpperCase()
              .trim()
              .replace(/ /g, "_"),
            summary: userProfileData.profileSummary.profile,
            commitment: userProfileData.profileSummary.commitment,
            availabilityName:
              userProfileData.profileSummary.availability.toUpperCase(),
            availabilityStartDate:
              userProfileData.profileSummary.availabilityDate,
            linkedinLink: userProfileData.profileSummary.linkedInUrl,
            githubLink: userProfileData.profileSummary.githubUrl,
          },
        },
      });
      for (let prof_Exp of userProfileData.professionalExperienceData) {
        await createProfessionalExperience({
          variables: {
            input: {
              userId: profileData.data.createUserProfile.userId,
              userProfileId: profileData.data.createUserProfile._id,
              company: prof_Exp.companyName,
              startDate: prof_Exp.startDate,
              endDate: prof_Exp.stillWorking ? undefined : prof_Exp.endDate,
              stillWorking: prof_Exp.stillWorking,
              title: prof_Exp.title,
              description: prof_Exp.description,
            },
          },
        });
      }
      for (let edu of userProfileData.educationData) {
        await createEducation({
          variables: {
            input: {
              userId: profileData.data.createUserProfile.userId,
              userProfileId: profileData.data.createUserProfile._id,
              degreeName: edu.degreeName,
              fieldOfStudy: edu.fieldOfStudy,
              school: edu.school,
              startDate: edu.startDate,
              endDate: edu.endDate,
            },
          },
        });
      }
      for (let certi of userProfileData.certifications) {
        await createCertification({
          variables: {
            input: {
              userId: profileData.data.createUserProfile.userId,
              userProfileId: profileData.data.createUserProfile._id,
              title: certi.certificationName,
              description: certi.certificationDescription,
              link: certi.certificationLink,
              dateOfObtention: certi.certificationDate,
              doesItExpire: certi.doesItExpire,
              expirationDate: certi.doesItExpire ? certi.expDate : undefined,
            },
          },
        });
      }
      for (let skill of userProfileData.signUpProfileData.techStack) {
        await createSkill({
          variables: {
            input: {
              userId: profileData.data.createUserProfile.userId,
              userProfileId: profileData.data.createUserProfile._id,
              name: skill.name,
              practicalPeriod: skill.practicalPeriod,
              proficiencyLevelName:
                skill.proficiencyLevelName === ""
                  ? "AWARE"
                  : skill.proficiencyLevelName,
              image: skill.image_url,
              releaseYear: skill.release_year.toString(),
            },
          },
        });
      }
      console.log("done");
    } catch (error) {
      console.error(error);
    }
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
            <button
              style={
                hasElements(fieldErrors)
                  ? {
                      cursor: "pointer",
                      background: "gray",
                      opacity: 0.6,
                    }
                  : {
                      cursor: "pointer",
                    }
              }
              disabled={hasElements(fieldErrors)}
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        )}

        {signUpNumber >= 1 && (
          <div className="form-back-button" id="form-back-button">
            <button style={{ cursor: "pointer" }} onClick={prevClick}>
              Back
            </button>
          </div>
        )}

        {signUpNumber === 6 && (
          <div className="form-next-button">
            <button
              style={
                hasElements(fieldErrors)
                  ? {
                      cursor: "pointer",
                      background: "gray",
                      opacity: 0.6,
                    }
                  : {
                      cursor: "pointer",
                    }
              }
              disabled={hasElements(fieldErrors)}
              type="button"
              onClick={handleSignUp}
            >
              {" "}
              Done{" "}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default UserProfileRegister;
