import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { Steps } from "antd";

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
  submitted,
  fieldErrors,
}) {
  function handleDataChange(e, name, value) {
    const newValue = value ? value : e.target.value;
    setUserProfileData((prev) => {
      let data = { ...prev };
      data.profileSummary[name] = newValue;

      return data;
    });
  }
  console.log(fieldErrors);
  const description = "This is a description.";
  return (
    <>
      {submitted ? (
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
                <Steps
                  direction="vertical"
                  current={1}
                  items={[
                    {
                      title: "Finished",
                      description,
                    },
                    {
                      title: "In Progress",
                      description,
                    },
                    {
                      title: "Waiting",
                      description,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
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
                    <div style={{ marginBottom: "20px" }}>
                      <label
                        style={
                          fieldErrors[`profileSummary.commitment`] && {
                            color: "red",
                          }
                        }
                        className="form-label"
                      >
                        Commitment
                      </label>

                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor:
                              fieldErrors[`profileSummary.commitment`] && "red",
                          }),
                        }}
                        onChange={(val) =>
                          handleDataChange(null, "commitment", val.value)
                        }
                        options={commitment_options}
                      />

                      {fieldErrors[`profileSummary.commitment`] && (
                        <span style={{ color: "red" }}>
                          {fieldErrors[`profileSummary.commitment`]}
                        </span>
                      )}
                    </div>
                    <div style={{ marginBottom: "20px", marginTop: 40 }}>
                      <label
                        style={
                          fieldErrors[`profileSummary.profile`] && {
                            color: "red",
                          }
                        }
                        className="form-label"
                      >
                        Summary
                      </label>
                      <textarea
                        style={
                          fieldErrors[`profileSummary.profile`] && {
                            backgroundImage:
                              "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                          }
                        }
                        rows={3}
                        className="form-input"
                        type="text"
                        name="summary"
                        onChange={(e) => handleDataChange(e, "profile", null)}
                      />
                      {fieldErrors[`profileSummary.profile`] && (
                        <span style={{ color: "red" }}>
                          {fieldErrors[`profileSummary.profile`]}
                        </span>
                      )}
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label
                        style={
                          fieldErrors[`profileSummary.availability`] && {
                            color: "red",
                          }
                        }
                        className="form-label"
                      >
                        Availability
                      </label>
                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor:
                              fieldErrors[`profileSummary.availability`] &&
                              "red",
                          }),
                        }}
                        onChange={(val) =>
                          handleDataChange(null, "availability", val.value)
                        }
                        options={availability_options}
                      />
                      {fieldErrors[`profileSummary.availability`] && (
                        <span style={{ color: "red" }}>
                          {fieldErrors[`profileSummary.availability`]}
                        </span>
                      )}
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
                      <label
                        style={
                          fieldErrors[`profileSummary.availabilityDate`] && {
                            color: "red",
                          }
                        }
                        className="form-label"
                      >
                        Availability start date
                      </label>
                      <DatePicker
                        className={
                          fieldErrors[`profileSummary.availabilityDate`]
                            ? "form-input-err"
                            : "form-input"
                        }
                        name="certificationDate"
                        onChange={(date) =>
                          handleChange(
                            null,
                            "profileSummary",
                            null,
                            "availabilityDate",
                            date && date?.toISOString()
                          )
                        }
                        selected={
                          new Date(
                            userProfileData?.profileSummary?.availabilityDate
                          )
                        }
                        dateFormat="dd/MM/yyyy"
                      />
                      {fieldErrors[`profileSummary.availabilityDate`] && (
                        <span style={{ color: "red" }}>
                          {fieldErrors[`profileSummary.availabilityDate`]}
                        </span>
                      )}
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label
                        style={
                          fieldErrors[`profileSummary.linkedInUrl`] && {
                            color: "red",
                          }
                        }
                        className="form-label"
                      >
                        Link for LinkedIn account
                      </label>
                      <input
                        style={
                          fieldErrors[`profileSummary.linkedInUrl`] && {
                            backgroundImage:
                              "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                          }
                        }
                        onChange={(e) =>
                          handleDataChange(e, "linkedInUrl", null)
                        }
                        className="form-input"
                        type="text"
                        name="degreename"
                      />
                      {fieldErrors[`profileSummary.linkedInUrl`] && (
                        <span style={{ color: "red" }}>
                          {fieldErrors[`profileSummary.linkedInUrl`]}
                        </span>
                      )}
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <label className="form-label">
                        Link for github account
                      </label>
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
      )}
    </>
  );
}

export default UserProfileRegister7;
