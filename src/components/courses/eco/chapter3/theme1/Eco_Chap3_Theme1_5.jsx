import React, {useState} from 'react';
import {Row, Col, Popover, Button} from 'antd';
import { BackTop } from 'antd';
import {ExclamationCircleTwoTone, WarningTwoTone} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const Eco_Chap3_Theme1_5 = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>
                        <strong>Действия эколога при проведении плановой/внеплановой выездной проверки предприятия. Порядок оформления результатов проверки</strong>
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={22}>
                    <h1 style={{marginBottom: '20px'}}><ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; <strong>Основными принципами защиты прав</strong> юридических лиц, индивидуальных предпринимателей при осуществлении государственного контроля (надзора), муниципального контроля являются:</h1>
                </Col>

                <Col md={{span: 20, offset: 2}} lg={{span: 10, offset: 1}} className='eco-flex-col'>
                    <div className='eco-flex-row'>
                        <div className='eco-numeration-num'>1</div>
                        <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                            преимущественно уведомительный порядок начала осуществления отдельных видов предпринимательской деятельности;
                        </div>
                    </div>
                    <div className='eco-flex-row'>
                        <div className='eco-numeration-num'>2</div>
                        <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                            презумпция добросовестности юридических лиц, индивидуальных предпринимателей;
                        </div>
                    </div>
                    <div className='eco-flex-row'>
                        <div className='eco-numeration-num'>3</div>
                        <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                            проведение проверок в соответствии с полномочиями органа государственного контроля (надзора), органа муниципального контроля, их должностных лиц;
                        </div>
                    </div>
                    <div className='eco-flex-row' style={{marginTop: '10px'}}>
                        <div className='eco-numeration-num'>4</div>
                        <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                            недопустимость требования о получении юридическими лицами, индивидуальными предпринимателями разрешений, заключений для начала осуществления предпринимательской деятельности;
                        </div>
                    </div>
                </Col>

                <Col md={{span: 20, offset: 2}} lg={{span: 11, offset: 1}} className='eco-flex-col'>
                    <div className='eco-flex-row'>
                        <div className='eco-numeration-num'>5</div>
                        <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                            <div>
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Органов государственного контроля (надзора), органов муниципального контроля, их должностных лиц.</span>}
                                    title=''
                                    trigger="hover">
                                    ответственность
                                </Popover> за нарушение законодательства Российской Федерации при осуществлении государственного контроля (надзора), муниципального контроля;
                            </div>
                        </div>
                    </div>
                    <div className='eco-flex-row'>
                        <div className='eco-numeration-num'>6</div>
                        <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                            <div>
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Органами государственного контроля (надзора), органами муниципального контроля.</span>}
                                    title=''
                                    trigger="hover">
                                    недопустимость
                                </Popover> взимания с юридических лиц, индивидуальных предпринимателей платы за проведение мероприятий по контролю;
                            </div>
                        </div>
                    </div>
                    <div className='eco-flex-row'>
                        <div className='eco-numeration-num'>7</div>
                        <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                            <div>
                                финансирование за счет средств соответствующих бюджетов&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Проводимых органами государственного контроля (надзора), органами муниципального контроля.</span>}
                                    title=''
                                    trigger="hover">
                                    проверок
                                </Popover>, в том числе мероприятий по контролю;
                            </div>
                        </div>
                    </div>

                    <Button block className='mybut-primary' onClick={() => setShowModal1(true)}>Открытость и доступность</Button>
                    <Button block className='mybut' onClick={() => setShowModal2(true)}>Недопустимость проводимых проверок</Button>
                </Col>
            </Row>

            <Draggable_Modal
                title='Открытость и доступность'
                content={
                    <>
                        <div style={{fontSize: '1.2rem'}}>
                            <div className='eco-div-withFloat'>
                                <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; <strong>Открытость и доступность для юридических лиц, индивидуальных предпринимателей</strong>&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Соблюдение которых проверяется при осуществлении государственного контроля (надзора), муниципального контроля.</span>}
                                    title=''
                                    trigger="hover">
                                    нормативных правовых актов Российской Федерации, муниципальных правовых актов,
                                </Popover> включая информацию об организации и о проведении проверок, о результатах проведения проверок и о принятых мерах по пресечению и (или) устранению последствий выявленных нарушений, о правах и об обязанностях органов государственного контроля (надзора), органов муниципального контроля, их должностных лиц.
                            </div>
                        </div>
                    </>
                }
                show={showModal1}
                hide={setShowModal1}
            />
            <Draggable_Modal
                title='Недопустимость проводимых проверок'
                content={
                    <>
                        <div style={{fontSize: '1.2rem'}}>
                            <div className='eco-div-withFloat'>
                                <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; Недопустимость проводимых в отношении одного юридического лица или одного индивидуального предпринимателя несколькими органами государственного контроля (надзора), органами муниципального <strong>контроля проверок исполнения одних и тех же обязательных требований и требований, установленных муниципальными правовыми актами.</strong>
                            </div>
                        </div>
                    </>
                }
                show={showModal2}
                hide={setShowModal2}
            />
        </>
    );
};

export default Eco_Chap3_Theme1_5;