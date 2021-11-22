import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Button, Popover} from 'antd';
import { BackTop } from 'antd';
import {CheckOutlined, InfoCircleTwoTone, WarningTwoTone} from "@ant-design/icons";

const Eco_Chap1_Theme1_10 = () => {
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
                            <InfoCircleTwoTone/>&nbsp; Индивидуальные предприниматели, юридические лица, в результате хозяйственной и (или) иной деятельности которых образуются отходы I и II классов опасности, <strong style={{fontWeight: 'bold'}}>осуществляют обращение с данными отходами самостоятельно</strong>&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>В иных случая индивидуальные предприниматели, юридические лица, в результате хозяйственной и (или) иной деятельности которых образуются отходы I и II классов опасности, передают данных отходы федеральному оператору в соответствии с договорами на оказание услуг по обращению с отходами I и II классов опасности.</span>}
                                title=''
                                trigger="hover">
                                при наличии в собственности или на ином законном основании объектов обезвреживания и (или) размещения отходов I и II классов опасности
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
                            <InfoCircleTwoTone/>&nbsp; Индивидуальные предприниматели, юридические лица, в результате хозяйственной и (или) иной деятельности которых образуются отходы I и II классов опасности,&nbsp;
                            <strong style={{fontWeight: 'bold'}}>
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>За исключение случаев самостоятельного обращения с отходами I и II классов опасности.</span>}
                                    title=''
                                    trigger="hover">
                                    не вправе
                                </Popover> отказаться от заключения договора
                            </strong> на оказание услуг по обращению с отходами I и II классов опасности с федеральным оператором по обращению с отходами I и II классов опасности.
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
                            <InfoCircleTwoTone/>&nbsp; <strong style={{fontWeight: 'bold'}}>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Образующихся в результате хозяйственной и (или) иной деятельности индивидуальных предпринимателей, юридических лиц.</span>}
                                title=''
                                trigger="hover">
                                Сбор отходов I и II классов опасности
                            </Popover> операторами по обращению с отходами I и II классов опасности допускается при условии</strong> заключения указанными операторами с федеральным оператором договора на оказание услуг по обращению с отходами I и II классов опасности
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
                            <InfoCircleTwoTone/>&nbsp; При передаче отходов I и II классов опасности федеральному оператору <strong style={{fontWeight: 'bold'}}>его услуги оплачиваются по тарифам в области обращения с отходами I и II классов опасности,</strong> установленным федеральным органом исполнительной власти.
                        </Col>
                    </Row>
                </>,
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 0px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>В целях организации деятельности по обращению с отходами I и II классов опасности утверждается федеральная схема обращения с отходами I и II классов опасности, которая включает:</strong></h1>
                </Col>
            </Row>

            <Row className='padding-30'>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}} xl={{span: 12, offset: 0}} className='eco-div-padding'>
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
                </Col>

                <Col md={{span: 22, offset: 1}} lg={{span: 18, offset: 3}} xl={{span: 11, offset: 1}} className='eco-div-padding'>
                    <h1><strong>
                        К регулируемым&nbsp;
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '800px'}}
                            className='pop_text'
                            style={{maxWidth: '550px'}}
                            content={<span>Осуществляется федеральным оператором и операторами по обращению с отходами I и II классов опасности.</span>}
                            title=''
                            trigger="hover">
                            видам деятельности
                        </Popover> в области обращения с отходами I и II классов опасности относятся:
                    </strong></h1>

                    <div className='eco-flex-col' style={{gap: '10px'}}>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                            сбор отходов I и II классов опасности
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                            транспортирование отходов I и II классов опасности
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                            обработка отходов I и II классов опасности
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                            утилизация отходов I и II классов опасности
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                            обезвреживание отходов I и II классов опасности
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                            размещение отходов I и II классов опасности
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm={{span: 24, offset: 0}} md={{span: 22, offset: 1}} lg={{span: 20, offset: 2}} className='padding-30'>
                    <div className='eco-flex-row eco-img-col eco-img-div-item extra padding-15-30' style={{margin: '-30px 0 0'}}>
                        <Image
                            style={{width: '130px', marginRight: '15px'}}
                            src={'/svg/recycle-bin.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span style={{fontSize: '1.3rem'}}>
                            <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>Федеральный оператор осуществляет прием отходов I и II классов опасности,</strong> входящих в состав твердых коммунальных отходов, от регионального оператора по обращению с твердыми коммунальными отходами на основании&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Заключение которого для федерального оператора является обязательным.</span>}
                                title=''
                                trigger="hover">
                                договора
                            </Popover> на оказание услуг по обращению с отходами I и II классов опасности.
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme1_10;