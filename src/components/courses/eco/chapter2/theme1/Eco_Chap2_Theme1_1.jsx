import React, {useState} from 'react';
import {Row, Col, Card, Image, Skeleton, Collapse, Button, Popover, List} from 'antd';
import { BackTop } from 'antd';
import {CheckOutlined} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { Panel } = Collapse;

const Eco_Chap2_Theme1_1 = () => {
    const [showModalObj, setShowModalObj] = useState(false);
    const [showModalPerson, setShowModalPerson] = useState(false);

    const data = [
        <> - разрабатывают и утверждают программу производственного экологического контроля;</>,
        <> - осуществляют производственный экологический контроль в соответствии с установленными требованиями;</>,
        <> - документируют информацию и хранят данные, полученные по результатам осуществления производственного экологического контроля;</>,
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>Производственный экологический контроль</h1>
                </Col>
            </Row>

            <Row>
                <Col lg={{span: 18, offset: 3}} xl={{span: 18, offset: 3}} xxl={{span: 10, offset: 1}} style={{marginBottom: '30px'}}>
                    <Card className='simple-card'>
                        <div>
                            <strong>Производственный контроль в области охраны окружающей среды осуществляется в целях</strong>:
                            <div style={{marginTop: '15px'}}>
                                - обеспечения выполнения в процессе хозяйственной и иной деятельности по охране окружающей среды; <br/>
                                - рациональному использованию и восстановлению природных ресурсов; <br/>
                                - соблюдения требований в области охраны окружающей среды.
                            </div>
                        </div>

                        <div className='eco-img-div-item extra' style={{marginTop: '30px'}}>
                            <Image
                                style={{width: '120px', marginRight: '15px'}}
                                preview = {false}
                                src={'/images/ecoControl.jpg'}
                                placeholder={
                                    <Skeleton.Image />
                                }
                            />
                            <span>
                                При осуществлении производственного экологического контроля измерения выбросов в обязательном порядке производятся в отношении загрязняющих веществ, <strong style={{fontSize: '1.2rem'}}>характеризующих применяемые технологии и особенности производственного процесса</strong> на объекте (маркерные вещества).
                            </span>
                        </div>
                    </Card>

                    <Button block className='mybut-primary' onClick={() => setShowModalObj(true)}>На объектах I категории</Button>
                    <Button block className='mybut' onClick={() => setShowModalPerson(true)}>Юридические лица и индивидуальные предприниматели</Button>
                </Col >

                <Col lg={{span: 20, offset: 2}} xl={{span: 18, offset: 3}} xxl={{span: 11, offset: 1}}>
                    <Collapse
                        accordion
                        defaultActiveKey={1}
                        expandIconPosition='left'
                        className='mycollapse'
                    >
                        <Panel header='Программа производственного экологического контроля содержит сведения' key="1" showArrow className='eco-panel-style'>
                            <>
                                <p>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;
                                    об <strong style={{fontWeight: 'bold'}}>инвентаризации выбросов</strong> загрязняющих веществ в атмосферный воздух и их источников;
                                </p>
                                <p>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;
                                    об <strong style={{fontWeight: 'bold'}}>инвентаризации сбросов</strong> загрязняющих веществ в окружающую среду и их источников;
                                </p>
                                <p>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;
                                    об <strong style={{fontWeight: 'bold'}}>инвентаризации отходов</strong> производства и потребления и объектов их размещения;
                                </p>
                                <p>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;
                                    <strong style={{fontWeight: 'bold'}}>подразделениях и (или) должностных лицах</strong>, отвечающих за осуществление производственного экологического контроля;
                                </p>
                                <p>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;
                                    о собственных и (или) привлекаемых <strong style={{fontWeight: 'bold'}}>аккредитованных испытательных лабораториях</strong>;
                                </p>
                                <p>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;
                                    о <strong style={{fontWeight: 'bold'}}>периодичности и методах</strong> осуществления производственного экологического контроля, местах отбора проб и методиках (методах) измерений.
                                </p>
                            </>
                        </Panel>
                        <Panel header='Документация включает в себя информацию' key="2" showArrow className='eco-panel-style'>
                            <>
                                <p>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    о технологических процессах, технологиях, об оборудовании для производства продукции, о выполненных работах, об оказанных услугах, о применяемых топливе, сырье и материалах, об образовании отходов производства и потребления;
                                </p>
                                <p>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    о фактических объеме или массе выбросов загрязняющих веществ, сбросов загрязняющих веществ, об уровнях физического воздействия и о методиках измерений;
                                </p>
                                <p>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    об обращении с отходами производства и потребления;
                                </p>
                                <p>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    о состоянии окружающей среды, местах отбора проб, методиках измерений.
                                </p>
                            </>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>

            <Draggable_Modal
                title='Стационарные источники выбросов загрязняющих веществ'
                content={
                    <>
                        <div style={{fontSize: '1.15rem'}}>
                            <div className='eco-div-withFloat'>
                                <Image
                                    className='eco-float-ico'
                                    style={{maxWidth: '110px', marginLeft: '-7px', marginRight: '17px'}}
                                    preview = {false}
                                    src={'/images/vibros.jpg'}
                                    placeholder={
                                        <Skeleton.Image />
                                    }
                                />
                                На объектах I категории стационарные источники выбросов загрязняющих веществ, сбросов загрязняющих веществ должны быть оснащены автоматическими средствами измерения и учета показателей выбросов, а также техническими средствами фиксации и передачи информации о показателях выбросов в государственный реестр объектов, оказывающих негативное воздействие на окружающую среду,&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Программой создания системы автоматического контроля определяются стационарные источники и показатели выбросов загрязняющих веществ и (или) сбросов загрязняющих веществ, подлежащие автоматическому контролю, места и сроки установки автоматических средств измерения и учета показателей выбросов загрязняющих веществ и (или) сбросов загрязняющих веществ, а также технических средств фиксации и передачи информации о показателях выбросов загрязняющих веществ и (или) сбросов загрязняющих веществ в государственный реестр объектов, оказывающих негативное воздействие на окружающую среду, состав и форма передаваемой информации</span>}
                                    title=''
                                    trigger="hover">
                                    <strong>на основании программы создания системы автоматического контроля</strong>
                                </Popover>.
                            </div>
                            <div style={{marginTop: '15px'}}>
                                Срок создания системы автоматического контроля не может превышать четыре года со дня получения или пересмотра комплексного экологического разрешения.
                            </div>
                        </div>
                    </>
                }
                show={showModalObj}
                hide={setShowModalObj}
            />
            <Draggable_Modal
                title='Юридические лица и индивидуальные предприниматели'
                content={
                    <>
                        <div>
                            <fieldset className='fieldset-eco fieldset-eco-modal'>
                                <List
                                    className='borderless'
                                    size="medium"
                                    bordered
                                    dataSource={data}
                                    renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                />
                            </fieldset>
                        </div>
                    </>
                }
                show={showModalPerson}
                hide={setShowModalPerson}
            />
        </>
    );
};

export default Eco_Chap2_Theme1_1;