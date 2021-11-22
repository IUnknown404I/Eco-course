import React from 'react';
import {BackTop, Col, Collapse, Divider, Image, List, Popover, Row, Skeleton, Tabs} from "antd";
import NumListCard from "../../../../UI/numListCard/NumListCard";
import {CarryOutOutlined, CheckOutlined, ExclamationCircleOutlined} from "@ant-design/icons";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const EcoChap1Theme3_4 = () => {
    const data = [
        <> приказ <strong style={{fontWeight: 'bold'}}>о назначении ответственных за эксплуатацию</strong> &nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Далее – ГОУ.</span>}
                title=''
                trigger="hover">
                газоочистных установок
            </Popover>;
        </>,
        <> <strong style={{fontWeight: 'bold'}}>должностные инструкции</strong> персонала, обслуживающего ГОУ;</>,
        <> <strong style={{fontWeight: 'bold'}}>инструкции по эксплуатации и обслуживанию ГОУ;</strong></>,
        <> приказ <strong style={{fontWeight: 'bold'}}>о порядке ведения журналов учета</strong> работы газоочистного оборудования;</>,
        <> приказ руководителя предприятия <strong style={{fontWeight: 'bold'}}>о порядке перехода в периоды&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Далее – НМУ.</span>}
                title=''
                trigger="hover">
                неблагоприятных метеорологических условий
            </Popover></strong> на заданные режимы&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Производствам, цехам, участкам и иным объектам, а также лиц, ответственных за организацию приема оповещения и введения мероприятий по снижению выбросов.</span>}
                title=''
                trigger="hover">
                с указанием ответственных лиц за проведение мероприятий по предприятию
            </Popover>;
        </>,
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 30px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Документация по обращению с отходами</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col lg={{span: 24, offset: 0}} xl={{span: 22, offset: 1}}>
                    <Tabs type="card" size='large' className='eco-tab-list' centered animated>
                        <TabPane tab="Основные документы по обращению с отходами" key="1">
                            <>
                                <Row>
                                    <Col span={24} style={{fontSize: '16px', textAlign: 'center', marginTop: '15px'}}>
                                        <h2 style={{marginBottom: '20px'}}>К числу основных документов в области обращения с отходами на предприятии относятся:</h2>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={{span: 22, offset: 1}} xl={{span: 13, offset: 1}}>
                                        <h1 style={{marginBottom: '20px'}}><strong>Проекты нормативов образования отходов и лимитов на их размещение,</strong> оформленные по установленным образцам и включающие следующие разделы:</h1>
                                        <div className='eco-flex-row'>
                                            <div style={{display: 'flex', flexDirection: 'column', width: '40%', alignContent: 'center'}}>
                                                <NumListCard num={1} text='титульный лист'/>
                                                <NumListCard num={2} text='содержание' popover='В котором приводятся наименование и последовательность расположения разделов ПНООЛР с указанием номеров страниц'/>
                                                <NumListCard num={3} text='аннотация'/>
                                                <NumListCard num={4} text='сведения об отходах'/>
                                            </div>

                                            <div style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
                                                <NumListCard num={5} text='общие сведения об индивидуальном предпринимателе или юридическом лице'/>
                                                <NumListCard num={6} text='сведения о хозяйственной и иной деятельности' popover='В результате осуществления которой образуются отходы'/>
                                                <NumListCard num={7} text='расчёт и обоснование годовых нормативов образования отходов'/>
                                                <NumListCard num={8} text='схема операционного движения отходов'/>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={{span: 20, offset: 2}} xl={{span: 8, offset: 1}} className='eco-flex-col flex-centered'>
                                        <div className='eco-img-div-item extra' style={{marginTop: '10px'}}>
                                            <Image
                                                className='eco-img-ico'
                                                preview = {false}
                                                src={'/images/document.jpg'}
                                                placeholder={
                                                    <Skeleton.Image />
                                                }
                                            />
                                            <span>
                                                <strong style={{fontWeight: 'bold'}}>Документы по паспортизации отходов</strong>
                                            </span>
                                        </div>
                                        <div className='eco-img-div-item extra' style={{marginTop: '10px'}}>
                                            <Image
                                                className='eco-img-ico'
                                                preview = {false}
                                                src={'/images/cert.jpg'}
                                                placeholder={
                                                    <Skeleton.Image />
                                                }
                                            />
                                            <span>
                                                <strong style={{fontWeight: 'bold'}}>Копии аттестатов аккредитации лабораторий,</strong> выполнявших анализы и исследования для паспортизации отходов
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        </TabPane>
                        <TabPane tab="Документы по организации экологической службы " key="2">
                            <>
                                <Row>
                                    <Col span={24} style={{fontSize: '16px', textAlign: 'center', marginTop: '15px'}}>
                                        <h2 style={{marginBottom: '50px'}}>Экологическая служба предприятия организовывается на основании:</h2>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={{span: 22, offset: 1}} lg={{span: 10, offset: 1}} style={{borderLeft: '2px solid rgb(76,175,80)', borderRadius: '12px', marginBottom: '20px'}}>
                                        <h1 className='eco-col-header' style={{background: 'rgb(76,175,80)', borderBottomLeftRadius: '0', color: 'white'}}>Приказы</h1>
                                        <div className='eco-div-padding'>
                                            <div style={{marginLeft: '5px', fontSize: '19px'}}>
                                                <div>
                                                    <CarryOutOutlined style={{color: 'green'}}/>&nbsp; приказа руководителя предприятия <strong style={{fontWeight: 'bold'}}>о создании экологической службы предприятия;</strong>
                                                </div> <br/>
                                                <div>
                                                    <CarryOutOutlined style={{color: 'green'}}/>&nbsp; приказа руководителя предприятия <strong style={{fontWeight: 'bold'}}>о назначении руководителя&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{width: 'fit-content', maxWidth: '1000px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '200px'}}
                                                        content={<span>Эколога предприятия</span>}
                                                        title=''
                                                        trigger="hover">
                                                        экологической службы предприятия
                                                    </Popover></strong> и утверждении Положения об экологической службе;
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={{span: 22, offset: 1}} lg={{span: 10, offset: 1}}style={{borderRight: '2px solid rgb(76,175,80)', borderRadius: '12px'}}>
                                        <h1 className='eco-col-header' style={{background: 'rgb(76,175,80)', borderBottomRightRadius: '0', color: 'white'}}>Документы и инструкции</h1>
                                        <div className='eco-div-padding' >
                                            <div style={{marginLeft: '5px', fontSize: '19px'}}>
                                                <div>
                                                    <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>должностных инструкций</strong> сотрудников&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{width: 'fit-content', maxWidth: '1000px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '200px'}}
                                                        content={<span>Эколога предприятия</span>}
                                                        title=''
                                                        trigger="hover">
                                                        экологической службы предприятия
                                                    </Popover>;
                                                </div> <br/>
                                                <div>
                                                    <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>документов, подтверждающих необходимую профессиональную подготовку или переподготовку</strong> сотрудников экологической службы предприятия;
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        </TabPane>
                        <TabPane tab="Организационные документы производственного экологического контроля" key="3">
                            <>
                                <Row>
                                    <Col span={24} style={{fontSize: '16px', textAlign: 'center', marginTop: '15px'}}>
                                        <h2 style={{marginBottom: '20px'}}>Набор документов зависит от предприятия и в общем случае включает в себя:</h2>
                                    </Col>
                                    <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}}>
                                        <div className='eco-flex-row' style={{justifyContent: 'space-around', fontSize: '18px'}}>
                                            <NumListCard num={1} text='схема операционного движения отходов'/>
                                            <NumListCard num={2} text='схема операционного движения отходов'/>
                                        </div>
                                    </Col>
                                </Row>

                                <Divider style={{margin: '0 0 30px 0', background: 'forestgreen'}}/>

                                <Row>
                                    <Col lg={{span: 22, offset: 1}} xl={{span: 11, offset: 0}}>
                                        <fieldset className='fieldset-eco' style={{marginTop: '-10px'}}>
                                            <legend>В части охраны атмосферного воздуха</legend>

                                            <List
                                                className='borderless'
                                                size="medium"
                                                bordered
                                                dataSource={data}
                                                renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                            />
                                        </fieldset>
                                    </Col>

                                    <Col lg={{span: 22, offset: 1}} xl={{span: 13, offset: 0}}>
                                        <div>
                                            <Collapse
                                                className='mycollapse'
                                                defaultActiveKey={2}
                                                expandIconPosition='right'
                                                accordion
                                            >
                                                <Panel header={<span>В части охраны поверхностных вод и рационального водопользования</span>} key="1" className='eco-panel-style' showArrow>
                                                    <div className='divChildren-margin-bottom-15'>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Приказ о назначении лица, ответственного за эксплуатацию и обслуживание сетей водных коммуникаций и очистных сооружений</div>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Должностные инструкции для персонала, обслуживающего водные коммуникации и очистные сооружения</div>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Должностные инструкции для персонала, обслуживающего контрольно-измерительную аппаратуру по определению качества забираемой и сбрасываемой в водный объект воды</div>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Порядок проведения государственной аттестации контрольно-измерительной аппаратуры по определению качества забираемой и сбрасываемой в водный объект воды</div>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Производственные инструкции завода-изготовителя по эксплуатации оборудования очистных сооружений</div>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Инструкции по эксплуатации и обслуживанию очистных сооружений</div>
                                                    </div>
                                                </Panel>
                                                <Panel header={<span>В части обращения с отходами</span>} key="2" className='eco-panel-style' showArrow>
                                                    <div className='divChildren-margin-bottom-15'>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Приказ о назначении лиц, допущенных к работе с опасными отходами</div>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Приказ о направлении лиц, допущенных к работе с опасными отходами, на обучение или переподготовку</div>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Документы, подтверждающие обучение и переподготовку лиц, допущенных к работе с опасными отходами</div>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Приказ о введении в действие инструкции обращения с отходами производства и потребления на территории предприятия</div>
                                                        <div><CheckOutlined style={{color: 'green'}}/>&nbsp; Инструкция обращения с отходами производства и потребления на территории предприятия</div>
                                                    </div>
                                                </Panel>
                                            </Collapse>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
};

export default EcoChap1Theme3_4;