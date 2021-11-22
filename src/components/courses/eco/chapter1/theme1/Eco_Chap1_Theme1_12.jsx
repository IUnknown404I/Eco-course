import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Button, Popover, Steps} from 'antd';
import { BackTop } from 'antd';
import {CheckOutlined, InfoCircleTwoTone, WarningTwoTone} from "@ant-design/icons";

const { Step } = Steps;

const Eco_Chap1_Theme1_12 = () => {
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
                        <Col offset={1} span={22} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <InfoCircleTwoTone/>&nbsp; <strong style={{fontWeight: 'bold'}}>При осуществлении проверки декларации о плате</strong> Федеральная служба по надзору в сфере природопользования и ее территориальные органы вправе запросить у лица, обязанного вносить плату, документы учета выбросов, сбросов загрязняющих веществ, отходов производства и потребления, формируемые при осуществлении производственного экологического контроля в соответствии с Федеральным законом N 7-ФЗ, подтверждающие определение платежной базы&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>в том числе материалы учета в области обращения с отходами, формируемые в соответствии с Порядком учета в области обращения с отходами, устанавливаемым в соответствии со статьей 19 Федерального закона от 24 июня 1998 г. N 89-ФЗ "Об отходах производства и потребления" (Собрание законодательства Российской Федерации, 1998, N 26, ст. 3009; 2020, N 15, ст. 2240).</span>}
                                title=''
                                trigger="hover">
                                за отчетный период
                            </Popover>, за исключением документов бухгалтерского учета, а также документов, которые ранее предоставлялись лицом, обязанным вносить плату.
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <InfoCircleTwoTone/>&nbsp; Копии указанных документов направляются лицом, обязанным вносить плату, в территориальный орган Федеральной службы по надзору в сфере природопользования <strong style={{fontWeight: 'bold'}}>в течение 20 рабочих дней со дня получения соответствующего запроса.</strong>

                            <div className='eco-flex-col eco-div-padding' style={{gap: '10px'}}>
                                <strong style={{fontWeight: 'bold'}}>Копии документов должны быть заверены лицом, обязанным вносить плату:</strong>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>В случае, если декларация о плате представлялась в электронном виде.</span>}
                                        title=''
                                        trigger="hover">
                                        простой электронной подписью
                                    </Popover> руководителя юридического лица или лица, уполномоченного на осуществление действий от имени юридического лица, либо физического лица, зарегистрированного в качестве индивидуального предпринимателя;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>В случае, если декларация о плате представлялась на бумажном носителе.</span>}
                                        title=''
                                        trigger="hover">
                                        подписью руководителя юридического лица или лица
                                    </Popover>, уполномоченного на осуществление действий от имени юридического лица, либо подписью физического лица, зарегистрированного в качестве индивидуального предпринимателя, и&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>При её наличии.</span>}
                                        title=''
                                        trigger="hover">
                                        печатью
                                    </Popover>.
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
                        <Col offset={1} span={22} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <WarningTwoTone twoToneColor='darkorange'/>&nbsp; Декларация о плате <strong style={{fontWeight: 'bold'}}>формируется лицами,</strong> обязанными вносить плату, путем использования&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>В том числе предоставляемых Федеральной службой по надзору и в сфере природопользования.</span>}
                                title=''
                                trigger="hover">
                                электронных сервисов
                            </Popover>.
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <WarningTwoTone twoToneColor='darkorange'/>&nbsp; Декларация о плате <strong style={{fontWeight: 'bold'}}>представляется лицами,</strong> обязанными вносить плату, в форме электронного документа, подписанного&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>для выполнения расчета размера экологического сбора, заявления о проведении совместной сверки расчетов размера экологического сбора и заявления о зачете размера излишне уплаченного экологического сбора.</span>}
                                title=''
                                trigger="hover">
                                простой электронной подписью
                            </Popover>, сформированного путем использования электронных сервисов через&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>"Личный кабинет природопользователя".</span>}
                                title=''
                                trigger="hover">
                                веб-портал приема отчетности Федеральной службы по надзору в сфере природопользования
                            </Popover>.
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <InfoCircleTwoTone/>&nbsp; При представлении декларации о плате в форме электронного документа, подписанного простой электронной подписью, <strong style={{fontWeight: 'bold'}}>представление ее на бумажном носителе не требуется.</strong>
                        </Col>
                    </Row>
                </>,
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 0'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Декларация по НВОС</strong></h1>
                </Col>
            </Row>

            <Row className='padding-30'>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}} className='eco-div-padding'>
                    <h3><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; Декларация о плате представляется лицами, обязанными вносить плату, не позднее 10-го марта года, следующего за отчетным.</h3>

                    <div className='eco-steps-interaction-container eco-inv-card' style={{marginBottom: '20px'}}>
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
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 20, offset: 2}} className='padding-30'>
                    <div className='eco-flex-col eco-inv-card padding-15-30' style={{margin: '-50px 0 0', gap: '10px', alignItems: 'flex-start'}}>
                        <h3 style={{width: '100%', textAlign: 'center'}}><strong>К декларации о плате прилагаются следующие документы:</strong></h3>

                        <div className='eco-flex-row eco-img-col'>
                            <Image
                                style={{width: '100px', marginRight: '15px'}}
                                src={'/svg/accepted.svg'}
                                preview={false}
                                placeholder={ <Skeleton.Image /> }
                            />
                            <span style={{fontSize: '1.3rem'}}>
                                документ, который <strong style={{fontWeight: 'bold'}}>подтверждает полномочия</strong>&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>Действующего от имени лица, обязанного вносить плату.</span>}
                                    title=''
                                    trigger="hover">
                                    лица
                                </Popover>&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>В случае, если декларация о оплате подписывается и (или) представляется уполномоченным представителем лица, обязанного вносить плату.</span>}
                                    title=''
                                    trigger="hover">
                                    на подписание и (или) представление декларации о плате
                                </Popover>;
                            </span>
                        </div>
                        <div className='eco-flex-row eco-img-col'>
                            <Image
                                style={{width: '100px', marginRight: '15px'}}
                                src={'/svg/data.svg'}
                                preview={false}
                                placeholder={ <Skeleton.Image /> }
                            />
                            <span style={{fontSize: '1.3rem'}}>
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>Подтверждающих расходы лиц, обязанных вносить плату.</span>}
                                    title=''
                                    trigger="hover">
                                    перечень документов
                                </Popover> на финансирование в отчетном периоде мероприятий по снижению негативного воздействия на окружающую среду, <strong style={{fontWeight: 'bold'}}>включенных в планы мероприятий</strong> по охране окружающей среды или программы повышения экологической эффективности;
                            </span>
                        </div>
                        <div className='eco-flex-row eco-img-col'>
                            <Image
                                style={{width: '100px', marginRight: '15px'}}
                                src={'/svg/files.svg'}
                                preview={false}
                                placeholder={ <Skeleton.Image /> }
                            />
                            <span style={{fontSize: '1.3rem'}}>
                                копии договоров <strong style={{fontWeight: 'bold'}}>на размещение отходов и журналы учета движения</strong> отходов за отчетный период.
                            </span>
                        </div>

                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme1_12;

