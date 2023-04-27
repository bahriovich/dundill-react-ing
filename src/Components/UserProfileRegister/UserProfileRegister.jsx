import React, { useState } from 'react'
import Logo from '../../img/Logo.png'
import UserProfileRegister1 from './UserProfileRegister1/UserProfileRegister1'
import { useMutation } from '@apollo/client';
import { updateUserProfile } from '../../graphql/queries';
import UserProfileRegister2 from './UserProfileRegister2/UserProfileRegister2';
import UserProfileRegister3 from './UserProfileRegister3/UserProfileRegister3';
import UserProfileRegister4 from './UserProfileRegister4/UserProfileRegister4';
import UserProfileRegister5 from './UserProfileRegister5/UserProfileRegister5';
import UserProfileRegister6 from './UserProfileRegister6/UserProfileRegister6';
import UserProfileRegister7 from './UserProfileRegister7/UserProfileRegister7';


function UserProfileRegister() {


    const [role, setRole] = useState("")
    const [selectedValue, setSelectedValue] = useState([])
    const [professionalExperienceData, setProfessionalExperienceData] = useState([{
        companyName : "",
        startDate :  new Date(),
        endDate :  new Date(),
        stillWorking : "",
        title : "",
        description : "",
        duration : ""
    }])
    console.log(professionalExperienceData)


    const [educationData, setEducationData] = useState([{
        degreeName: "",
        fieldOfStudy: "",
        school: "",
        startDate: "",
        endDate: ""
    }])


    const [signUpProfileData, setSignUpProfileData] = useState({
        role: "",
        techStack: [],
        professionalExperience: [],
        
            // {practicalPeriod: [{}]},
            // {proficiencyLevelName: ""}
        
    })
    console.log(signUpProfileData)

 


    const [signUpNumber, setSignUpNumber] = useState(0);

    const handleClick = () => {
        setSignUpNumber(signUpNumber + 1);
    }

    const prevClick = () => {
        setSignUpNumber(signUpNumber - 1);
    }

    const signUpChoice = (signUpNumber) => {
        switch (signUpNumber) {
            case 0:
                return (
                    <UserProfileRegister1
                        setRole={setRole}
                        signUpProfileData={signUpProfileData}
                        setSignUpProfileData={setSignUpProfileData}
                    />
                )
            case 1:
                return (
                    <UserProfileRegister2
                        // role={role}
                        signUpProfileData={signUpProfileData}
                        setSignUpProfileData={setSignUpProfileData}
                        selectedValue={selectedValue}
                        setSelectedValue={setSelectedValue}
                    />
                )
            case 2:
                return (
                    <UserProfileRegister3
                        selectedValue={selectedValue}
                        // signUpSkillData={signUpSkillData}
                        // setSignUpSkillData={setSignUpSkillData}
                        signUpProfileData={signUpProfileData}
                        setSignUpProfileData={setSignUpProfileData}
                        // selectedproficiencyLevelNameValue={selectedproficiencyLevelNameValue}
                        // setSeletedproficiencyLevelNameValue={setSeletedproficiencyLevelNameValue}

                    />
                )
            case 3:
                return (
                    <UserProfileRegister4 
                        signUpProfileData={signUpProfileData}
                        setSignUpProfileData={setSignUpProfileData}
                        professionalExperienceData={professionalExperienceData}
                        setProfessionalExperienceData={setProfessionalExperienceData}
                    
                    />
                )
            case 4:
                return (
                    <UserProfileRegister5 
                        signUpProfileData={signUpProfileData}
                        setSignUpProfileData={setSignUpProfileData}
                        educationData= {educationData}
                        setEducationData= {setEducationData}
                    />
                )
            case 5:
                return(
                    <UserProfileRegister6 />
                )    
            case 6:
                return(
                    <UserProfileRegister7 />
                )    
            default:
                return (
                    <UserProfileRegister1
                    // signUpData={signUpData}
                    // setSignUpData={setSignUpData}
                    />
                )
        }
    }

    const [createUsers] = useMutation(updateUserProfile, {
        variables: {
            input: {
                role: signUpProfileData.role,
                techStack: signUpProfileData.techStack

            }
        }
    })

    const formSubmit = () => {
        console.log(signUpProfileData)
        createUsers({
            variables: signUpProfileData
        })
    }


    return (<>

        <div className='register'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>

            {(signUpChoice(signUpNumber))}

            {signUpNumber >= 0 && signUpNumber < 6 &&
                <div className='form-next-button'>
                    <button onClick={handleClick}>Next</button>
                </div>
            }

            {signUpNumber >= 1 &&
                <div className='form-back-button' id='form-back-button'>
                    <button onClick={prevClick}>Back</button>
                </div>
            }

            {/* {(signUpNumber === 3) &&
                <div className='form-next-button'>
                    <button type='button' onClick={formSubmit}> <a href=''> Next </a> </button>
                </div>
            } */}

        </div>

    </>)
}

export default UserProfileRegister
