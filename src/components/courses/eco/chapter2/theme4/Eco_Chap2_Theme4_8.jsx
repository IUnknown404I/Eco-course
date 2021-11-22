import React from 'react';
import {Row, Col, Card, Image, Skeleton, Popover, Collapse} from 'antd';
import { BackTop } from 'antd';
import {CheckOutlined, WarningTwoTone} from "@ant-design/icons";

const { Panel } = Collapse;

const Eco_Chap2_Theme4_8 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Разработка проектов нормативов образования отходов и лимитов на их размещение</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}}>
                    <Card className='simple-card simple-card-radius flex-centered'>
                        <h3>В целях проведения достоверных расчетов для оформления ПНООЛР утвержден Приказ Минприроды России от 07.12.2020 N 1021 "Об утверждении методических указаний по разработке проектов нормативов образования отходов и лимитов на их размещение" (Зарегистрировано в Минюсте России 25.12.2020 N 61835), <strong>где определено, что:</strong></h3>
                    </Card>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col md={{span: 20, offset: 2}} lg={{span: 12, offset: 0}} xl={{span: 11, offset: 1}} className='padding-15-30'>
                    <Col className='eco-img-col flex-centered' style={{padding: '0 0 0 20px'}}>
                        <Image
                            src={'/svg/docs1.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                            // style={{width: '100%', height: '50vh', maxWidth: '1100px'}}
                        />
                    </Col>

                    <div className='eco-flex-col' style={{gap: '20px', marginTop: '20px'}}>
                        <div>
                            <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Методические указания устанавливают единый подход к разработке и общие требования</strong> к содержанию и оформлению проектов&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '600px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Далее- НООЛР.</span>}
                                title=''
                                trigger="hover">
                                нормативов образования отходов и лимитов на их размещение
                            </Popover>, в котором обосновывается планируемая деятельность по образованию и обращению с отходами I - V классов опасности, образующимися в процессе осуществления юридическим лицом, индивидуальным предпринимателем хозяйственной и иной деятельности на объектах, оказывающих&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '600px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Далее - объекты НВОС.</span>}
                                title=''
                                trigger="hover">
                                негативное воздействие на окружающую среду
                            </Popover>, отнесенных к I и II категориям.
                        </div>
                        <div>
                            <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>НООЛР разрабатываются для каждого объекта НВОС I или II категорий.</strong>
                        </div>
                    </div>
                </Col>

                <Col md={{span: 20, offset: 2}} lg={{span: 12, offset: 0}} xl={{span: 11, offset: 0}} style={{padding: '0 20px 0 0'}}>
                    <Collapse
                        className='mycollapse'
                        defaultActiveKey={2}
                        expandIconPosition='right'
                        accordion
                    >
                        <Panel header="Основными задачами при разработке НООЛР являются:" key="1" className='eco-panel-style'>
                            <div className='eco-flex-col' style={{gap: '15px'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; обоснование нормативов образования отходов;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; обоснование запрашиваемых лимитов на размещение отходов для объектов НВОС I категории;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; обоснование массы или объема размещаемых отходов для объектов НВОС II категории.
                                </div>
                            </div>
                        </Panel>
                        <Panel header="При обосновании лимитов на размещение отходов для объектов НВОС I категории и массы или объёмов размещаемых отходов для объектов НВОС II категории учитываются следующие сведения, включаемые в НООЛР:" key="2" className='eco-panel-style'>
                            <div className='eco-flex-col' style={{gap: '15px'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; наличие на производственной территории и вместимость&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Площадок.</span>}
                                        title=''
                                        trigger="hover">
                                        обустроенных мест
                                    </Popover> накопления&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Предназначенных для формирования партии отходов с целью их дальнейшей обработки, утилизации, обезвреживания, размещения, передачи другим юридическим лицам, индивидуальным предпринимателям.</span>}
                                        title=''
                                        trigger="hover">
                                        отходов
                                    </Popover>;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; имеющиеся технические&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>И (или) утилизации, и и (или) обезвреживанию.</span>}
                                        title=''
                                        trigger="hover">
                                        возможности по обработке
                                    </Popover> образующихся отходов юридическим лицом, индивидуальным предпринимателем&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Либо посредством передачи другим юридическим лицам, индивидуальным предпринимателям.</span>}
                                        title=''
                                        trigger="hover">
                                        самостоятельно
                                    </Popover>;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; наличие соответствующих установленным требованиям объектов размещения отходов, эксплуатируемых юридическим лицом, индивидуальным предпринимателем или сторонними организациями, а также имеющиеся технические возможности по размещению в них планируемого количества отходов каждого вида и класса опасности;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; количество планируемых к размещению отходов.
                                </div>
                            </div>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme4_8;