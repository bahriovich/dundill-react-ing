import { React, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { DatePicker } from 'antd'
import { createTheme, ThemeProvider } from "@mui/material/styles";

function UserProfileRegister5() {


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

    console.log(allPlayers);


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const myTheme = createTheme({

    });

    return (<>

        <div className='left-side'>
            <div className='left-side-content'>
                <h2>Tell Us About Your Education?</h2>
            </div>
        </div>
        <div className='right-side'>
            <div className='right-side-form'>
                <div className='form' style={{ "display": "flex", "flex-direction": "column", "align-items": "center", "height": "80vh", "justify-content": "flex-start" }}>
                    <form action="">
                        <div className="form-group">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col xs="6" className="dynamic-form-headings" style={{"display": "flex", "justify-content": "center"}}>
                                        <Button variant="primary" onClick={() => handleAddPlayers()} >
                                            Add Your Education
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
                                                                    <h4>Education {index + 1}</h4>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{"marginBottom": "20px"}}>
                                                                        <label className="form-label">Degree Name </label>
                                                                        <input required="required" className='form-input' type='text' name='degreename' style={{"width": "40vw"}}/>
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{"marginBottom": "20px"}}>
                                                                        <label className="form-label">Field of Study</label>
                                                                        <input required="required" className='form-input' type='text' name='fieldstudy' />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{"marginBottom": "20px"}}>
                                                                        <label className="form-label">School</label>
                                                                        <input required="required" className='form-input' type='text' name='school' />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{ "display": "flex", "flex-direction": "row", "align-items": "center" , "justify-content" : "space-around" , "marginBottom": "20px"}}>
                                                                     
                                                                        <div className="startDate">
                                                                            <label className="form-label">Start Date </label>
                                                                            <DatePicker />
                                                                        </div>
                                                                        <div className="endDate">
                                                                            <label className="form-label">End Date </label>
                                                                            <DatePicker />
                                                                        </div>
                                                                    </Form.Group>
                                                                    <div style={{"display" : "flex", "justifyContent": "center"}}>
                                                                        <Button
                                                                            variant="secondary"
                                                                            onClick={() => handleRemovePlayers(index)}
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default UserProfileRegister5
