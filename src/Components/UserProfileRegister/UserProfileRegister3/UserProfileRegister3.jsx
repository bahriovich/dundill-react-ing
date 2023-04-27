import { Select } from 'antd'
import React from 'react'
import './UserProfileRegister3.css'
import { useState } from 'react'

function UserProfileRegister3({ selectedValue, signUpProfileData, setSignUpProfileData, setSeletedproficiencyLevelNameValue,signUpSkillData, setSignUpSkillData, selectedproficiencyLevelNameValue }) {

    const options = [
        { value: "AWARE", label: 'aware' },
        { value: "EXPERIENCED", label: 'experienced' },
        { value: "PROFESSIONAL", label: 'professional' },
        { value: "EXPERT", label: 'expert' }
    ]


    const handleChange = (e,index) => {
        let value = e.target.value
        let name = e.target.name


        setSignUpProfileData((prev) => {
            let data = {...prev}
            let array = [...data.techStack]
            array[index][name] = value
           
            return data
        })
    } 

    const handleChangeSelect = (val,index)=> {
        setSignUpProfileData((prev) => {
            let data = {...prev}
            let array = [...data.techStack]
            array[index]["proficiencyLevelName"] = val
            return data
        })
    }
    return (<>
        <div className='left-side'>
            <div className='left-side-content' style={{ width : '80%'}}>
                <h2>Can you tell us more about your skills?</h2>
            </div>
        </div>
        <div className='right-side'>
            <div className='right-side-form'>
                <div className='form'>
                    <form action="">
                        <div className="form-group">
                            {signUpProfileData.techStack.map((elem, index) => (
                                <div className='skill'>
                                    <div className='skillnameskillimage'>
                                        <img src={elem.image_url} alt=""  height={25} width={25}/>  
                                        <span> {elem.name} </span> 
                                    </div>
                                    <div className='years_and_preficiency'>
                                        <input type="text" name="practicalPeriod" value={elem?.practicalPeriod} onChange={(e)=> handleChange(e,index)} style={{ "border-radius": "5px" ,  'height': '27px'}} /><span>years</span>
                                        <Select onChange={(val)=> handleChangeSelect(val,index)} options={options} name="proficiencyLevelName" style={{width: '130px'}} defaultValue={"aware"}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default UserProfileRegister3
