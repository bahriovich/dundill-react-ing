import { React, useState } from "react";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function UserProfileRegister6({
  userProfileData,
  setUserProfileData,
  handleChange,
  fieldErrors,
}) {
  function addNewCertification() {
    let expObject = {
      certificationName: "",
      certificationDescription: "",
      certificationLink: "",
      certificationDate: new Date(),
      doesItExpire: false,
      expDate: new Date(),
    };
    setUserProfileData((prev) => {
      let data = { ...prev };
      data.certifications = [...data.certifications, expObject];
      return data;
    });
  }
  function removeCertificationFields(index) {
    setUserProfileData((prev) => {
      let data = { ...prev };
      data.certifications.splice(index, 1);
      return data;
    });
  }
  console.log(fieldErrors);
  return (
    <>
      <div className="left-side">
        <div className="left-side-content">
          <h2>You can Also Add your Certifications?</h2>
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
                          {userProfileData?.certifications.length > 0 && (
                            <>
                              {userProfileData?.certifications.map(
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
                                        <h4>Certification {index + 1}</h4>
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
                                                  addNewCertification()
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
                                          {userProfileData?.certifications
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
                                                removeCertificationFields(index)
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
                                              `certifications[${index}].certificationName`
                                            ] && {
                                              color: "red",
                                            }
                                          }
                                          className="form-label"
                                        >
                                          Certification Name{" "}
                                        </label>
                                        <input
                                          style={
                                            fieldErrors[
                                              `certifications[${index}].certificationName`
                                            ] && {
                                              backgroundImage:
                                                "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                                            }
                                          }
                                          className="form-input"
                                          type="text"
                                          name="certificationName"
                                          value={field.certificationName}
                                          onChange={(e) =>
                                            handleChange(
                                              e,
                                              "certifications",
                                              index,
                                              "certificationName"
                                            )
                                          }
                                        />
                                        {fieldErrors[
                                          `certifications[${index}].certificationName`
                                        ] && (
                                          <span style={{ color: "red" }}>
                                            {
                                              fieldErrors[
                                                `certifications[${index}].certificationName`
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
                                              `certifications[${index}].certificationDescription`
                                            ] && {
                                              color: "red",
                                            }
                                          }
                                          className="form-label"
                                        >
                                          Certification Description{" "}
                                        </label>
                                        <input
                                          style={
                                            fieldErrors[
                                              `certifications[${index}].certificationDescription`
                                            ] && {
                                              backgroundImage:
                                                "linear-gradient(#FF0000, #FF0000), linear-gradient(#FF0000, #FF0000)",
                                            }
                                          }
                                          className="form-input"
                                          type="text"
                                          name="certificationDescription"
                                          value={field.certificationDescription}
                                          onChange={(e) =>
                                            handleChange(
                                              e,
                                              "certifications",
                                              index,
                                              "certificationDescription"
                                            )
                                          }
                                        />
                                        {fieldErrors[
                                          `certifications[${index}].certificationDescription`
                                        ] && (
                                          <span style={{ color: "red" }}>
                                            {
                                              fieldErrors[
                                                `certifications[${index}].certificationDescription`
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

                                          marginBottom: "20px",
                                          gap: 10,
                                        }}
                                      >
                                        <div className="startDate">
                                          <label className="form-label">
                                            Obtained At
                                          </label>
                                          <DatePicker
                                            className="form-input"
                                            name="certificationDate"
                                            onChange={(date) =>
                                              handleChange(
                                                null,
                                                "certifications",
                                                index,
                                                "certificationDate",
                                                date.toISOString()
                                              )
                                            }
                                            selected={
                                              new Date(field?.certificationDate)
                                            }
                                            dateFormat="dd/MM/yyyy"
                                          />
                                        </div>
                                      </Form.Group>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                        style={{ marginBottom: "20px" }}
                                      >
                                        <div class="form-check">
                                          <input
                                            onChange={(e) =>
                                              handleChange(
                                                null,
                                                "certifications",
                                                index,
                                                "doesItExpire",
                                                e.target.checked
                                              )
                                            }
                                            class="form-check-input"
                                            type="checkbox"
                                            value={field.doesItExpire}
                                            id="flexCheckDefault"
                                          ></input>
                                          <label
                                            class="form-check-label"
                                            for="flexCheckDefault"
                                          >
                                            Does it expire?
                                          </label>
                                        </div>
                                      </Form.Group>
                                      {field.doesItExpire && (
                                        <Form.Group
                                          className="mb-3"
                                          controlId="formBasicEmail"
                                          style={{
                                            display: "flex",
                                            flexDirection: "row",

                                            marginBottom: "20px",
                                            gap: 10,
                                          }}
                                        >
                                          <div className="endDate">
                                            <label className="form-label">
                                              Expire At
                                            </label>
                                            <DatePicker
                                              onChange={(date) =>
                                                handleChange(
                                                  null,
                                                  "certifications",
                                                  index,
                                                  "expDate",
                                                  date.toISOString()
                                                )
                                              }
                                              className="form-input"
                                              name="expDate"
                                              selected={
                                                new Date(field?.expDate)
                                              }
                                              dateFormat="dd/MM/yyyy"
                                            />
                                          </div>
                                        </Form.Group>
                                      )}
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                        style={{ marginBottom: "20px" }}
                                      >
                                        <label className="form-label">
                                          Certification Link
                                        </label>
                                        <input
                                          onChange={(e) =>
                                            handleChange(
                                              e,
                                              "certifications",
                                              index,
                                              "certificationLink"
                                            )
                                          }
                                          required="required"
                                          className="form-input"
                                          type="text"
                                          name="certificationLink"
                                          value={field.certificationLink}
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

export default UserProfileRegister6;
