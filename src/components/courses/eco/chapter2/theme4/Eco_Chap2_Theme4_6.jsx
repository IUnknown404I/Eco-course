import React from 'react';
import {Row, Col, Popover} from 'antd';
import { BackTop } from 'antd';

const Eco_Chap2_Theme4_6 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>
                        <strong>Необходимость разработки&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '600px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Проект нормативов образования отходов и лимитов на их размещение.</span>}
                                title=''
                                trigger="hover">
                                ПНООЛР
                            </Popover> на предприятиях 1 и 2 категорий по&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '600px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Негативное воздействие на окружающую среду.</span>}
                                title=''
                                trigger="hover">
                                НВОС
                            </Popover>
                        </strong>
                    </h1>
                </Col>
            </Row>

            <Row className='padding-15-30'>
                {/*1*/}
                <Col lg={{span: 22, offset: 1}} xl={{span: 12, offset: 0}}>
                    <div className='eco-flex-row flex-centered'>
                        <Col className='eco-flex-col flex-centered'>
                            <div className='eco-numeration-num' style={{fontSize: '5rem'}}>1</div>
                        </Col>
                        <Col offset={1} className='eco-flex-col flex-left' style={{justifyContent: 'space-around'}}>
                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                <span>В целях обеспечения охраны окружающей среды и здоровья человека, уменьшения количества отходов применительно к юридическим лицам и индивидуальным предпринимателям, в результате хозяйственной и (или) иной деятельности которых образуются отходы, <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>устанавливаются нормативы образования отходов и лимиты на их размещение.</strong></span>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col lg={{span: 22, offset: 1}} xl={{span: 11, offset: 1}}>
                    <div className='eco-flex-row flex-centered'>
                        <Col className='eco-flex-col flex-centered'>
                            <div className='eco-numeration-num' style={{fontSize: '5rem'}}>2</div>
                        </Col>
                        <Col offset={1} className='eco-flex-col flex-left' style={{justifyContent: 'space-around'}}>
                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                <span>Нормативы образования отходов и лимиты на их размещение разрабатываются юридическими лицами или индивидуальными предпринимателями, осуществляющими хозяйственную и (или) иную деятельность на объектах&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Определяемых в соответствии с законодательством в области охраны окружающей среды.</span>}
                                        title=''
                                        trigger="hover">
                                        I и II категорий.
                                    </Popover>
                                </span>
                            </div>
                        </Col>
                    </div>
                </Col>

                {/*2*/}
                <Col lg={{span: 22, offset: 1}} xl={{span: 12, offset: 0}} style={{marginTop: '20px'}}>
                    <div className='eco-flex-row flex-centered'>
                        <Col className='eco-flex-col flex-centered'>
                            <div className='eco-numeration-num' style={{fontSize: '5rem'}}>3</div>
                        </Col>
                        <Col offset={1} className='eco-flex-col flex-left' style={{justifyContent: 'space-around'}}>
                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                <span>Для юридических лиц или индивидуальных предпринимателей, осуществляющих хозяйственную и (или) иную деятельность на объектах I категории, нормативы образования отходов и лимиты на их размещение устанавливаются на основании <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>комплексного экологического разрешения.</strong></span>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col lg={{span: 22, offset: 1}} xl={{span: 11, offset: 1}} style={{marginTop: '20px'}}>
                    <div className='eco-flex-row flex-centered'>
                        <Col className='eco-flex-col flex-centered'>
                            <div className='eco-numeration-num' style={{fontSize: '5rem'}}>4</div>
                        </Col>
                        <Col offset={1} className='eco-flex-col flex-left' style={{justifyContent: 'space-around'}}>
                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                <span>Юридические лица и индивидуальные предприниматели, осуществляющие хозяйственную и (или) иную деятельность на объектах II категории, включают <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>информацию об объеме или о массе образовавшихся и размещенных отходов в декларацию о воздействии на окружающую среду.</strong></span>
                            </div>
                        </Col>
                    </div>
                </Col>

                {/*3*/}
                <Col lg={{span: 22, offset: 1}} xl={{span: 12, offset: 0}} style={{marginTop: '20px'}}>
                    <div className='eco-flex-row flex-centered'>
                        <Col className='eco-flex-col flex-centered'>
                            <div className='eco-numeration-num' style={{fontSize: '5rem'}}>5</div>
                        </Col>
                        <Col offset={1} className='eco-flex-col flex-left' style={{justifyContent: 'space-around'}}>
                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                <span>Юридические лица и индивидуальные предприниматели, осуществляющие хозяйственную и (или) иную деятельность на объектах III категории, представляют в уполномоченный Правительством Российской Федерации&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Или исполнительные органы государственной власти субъектов РФ.</span>}
                                        title=''
                                        trigger="hover">
                                        федеральный орган исполнительной власти
                                    </Popover> <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>отчетность об образовании, утилизации, обезвреживании, о размещении отходов.</strong></span>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col lg={{span: 22, offset: 1}} xl={{span: 11, offset: 1}} style={{marginTop: '20px'}}>
                    <div className='eco-flex-row flex-centered'>
                        <Col className='eco-flex-col flex-centered'>
                            <div className='eco-numeration-num' style={{fontSize: '5rem'}}>6</div>
                        </Col>
                        <Col offset={1} className='eco-flex-col flex-left' style={{justifyContent: 'space-around'}}>
                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                <span>При осуществлении хозяйственной и (или) иной деятельности на объектах IV категории, разработка нормативов образования отходов и лимитов на их размещение и&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Об образовании, использовании, обезвреживании и о размещении отходов.</span>}
                                        title=''
                                        trigger="hover">
                                            представление отчетности
                                    </Popover> <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>не требуются.</strong></span>
                            </div>
                        </Col>
                    </div>
                </Col>

                {/*4*/}
                <Col lg={{span: 22, offset: 1}} xl={{span: 12, offset: 0}} style={{marginTop: '20px'}}>
                    <div className='eco-flex-row flex-centered'>
                        <Col className='eco-flex-col flex-centered'>
                            <div className='eco-numeration-num' style={{fontSize: '5rem'}}>7</div>
                        </Col>
                        <Col offset={1} className='eco-flex-col flex-left' style={{justifyContent: 'space-around'}}>
                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                <span>Порядок разработки и утверждения нормативов образования отходов и лимитов на их размещение, представления и контроля&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Об образовании, использовании, обезвреживании и о размещении отходов.</span>}
                                        title=''
                                        trigger="hover">
                                        отчетности
                                    </Popover> устанавливает федеральный орган исполнительной власти в области обращения с отходами.</span>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col lg={{span: 22, offset: 1}} xl={{span: 11, offset: 1}} style={{marginTop: '20px'}}>
                    <div className='eco-flex-row flex-centered'>
                        <Col className='eco-flex-col flex-centered'>
                            <div className='eco-numeration-num' style={{fontSize: '5rem'}}>8</div>
                        </Col>
                        <Col offset={1} className='eco-flex-col flex-left' style={{justifyContent: 'space-around'}}>
                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                <span><strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>За превышение лимитов на размещение отходов</strong> юридические лица и индивидуальные предприниматели несут ответственность, предусмотренную законодательством Российской Федерации.</span>
                            </div>
                        </Col>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme4_6;