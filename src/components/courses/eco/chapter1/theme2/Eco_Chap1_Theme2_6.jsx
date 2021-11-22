import React, {useState} from 'react';
import {Row, Col, Tabs, Collapse, Popover, Button} from 'antd';
import { BackTop } from 'antd';
import {
    CheckOutlined,
    ExclamationCircleTwoTone,
    ExclamationOutlined,
} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Eco_Chap1_Theme2_4 = () => {
    const [current, setCurrent] = useState(0);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <ExclamationOutlined style={{color: 'darkorange'}}/> об инвентаризации выбросов загрязняющих веществ в атмосферный воздух и их источников;
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <ExclamationOutlined style={{color: 'darkorange'}}/> об инвентаризации сбросов загрязняющих веществ в окружающую среду и их источников;
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <ExclamationOutlined style={{color: 'darkorange'}}/> Захоронения отходов IV и V классов опасности, включая твердые коммунальные отходы (с проектной мощностью менее 20 тонн в год)
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <ExclamationOutlined style={{color: 'darkorange'}}/> об инвентаризации отходов производства и потребления и объектов их размещения;
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <ExclamationOutlined style={{color: 'darkorange'}}/> о подразделениях и (или) должностных лицах, отвечающих за осуществление производственного экологического контроля;
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <ExclamationOutlined style={{color: 'darkorange'}}/> о собственных и (или) привлекаемых аккредитованных&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Центрах.</span>}
                                    title=''
                                    trigger="hover">
                                    испытательных лабораториях
                                </Popover>;
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <ExclamationOutlined style={{color: 'darkorange'}}/> о периодичности и методах осуществления производственного экологического контроля, местах отбора проб и&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Методах.</span>}
                                    title=''
                                    trigger="hover">
                                    методиках
                                </Popover> измерений.
                            </div>
                        </Col>
                    </Row>
                </>,
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>
                        Производственный контроль в области охраны окружающей среды (производственный экологический контроль)
                    </strong></h1>
                </Col>
            </Row>

            <Row style={{marginTop: '-10px'}} className='padding-15-30'>
                <Col lg={{span: 24, offset: 0}} xl={{span: 12, offset: 0}} style={{padding: '0 10px'}}>
                    <div className='eco-flex-col' style={{gap: '20px', fontSize: '1.3rem'}}>
                        <Collapse
                            className='mycollapse'
                            // defaultActiveKey={3}
                            expandIconPosition='right'
                            accordion
                        >
                            <Panel
                                header={<div style={{fontSize: '1.35rem'}}>Производственный экологический контроль осуществляется в целях:</div>}
                                key="1"
                                className='eco-panel-style'
                                showArrow
                            >
                                <div style={{fontSize: '1.25rem'}}>
                                    <div className='eco-flex-col' style={{gap: '10px'}}>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; обеспечения выполнения в процессе хозяйственной и иной деятельности мероприятий по охране окружающей среды, рациональному использованию и восстановлению природных ресурсов;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; соблюдения требований в области охраны окружающей среды, установленных законодательством в области охраны окружающей среды.
                                        </div>
                                    </div>
                                </div>
                            </Panel>
                            <Panel
                                header={<div style={{fontSize: '1.35rem'}}>Юридические лица и индивидуальные предприниматели, осуществляющие хозяйственную и (или) иную деятельность на объектах I, II и III категорий:</div>}
                                key="2"
                                className='eco-panel-style'
                                showArrow
                            >
                                <div style={{fontSize: '1.25rem'}}>
                                    <div className='eco-flex-col' style={{gap: '10px'}}>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; разрабатывают и утверждают программу производственного экологического контроля; (с проектной мощностью 0,1 тонны в час и более);
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; осуществляют производственный экологический контроль;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; документируют информацию и хранят данные, полученные по результатам осуществления производственного экологического контроля.
                                        </div>
                                    </div>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>

                    <div style={{marginTop: '30px'}}>
                        <h3><strong>Программа производственного экологического контроля содержит сведения:</strong></h3>

                        <div className='eco-steps-interaction-container eco-inv-card' style={{marginBottom: '20px'}}>
                            <div className='eco-flex-row flex-left'><div className='eco-steps-current-num'>{current + 1}</div>из {steps.length}</div>
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action-2 eco-steps-action-space">
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
                        </div>
                    </div>

                    <div>
                        <Button block className='mybut-primary' onClick={() => {setShowModal1(true)}}>Автоматические средства измерения, учета выбросов</Button>
                        <Button block className='mybut' onClick={() => {setShowModal2(true)}}>Документация о результатах ПЭК</Button>
                    </div>
                </Col>

                <Col lg={{span: 24, offset: 0}} xl={{span: 12, offset: 0}} style={{padding: '20px 10px 0'}}>
                    <div style={{marginBottom: '0px', fontSize: '1.35rem'}} className='eco-inv-card'>
                        <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; <strong style={{fontWeight: 'bold'}}>Автоматические средства измерения подразделяются на следующие виды:</strong>

                        <div className='eco-flex-col padding-15-30' style={{gap: '10px'}}>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; Автоматические средства измерения показателей <strong style={{fontWeight: 'bold'}}>ВЫБРОСОВ</strong> загрязняющих веществ
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; Автоматические средства измерения показателей <strong style={{fontWeight: 'bold'}}>СБРОСОВ</strong> загрязняющих веществ
                            </div>
                        </div>
                    </div>

                    <Tabs size='large' className='eco-tab-list' animated centered>
                        <TabPane tab={<div style={{fontSize: '1.35rem'}}>ВЫБРОС</div>} key="1">
                            <div className='eco-flex-col padding-15-30' style={{gap: '10px'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; концентрации загрязняющих веществ, мг/м3;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; объемного расхода отходящих газов, м3/ч;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; давления отходящих газов, кПа;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; температуры отходящих газов, °C;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '900px'}}
                                        className='pop_text'
                                        style={{maxWidth: '350px'}}
                                        content={<span>При необходимости.</span>}
                                        title=''
                                        trigger="hover">
                                        содержания кислорода в отходящих газах, %;
                                    </Popover>
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '900px'}}
                                        className='pop_text'
                                        style={{maxWidth: '350px'}}
                                        content={<span>При необходимости.</span>}
                                        title=''
                                        trigger="hover">
                                        влажности отходящих газов, %.
                                    </Popover>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.35rem'}}>СБРОС</div>} key="2">
                            <div className='eco-flex-col padding-15-30' style={{gap: '10px'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; концентрации загрязняющих веществ, мг/м3;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; объемного расхода сбрасываемых сточных вод, м3/ч;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; температуры сбрасываемых сточных вод, °C;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; водородного показателя сбрасываемых сточных вод в единицах pH;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; величины химического потребления кислорода, мг/дм3;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; мутности.
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>

            <Draggable_Modal
                title='Автоматические средства измерения и учета показателей выбросов'
                content={
                    <>
                        <div className='eco-flex-col' style={{marginTop: '-10px', gap: '15px', fontSize: '1.25rem'}}>
                            <div>
                                <ExclamationCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>На объектах I категории стационарные источники выбросов загрязняющих веществ</strong>, сбросов загрязняющих веществ, образующихся при эксплуатации технических устройств, оборудования или их совокупности, виды которых устанавливаются Правительством Российской Федерации, должны быть оснащены автоматическими средствами измерения и учета показателей выбросов загрязняющих веществ и (или) сбросов загрязняющих веществ, а также техническими средствами фиксации и передачи информации о показателях выбросов загрязняющих веществ и (или) сбросов загрязняющих веществ в государственный реестр объектов, оказывающих негативное воздействие на окружающую среду, на основании программы создания системы автоматического контроля.
                            </div>
                            <div>
                                <ExclamationCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>Программой создания системы автоматического контроля определяются</strong> стационарные источники и показатели выбросов загрязняющих веществ и (или) сбросов загрязняющих веществ, подлежащие автоматическому контролю, места и сроки установки автоматических средств измерения и учета показателей выбросов загрязняющих веществ и (или) сбросов загрязняющих веществ, а также технических средств фиксации и передачи информации о показателях выбросов загрязняющих веществ и (или) сбросов загрязняющих веществ в государственный реестр объектов, оказывающих негативное воздействие на окружающую среду, состав и форма передаваемой информации.
                            </div>

                            <div>
                                <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>Стационарные источники сбросов включаются в программу при соблюдении следующих условий:</strong>
                                <div className='eco-flex-col' style={{gap: '5px', padding: '0 0 0 25px', marginTop: '10px', fontSize: '1.25rem'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; сбросы сточных вод стационарным источником образуются при эксплуатации технических устройств;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; сбросы сточных вод стационарным источником в общий объем сточных вод, отводимых с объектов I категории, составляет более 15%;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; наличие средств и методов измерений концентраций загрязняющих веществ в условиях эксплуатации стационарного источника сбросов.
                                    </div>
                                </div>
                            </div>

                            <div>
                                <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>Срок создания системы автоматического контроля не может превышать четыре года со дня получения или пересмотра комплексного экологического разрешения.</strong>
                            </div>
                        </div>
                    </>
                }
                show={showModal1}
                hide={setShowModal1}
            />
            <Draggable_Modal
                title='Документация, содержащая сведения о результатах ПЭК'
                content={
                    <>
                        <div className='eco-flex-col' style={{marginTop: '-10px', gap: '15px', fontSize: '1.25rem'}}>
                            <div>
                                <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>Документация, содержащая сведения о результатах осуществления производственного экологического контроля, включает в себя документированную информацию:</strong>
                                <div className='eco-flex-col' style={{gap: '5px', padding: '0 0 0 25px', marginTop: '10px', fontSize: '1.25rem'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; о технологических процессах, технологиях, об оборудовании для производства продукции, товара;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; о выполненных работах, об оказанных услугах, о применяемых топливе, сырье и материалах;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; об образовании отходов производства и потребления;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; о фактических объеме или массе выбросов загрязняющих веществ, сбросов загрязняющих веществ, об уровнях физического воздействия и о методиках измерений;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; об обращении с отходами производства и потребления;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; о состоянии окружающей среды, местах отбора проб, методиках измерений.
                                    </div>
                                </div>
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

export default Eco_Chap1_Theme2_4;