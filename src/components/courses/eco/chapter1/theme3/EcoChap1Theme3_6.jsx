import React, {useState} from 'react';
import {Col, Row, Descriptions, Button, Steps} from "antd";

const { Step } = Steps;

const EcoChap1Theme3_6 = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Форма № 2-ОС',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-description-container' style={{padding: '15px 20px'}}>
                            <Descriptions title="Форма № 2-ОС ">
                                <Descriptions.Item label="Название " span={4}>«Сведения о выполнении водоохранных работ на водных объектах»</Descriptions.Item>
                                <Descriptions.Item label="Отчетный период " span={4}>календарный год</Descriptions.Item>
                                <Descriptions.Item label="Срок представления " span={4}>до 25 января после отчетного периода</Descriptions.Item>
                                <Descriptions.Item label="Представляют " span={4}>
                                    юридические лица, их обособленные подразделения, осуществляющие водоохранные работы на водных объектах. Перечень юридических лиц определяется территориальным органом МПР и экологии РФ
                                </Descriptions.Item>
                                <Descriptions.Item label="Предоставляют" span={4}>
                                    территориальному органу МПР и экологии РФ
                                </Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: 'Форма № 4-ОС',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-description-container' style={{padding: '15px 20px'}}>
                            <Descriptions title="Форма № 4-ОС">
                                <Descriptions.Item label="Название " span={4}>«Сведения о текущих затратах на охрану окружающей среды и экологических платежах»</Descriptions.Item>
                                <Descriptions.Item label="Отчетный период " span={4}>календарный год</Descriptions.Item>
                                <Descriptions.Item label="Срок представления " span={4}>до 25 января после отчетного периода</Descriptions.Item>
                                <Descriptions.Item label="Представляют " span={4}>
                                    юридические лица, имеющие очистные сооружения, осуществляющие природоохранные мероприятия, а также производящие плату за негативное воздействие на окружающую среду
                                </Descriptions.Item>
                                <Descriptions.Item label="Предоставляют" span={4}>
                                    территориальному органу Росстата в субъекте РФ
                                </Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: 'Форма № 2-ТП (водхоз)',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-description-container' style={{padding: '15px 20px'}}>
                            <Descriptions title="Форма № 2-ТП (водхоз)">
                                <Descriptions.Item label="Название" span={4}>«Сведения об использовании воды»</Descriptions.Item>
                                <Descriptions.Item label="Отчетный период" span={4}>календарный год</Descriptions.Item>
                                <Descriptions.Item label="Срок представления" span={4}>до 22 января после отчетного периода</Descriptions.Item>
                                <Descriptions.Item label="Критерии" span={4}>
                                    <div style={{textAlign: 'left'}}>
                                        - осуществляющие сброс сточных вод;
                                        <br/>- осуществляющие забор из водных объектов 50 м3 воды в сутки и более;
                                        <br/>- получающие воду из систем водоснабжения объемом 300 м3 и более в сутки для любых видов использования воды;
                                        <br/>- получающие воду из систем водоснабжения, осуществляющие забор воды из водных объектов объемом 150 м3 и более в сутки для производства сельскохозяйственной продукции;
                                        <br/>- имеющие системы оборотного водоснабжения общей мощностью 5000 м3 и более в сутки независимо от объема забираемой воды.
                                    </div>
                                </Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
                </>,
        },
    ];

    return (
        <>
            <Row style={{margin: '20px 0 30px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Статистическая отчетность предприятия</strong></h1>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col md={{span: 24, offset: 0}} lg={{span: 20, offset: 2}} className='eco-steps-interaction-container'>
                    <Steps current={current} className='eco-steps-interaction'>
                        {steps.map((item, index) => (
                            <Step key={index} title={item.title} onClick={(event) => {setCurrent(index)}}/>
                        ))}
                    </Steps>
                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Вернуться
                            </Button>
                        )}
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Далее
                            </Button>
                        )}
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default EcoChap1Theme3_6;