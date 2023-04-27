import React, { useState, useMemo } from 'react'
import './Register2.css'
// import ReactFlagsSelect from "react-flags-select";
// import CountryDropdown from 'country-dropdown-with-flags-for-react'; 
import Select from 'react-select'
import countryList from 'react-select-country-list'



function UserRegister2({ signUpData, setSignUpData }) {

    // const [selected, setSelected] = UseState("");


    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
        setValue(value)
        //    setSignUpData.country = value
        let countryData = value.label
        setSignUpData((prev) => {
            let data = { ...prev }
            data.country = countryData 
            return data
        })

    }

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name

        setSignUpData((prev) => {
            let data = { ...prev }
            data[name] = value 
            return data
        })

    }


    return (<>

        <div className='left-side'>
            <div className='left-side-content'>
                <h2>Where are you currently based?</h2>
            </div>
        </div>
        <div className='right-side'>
            <div class="user-badge-desktop">
                <div class="username-avatar">
                    <p> {signUpData.fullname.charAt(0).toUpperCase()} </p>
                </div>
                <p class="user-name">
                    Hi {signUpData.fullname} 👋
                </p>
            </div>
            <div className='right-side-form'>
                <div className='form'>
                    <form action="">
                        <div className="form-group">
                            {/* <input required="required" className="form-control" name="country" value={signUpData.country} onChange={(e) => handleChange(e)} /> */}
                            <label className="form-label">Country </label>
                            {/* <CountryDropdown  style={{border: "none"}} id="UNIQUE_ID" className='YOUR_CSS_CLASS ' preferredCountries={['tn', 'us']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown> */}
                            <Select options={options} value={value} onChange={changeHandler}  name="country" /> {/* value={value} onChange={changeHandler} value={signUpData.country } onChange={(e) => handleChange(e)} */}
                        </div>
                        <div className="form-group">
                            <label className="form-label">City </label>
                            <input required="required" className="form-input" name="city" value={signUpData.city} onChange={(e) => handleChange(e)} />
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label class="form-check-label" for="flexCheckDefault">
                                I am planning to move to a different timezone within the next 6 months
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>)
}

export default UserRegister2
