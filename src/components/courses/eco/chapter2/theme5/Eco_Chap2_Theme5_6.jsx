import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Card, Button, List} from 'antd';
import { BackTop } from 'antd';
import {
    CheckSquareTwoTone,
    FileExclamationOutlined,
} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const Eco_Chap2_Theme5_6 = () => {
    const [showModal, setShowModal] = useState(false);

    const data = [
        <> <FileExclamationOutlined style={{color: 'darkorange', fontSize: '21px'}}/>&nbsp; о выполнении плана мероприятий по охране окружающей среды или программы повышения экологической эффективности;</>,
        <> <FileExclamationOutlined style={{color: 'darkorange', fontSize: '21px'}}/>&nbsp; об источниках загрязнения окружающей среды и природных ресурсов или иного вредного воздействия на окружающую среду и природные ресурсы;</>,
        <> <FileExclamationOutlined style={{color: 'darkorange', fontSize: '21px'}}/>&nbsp; о состоянии земель, водных объектов и других объектов окружающей среды;</>,
        <> <FileExclamationOutlined style={{color: 'darkorange', fontSize: '21px'}}/>&nbsp; о постановке на государственный учет объектов, оказывающих негативное воздействие на окружающую среду;</>,
        <> <FileExclamationOutlined style={{color: 'darkorange', fontSize: '21px'}}/>&nbsp; о радиационной обстановке данных, полученных при осуществлении производственного экологического контроля;</>,
        <> <FileExclamationOutlined style={{color: 'darkorange', fontSize: '21px'}}/>&nbsp; о плате за негативное воздействие на окружающую среду;</>,
        <> <FileExclamationOutlined style={{color: 'darkorange', fontSize: '21px'}}/>&nbsp; о состоянии окружающей среды и природных ресурсов;</>,
        <> <FileExclamationOutlined style={{color: 'darkorange', fontSize: '21px'}}/>&nbsp; о воздействии на окружающую среду.</>,
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Административная ответственность</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col lg={{span: 24, offset: 0}} xl={{span: 22, offset: 1}}>
                    <div className='eco-flex-row eco-inv-card' style={{padding: '20px 10px'}}>

                        <Row>
                            <Col lg={{span: 22, offset: 1}} xl={{span: 11, offset: 0}} style={{marginBottom: '20px'}}>
                                <Card className='simple-card-orange'>
                                    <h1 style={{textAlign: "center", fontSize: '1.35rem'}}><strong>Сокрытие или искажение экологической информации</strong></h1>

                                    <Row>
                                        <div style={{marginTop: '20px'}}>
                                            <div className='eco-div-withFloat'>
                                                <Image
                                                    className='eco-float-ico'
                                                    style={{maxWidth: '100px', marginLeft: '-7px', marginRight: '17px'}}
                                                    preview = {false}
                                                    src={'/images/adm.png'}
                                                    placeholder={
                                                        <Skeleton.Image />
                                                    }
                                                />
                                                Сокрытие, умышленное искажение или несвоевременное сообщение полной и достоверной информации влечет <strong style={{fontSize: '1.25rem'}}>наложение административного штрафа:</strong>
                                            </div>
                                        </div>
                                    </Row>

                                    <div className='eco-flex-row flex-centered' style={{marginTop: '30px'}}>
                                        <div className='eco-num-col' style={{background: 'darkorange'}}>1</div>
                                        <div className='eco-num-text'>
                                            <strong style={{fontSize: '1.25rem'}}>на граждан</strong> в размере от 500 до 1 000 рублей;
                                        </div>
                                    </div>
                                    <div className='eco-flex-row flex-centered'>
                                        <div className='eco-num-col' style={{background: 'darkorange'}}>2</div>
                                        <div className='eco-num-text'>
                                            <strong style={{fontSize: '1.25rem'}}>на должностных лиц</strong> - от 3 000 до 6 000 рублей;
                                        </div>
                                    </div>
                                    <div className='eco-flex-row flex-centered'>
                                        <div className='eco-num-col' style={{background: 'darkorange'}}>3</div>
                                        <div className='eco-num-text'>
                                            <strong style={{fontSize: '1.25rem'}}>на юридических лиц</strong> - от 20 000 до 80 000 рублей.
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col lg={{span: 22, offset: 1}} xl={{span: 12, offset: 1}} className='eco-flex-col flex-centered eco-container-left-border eco-container-right-border'>
                                <Row>
                                    <Col offset={1} span={22}>
                                        <h1 style={{textAlign: "center", fontSize: '1.35rem'}}><strong>Невнесение в установленные сроки платы за негативное воздействие на окружающую среду </strong></h1>
                                    </Col>
                                </Row>

                                <div style={{marginTop: '20px', textAlign: 'left'}}>
                                    <strong style={{fontWeight: 'bold'}}>Невнесение в установленные сроки платы</strong> за негативное воздействие на окружающую среду влечет наложение административного штрафа:
                                    <div style={{padding: '5px 40px', marginTop: '15px'}}>
                                        <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; на юридических лиц - от 50 000 до 100 000 рублей.
                                        <br/><CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; на должностных лиц в размере от 3 000 до 6 000 рублей;
                                    </div>
                                </div>

                                <Button block className='mybut' onClick={() => setShowModal(true)}>Детализация условий наложения штрафа</Button>
                            </Col>
                        </Row>

                        <Draggable_Modal
                            title='Детализация условий наложения административного штрафа'
                            content={
                                <>
                                    <div style={{fontSize: '1.15rem'}}>
                                        <div style={{textAlign: 'left'}}>
                                            <List
                                                header={<div style={{fontSize: '1.2rem', textAlign: 'center'}}><strong>Административный штраф также накладывается в случае сокрытия или искажения экологической информации:</strong></div>}
                                                size="medium"
                                                bordered
                                                dataSource={data}
                                                renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                            />
                                        </div>
                                    </div>
                                </>
                            }
                            show={showModal}
                            hide={setShowModal}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme5_6;