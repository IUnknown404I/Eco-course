import React, {useState} from 'react';
import {Row, Col, Steps, Popover, Skeleton, Image, Button, List} from 'antd';
import { BackTop } from 'antd';
import {CheckSquareTwoTone, ExclamationOutlined} from "@ant-design/icons";

const { Step } = Steps;

const Eco_Chap3_Theme1_7 = () => {
    const [current, setCurrent] = useState(0);

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
                        <Col offset={0} span={24} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <ExclamationOutlined style={{color: 'darkorange'}}/> проверять выполнение обязательных требований и&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Если такие требования не относятся к полномочиям органа государственного контроля (надзора), органа муниципального контроля, от имени которы действуют эти должностные лица.</span>}
                                title=''
                                trigger="hover">
                                требований, установленных муниципальными правовыми актами;
                            </Popover>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <ExclamationOutlined style={{color: 'darkorange'}}/>&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>А также изымать оригиналы таких документов.</span>}
                                title=''
                                trigger="hover">
                                требовать представления документов
                            </Popover>, информации, образцов продукции, проб обследования объектов окружающей среды и объектов производственной среды, если они не являются объектами проверки или не относятся к предмету проверки;
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <ExclamationOutlined style={{color: 'darkorange'}}/> отбирать образцы продукции, пробы обследования объектов окружающей среды и объектов производственной среды для проведения их исследований, испытаний, измерений без оформления протоколов;
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <ExclamationOutlined style={{color: 'darkorange'}}/> распространять информацию, полученную в результате проведения проверки и составляющую государственную, коммерческую, служебную, иную охраняемую законом тайну;
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <ExclamationOutlined style={{color: 'darkorange'}}/> превышать установленные сроки проведения проверки;
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <ExclamationOutlined style={{color: 'darkorange'}}/> осуществлять выдачу юридическим лицам, индивидуальным предпринимателям предписаний или предложений о проведении за их счет мероприятий по контролю;
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <ExclamationOutlined style={{color: 'darkorange'}}/> требовать от юридического лица, индивидуального предпринимателя представления&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Включая разрешительные документы.</span>}
                                title=''
                                trigger="hover">
                                документов и (или) информации
                            </Popover>, имеющиеся в распоряжении иных государственных органов, органов местного самоуправления либо подведомственных государственным органам или органам местного самоуправления&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Включенные в определённый Правительством РФ перечень.</span>}
                                title=''
                                trigger="hover">
                                организаций;
                            </Popover>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <ExclamationOutlined style={{color: 'darkorange'}}/> требовать от юридического лица, индивидуального предпринимателя представления документов,&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Орган государственного контроля (надзора), орган муниципального контроля после принятия распоряжения или приказа о проведении проверки вправе запрашивать необходимые документы и (или) информацию в рамках межведомственного информационного взаимодействия.</span>}
                                title=''
                                trigger="hover">
                                информации до даты начала проведения проверки.
                            </Popover>
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
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Порядок организации проверки</strong></h1>
                </Col>
            </Row>

            <Row style={{marginBottom: '20px'}}>
                <Col offset={1} span={22}>
                    <h1><strong>При проведении проверки</strong> должностные лица органа государственного контроля (надзора), органа муниципального контроля не вправе:</h1>
                </Col>

                <Col lg={{span: 20, offset: 2}} xl={{span: 12, offset: 1}} className='eco-flex-col eco-img-col' style={{marginTop: '10px'}}>
                    <div className='eco-steps-interaction-container eco-inv-card eco-container-left-border' style={{marginBottom: '20px'}}>
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
                    </div>

                    <Image
                        src={'/svg/m&w.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '40vh', maxWidth: '1100px'}}
                    />
                </Col>

                <Col lg={{span: 20, offset: 2}} xl={{span: 9, offset: 1}} className='eco-flex-col' style={{gap: '25px', fontSize: '1.35rem'}}>
                    <div>
                        <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp;&nbsp;
                        <strong style={{fontWeight: 'bold'}}>
                            Проверка проводится на основании&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Руководителя, заместителя руководителя органа государственного контроля (надзора), органа муниципального контроля.</span>}
                                title=''
                                trigger="hover">
                                распоряжения или приказа
                            </Popover>.
                        </strong>
                    </div>
                    <div>
                        <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp;&nbsp;
                        <strong style={{fontWeight: 'bold'}}>
                            Заверенные печатью копии&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Руководителя, заместителя руководителя органа государственного контроля (надзора), органа муниципального контроля.</span>}
                                title=''
                                trigger="hover">
                                распоряжения или приказа
                            </Popover> вручаются
                        </strong> под роспись должностными лицами проводящими проверку, руководителю, иному должностному лицу или уполномоченному представителю юридического лица, индивидуальному предпринимателю, его уполномоченному представителю одновременно с предъявлением служебных удостоверений.
                    </div>
                    <div>
                        <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; <strong style={{fontWeight: 'bold'}}>Проверка выполнения ранее выданного предписания об устранении выявленного нарушения</strong> обязательных требований и (или) требований, установленных муниципальными правовыми актами может быть проведена только в форме внеплановой документарной проверки.
                    </div>
                    <div>
                        <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; <strong style={{fontWeight: 'bold'}}>Срок проведения проверки может быть продлен,</strong> но не более чем на двадцать рабочих дней, в отношении малых предприятий не более чем на пятьдесят часов, микропредприятий не более чем на пятнадцать часов, только при проведении выездной плановой проверки.
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap3_Theme1_7;