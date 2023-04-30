import { React, useState } from "react";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import MUIRichTextEditor from "mui-rte";

function UserProfileRegister4({
  signUpProfileData,
  setSignUpProfileData,
  professionalExperienceData,
  setProfessionalExperienceData,
}) {
  const [allPlayers, setAllPlayers] = useState([
    { name: "", description: "", price: null, rating: null },
  ]);

  const handleAddPlayers = () => {
    const values = [...allPlayers];
    values.push({
      name: "",
      description: "",
      price: null,
      rating: null,
    });
    setAllPlayers(values);
  };

  const handleRemovePlayers = (index) => {
    const values = [...allPlayers];
    values.splice(index, 1);
    setAllPlayers(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...allPlayers];
    const updatedValue = event.target.name;
    values[index][updatedValue] = event.target.value;

    setAllPlayers(values);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleChange = (e, index) => {
    let value = e.target.value;
    let name = e.target.name;

    setProfessionalExperienceData((prev) => {
      let data = { ...prev };
      data[name][index] = value;
      return data;
    });
  };

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
                    >
                      <Button
                        variant="primary"
                        onClick={() => handleAddPlayers()}
                      >
                        Add Professional Experience
                      </Button>
                    </Col>
                    <Col xs="12">
                      <Form>
                        <Row className="justify-content-center">
                          {allPlayers.length > 0 && (
                            <>
                              {allPlayers.map((field, index) => (
                                <Col xs="4">
                                  <div className="add-player-div">
                                    <h4>Professional Experience {index + 1}</h4>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicEmail"
                                      style={{ marginBottom: "20px" }}
                                    >
                                      <label className="form-label">
                                        Company Name{" "}
                                      </label>
                                      <input
                                        required="required"
                                        className="form-input"
                                        type="text"
                                        name="companyName"
                                        value={
                                          professionalExperienceData.companyName
                                        }
                                        onChange={(e) => handleChange(e, index)}
                                        style={{ width: "40vw" }}
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicEmail"
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        "align-items": "center",
                                        justifyContent: "space-around",
                                        marginBottom: "20px",
                                      }}
                                    >
                                      <div className="startDate">
                                        <label className="form-label">
                                          Start Date{" "}
                                        </label>
                                        <DatePicker
                                          name="startDate"
                                          selected={new Date()}
                                          onChange={(date) =>
                                            setProfessionalExperienceData(
                                              (prev) => {
                                                let data = { ...prev };
                                                data.startDate = new Date(
                                                  date
                                                ).toISOString();
                                                return data;
                                              }
                                            )
                                          }
                                          dateFormat="dd/MM/yyyy"
                                        />

                                        {/* <DatePicker name="startDate" value={professionalExperienceData.startDate} onChange={(e) => (handleChange(e))} /> */}
                                      </div>
                                      <div className="endDate">
                                        <label className="form-label">
                                          End Date{" "}
                                        </label>
                                        <DatePicker
                                          name="endDate"
                                          // selected={new Date(professionalExperienceData?.endDate)}
                                          onChange={(date) =>
                                            setProfessionalExperienceData(
                                              (prev) => {
                                                let data = { ...prev };
                                                data.endDate = new Date(
                                                  date
                                                ).toISOString();
                                                return data;
                                              }
                                            )
                                          }
                                          dateFormat="dd/MM/yyyy"
                                        />
                                        {/* <DatePicker name="endDate" value={professionalExperienceData.endDate} onChange={(e) => (handleChange(e))} /> */}
                                      </div>
                                    </Form.Group>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicEmail"
                                      style={{ marginBottom: "20px" }}
                                    >
                                      <label className="form-label">
                                        Still working?
                                      </label>
                                      {/* 
                                                                        <Checkbox
                                                                            {...label}
                                                                            defaultChecked
                                                                            sx={{
                                                                                color: pink[800],
                                                                                '&.Mui-checked': {
                                                                                    color: pink[600],
                                                                                },
                                                                            }}
                                                                            name="stillWorking"
                                                                            value={professionalExperienceData.stillWorking }
                                                                            onChange={(e) => (handleChange(e, index))}
                                                                        /> */}
                                    </Form.Group>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicEmail"
                                      style={{ marginBottom: "20px" }}
                                    >
                                      <label className="form-label">
                                        Title{" "}
                                      </label>
                                      <input
                                        required="required"
                                        className="form-input"
                                        type="text"
                                        name="title"
                                        value={professionalExperienceData.title}
                                        onChange={(e) => handleChange(e, index)}
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicEmail"
                                      style={{ marginBottom: "20px" }}
                                    >
                                      <label className="form-label">
                                        Description{" "}
                                      </label>
                                      <textarea
                                        type="text"
                                        name="description"
                                        value={
                                          professionalExperienceData.description
                                        }
                                        onChange={(e) => handleChange(e, index)}
                                        style={{
                                          width: "40vw",
                                          height: "90px",
                                        }}
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicEmail"
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        "align-items": "center",
                                        gap: "50px",
                                        marginBottom: "20px",
                                      }}
                                    >
                                      <label className="form-label">
                                        Duration{" "}
                                      </label>
                                      {/* <Slider
                                                                            name="duration"
                                                                            value={professionalExperienceData.duration}
                                                                            defaultValue={30}
                                                                            sx={{
                                                                                width: 300,
                                                                                color: 'success.main',
                                                                                '& .MuiSlider-thumb': {
                                                                                    borderRadius: '1px',
                                                                                },
                                                                            }}
                                                                            valueLabelDisplay="auto"
                                                                            style={{ color: "#FF3769" }}
                                                                            onChange={(e) => (handleChange(e, index))}
                                                                        /> */}
                                    </Form.Group>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <Button
                                        variant="secondary"
                                        onClick={() =>
                                          handleRemovePlayers(index)
                                        }
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </div>
                                </Col>
                              ))}
                            </>
                          )}
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </Container>

                {/* <div className='company_name' >
                                <input type="text" style={{ "width": "100px" ,"height": "20px" }} />
                            </div>
                            <div className='start_end_date'>
                                <DatePicker />
                                <DatePicker />
                            </div>
                            <div className='still_working'>
                                <input type="checkbox" />
                            </div>
                            <div className='title'>
                                <input type="text" />
                            </div>
                            <div>
                                <ThemeProvider theme={myTheme}>
                                    <MUIRichTextEditor label="Start typing..." />
                                </ThemeProvider>
                            </div>
                            <div>
                                <Slider
                                    defaultValue={30}
                                    sx={{
                                        width: 300,
                                        color: 'success.main',
                                        '& .MuiSlider-thumb': {
                                            borderRadius: '1px',
                                        },
                                    }}
                                />
                            </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileRegister4;
