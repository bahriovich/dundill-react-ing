import React from 'react'

function UserRegister5({signUpData, setSignUpData}) {
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
                            <input required="required" className="form-input" type='text' name="title" value={signUpData.title}  />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default UserRegister5
