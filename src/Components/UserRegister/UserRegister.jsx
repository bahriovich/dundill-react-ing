import React, { useState } from 'react'
import './UserRegister.css'
import Logo from '../../img/Logo.png'
import Register1 from './UserRegister1/Register1'
import Register2 from './UserRegister2/Register2'
import Register3 from './UserRegister3/Register3'
import Register4 from './UserRegister4/Register4'
import { useMutation } from '@apollo/client';
import { createUser } from '../../graphql/queries'
import Register5 from './UserRegister5/Register5'


function UserRegister() {

    /*
            const { loading, error, data } = useQuery(salary)
    
            if ( loading ) return <p>loading...</p>
            if (error) return <p> error.. </p>
    
            console.log(data)
    
    */



    const [signUpData, setSignUpData] = useState({
        fullname: "",
        email: "",
        country: "",
        city: "",
        birthDate: new Date(), //
        gender: "",
        phoneNumber: "",
        title: ""
    })
    console.log(signUpData)



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
                    <Register1
                        signUpData={signUpData}
                        setSignUpData={setSignUpData}
                    />
                )
            case 1:
                return (
                    <Register2
                        signUpData={signUpData}
                        setSignUpData={setSignUpData}
                    />
                )
            case 2:
                return (
                    <Register3
                        signUpData={signUpData}
                        setSignUpData={setSignUpData}
                    />
                )
            case 3:
                return (
                    <Register4
                        signUpData={signUpData}
                        setSignUpData={setSignUpData}
                    />
                )
            case 4:
                return (
                    <Register5
                        signUpData={signUpData}
                        setSignUpData={setSignUpData}
                    />
                )
            default:
                return (
                    <Register1
                        signUpData={signUpData}
                        setSignUpData={setSignUpData}
                    />
                )
        }
    }

    const [createUsers] = useMutation(createUser, {
        variables: {
            input: {
                fullname: signUpData.fullname,
                email: signUpData.email,
                country: signUpData.country,
                city: signUpData.city,
                birthDate: signUpData.birthDate,
                title: signUpData.title,
                password: "password",
                phoneNumber: signUpData.phoneNumber,
                gender: signUpData.gender  
            }
        }
    })

    const formSubmit = () => {
        console.log(signUpData)
        createUsers({
            variables: signUpData
        })
    }

    return (
        <div className='register'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>

            {(signUpChoice(signUpNumber))}

            {signUpNumber >= 0 && signUpNumber < 3 &&
                <div className='form-next-button'>
                    <button onClick={handleClick}>Next</button>
                </div>
            }

            {signUpNumber >= 1 &&
                <div className='form-back-button' id='form-back-button'>
                    <button onClick={prevClick}>Back</button>
                </div>
            }

            {(signUpNumber === 3) &&
                <div className='form-next-button'>
                    <button type='button' onClick={formSubmit}> <a href='apply/aa'> Next </a> </button> 
                </div>
            }

        </div>
    )
}

export default UserRegister
