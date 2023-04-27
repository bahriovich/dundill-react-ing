import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'

const UserRegister3 = ({ signUpData, setSignUpData }) => {


    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        console.log(name)

        setSignUpData((prev) => {
            let data = { ...prev }
            data[name] = value
            return data
        })
    }



    const options = [
        { value: "MALE", label: 'male' }, 
        { value: 'FEMALE', label: "female" } 
    ]

    const [value, setValue] = useState('')

      
    const changeHandler = value => {
        setValue(value)
        //    setSignUpData.country = value
        let genderData = value.value
        setSignUpData((prev) => {
            let data = { ...prev }
            data.gender = genderData 
            return data
        })

    }

    // const handleDateSelect = (e) => {
    //     let value = startDate
    //     console.log(value)
    //     // let name = e.target.name


    //     setSignUpData((prev) => {
    //         let data = { ...prev }
    //         data = value
    //         return data
    //     })

    // }




    return (<>
        <div className='left-side'>
            <div className='left-side-content'>
                <h2>Now, Give more information about you</h2>
            </div>
        </div>
        <div className='right-side'>
            <div className='right-side-form'>
                <div className='form'>
                    <form action="">
                        <div className="form-group">
                            <label className="form-label">Birthdate </label>
                            {/* <input required="required" value={signUpData.birthDate} name='birthDate' onChange={(e) => { handleChange(e) }} type='date' id="myDateInput" className="form-input" /> */}
                            {/* <DatePicker className="form-input" selected={new Date(startDate)} onChange={(date) => setStartDate(date.toISOString ())} /> */}
                            <DatePicker name="birthDate" className="form-input" selected={new Date(signUpData?.birthDate)} onChange={(date) => setSignUpData((prev)=> {
                                let data = {...prev}
                                data.birthDate = new Date(date).toISOString()
                                return data
                            })} dateFormat="dd/MM/yyyy"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Gender </label>
                            <Select className='form-input' required="required" name="gender" value={value} options={options} onChange={changeHandler} />
                            {/* <select value={signUpData.gender} required="required" name="gender" className='form-input' onChange={(e) => { handleChange(e) }}>
                                <option value={"male"} >Male</option>
                                <option value={"female"} >Female</option>
                            </select> */}
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phone Number </label>
                            <input required="required" className="form-input" name="phoneNumber" value={signUpData.phoneNumber} onChange={(e) => { handleChange(e) }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default UserRegister3
