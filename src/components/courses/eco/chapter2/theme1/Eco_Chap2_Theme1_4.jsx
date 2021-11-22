import React from 'react';
import {Row, Col, Image, Skeleton, Popover} from 'antd';
import { BackTop } from 'antd';
import {AlertTwoTone} from "@ant-design/icons";

const Eco_Chap2_Theme1_4 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>Инспекционный контроль осуществляют в виде плановых или внеплановых инспекционных проверок</h1>
                </Col>
            </Row>

            <Row>
                <Col lg={{span: 18, offset: 3}} xl={{span: 10, offset: 1}} xxl={{span: 8, offset: 2}} className='eco-flex-col eco-inv-card' style={{marginBottom: '20px'}}>
                    <div className='eco-container-left-border'>
                        <div className='eco-img-col'>
                            <Image
                                width={400}
                                src={'/images/stamp.png'}
                                preview={false}
                                placeholder={
                                    <Skeleton.Image />
                                }
                            />
                        </div>
                        <div>
                            <strong style={{fontWeight: 'bold'}}>Внеплановую инспекционную проверку</strong> проводят в случае получения результатов производственного эколого-аналитического (инструментального) контроля и&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Далее – ПЭМ.</span>}
                                title=''
                                trigger="hover">
                                производственного экологического мониторинга
                            </Popover>, свидетельствующих о фактах нарушения природоохранных требований, установленных нормативов допустимого воздействия на окружающую среду, невыполнения природоохранных мероприятий
                        </div>
                    </div>
                </Col>

                <Col lg={{span: 20, offset: 2}} xl={{span: 10, offset: 1}} xxl={{span: 10, offset: 1}} className='eco-img-col'>
                    <div>
                        <h1 style={{textAlign: "center", fontSize: '1.35rem', marginBottom: '20px'}}><strong>Внеплановые инспекционные проверки проводят в случае:</strong></h1>
                        <p>
                            <AlertTwoTone twoToneColor='mediumseagreen' style={{ fontSize: '24px'}}/>&nbsp;&nbsp;<strong style={{fontWeight: 'bold'}}>проверки исполнения</strong> предписаний об устранении ранее выявленных нарушений природоохранных требований, невыполнения природоохранных мероприятий;
                        </p>
                        <p>
                            <AlertTwoTone twoToneColor='mediumseagreen' style={{ fontSize: '24px'}}/>&nbsp;&nbsp;<strong style={{fontWeight: 'bold'}}>получения сведений</strong> от органов государственной власти, органов местного самоуправления, организаций и граждан о нарушениях природоохранных требований, негативном воздействии на окружающую среду, невыполнении природоохранных мероприятий;
                        </p>
                        <p>
                            <AlertTwoTone twoToneColor='mediumseagreen' style={{ fontSize: '24px'}}/>&nbsp;&nbsp;<strong style={{fontWeight: 'bold'}}>поступления из подразделений организации информации</strong> о возникновении или угрозе возникновения аварийных ситуаций, сопровождающихся негативным воздействием на окружающую среду;
                        </p>
                        <p>
                            <AlertTwoTone twoToneColor='mediumseagreen' style={{ fontSize: '24px'}}/>&nbsp;&nbsp;возникновения неблагоприятных <strong style={{fontWeight: 'bold'}}>метеорологических условий</strong>;
                        </p>
                        <p>
                            <AlertTwoTone twoToneColor='mediumseagreen' style={{ fontSize: '24px'}}/>&nbsp;&nbsp;<strong style={{fontWeight: 'bold'}}>распоряжения руководства</strong> организации;
                        </p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme1_4;