import { React, useState } from "react";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function UserProfileRegister4({
  userProfileData,
  setUserProfileData,
  handleChange,
  fieldErrors,
}) {
  function addNewExperience() {
    let expObject = {
      companyName: "",
      startDate: new Date(),
      endDate: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toISOString(),
      stillWorking: false,
      title: "",
      description: "",
      duration: "",
    };
    setUserProfileData((prev) => {
      let data = { ...prev };
      data.professionalExperienceData = [
        ...data.professionalExperienceData,
        expObject,
      ];
      return data;
    });
  }
  function removeExpFields(index) {
    setUserProfileData((prev) => {
      let data = { ...prev };

      data.professionalExperienceData.splice(index, 1);
      return data;
    });
  }

  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <h2>Professional Experience?</h2>
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
                          {userProfileData.professionalExperienceData.length >
                            0 && (
                            <>
                              {userProfileData.professionalExperienceData.map(
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
                                        <h4>
                                          Professional Experience {index + 1}
                                        </h4>
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
                                                  addNewExperience()
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
                                          {userProfileData
                                            .professionalExperienceData.length >
                                            1 && (
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
                                                removeExpFields(index)
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
                                        style={{
                                          marginBottom: "20px",
                                        }}
                                      >
                                        <label
                                          className="form-label"
                                          style={
                                            fieldErrors[
                                              `professionalExperienceData[${index}].companyName`
                                            ] && { color: "red" }
                                          }
                                        >
                                          Company Name{" "}
                                        </label>
                                        <input
                                          style={
                                            fieldErrors[
                                              `professionalExperienceData[${index}].companyName`
                                            ] && {
                                              backgroundImage:
                                                "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                                            }
                                          }
                                          className="form-input"
                                          type="text"
                                          name="companyName"
                                          value={field.companyName}
                                          onChange={(e) =>
                                            handleChange(
                                              e,
                                              "professionalExperienceData",
                                              index,
                                              "companyName"
                                            )
                                          }
                                        />
                                        {fieldErrors[
                                          `professionalExperienceData[${index}].companyName`
                                        ] && (
                                          <span style={{ color: "red" }}>
                                            {
                                              fieldErrors[
                                                `professionalExperienceData[${index}].companyName`
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
                                                `professionalExperienceData[${index}].startDate`
                                              ] && { color: "red" }
                                            }
                                            className="form-label"
                                          >
                                            Start Date{" "}
                                          </label>
                                          <DatePicker
                                            className={
                                              fieldErrors[
                                                `professionalExperienceData[${index}].startDate`
                                              ]
                                                ? "form-input-err"
                                                : "form-input"
                                            }
                                            name="startDate"
                                            onChange={(date) =>
                                              handleChange(
                                                null,
                                                "professionalExperienceData",
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
                                                `professionalExperienceData[${index}].startDate`
                                              ] && { color: "red" }
                                            }
                                            className="form-label"
                                          >
                                            End Date{" "}
                                          </label>
                                          <DatePicker
                                            onChange={(date) =>
                                              handleChange(
                                                null,
                                                "professionalExperienceData",
                                                index,
                                                "endDate",
                                                date.toISOString()
                                              )
                                            }
                                            disabled={field.stillWorking}
                                            className={
                                              fieldErrors[
                                                `professionalExperienceData[${index}].startDate`
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
                                        `professionalExperienceData[${index}].startDate`
                                      ] && (
                                        <span
                                          style={{
                                            color: "red",
                                          }}
                                        >
                                          {
                                            fieldErrors[
                                              `professionalExperienceData[${index}].startDate`
                                            ]
                                          }
                                        </span>
                                      )}
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                        style={{
                                          marginBottom: "20px",
                                          marginTop: 20,
                                        }}
                                      >
                                        <div class="form-check">
                                          <input
                                            onChange={(e) =>
                                              handleChange(
                                                null,
                                                "professionalExperienceData",
                                                index,
                                                "stillWorking",
                                                e.target.checked
                                              )
                                            }
                                            class="form-check-input"
                                            type="checkbox"
                                            value={field?.stillWorking}
                                          ></input>
                                          <label
                                            class="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            Still Working
                                          </label>
                                        </div>
                                      </Form.Group>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                        style={{ marginBottom: "20px" }}
                                      >
                                        <label
                                          style={
                                            fieldErrors[
                                              `professionalExperienceData[${index}].title`
                                            ] && { color: "red" }
                                          }
                                          className="form-label"
                                        >
                                          Title{" "}
                                        </label>
                                        <input
                                          onChange={(e) =>
                                            handleChange(
                                              e,
                                              "professionalExperienceData",
                                              index,
                                              "title"
                                            )
                                          }
                                          style={
                                            fieldErrors[
                                              `professionalExperienceData[${index}].title`
                                            ] && {
                                              backgroundImage:
                                                "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                                            }
                                          }
                                          className="form-input"
                                          type="text"
                                          name="title"
                                          value={field.title}
                                        />
                                        {fieldErrors[
                                          `professionalExperienceData[${index}].title`
                                        ] && (
                                          <span style={{ color: "red" }}>
                                            {
                                              fieldErrors[
                                                `professionalExperienceData[${index}].title`
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
                                        <label className="form-label">
                                          Description {"(Optional Field) "}
                                        </label>
                                        <textarea
                                          type="text"
                                          name="description"
                                          value={field.description}
                                          onChange={(e) =>
                                            handleChange(
                                              e,
                                              "professionalExperienceData",
                                              index,
                                              "description"
                                            )
                                          }
                                          style={{
                                            width: "40vw",
                                            height: "90px",
                                          }}
                                        />
                                      </Form.Group>
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

export default UserProfileRegister4;
