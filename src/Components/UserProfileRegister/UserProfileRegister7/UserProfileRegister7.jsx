import React from 'react'
import Select from 'react-select';
import { DatePicker } from 'antd'



const commitment_options = [
    { value: "True", label: "Yes" },
    { value: "False", label: "No" },
]

const availability_options = [
    { value: "FULL_TIME", label: "Full Time" },
    { value: "PART_TIME", label: "Part Time" },
    { value: "CONTRACT", label: "Contract" },
    { value: "REMOTE_ONLY", label: "Remote Only" },
    { value: "ON_SITE_ONLY", label: "On Site Only" },

]



function UserProfileRegister7() {
    return (<>

        <div className='left-side'>
            <div className='left-side-content'>
                <h2>Tell us more...</h2>
            </div>
        </div>
        <div className='right-side'>
            <div className='right-side-form'>
                <div className='form' style={{ "display": "flex", "flex-direction": "column", "align-items": "center", "height": "80vh", "justify-content": "flex-start", "justify-content": "space-around" }}>
                    <form action="">
                        <div className="form-group">
                            <div style={{ "marginBottom": "40px" }}>
                                <label className="form-label">Profile summary</label>
                                <textarea required="required" className='form-input' type='text' name='summary' />
                            </div>
                            <div style={{ "marginBottom": "40px" }}>
                                <label className="form-label">Commitment name</label>
                                <Select options={commitment_options} style={{ width: '130px' }} />
                            </div>
                            <div style={{ "marginBottom": "40px" }}>
                                <label className="form-label">availability name</label>
                                <Select options={availability_options} style={{ width: '130px' }} />
                            </div>
                            <div style={{ "marginBottom": "40px", "display": "flex", "margin-bottom": "40px", "align-items": "flex-start", "flex-direction": "column" }}>
                                <label className="form-label">availability start date</label>
                                <DatePicker style={{ width: '40vw' }} />
                            </div>
                            <div style={{ "marginBottom": "40px" }}>
                                <label className="form-label">link for LinkedIn account</label>
                                <input required="required" className='form-input' type='text' name='degreename' style={{ "width": "40vw" }} />
                            </div>
                            <div style={{ "marginBottom": "40px" }}>
                                <label className="form-label">link for github account</label>
                                <input required="required" className='form-input' type='text' name='degreename' style={{ "width": "40vw" }} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default UserProfileRegister7
