import React, { useState } from 'react'
// import Select from 'react-select'
import { Radio } from 'antd';

import './UserProfileRegister1.css'

function UserProfileRegister1({ signUpProfileData, setSignUpProfileData,setRole }) {

    const options = [
        { value: "FRONTEND", label: 'frontend' },
        { value: 'BACKEND', label: "backend" },
        { value: 'MOBILE', label: "mobile" },
        { value: 'DESIGN', label: "ui/ux" },
        { value: 'QA', label: "QA" },
        { value: 'DEVOPS', label: "devops" },
        { value: 'DATA SCIENCE', label: "data science" },
        { value: 'DATA ENGINEERING', label: "data engineering" },
        { value: 'MACHINE LEARNING', label: "machine learning" },
        { value: 'GAME DEVELOPMENT', label: "game Development" },
        { value: 'FULLSTACK(BE-heavy)', label: "FULLSTACK(BE-heavy)" },
        { value: 'FULLSTACK(FE-heavy)', label: "FULLSTACK(FE-heavy)" },
        { value: 'FULLSTACK', label: "FULLSTACK" },
    ]

    const [value, setValue] = useState('')
    console.log(signUpProfileData.role)



    const handleChange = e => {
        
        let roleData = e.target.value

        setSignUpProfileData((prev) => {
            let data = { ...prev }
            data.role = roleData 
            return data
        })
    }
 


    return (<>
        <div className='left-side'>
            <div className='left-side-content'>
                <h2>What's your role ?</h2>
            </div>
        </div>
        <div className='right-side'>
            <div className='right-side-form'>
                <div className='form'>
                    <form action="">
                        <div className="form-group">
                            <label className="form-label">Role </label>
                            <Radio.Group defaultValue="a" size="large">
                               {/* {options.map((elem,index)=> (
                                <div key={index}>
                                    <Radio.Button onChange={(e)=> {
                                        setRole(e.target.value === "FULLSTACK(BE-heavy)" || e.target.value === "FULLSTACK(FE-heavy)" ? "FULLSTACK":e.target.value)
                                    }} value={elem.value} className='radio-button'>{elem.label}</Radio.Button>
                                </div>
                               ))} */}
                               {options.map((elem,index)=> (
                                <div key={index}>
                                    <Radio.Button onChange={handleChange} value={elem.value} className='radio-button'>{elem.label}</Radio.Button>
                                </div>
                               ))}
                            </Radio.Group>
                            {/* <Select options={options} value={value} onChange={changeHandler}  name="role" /> */}

                            {/* <input required="required" className="form-input" type='text' name="title"  />  value={signUpProfileData.title} */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default UserProfileRegister1
