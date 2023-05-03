import React, { useState } from "react";
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
        return (
          <UserProfileRegister6
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
          />
        );
      case 6:
        return (
          <UserProfileRegister7
            userProfileData={userProfileData}
            setUserProfileData={setUserProfileData}
            handleChange={handleChange}
            submitted={submitted}
          />
        );
      default:
        return <UserProfileRegister1 />;
    }
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
  // const [createUser] = useMutation(CREATE_USER, {
  //   variables: {
  //     input: {
  //       fullname: signUpData.fullname,
  //       email: signUpData.email,
  //       password: "dundill2023",
  //       birthDate: signUpData.birthDate,
  //       phoneNumber: signUpData.phoneNumber,
  //       title: signUpData.title,
  //       gender: signUpData.gender,
  //       country: signUpData.country,
  //       city: signUpData.city,
  //     },
  //   },
  //   onCompleted: (data) => {
  //     createUserProfile({
  //       variables: {
  //         input: {
  //           userId: data.createUser._id,
  //           role: userProfileData.signUpProfileData.role.toUpperCase(),
  //           summary: userProfileData.profileSummary.profile,
  //           commitment: userProfileData.profileSummary.commitment,
  //           availabilityName:
  //             userProfileData.profileSummary.availability.toUpperCase(),
  //           availabilityStartDate:
  //             userProfileData.profileSummary.availabilityDate,
  //           linkedinLink: userProfileData.profileSummary.linkedInUrl,
  //           githubLink: userProfileData.profileSummary.githubUrl,
  //         },
  //       },
  //       onCompleted: (profileData) => {
  //         for (let prof_Exp of userProfileData.professionalExperienceData) {
  //           createProfessionalExperience({
  //             variables: {
  //               input: {
  //                 userId: profileData.createUserProfile.userId,
  //                 userProfileId: profileData.createUserProfile._id,
  //                 company: prof_Exp.companyName,
  //                 startDate: prof_Exp.startDate,
  //                 endDate: prof_Exp.stillWorking ? undefined : prof_Exp.endDate,
  //                 stillWorking: prof_Exp.stillWorking,
  //                 title: prof_Exp.title,
  //                 description: prof_Exp.description,
  //               },
  //             },
  //             onCompleted: () => {
  //               for (let edu of userProfileData.educationData) {
  //                 createEducation({
  //                   variables: {
  //                     input: {
  //                       userId: profileData.createUserProfile.userId,
  //                       userProfileId: profileData.createUserProfile._id,
  //                       degreeName: edu.degreeName,
  //                       fieldOfStudy: edu.fieldOfStudy,
  //                       school: edu.school,
  //                       startDate: edu.startDate,
  //                       endDate: edu.endDate,
  //                     },
  //                   },
  //                   onCompleted: () => {
  //                     for (let certi of userProfileData.certifications) {
  //                       createCertification({
  //                         variables: {
  //                           input: {
  //                             userId: profileData.createUserProfile.userId,
  //                             userProfileId: profileData.createUserProfile._id,
  //                             title: certi.certificationName,
  //                             description: certi.certificationDescription,
  //                             link: certi.certificationLink,
  //                             dateOfObtention: certi.certificationDate,
  //                             doesItExpire: certi.doesItExpire,
  //                             expirationDate: certi.doesItExpire
  //                               ? certi.expDate
  //                               : undefined,
  //                           },
  //                         },
  //                         onCompleted: () => {
  //                           for (let skill of userProfileData.signUpProfileData
  //                             .techStack) {
  //                             createSkill({
  //                               variables: {
  //                                 input: {
  //                                   userId:
  //                                     profileData.createUserProfile.userId,
  //                                   userProfileId:
  //                                     profileData.createUserProfile._id,
  //                                   name: skill.name,
  //                                   practicalPeriod: skill.practicalPeriod,

  //                                   proficiencyLevelName:
  //                                     skill.proficiencyLevelName === ""
  //                                       ? "AWARE"
  //                                       : skill.proficiencyLevelName,
  //                                   image: skill.image_url,
  //                                   releaseYear: skill.release_year.toString(),
  //                                 },
  //                               },
  //                               onCompleted: () => {
  //                                 console.log("done");
  //                               },
  //                             });
  //                           }
  //                         },
  //                       });
  //                     }
  //                   },
  //                 });
  //               }
  //             },
  //           });
  //         }
  //       },
  //     });
  //   },
  // });

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
            role: userProfileData.signUpProfileData.role.toUpperCase(),
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
            <button style={{ cursor: "pointer" }} onClick={handleClick}>
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
              style={{ cursor: "pointer" }}
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
