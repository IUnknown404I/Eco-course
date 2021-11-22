import React, {useState} from 'react';
import {Row, Col, Steps, Button, Image, Skeleton, List} from 'antd';
import { BackTop } from 'antd';
import {
    ExclamationCircleTwoTone,
    WarningOutlined,
} from '@ant-design/icons';
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { Step } = Steps;

const Eco_Chap3_Theme2_2 = () => {
    const [current, setCurrent] = useState(0);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const data1 = [
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; штрафом в размере от 100 000 до 300 000 рублей или в размере заработной платы или иного дохода осужденного за период от одного года до двух лет;</>,
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; либо принудительными работами на срок до пяти лет;</>,
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; либо лишением свободы на срок до пяти лет;</>,
    ];
    const data2 = [
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; штрафом в размере до 200 000 рублей или в размере заработной платы или иного дохода осужденного за период до восемнадцати месяцев;</>,
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; либо обязательными работами на срок до 480 часов;</>,
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; либо исправительными, принудительными работами на срок до двух лет;</>,
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; либо лишением свободы на срок до двух лет;</>,
    ];
    const data3 = [
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; штрафом в размере до 200 000 рублей или в размере заработной платы или иного дохода осужденного за период до восемнадцати месяцев;</>,
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; либо обязательными работами на срок до 480 часов;</>,
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; либо исправительными работами на срок до двух лет;</>,
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; либо принудительными работами на срок до двух лет;</>,
        <> <WarningOutlined style={{color: 'red', fontSize: '22px'}}/>&nbsp; либо лишением свободы на тот же срок;</>,
    ];

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Нарушение правил охраны',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-inv-card eco-container-left-border' style={{padding: '15px 20px'}}>
                            <Row>
                                <Col span={20} offset={2}>
                                    <h1 style={{textAlign: "center", fontSize: '1.65rem', marginBottom: '30px'}}><strong>Нарушение правил охраны окружающей среды при производстве работ</strong></h1>
                                </Col>

                                <Col offset={0} span={24} style={{fontSize: '1.3rem'}}>
                                    <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; <strong style={{fontWeight: 'bold'}}>Нарушение правил охраны окружающей среды при проектировании, размещении, строительстве, вводе в эксплуатацию и эксплуатации промышленных, сельскохозяйственных, научных и иных объектов</strong> лицами, ответственными за соблюдение этих правил наказывается:
                                </Col>

                                <Col md={{span: 22, offset: 1}} lg={{span: 13, offset: 1}} className='eco-flex-col' style={{marginTop: '20px'}}>
                                    <div className='eco-flex-row '>
                                        <div className='eco-num-col'>1</div>
                                        <div className='eco-num-text'>
                                            либо лишением свободы на срок до пяти лет с лишением права занимать определенные должности или заниматься определенной деятельностью на срок до трех лет или без такового;
                                        </div>
                                    </div>
                                    <div className='eco-flex-row '>
                                        <div className='eco-num-col'>2</div>
                                        <div className='eco-num-text'>
                                            штрафом в размере до 120 000 рублей или в размере заработной платы или иного дохода осужденного за период до одного года;
                                        </div>
                                    </div>
                                </Col>

                                <Col md={{span: 22, offset: 1}} lg={{span: 9, offset: 1}} className='eco-flex-col' style={{marginTop: '20px'}}>
                                    <div className='eco-flex-row '>
                                        <div className='eco-num-col'>3</div>
                                        <div className='eco-num-text'>
                                            либо обязательными работами на срок до 480 часов;
                                        </div>
                                    </div>
                                    <div className='eco-flex-row '>
                                        <div className='eco-num-col'>4</div>
                                        <div className='eco-num-text'>
                                            либо исправительными работами на срок до двух лет;
                                        </div>
                                    </div>
                                    <div className='eco-flex-row '>
                                        <div className='eco-num-col'>5</div>
                                        <div className='eco-num-text'>
                                            либо принудительными работами на срок до пяти лет;
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: 'Нарушение правил обращения',
            content:
            <>
                <Row>
                    <Col offset={1} span={22} className='eco-inv-card eco-container-left-border' style={{padding: '15px 20px'}}>

                        <Row>
                            <Col span={22} offset={1}>
                                <h1 style={{textAlign: "center", fontSize: '1.65rem', marginBottom: '30px'}}><strong>Нарушение правил обращения экологически опасных веществ и отходов</strong></h1>
                            </Col>

                            <Col lg={{span: 22, offset: 1}} xl={{span: 15, offset: 0}} style={{marginBottom: '20px'}}>
                                <div>
                                    <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Производство запрещенных видов опасных отходов, транспортировка, хранение, захоронение, использование или иное обращение радиоактивных, бактериологических, химических веществ и отходов</strong> с нарушением установленных правил наказываются:
                                </div>
                                <div style={{marginTop: '15px', paddingLeft: '3%', paddingRight: '2%'}}>
                                    <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; штрафом в размере до 200 000 рублей или в размере заработной платы или иного дохода осужденного за период до 18 месяцев;
                                    <br/><ExclamationCircleTwoTone  twoToneColor='darkorange'/>&nbsp; либо ограничением свободы на срок до двух лет;
                                    <br/><ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; либо принудительными работами на срок до двух лет
                                    <br/><ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; либо лишением свободы на срок до двух лет.
                                </div>

                            </Col>
                            <Col lg={{span: 22, offset: 1}} xl={{span: 8, offset: 1}} className='eco-img-col eco-flex-col'>
                                <div className='eco-inv-card' style={{boxShadow: '0 1px 3px 0 darkorange'}}>
                                    <div className='eco-img-col'>
                                        <Image
                                            className='eco-img-ico'
                                            style={{maxWidth: '100px', marginRight: '12px'}}
                                            preview = {false}
                                            src={'/images/shtr.png'}
                                            placeholder={
                                                <Skeleton.Image />
                                            }
                                        />
                                        <div style={{textAlign: 'center'}}>
                                            Деяния, повлекшие по неосторожности смерть человека, либо массовое заболевание людей <strong style={{fontWeight: 'bold'}}>наказываются лишением свободы на срок до 8 лет.</strong>
                                        </div>
                                    </div>
                                </div>

                                <Button block onClick={() => {setShowModal1(true);}} className='mybut-primary-orange'>Дополнительные последствия</Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </>,
        },
        {
            title: 'Загрязнение атмосферы',
            content:
                <>
                    <Row>
                        <Col offset={1} span={22} className='eco-inv-card eco-container-left-border' style={{padding: '15px 20px'}}>

                            <Row>
                                <Col span={20} offset={2}>
                                    <h1 style={{textAlign: "center", fontSize: '1.65rem', marginBottom: '30px'}}><strong>Загрязнение атмосферы</strong></h1>
                                </Col>

                                <Col lg={{span: 22, offset: 1}} xl={{span: 15, offset: 0}} style={{marginBottom: '20px'}}>
                                    <div>
                                        <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Нарушение правил выброса в атмосферу загрязняющих веществ или нарушение эксплуатации</strong> установок, сооружений и иных объектов наказываются:
                                    </div>
                                    <div style={{marginTop: '15px', paddingLeft: '3%', paddingRight: '2%'}}>
                                        <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; штрафом в размере до 80 000 рублей или в размере заработной платы или иного дохода осужденного за период до шести месяцев;
                                        <br/><ExclamationCircleTwoTone  twoToneColor='darkorange'/>&nbsp; либо лишением права занимать определенные должности на срок до пяти лет;
                                        <br/><ExclamationCircleTwoTone  twoToneColor='darkorange'/>&nbsp; либо исправительными работами на срок до одного года;
                                        <br/><ExclamationCircleTwoTone  twoToneColor='darkorange'/>&nbsp; либо обязательными работами на срок до 360 часов;
                                        <br/><ExclamationCircleTwoTone  twoToneColor='darkorange'/>&nbsp; либо арестом на срок до трех месяцев;
                                    </div>

                                </Col>
                                <Col lg={{span: 22, offset: 1}} xl={{span: 8, offset: 1}} className='eco-img-col eco-flex-col'>
                                    <div className='eco-inv-card' style={{boxShadow: '0 1px 3px 0 darkorange'}}>
                                        <div className='eco-img-col'>
                                            <Image
                                                className='eco-img-ico'
                                                style={{maxWidth: '100px', marginRight: '12px'}}
                                                preview = {false}
                                                src={'/images/shtr.png'}
                                                placeholder={
                                                    <Skeleton.Image />
                                                }
                                            />
                                            <div style={{textAlign: 'center'}}>
                                                Деяния, повлекшие по неосторожности смерть человека, наказываются <strong style={{fontWeight: 'bold'}}>принудительными работами на срок от 2 до 5 лет либо лишением свободы на срок до 5 лет</strong>.
                                            </div>
                                        </div>
                                    </div>

                                    <Button block onClick={() => {setShowModal3(true);}} className='mybut-primary-orange'>Дополнительные последствия</Button>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </>,
        },
        {
            title: 'Загрязнение вод',
            content:
            <>
                <Row>
                    <Col offset={1} span={22} className='eco-inv-card eco-container-left-border' style={{padding: '15px 20px'}}>

                        <Row>
                            <Col span={20} offset={2}>
                                <h1 style={{textAlign: "center", fontSize: '1.65rem', marginBottom: '30px'}}><strong>Загрязнение вод</strong></h1>
                            </Col>

                            <Col lg={{span: 22, offset: 1}} xl={{span: 15, offset: 0}} style={{marginBottom: '20px'}}>
                                <div>
                                    <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Загрязнение, засорение, истощение поверхностных или подземных вод, источников питьевого водоснабжения</strong> либо иное изменение их природных свойств наказываются:
                                </div>
                                <div style={{marginTop: '15px', paddingLeft: '3%', paddingRight: '2%'}}>
                                    <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; штрафом в размере до 80 000 рублей или в размере заработной платы или иного дохода осужденного за период до шести месяцев;
                                    <br/><ExclamationCircleTwoTone  twoToneColor='darkorange'/>&nbsp; либо лишением права занимать определенные должности на срок до пяти лет, либо обязательными работами на срок до 360 часов, либо исправительными работами на срок до одного года, либо арестом на срок до трех месяцев;
                                </div>

                            </Col>
                            <Col lg={{span: 22, offset: 1}} xl={{span: 8, offset: 1}} className='eco-img-col eco-flex-col'>
                                <div className='eco-inv-card' style={{boxShadow: '0 1px 3px 0 darkorange'}}>
                                    <div className='eco-img-col'>
                                        <Image
                                            className='eco-img-ico'
                                            style={{maxWidth: '100px', marginRight: '12px'}}
                                            preview = {false}
                                            src={'/images/shtr.png'}
                                            placeholder={
                                                <Skeleton.Image />
                                            }
                                        />
                                        <div style={{textAlign: 'center'}}>
                                            Деяния, повлекшие по неосторожности смерть человека, наказываются <strong style={{fontWeight: 'bold'}}>принудительными работами на срок до пяти лет</strong>.
                                        </div>
                                    </div>
                                </div>

                                <Button block onClick={() => {setShowModal2(true);}} className='mybut-primary-orange'>Дополнительные последствия</Button>
                            </Col>
                        </Row>

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
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Экологические преступления</strong></h1>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col lg={{span: 24, offset: 0}} xl={{span: 22, offset: 1}} className='eco-steps-interaction-container'>
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
                </Col>
            </Row>

            <Draggable_Modal
                title='Нарушение правил обращения. Дополнительные последствия'
                content={
                    <>
                        <div style={{fontSize: '1.15rem'}}>
                            <div style={{textAlign: 'left'}}>
                                <List
                                    header={<div style={{fontSize: '1.2rem'}}><strong>Те же деяния, повлекшие загрязнение, отравление или заражение окружающей среды, причинение вреда здоровью человека либо массовую гибель животных наказываются:</strong></div>}
                                    size="medium"
                                    bordered
                                    dataSource={data1}
                                    renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                />
                            </div>
                        </div>
                    </>
                }
                show={showModal1}
                hide={setShowModal1}
            />

            <Draggable_Modal
                title='Загрязнение атмосферы. Дополнительные последствия'
                content={
                    <>
                        <div style={{fontSize: '1.15rem'}}>
                            <div style={{textAlign: 'left'}}>
                                <List
                                    header={<div style={{fontSize: '1.2rem'}}><strong>Те же деяния, повлекшие по неосторожности причинение вреда здоровью человека, наказываются:</strong></div>}
                                    size="medium"
                                    bordered
                                    dataSource={data3}
                                    renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                />
                            </div>
                        </div>
                    </>
                }
                show={showModal3}
                hide={setShowModal3}
            />

            <Draggable_Modal
                title='Загрязнение вод. Дополнительные последствия'
                content={
                    <>
                        <div style={{fontSize: '1.15rem'}}>
                            <div style={{textAlign: 'left'}}>
                                <List
                                    header={<div style={{fontSize: '1.2rem'}}><strong>Те же деяния, повлекшие причинение вреда здоровью человека или массовую гибель животных наказываются:</strong></div>}
                                    size="medium"
                                    bordered
                                    dataSource={data2}
                                    renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                />
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

export default Eco_Chap3_Theme2_2;