import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Popover, Collapse} from 'antd';
import { BackTop } from 'antd';
import Slider from "react-slick";
import {CheckOutlined, ExclamationCircleOutlined} from "@ant-design/icons";

const { Panel } = Collapse;

const Eco_Chap3_Theme1_8 = () => {
    const [carouselState, setCarouselState] = useState({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>
                        <strong>Порядок оформления результатов проверки</strong>
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={22}>
                    <h1><strong>В акте проверки указываются:</strong></h1>

                    <div className='eco-slider-container eco-slider-flex-centered eco-slider-big-dots'>
                        <Slider {...carouselState} className='eco-slider'>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    Сведения о результатах проверки, в том числе о выявленных нарушениях обязательных требований и требований, установленных муниципальными правовыми актами, об их характере и о лицах, допустивших указанные нарушения;
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    Дата, время и место составления акта проверки;
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    Наименование&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Или органа муниципального контроля.</span>}
                                        title=''
                                        trigger="hover">
                                        органа государственного контроля (надзора);
                                    </Popover>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    Фамилии, имена, отчества и должности должностного лица или должностных лиц, проводивших проверку;
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    Наименование&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Или фамилия, имя отчество индивидуального предпринимателя, а также фамилия, имя, отчество и должность руководителя, иного должностного лица или уполномоченного представителя юридического лица, уполномоченного представителя индивидуального предпринимателя, присутствовавших при проведении проверки.</span>}
                                        title=''
                                        trigger="hover">
                                        проверяемого юридического лица;
                                    </Popover>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    Дата, время, продолжительность и место проведения проверки;
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    Сведения&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Или отказе в ознакомлении.</span>}
                                        title=''
                                        trigger="hover">
                                        об ознакомлении
                                    </Popover> с актом проверки&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Иного должностного лица или уполномоченного представителя юридического лица, индивидуального предпринимателя, его уполномоченного представителя, присутствовавших при проведении проверки.</span>}
                                        title=''
                                        trigger="hover">
                                        руководителя
                                    </Popover>,&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Либо о невозможности внесения такой записи в связи с отсутствием у юридического лица, индивидуального предпринимателя указанного журнала.</span>}
                                        title=''
                                        trigger="hover">
                                        сведения о внесении в журнал учета проверок записи о проведенной проверке;
                                    </Popover>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '80px'}}>
                <Col md={{span: 20, offset: 2}} lg={{span: 14, offset: 1}} xl={{span: 11, offset: 3}} className='eco-flex-col'>
                    <Collapse
                        accordion
                        expandIconPosition='left'
                        className='mycollapse'
                    >
                        <Panel header='К акту проверки прилагаются' key="1" showArrow className='eco-panel-style'>
                            <>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>К акту проверки прилагаются</strong> протоколы отбора образцов продукции, проб обследования объектов окружающей среды и объектов производственной среды, протоколы или заключения проведенных&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>Испытаний и экспертиз.</span>}
                                    title=''
                                    trigger="hover">
                                    исследований
                                </Popover>, объяснения&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>На которых возлагается ответственность за нарушение обязательных требований или требований, установленных муниципальными правовыми актами.</span>}
                                    title=''
                                    trigger="hover">
                                    работников юридического лица, работников индивидуального предпринимателя
                                </Popover>, предписания об устранении выявленных нарушений и иные связанные с результатами проверки документы или их копии.
                            </>
                        </Panel>
                        <Panel header='Акт проверки оформляется' key="2" showArrow className='eco-panel-style'>
                            <>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Акт проверки оформляется непосредственно после ее завершения</strong> в двух экземплярах, один из которых с копиями приложений вручается&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>Иному должностному лицу или уполномоченному представителю юридического лица, индивидуальному предпринимателю, его уполномоченному представителю.</span>}
                                    title=''
                                    trigger="hover">
                                    руководителю
                                </Popover> под расписку об ознакомлении либо об отказе в ознакомлении с актом проверки.
                            </>
                        </Panel>
                        <Panel header='В случае несогласия' key="3" showArrow className='eco-panel-style'>
                            <>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>Проверка которых проводилась.</span>}
                                    title=''
                                    trigger="hover">
                                    Юридическое лицо, индивидуальный предприниматель
                                </Popover>, <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>в случае несогласия</strong> с фактами, выводами, предложениями, изложенными в акте проверки, либо с выданным предписанием об устранении выявленных нарушений в течение пятнадцати дней с даты получения акта проверки <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>вправе&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>В соответствующие органы государственного контроля (надзора), орган муниципального контроля.</span>}
                                    title=''
                                    trigger="hover">
                                    представить
                                </Popover> в письменной форме&nbsp;</strong>
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>При этом юридическое лицо, индивидуальный предприниматель вправе приложить к таким возражениям документы, подтверждающие обоснованность таких возражений, или их заверенные копии, либо в согласованный срок передать их в орган государственного контроля (надзора), орган муниципального контроля.</span>}
                                    title=''
                                    trigger="hover">
                                    возражения в отношении акта проверки и (или) выданного предписания об устранении выявленных нарушений
                                </Popover> в целом или его отдельных положений.
                            </>
                        </Panel>
                    </Collapse>

                    <div className='eco-img-div-item extra flex-centered padding-15-30' style={{marginTop: '30px'}}>
                        <strong style={{fontWeight: 'bold'}}>
                            <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; По результатам&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Должностными лицами органа государственного контроля (надзора), органа муниципального контроля, проводящими проверку.</span>}
                                title=''
                                trigger="hover">
                                проверки
                            </Popover> составляется акт по установленной форме в двух экземплярах.
                        </strong>
                    </div>
                </Col>

                <Col xs={{span: 20, offset: 2}} sm={{span: 20, offset: 2}} md={{span: 20, offset: 2}} lg={{span: 8, offset: 1}} xl={{span: 9, offset: 1}} className='eco-img-col flex-centered'>
                    <Image
                        src={'/svg/act.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '50vh', maxWidth: '1100px'}}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap3_Theme1_8;