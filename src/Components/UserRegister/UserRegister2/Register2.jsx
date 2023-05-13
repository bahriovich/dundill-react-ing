import React from "react";
import "./Register2.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

function UserRegister2({ signUpData, setSignUpData, fieldErrors }) {
  const selectCountry = (val) => {
    setSignUpData((prev) => {
      let data = { ...prev };
      data.country = val;
      return data;
    });
  };
  const selectRegion = (val) => {
    setSignUpData((prev) => {
      let data = { ...prev };
      data.city = val;
      return data;
    });
  };
  const changeCheckBox = (e) => {
    let checked = e.target.checked;

    setSignUpData((prev) => {
      let data = { ...prev };
      data.planningToMove = checked;
      return data;
    });
  };

  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <h2>Where are you currently based?</h2>
        </div>
      </div>
      <div className="right-side">
        <div class="user-badge-desktop">
          <div class="username-avatar">
            <p> {signUpData.fullname.charAt(0).toUpperCase()} </p>
          </div>
          <p class="user-name">Hi {signUpData.fullname} 👋</p>
        </div>
        <div className="right-side-form">
          <div className="form">
            <form action="">
              <div
                className="form-group"
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                {/* <input required="required" className="form-control" name="country" value={signUpData.country} onChange={(e) => handleChange(e)} /> */}
                <label
                  style={fieldErrors["country"] && { color: "red" }}
                  className="form-label"
                >
                  Country{" "}
                </label>
                {/* <CountryDropdown  style={{border: "none"}} id="UNIQUE_ID" className='YOUR_CSS_CLASS ' preferredCountries={['tn', 'us']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown> */}
                <CountryDropdown
                  defaultOptionLabel="Select a country..."
                  value={signUpData.country}
                  name={"country"}
                  onChange={selectCountry}
                  className={
                    fieldErrors["country"]
                      ? "countrySelect-err"
                      : "countrySelect"
                  }
                />
                {fieldErrors["country"] && (
                  <span style={{ color: "red" }}>
                    {" "}
                    {fieldErrors["country"]}{" "}
                  </span>
                )}
              </div>
              <div
                className="form-group"
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <label
                  style={fieldErrors["city"] && { color: "red" }}
                  className="form-label"
                >
                  City{" "}
                </label>
                <RegionDropdown
                  blankOptionLabel="No country selected..."
                  defaultOptionLabel="Now select a region..."
                  country={signUpData.country}
                  value={signUpData.city}
                  name={"city"}
                  onChange={selectRegion}
                  className={
                    fieldErrors["city"] ? "countrySelect-err" : "countrySelect"
                  }
                />
                {fieldErrors["city"] && (
                  <span style={{ color: "red" }}> {fieldErrors["city"]} </span>
                )}
              </div>
              <div class="form-check">
                <input
                  onChange={(e) => changeCheckBox(e)}
                  class="form-check-input"
                  type="checkbox"
                  value={signUpData?.planningToMove}
                  id="flexCheckDefault"
                ></input>
                <label class="form-check-label" for="flexCheckDefault">
                  I am planning to move to a different timezone within the next
                  6 months
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister2;
