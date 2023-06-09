import { React } from "react";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function UserProfileRegister5({
  userProfileData,
  setUserProfileData,
  handleChange,
  fieldErrors,
}) {
  function addNewEducation() {
    let eduObject = {
      degreeName: "",
      fieldOfStudy: "",
      school: "",
      startDate: new Date(),
      endDate: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toISOString(),
    };
    setUserProfileData((prev) => {
      let data = { ...prev };
      data.educationData = [...data.educationData, eduObject];
      return data;
    });
  }
  function removeEducationFields(index) {
    setUserProfileData((prev) => {
      let data = { ...prev };

      data.educationData.splice(index, 1);
      return data;
    });
  }
  console.log(fieldErrors);
  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <h2>Tell Us About Your Education?</h2>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-form">
          <div
            className="form"
            style={{
              display: "flex",
              flexDirection: "column",
              "align-items": "center",
              height: "80vh",
              justifyContent: "flex-start",
            }}
          >
            <form action="">
              <div className="form-group">
                <Container>
                  <Row className="justify-content-center">
                    <Col
                      xs="6"
                      className="dynamic-form-headings"
                      style={{ display: "flex", justifyContent: "center" }}
                    ></Col>
                    <Col xs="12">
                      <Form style={{ maxHeight: 700, overflowY: "auto" }}>
                        <Row className="justify-content-center">
                          {userProfileData.educationData.length > 0 && (
                            <>
                              {userProfileData.educationData.map(
                                (field, index) => (
                                  <Col xs="4">
                                    <div className="add-player-div">
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        <h4>Education {index + 1}</h4>
                                        <div>
                                          {index === 0 &&
                                            !Object.keys(fieldErrors).length >
                                              0 && (
                                              <button
                                                style={{
                                                  backgroundColor: "#FF3769",
                                                  borderRadius: 10,
                                                  padding: 10,
                                                  border: 0,
                                                  cursor: "pointer",
                                                  width: 75,
                                                  marginRight: 10,
                                                }}
                                                variant="primary"
                                                onClick={() =>
                                                  addNewEducation()
                                                }
                                              >
                                                <PlusOutlined
                                                  style={{
                                                    fontSize: "23px",
                                                    color: "white",
                                                  }}
                                                />
                                              </button>
                                            )}
                                          {userProfileData.educationData
                                            .length > 1 && (
                                            <Button
                                              style={{
                                                backgroundColor: "#FF3769",
                                                borderRadius: 10,
                                                padding: 10,
                                                border: 0,
                                                cursor: "pointer",
                                                width: 75,
                                                marginRight: 10,
                                              }}
                                              variant="secondary"
                                              onClick={() =>
                                                removeEducationFields(index)
                                              }
                                            >
                                              <DeleteOutlined
                                                style={{
                                                  fontSize: "23px",
                                                  color: "white",
                                                }}
                                              />
                                            </Button>
                                          )}
                                        </div>
                                      </div>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                        style={{ marginBottom: "20px" }}
                                      >
                                        <label
                                          style={
                                            fieldErrors[
                                              `educationData[${index}].degreeName`
                                            ] && {
                                              color: "red",
                                            }
                                          }
                                          className="form-label"
                                        >
                                          Degree Name{" "}
                                        </label>
                                        <input
                                          required="required"
                                          className="form-input"
                                          style={
                                            fieldErrors[
                                              `educationData[${index}].degreeName`
                                            ] && {
                                              backgroundImage:
                                                "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                                            }
                                          }
                                          type="text"
                                          name="degreeName"
                                          value={field.degreeName}
                                          onChange={(e) =>
                                            handleChange(
                                              e,
                                              "educationData",
                                              index,
                                              "degreeName"
                                            )
                                          }
                                        />
                                        {fieldErrors[
                                          `educationData[${index}].degreeName`
                                        ] && (
                                          <span style={{ color: "red" }}>
                                            {
                                              fieldErrors[
                                                `educationData[${index}].degreeName`
                                              ]
                                            }
                                          </span>
                                        )}
                                      </Form.Group>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                        style={{ marginBottom: "20px" }}
                                      >
                                        <label
                                          style={
                                            fieldErrors[
                                              `educationData[${index}].fieldOfStudy`
                                            ] && {
                                              color: "red",
                                            }
                                          }
                                          className="form-label"
                                        >
                                          Field Of Study{" "}
                                        </label>
                                        <input
                                          style={
                                            fieldErrors[
                                              `educationData[${index}].fieldOfStudy`
                                            ] && {
                                              backgroundImage:
                                                "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                                            }
                                          }
                                          className="form-input"
                                          type="text"
                                          name="fieldOfStudy"
                                          value={field.fieldOfStudy}
                                          onChange={(e) =>
                                            handleChange(
                                              e,
                                              "educationData",
                                              index,
                                              "fieldOfStudy"
                                            )
                                          }
                                        />
                                        {fieldErrors[
                                          `educationData[${index}].fieldOfStudy`
                                        ] && (
                                          <span style={{ color: "red" }}>
                                            {
                                              fieldErrors[
                                                `educationData[${index}].fieldOfStudy`
                                              ]
                                            }
                                          </span>
                                        )}
                                      </Form.Group>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                        style={{ marginBottom: "20px" }}
                                      >
                                        <label
                                          style={
                                            fieldErrors[
                                              `educationData[${index}].school`
                                            ] && {
                                              color: "red",
                                            }
                                          }
                                          className="form-label"
                                        >
                                          School{" "}
                                        </label>
                                        <input
                                          style={
                                            fieldErrors[
                                              `educationData[${index}].school`
                                            ] && {
                                              backgroundImage:
                                                "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                                            }
                                          }
                                          className="form-input"
                                          type="text"
                                          name="school"
                                          value={field.shcool}
                                          onChange={(e) =>
                                            handleChange(
                                              e,
                                              "educationData",
                                              index,
                                              "school"
                                            )
                                          }
                                        />
                                        {fieldErrors[
                                          `educationData[${index}].school`
                                        ] && (
                                          <span style={{ color: "red" }}>
                                            {
                                              fieldErrors[
                                                `educationData[${index}].school`
                                              ]
                                            }
                                          </span>
                                        )}
                                      </Form.Group>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          "align-items": "center",
                                          justifyContent: "space-around",
                                          marginBottom: "10px",
                                          gap: 10,
                                        }}
                                      >
                                        <div className="startDate">
                                          <label
                                            style={
                                              fieldErrors[
                                                `educationData[${index}].startDate`
                                              ] && {
                                                color: "red",
                                              }
                                            }
                                            className="form-label"
                                          >
                                            Start Date{" "}
                                          </label>
                                          <DatePicker
                                            className={
                                              fieldErrors[
                                                `educationData[${index}].startDate`
                                              ]
                                                ? "form-input-err"
                                                : "form-input"
                                            }
                                            name="startDate"
                                            onChange={(date) =>
                                              handleChange(
                                                null,
                                                "educationData",
                                                index,
                                                "startDate",
                                                date.toISOString()
                                              )
                                            }
                                            selected={
                                              new Date(field?.startDate)
                                            }
                                            dateFormat="dd/MM/yyyy"
                                          />
                                        </div>
                                        <div className="endDate">
                                          <label
                                            style={
                                              fieldErrors[
                                                `educationData[${index}].startDate`
                                              ] && {
                                                color: "red",
                                              }
                                            }
                                            className="form-label"
                                          >
                                            End Date{" "}
                                          </label>
                                          <DatePicker
                                            onChange={(date) =>
                                              handleChange(
                                                null,
                                                "educationData",
                                                index,
                                                "endDate",
                                                date.toISOString()
                                              )
                                            }
                                            className={
                                              fieldErrors[
                                                `educationData[${index}].startDate`
                                              ]
                                                ? "form-input-err"
                                                : "form-input"
                                            }
                                            name="endDate"
                                            selected={new Date(field?.endDate)}
                                            dateFormat="dd/MM/yyyy"
                                          />
                                        </div>
                                      </Form.Group>
                                      {fieldErrors[
                                        `educationData[${index}].startDate`
                                      ] && (
                                        <span style={{ color: "red" }}>
                                          {
                                            fieldErrors[
                                              `educationData[${index}].startDate`
                                            ]
                                          }
                                        </span>
                                      )}
                                      <Divider style={{ width: "100%" }} />
                                    </div>
                                  </Col>
                                )
                              )}
                            </>
                          )}
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </Container>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileRegister5;
