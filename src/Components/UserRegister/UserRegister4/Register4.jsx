import React from 'react'


function UserRegister4 ({signUpData, setSignUpData}) {

    const handleChange = (e) => {

        let value = e.target.value
        let name = e.target.name

        setSignUpData ((prev) => {
            let data = { ...prev }
            data[name] = value
            return data
        })
    }



    return (<>
        <div className='left-side'>
            <div className='left-side-content'>
                <h2>give us your profile title ?</h2>
            </div>
        </div>
        <div className='right-side'>
            <div className='right-side-form'>
                <div className='form'>
                    <form action="">
                        <div className="form-group">
                            <label className="form-label">Title </label>
                            <input required="required" className="form-input" type='text' name="title" value={signUpData.title} onChange={(e) => {handleChange(e)}} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default UserRegister4
