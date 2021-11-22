import React, {useState} from 'react';
import {Row, Col, Steps, Popover, Skeleton, Image, Button} from 'antd';
import { BackTop } from 'antd';
import {ExclamationCircleTwoTone, InfoCircleTwoTone} from "@ant-design/icons";

const { Step } = Steps;

const Eco_Chap3_Theme1_3 = () => {
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
                        <Col offset={1} span={22} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <InfoCircleTwoTone/>&nbsp; <strong style={{fontWeight: 'bold'}}>Государственный экологический надзор</strong> в области охраны озера Байкал;
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <InfoCircleTwoTone/>&nbsp; <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Лесную охрану.</span>}
                                title=''
                                trigger="hover">
                                <strong style={{fontWeight: 'bold'}}>Федеральный государственный лесной надзор;</strong>
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
                        <Col offset={1} span={22} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <InfoCircleTwoTone/>&nbsp; Федеральный государственный надзор <strong style={{fontWeight: 'bold'}}>в области охраны, воспроизводства и использования объектов животного мира и среды их обитания;</strong>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <InfoCircleTwoTone/>&nbsp; Федеральный государственный надзор <strong style={{fontWeight: 'bold'}}>в области рыболовства и сохранения водных биоресурсов;</strong>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <InfoCircleTwoTone/>&nbsp; Федеральный государственный <strong style={{fontWeight: 'bold'}}>охотничий надзор;</strong>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-inv-card flex-centered' style={{padding: '15px 20px'}}>
                            <InfoCircleTwoTone/>&nbsp; Государственный надзор <strong style={{fontWeight: 'bold'}}>в области охраны и использования особо охраняемых природных территорий;</strong>
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
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Государственный экологический надзор</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 22, offset: 1}} lg={{span: 11, offset: 1}}>
                    <h1 style={{marginBottom: '20px'}}><ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; <strong>Государственный экологический надзор включает в себя:</strong></h1>

                    <Steps progressDot direction="vertical" className='eco-steps-style eco-steps-style-big-font'>
                        <Step status={'process'} title={
                            <span>
                                Государственный надзор за геологическим изучением, рациональным использованием и охраной недр;
                            </span>
                        } />
                        <Step status={'process'} title={
                            <>
                                Государственный земельный надзор;
                            </>
                        }/>
                        <Step status={'process'} title={
                            <>
                                Государственный надзор в области обращения с отходами;
                            </>
                        }/>
                        <Step status={'process'} title={
                            <>
                                Государственный надзор в области охраны атмосферного воздуха;
                            </>
                        }/>
                        <Step status={'process'} title={
                            <>
                                Государственный надзор в области использования и охраны водных объектов;
                            </>
                        }/>
                        <Step status={'process'} title={
                            <>
                                Государственный экологический надзор на континентальном шельфе Российской Федерации;
                            </>
                        }/>
                        <Step status={'process'} title={
                            <>
                                Государственный экологический надзор в исключительной экономической зоне Российской Федерации;
                            </>
                        }/>
                        <Step status={'process'} title={
                            <>
                                Государственный экологический надзор во внутренних морских водах и в территориальном море Российской Федерации;
                            </>
                        }/>
                    </Steps>
                </Col>

                <Col md={{span: 22, offset: 1}} lg={{span: 11, offset: 1}} className='eco-flex-col eco-img-col'>
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

                    <Image
                        src={'/svg/pazle.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '40vh', maxWidth: '1100px'}}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap3_Theme1_3;