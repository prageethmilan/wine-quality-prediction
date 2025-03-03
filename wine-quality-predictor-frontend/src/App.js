import React, {useState} from "react";
import axios from "axios";
import {Button, Col, Input, Label, Row} from "reactstrap";

const App = () => {
    const [formData, setFormData] = useState({
        "fixed acidity": 0,
        "volatile acidity": 0,
        "citric acid": 0,
        "residual sugar": 0,
        "chlorides": 0,
        "free sulfur dioxide": 0,
        "total sulfur dioxide": 0,
        "density": 0,
        "pH": 0,
        "sulphates": 0,
        "alcohol": 0
    });

    const [predictedQuality, setPredictedQuality] = useState(null);

    const handleSubmit = async () => {
        const res = await axios.post("http://localhost:5000/predict", formData);
        setPredictedQuality(res.data.predicted_quality);
    };

    return (
        <div>
            <h1 className={'text-center mb-5 mt-4 text-decoration-underline'}>Wine Quality Prediction</h1>
            <Row className={'m-2'}>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'fixedAcidity'} className={'form-label'}>Fixed Acidity</Label>
                    <Input
                        id={'fixedAcidity'}
                        name="Fixed Acidity"
                        value={formData["fixed acidity"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "fixed acidity": e.target.value})}
                    />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'volatileAcidity'} className={'form-label'}>Volatile Acidity</Label>
                    <Input
                        id={'volatileAcidity'}
                        name="Volatile Acidity"
                        value={formData["volatile acidity"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "volatile acidity": e.target.value})}
                    />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'citricAcid'} className={'form-label'}>Citric Acid</Label>
                    <Input
                        id={'citricAcid'}
                        name="Citric Acid"
                        value={formData["citric acid"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "citric acid": e.target.value})}
                    />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'residualSugar'} className={'form-label'}>Residual Sugar</Label>
                    <Input
                        id={'residualSugar'}
                        name="Residual Sugar"
                        value={formData["residual sugar"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "residual sugar": e.target.value})}
                    />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'chlorides'} className={'form-label'}>Chlorides</Label>
                    <Input
                        id={'chlorides'}
                        name="Chlorides"
                        value={formData["chlorides"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "chlorides": e.target.value})}
                    />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'freeSulfurDioxide'} className={'form-label'}>Fixed Acidity</Label>
                    <Input
                        id={'freeSulfurDioxide'}
                        name="Free Sulfur Dioxide"
                        value={formData["free sulfur dioxide"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "free sulfur dioxide": e.target.value})}
                    />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'totalSulfurDioxide'} className={'form-label'}>Total Sulfur Dioxide</Label>
                    <Input
                        id={'totalSulfurDioxide'}
                        name="Total Sulfur Dioxide"
                        value={formData["total sulfur dioxide"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "total sulfur dioxide": e.target.value})}
                    />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'density'} className={'form-label'}>Density</Label>
                    <Input
                        id={'density'}
                        name="Density"
                        value={formData["density"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "density": e.target.value})}
                    />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'ph'} className={'form-label'}>pH</Label>
                    <Input
                        id={'ph'}
                        name="Fixed Acidity"
                        value={formData["pH"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "pH": e.target.value})}
                    />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'sulphates'} className={'form-label'}>Sulphates</Label>
                    <Input
                        id={'sulphates'}
                        name="Sulphates"
                        value={formData["sulphates"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "sulphates": e.target.value})}
                    />
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Label for={'alcohol'} className={'form-label'}>Alcohol</Label>
                    <Input
                        id={'alcohol'}
                        name="Alcohol"
                        value={formData["alcohol"]}
                        type="number"
                        min="0"
                        step={"0.0001"}
                        onChange={(e) => setFormData({...formData, "alcohol": e.target.value})}
                    />
                </Col>
            </Row>
            <Row className={'m-2'}>
                <Col lg={2} md={3} sm={12} className={'mt-2'}>
                    <Button size={'lg'} className={'btn-dark'} onClick={handleSubmit}>Predict Quality</Button>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col lg={6} className="text-center">
                    <h2 style={{fontSize: "4rem", fontWeight: "bold"}}>
                        Predicted Quality: <span
                        className={'text-danger'}>{predictedQuality !== null ? predictedQuality : 0}</span>
                    </h2>
                </Col>
            </Row>
        </div>
    );
};

export default App;
