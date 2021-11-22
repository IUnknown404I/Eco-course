import React, {useState} from 'react';
import {Row, Col, Tabs, Collapse, Popover, Button, Image, Skeleton} from 'antd';
import { BackTop } from 'antd';
import {
    CheckOutlined,
    ExclamationCircleTwoTone,
    InfoCircleTwoTone,
    PlusOutlined
} from "@ant-design/icons";
import Slider from "react-slick";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Eco_Chap1_Theme2_4 = () => {
    const [current, setCurrent] = useState(0);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const [carouselState, setCarouselState] = useState({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    });

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
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; Размещения отходов III класса опасности (с проектной мощностью менее 500 тонн в год)
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
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; Хранения отходов IV и V классов опасности (с проектной мощностью менее 50 тонн в сутки и более)
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
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; Захоронения отходов IV и V классов опасности, включая твердые коммунальные отходы (с проектной мощностью менее 20 тонн в год)
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
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; Утилизации отходов IV и V классов опасности с применением термических&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Сжигание, пиролиз, газификация.</span>}
                                    title=''
                                    trigger="hover">
                                    способов
                                </Popover> (с проектной мощностью менее 3 тонн в час)
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
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp;&nbsp;
                                <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '900px'}}
                                        className='pop_text'
                                        style={{maxWidth: '350px'}}
                                        content={<span>Спектрофотометры, полярографы, хроматографы и т.д.</span>}
                                        title=''
                                        trigger="hover">
                                        Утилизации, обезвреживания
                                    </Popover> отходов производства и потребления с применением оборудования и (или) установок, включая мобильные установки:
                                </strong>

                                <div className='eco-flex-col' style={{padding: '10px 0 0 35px'}}>
                                    <div>
                                        <PlusOutlined style={{color: 'green'}}/>&nbsp; отходов I класса опасности (с проектной мощностью менее 0,1 тонны в час);
                                    </div>
                                    <div>
                                        <PlusOutlined style={{color: 'green'}}/>&nbsp; отходов II класса опасности (с проектной мощностью менее 0,3 тонны в час);
                                    </div>
                                    <div>
                                        <PlusOutlined style={{color: 'green'}}/>&nbsp; отходов III класса опасности (с проектной мощностью менее 1 тонны в час).
                                    </div>
                                </div>
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
                                <InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp;&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Кроме применения термических способов.</span>}
                                    title=''
                                    trigger="hover">
                                    Обезвреживания
                                </Popover> отходов IV и V классов опасности с применением оборудования и (или) установок, включая мобильные установки (с проектной мощностью менее 3 тонн в час)
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
                                <InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp;&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Кроме применения термических способов.</span>}
                                    title=''
                                    trigger="hover">
                                    Утилизации отходов
                                </Popover> IV и V классов опасности с применением оборудования и (или) установок, включая мобильные установки
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
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; Обработки отходов производства и потребления I - III классов опасности
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
                        Производственный экологический контроль
                    </strong></h1>
                </Col>
            </Row>

            <Row style={{marginTop: '-10px'}}>

                <Col span={24}>
                    <Tabs size='large' className='eco-tab-list' animated>

                        <TabPane tab={<div style={{fontSize: '1.35rem'}}>Объекты I категории</div>} key="1">
                            <Row className='eco-div-padding'>
                                <Col span={24}>
                                    <div style={{marginBottom: '30px', fontSize: '1.35rem'}}>
                                        <strong style={{fontWeight: 'bold'}}>К объектам I категории по степени негативного воздействия на окружающую среду относятся следующие объекты обращения с отходами:</strong>
                                    </div>
                                </Col>
                                <Col lg={{span: 24, offset: 0}} xl={{span: 11, offset: 0}}>
                                    <div className='eco-flex-col' style={{gap: '20px', fontSize: '1.3rem'}}>
                                        <Collapse
                                            className='mycollapse'
                                            // defaultActiveKey={3}
                                            expandIconPosition='right'
                                            accordion
                                        >
                                            <Panel header={<span>По обращению с отходами производства и потребления в части, касающейся:</span>} key="1" className='eco-panel-style' showArrow>
                                                <div style={{fontSize: '1.25rem'}}>
                                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; Утилизации, обезвреживания отходов производства и потребления&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '900px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '350px'}}
                                                        content={<span>Сжигание, пиролиз, газификация.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        термическим способом
                                                    </Popover> с применением оборудования и (или) установок, за исключением мобильных установок:

                                                    <div className='eco-flex-col' style={{padding: '10px 0 0 35px'}}>
                                                        <div>
                                                            <PlusOutlined style={{color: 'green'}}/>&nbsp; отходов I - III классов опасности;
                                                        </div>
                                                        <div>
                                                            <PlusOutlined style={{color: 'green'}}/>&nbsp; отходов IV и V классов опасности (с проектной мощностью 3 тонны в час и более).
                                                        </div>
                                                    </div>
                                                </div>
                                            </Panel>
                                            <Panel
                                                header={<span>Утилизации, обезвреживания&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '800px'}}
                                                        className='pop_icon'
                                                        style={{maxWidth: '550px'}}
                                                        content={<span>Кроме применения термических способов.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        <InfoCircleTwoTone style={{fontSize: '22px'}} twoToneColor='mediumseagreen'/>
                                                    </Popover>&nbsp; отходов производства и потребления с применением оборудования и (или) установок, за исключением мобильных установок:
                                                </span>}
                                                key="2"
                                                className='eco-panel-style'
                                                showArrow
                                            >
                                                <div style={{fontSize: '1.25rem'}}>
                                                    <div className='eco-flex-col' style={{gap: '10px'}}>
                                                        <div>
                                                            <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                                            <Popover
                                                                color={"azure"}
                                                                overlayStyle={{maxWidth: '900px'}}
                                                                className='pop_text'
                                                                style={{maxWidth: '350px'}}
                                                                content={<span>Кроме применения термических способов.</span>}
                                                                title=''
                                                                trigger="hover">
                                                                отходов I класса опасности
                                                            </Popover> (с проектной мощностью 0,1 тонны в час и более);
                                                        </div>
                                                        <div>
                                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; отходов II класса опасности (с проектной мощностью 0,3 тонны в час и более);
                                                        </div>
                                                        <div>
                                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; отходов III класса опасности (с проектной мощностью 1 тонна в час и более);
                                                        </div>
                                                    </div>
                                                </div>
                                            </Panel>
                                            <Panel
                                                header={<span>Обеззараживания&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '800px'}}
                                                        className='pop_icon'
                                                        style={{maxWidth: '550px'}}
                                                        content={<span>Кроме применения термических способов.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        <InfoCircleTwoTone style={{fontSize: '22px'}} twoToneColor='mediumseagreen'/>
                                                    </Popover>&nbsp; отходов IV и V классов опасности:
                                                </span>}
                                                key="3"
                                                className='eco-panel-style'
                                                showArrow
                                            >
                                                <div className='divChildren-margin-bottom-15' style={{fontSize: '1.25rem'}}>
                                                    <InfoCircleTwoTone style={{fontSize: '20px'}}/>&nbsp; с проектной мощностью 3 тонны в час и более, за исключением мобильных установок;
                                                </div>
                                            </Panel>
                                        </Collapse>

                                        <div style={{marginBottom: '30px', fontSize: '1.35rem'}} className='eco-inv-card flex-centered'>
                                            <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; По обеззараживанию и (или) обезвреживанию, в том числе термическим способом, биологических и (или) медицинских отходов (с проектной мощностью 10 тонн в сутки и более).
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={{span: 24, offset: 0}} xl={{span: 12, offset: 1}}>
                                    <h3><strong style={{fontWeight: 'bold'}}>По размещению отходов производства и потребления в части, касающейся:</strong></h3>

                                    <div className='padding-15-30' style={{marginTop: '-30px'}}>
                                        <div className='eco-flex-row'>
                                            <div className='eco-numeration-num' style={{fontSize: '4rem'}}>1</div>

                                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                                <span>размещения отходов I и (или) II классов опасности;</span>
                                            </div>
                                        </div>
                                        <div className='eco-flex-row' style={{marginTop: '-30px'}}>
                                            <div className='eco-numeration-num' style={{fontSize: '4rem'}}>2</div>

                                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                                <span>размещения отходов III класса опасности (с проектной мощностью 500 тонн в год и более);</span>
                                            </div>
                                        </div>
                                        <div className='eco-flex-row' style={{marginTop: '-30px'}}>
                                            <div className='eco-numeration-num' style={{fontSize: '4rem'}}>3</div>

                                            <div className='eco-numeration-text' style={{fontSize: '1.3rem', width: '100%'}}>
                                                <span>захоронения отходов IV и V классов опасности, включая твердые коммунальные отходы (с проектной мощностью 20 тыс. тонн в год и более).</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>

                        <TabPane tab={<div style={{fontSize: '1.35rem'}}>Объекты II категории</div>} key="2">
                            <Row>
                                <Col span={24}>
                                    <div style={{marginBottom: '30px', fontSize: '1.35rem'}}>
                                        <strong style={{fontWeight: 'bold'}}>Ко II категории относятся объекты обращения с отходами:</strong>
                                    </div>
                                </Col>

                                <Col md={{span: 24, offset: 0}} lg={{span: 13, offset: 0}} className='eco-flex-col eco-img-col'>
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

                                    <div style={{marginBottom: '30px', fontSize: '1.35rem'}} className='eco-inv-card flex-centered'>
                                        <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; Деятельность в области обращения с отходами <strong style={{fontWeight: 'bold'}}>подлежит государственному, производственному и общественному контролю</strong> в области обращения с отходами.
                                    </div>
                                </Col>

                                <Col md={{span: 24, offset: 0}} lg={{span: 10, offset: 1}} className='eco-flex-col ' style={{padding: '0 0 0 20px'}}>
                                    <Image
                                        src={'/svg/city.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                        // style={{width: '100%', height: '50vh', maxWidth: '1100px'}}
                                    />

                                    <Button block className='mybut-primary' onClick={() => setShowModal1(true)}>Программа ПЭК</Button>
                                    <Button block className='mybut' onClick={() => setShowModal2(true)}>Общественный контроль</Button>
                                </Col>

                                <Col offset={1} span={22} style={{marginTop: '30px'}}>
                                    <div className='eco-slider-container eco-slider-flex-centered eco-slider-big-dots'>
                                        <Slider {...carouselState} className='eco-slider'>
                                            <div className='eco-slider-card padding-15-30'>
                                                <div style={{margin: '0 0'}}>
                                                    <strong style={{fontWeight: 'bold'}}>Государственный надзор</strong> является наиболее эффективным видом контроля, поскольку его субъекты могут применять к правонарушителям меры принуждения, выраженные&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '900px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '350px'}}
                                                        content={<span>Величина административных штрафов за несоблюдение экологических и санитарно-эпидемиологических требований при обращении с отходами производства и потребления указана в статье 8.2 КоАП.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        в предписаниях, представлениях, определениях и постановлениях
                                                    </Popover>, в соответствии с&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '900px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '350px'}}
                                                        content={<span>Если нарушение правил обращения отходов создали угрозу причинения существенного вреда здоровью человека или окружающей среде, в том числе повлекли по неосторожности смерть человека либо массовое заболевание людей, то применяется статья 247 Уголовного кодекса РФ от 13.06.1996 № 63-ФЗ.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        Кодексом об административных правонарушениях Российской Федерацией
                                                    </Popover>.
                                                </div>
                                            </div>
                                            <div className='eco-slider-card padding-15-30'>
                                                <div style={{margin: '0 0'}}>
                                                    <strong style={{fontWeight: 'bold'}}>Производственный контроль</strong> в области охраны окружающей среды (ПЭК) осуществляется в целях обеспечения выполнения в процессе хозяйственной и иной деятельности мероприятий по охране окружающей среды, рациональному использованию и восстановлению природных ресурсов, а также&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '900px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '350px'}}
                                                        content={<span>Организация и осуществление ПЭК возложена на юридических лиц, осуществляющих деятельность в области обращения с отходами.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        в целях
                                                    </Popover> соблюдения требований в области охраны окружающей среды, установленных законодательством в области охраны окружающей среды.
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>

                    </Tabs>
                </Col>
            </Row>

            <Draggable_Modal
                title='Программа ПЭК'
                content={
                    <>
                        <div className='eco-flex-col' style={{marginTop: '-10px', gap: '15px', fontSize: '1.25rem'}}>
                            <div>
                                <ExclamationCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>Программа производственного экологического контроля должна</strong> разрабатываться и утверждаться юридическими лицами и индивидуальными предпринимателями, осуществляющими хозяйственную и (или) иную деятельность на объектах I, II и III категорий, по каждому объекту с учетом его категории, применяемых технологий и особенностей производственного процесса, а также оказываемого негативного воздействия на окружающую среду.
                            </div>

                            <div>
                                <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>В Программе ПЭК отражаются (в том числе):</strong>
                                <div className='eco-flex-col' style={{gap: '5px', padding: '0 0 0 25px', marginTop: '10px', fontSize: '1.25rem'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения об инвентаризации выбросов загрязняющих веществ в атмосферный воздух, сбросов в окружающую среду;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения об инвентаризации отходов производства и потребления и объектов их размещения;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о подразделениях и (или) должностных лицах, отвечающих за осуществление производственного экологического контроля.
                                    </div>
                                </div>
                            </div>

                            <div>
                                <strong style={{fontWeight: 'bold'}}>Лица, осуществляющие деятельность на объектах I категории, а также на объектах II и III категории,</strong> подлежащих федеральному экологическому надзору, предоставляют&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Отчёты предоставляются ежегодно до 25 марта года, следующего за отчётным.</span>}
                                    title=''
                                    trigger="hover">
                                    отчёт
                                </Popover> в территориальные органы Росприроднадзора, прочие − в региональные органы экологического надзора.
                            </div>

                            <div>
                                <strong style={{fontWeight: 'bold'}}>В целях осуществления единой научно-технической политики</strong> в области осуществления экологического надзора на территории Российской Федерации ФБУ «ФЦАО» Росприроднадзора ведет&nbsp;
                                <strong style={{fontWeight: 'bold'}}><a target="_blank" href="http://fcao.ru/metodiki-kkha.html">Реестр методик</a></strong>&nbsp;
                                количественного химического анализа (КХА) и оценки состояния объектов окружающей среды, допущенных для государственного и производственного экологического контроля (ПНД Ф).
                            </div>
                        </div>
                    </>
                }
                show={showModal1}
                hide={setShowModal1}
            />
            <Draggable_Modal
                title='Общественный контроль'
                content={
                    <>
                        <div className='eco-flex-col' style={{marginTop: '-10px', gap: '15px', fontSize: '1.25rem'}}>
                            <div>
                                <ExclamationCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>Общественный контроль регламентируется</strong> Федеральным законом от 21.07.2014 № 212-ФЗ «Об основах общественного контроля в Российской Федерации».
                            </div>

                            <div>
                                <strong style={{fontWeight: 'bold'}}>Формами общественного контроля являются</strong> общественный мониторинг, общественная проверка, общественная экспертиза, иные формы, не противоречащие законодательству, а также&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Например, общественный обсуждения, общественные (публичные) слушания и другие формы взаимодействия.</span>}
                                    title=''
                                    trigger="hover">
                                    формы взаимодействия институтов гражданского общества с государственными органами и органами местного самоуправления
                                </Popover>.
                            </div>

                            <div>
                                Общественные инспекторы по охране окружающей среды оказывают содействие Федеральной службе по надзору в сфере природопользования, Федеральному агентству лесного хозяйства, их территориальным органам, органам исполнительной власти субъектов Российской Федерации, осуществляющим в соответствии с установленной компетенцией государственный экологический надзор и федеральный государственный лесной надзор (лесную охрану).
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