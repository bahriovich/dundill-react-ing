import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { findFlagUrlByCountryName } from "country-flags-svg";
import { countries } from "country-data";
import { useEffect } from "react";
import { useState } from "react";
const UserRegister3 = ({ signUpData, setSignUpData, fieldErrors }) => {
  const [countryParam, setCountryParams] = useState();
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setSignUpData((prev) => {
      let data = { ...prev };
      data[name] = value;
      return data;
    });
  };

  const options = [
    { value: "MALE", label: "male" },
    { value: "FEMALE", label: "female" },
  ];
  const changeHandler = (value) => {
    let genderData = value.value;
    setSignUpData((prev) => {
      let data = { ...prev };
      data.gender = genderData;
      return data;
    });
  };
  const getCountryData = (countryName) => {
    const country = countries.all.find(
      (c) => c.name.toLowerCase() === countryName.toLowerCase()
    );
    if (country) {
      const iso2 = country.alpha2;
      const dialCode = `+${country.countryCallingCodes[0]}`;
      const flag = findFlagUrlByCountryName(countryName);
      return {
        iso2,
        dialCode,
        flag,
      };
    }
    return {
      iso2: "",
      dialCode: "",
      flag: "",
    };
  };
  useEffect(() => {
    if (signUpData.country) {
      setCountryParams(getCountryData(signUpData.country));
    }
  }, [signUpData.country]);
  console.log(countryParam);

  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <h2>Now, Give more information about you</h2>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-form">
          <div className="form">
            <form action="">
              <div className="form-group">
                <label
                  style={fieldErrors["birthDate"] && { color: "red" }}
                  className="form-label"
                >
                  Birthdate{" "}
                </label>
                <DatePicker
                  name="birthDate"
                  className={
                    fieldErrors["birthDate"] ? "form-input-err" : "form-input"
                  }
                  selected={new Date(signUpData?.birthDate)}
                  onChange={(date) =>
                    setSignUpData((prev) => {
                      let data = { ...prev };
                      data.birthDate = new Date(date).toISOString();
                      return data;
                    })
                  }
                  dateFormat="dd/MM/yyyy"
                />
                {fieldErrors[`birthDate`] && (
                  <span style={{ color: "red" }}>
                    {fieldErrors[`birthDate`]}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label
                  style={fieldErrors["gender"] && { color: "red" }}
                  className="form-label"
                >
                  Gender{" "}
                </label>
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: fieldErrors[`gender`] && "red",
                    }),
                  }}
                  name="gender"
                  value={
                    signUpData.gender !== ""
                      ? {
                          value: signUpData?.gender,
                          label: signUpData?.gender?.toLowerCase(),
                        }
                      : ""
                  }
                  options={options}
                  onChange={changeHandler}
                />
                {fieldErrors[`gender`] && (
                  <span style={{ color: "red" }}>{fieldErrors[`gender`]}</span>
                )}
              </div>
              <div className="form-group">
                <label
                  style={fieldErrors["phoneNumber"] && { color: "red" }}
                  className="form-label"
                >
                  Phone Number{" "}
                </label>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={countryParam?.flag}
                    alt="flag"
                    style={{ width: 35, height: 22, paddingRight: 5 }}
                  />
                  <span style={{ paddingRight: 10 }}>
                    {countryParam?.dialCode}
                  </span>
                  <input
                    style={
                      fieldErrors[`phoneNumber`] && {
                        backgroundImage:
                          "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                      }
                    }
                    className="form-input"
                    name="phoneNumber"
                    value={signUpData.phoneNumber}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>
                {fieldErrors[`phoneNumber`] && (
                  <span style={{ color: "red" }}>
                    {fieldErrors[`phoneNumber`]}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister3;
