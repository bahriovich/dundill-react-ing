import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";

const commitment_options = [
  { value: "High", label: "I'm fully committed" },
  { value: "Medium", label: "I'm somewhat committed" },
  { value: "Low", label: "I'm not very committed" },
];

const availability_options = [
  { value: "FULL_TIME", label: "Full Time" },
  { value: "PART_TIME", label: "Part Time" },
  { value: "CONTRACT", label: "Contract" },
  { value: "REMOTE_ONLY", label: "Remote Only" },
  { value: "ON_SITE_ONLY", label: "On Site Only" },
];

function UserProfileRegister7({
  userProfileData,
  setUserProfileData,
  handleChange,
}) {
  function handleDataChange(e, name, value) {
    console.log(value);
    const newValue = value ? value : e.target.value;
    setUserProfileData((prev) => {
      let data = { ...prev };
      data.profileSummary[name] = newValue;

      return data;
    });
  }
  console.log(userProfileData);
  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <h2>let's Summarize</h2>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-form">
          <div
            className="form"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              justifyContent: "flex-start",
            }}
          >
            <form action="">
              <div>
                <div style={{ marginBottom: "20px", marginTop: 40 }}>
                  <label className="form-label">Profile summary</label>
                  <textarea
                    rows={5}
                    required="required"
                    className="form-input"
                    type="text"
                    name="summary"
                    onChange={(e) => handleDataChange(e, "profile", null)}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label className="form-label">Commitment name</label>
                  <Select
                    onChange={(val) =>
                      handleDataChange(null, "commitment", val.value)
                    }
                    options={commitment_options}
                    style={{ width: "130px" }}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label className="form-label">availability name</label>
                  <Select
                    onChange={(val) =>
                      handleDataChange(null, "availability", val.value)
                    }
                    options={availability_options}
                    style={{ width: "130px" }}
                  />
                </div>
                <div
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    "margin-bottom": "40px",
                    "align-items": "flex-start",
                    "flex-direction": "column",
                  }}
                >
                  <label className="form-label">availability start date</label>
                  <DatePicker
                    className="form-input"
                    name="certificationDate"
                    onChange={(date) =>
                      handleChange(
                        null,
                        "profileSummary",
                        null,
                        "availabilityDate",
                        date.toISOString()
                      )
                    }
                    selected={
                      new Date(userProfileData.profileSummary.availabilityDate)
                    }
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label className="form-label">
                    link for LinkedIn account
                  </label>
                  <input
                    onChange={(e) => handleDataChange(e, "linkedInUrl", null)}
                    className="form-input"
                    type="text"
                    name="degreename"
                    style={{ width: "40vw" }}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label className="form-label">link for github account</label>
                  <input
                    onChange={(e) => handleDataChange(e, "githubUrl", null)}
                    className="form-input"
                    type="text"
                    name="degreename"
                    style={{ width: "40vw" }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileRegister7;
