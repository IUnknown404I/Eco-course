import React, {useState} from 'react';
import {Row, Col, Tabs, Image, Skeleton, Card, Popover, Button, Collapse, List} from 'antd';
import { BackTop } from 'antd';
import {
    ExclamationCircleTwoTone,
} from '@ant-design/icons';
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Eco_Chap2_Theme1_3 = () => {
    const [showModalWater, setShowModalWater] = useState(false);
    const [showModalEarth, setShowModalEarth] = useState(false);

    const data = [
        <> - земель промышленности, энергетики, транспорта и иного специального назначения, на которых расположены производственные объекты и/или проводятся строительные, геологоразведочные, испытательные, эксплуатационные и иные работы;</>,
        <> - земель сельскохозяйственного назначения с установленными нормами плодородия и степени загрязненности пестицидами и иными химическими веществами;</>,
        <> - земель водного фонда в районах выпусков сточных вод в водные объекты и переходов трубопроводов через водные объекты;</>,
        <> - земель лесного фонда в районах расположения производственных объектов.</>,
    ];
    const data1 = [
        <> - земельных участков, используемых для складирования, хранения, захоронения, и/или подготовки к переработке промышленных и бытовых отходов;</>,
        <> - земельных участков (земель транспорта и земель иных категорий), по которым проходят продуктопроводы;</>,
        <> - земельных участков, подлежащих рекультивации, и работы по рекультивации земель;</>,
        <> - земельных участков, загрязненных в результате аварийных ситуаций;</>,
        <> - земельных участков, находящихся в водоохраной зоне водного объекта.</>,
    ];
    const data2 = [
        <> -&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '500px'}}
                className='pop_text'
                style={{maxWidth: '350px'}}
                content={<span>Пользование которыми осуществляется на основании разрешительной документации.</span>}
                title=''
                trigger="hover">
                поверхностных и подземных водных объектов
            </Popover>, а также территорий водоохранных зон и прибрежных защитных полос;</>,
        <> - технологических процессов и оборудования, связанных с образованием сточных вод;</>,
        <> - сооружений для очистки сточных вод и сооружений систем канализации;</>,
        <> - выпусков сточных вод, в том числе очищенных;</>,
        <> - мест водозабора и учета используемой воды;</>,
        <> - систем водопотребления и водоотведения, гидротехнических сооружений;</>,
        <> - подводных переходов.</>,
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
                <Col lg={{span: 22, offset: 1}} xl={{span: 13, offset: 1}} style={{marginBottom: '20px'}} className='eco-tabs-tab-adaptive-font'>
                    <Tabs animated tabPosition={'left'} style={{display: 'flex', justifyContent: 'space-around'}}>
                        <TabPane tab={<span style={{color: 'green'}}>Обращение с отходами</span>} key="1">
                            <>
                                <Card className='simple-card'>
                                    <div>
                                        <div>
                                            <strong>При осуществлении ПЭК в области обращения с отходами</strong>  регулярному контролю подлежат нормируемые параметры и характеристики:
                                        </div>
                                        <div style={{marginTop: '15px', paddingLeft: '3%'}}>
                                            <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; объектов накопления, хранения и захоронения отходов, расположенных на промышленной площадке и (или) находящихся в ведении организации; <br/>
                                            <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; систем транспортировки, обезвреживания и уничтожения отходов, находящихся в ведении организации; <br/>
                                            <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; технологических процессов и оборудования, связанных с образованием отходов; <br/>
                                            <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; систем удаления отходов.
                                        </div>
                                    </div>
                                </Card>
                            </>
                        </TabPane>
                        <TabPane tab={<span style={{color: 'green'}}>Атмосферный воздух</span>} key="2">
                            <>
                                <Card className='simple-card'>
                                    <div>
                                        <div>
                                            <strong>При осуществлении ПЭК за охраной атмосферного воздуха</strong> регулярному контролю подлежат параметры и характеристики, нормируемые или используемые при установлении нормативов предельно допустимых и временно согласованных выбросов:
                                        </div>
                                        <div style={{marginTop: '15px', paddingLeft: '3%'}}>
                                            <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; организованных и неорганизованных, стационарных и передвижных источников выбросов загрязняющих веществ в атмосферу; <br/>
                                            <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; источников выделения загрязняющих веществ в атмосферу; <br/>
                                            <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp;&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '500px'}}
                                                className='pop_text'
                                                style={{maxWidth: '350px'}}
                                                content={<span>Для производственных объектов, где имеются неорганизованные, линейные и/или плоские источники загрязнения атмосферы.</span>}
                                                title=''
                                                trigger="hover">
                                                атмосферного воздуха на границе санитарно-защитной зоны
                                            </Popover>;<br/>
                                            <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; установок очистки газов.
                                        </div>
                                    </div>
                                </Card>
                            </>
                        </TabPane>
                    </Tabs>

                    <Button block className='mybut-primary' onClick={() => setShowModalEarth(true)}>Контроль в области охраны земель и почв</Button>
                    <Button block className='mybut' onClick={() => setShowModalWater(true)}>Контроль за охраной водных ресурсов</Button>
                </Col>

                <Col sm={{span: 18, offset: 3}} lg={{span: 16, offset: 4}} xl={{span: 8, offset: 1}} className='eco-flex-col flex-centered vertical-centered'>
                    <Image
                        // width={500}
                        src={'/images/aa.gif'}
                        preview={false}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />
                </Col>
            </Row>

            <Draggable_Modal
                title='Производственный экологический контроль в области охраны земель и почв'
                content={
                    <>
                        <div style={{fontSize: '1.15rem'}}>
                            <div className='eco-div-withFloat'>
                                <Image
                                    className='eco-float-ico'
                                    width={150}
                                    style={{marginLeft: '-7px', marginRight: '17px'}}
                                    preview = {false}
                                    src={'/images/vibr.png'}
                                    placeholder={
                                        <Skeleton.Image />
                                    }
                                />
                                <strong>При осуществлении ПЭК в области охраны земель и почв</strong> регулярному контролю подлежат нормируемые параметры и характеристики состояния:
                            </div>
                            <div style={{marginTop: '35px'}}>
                                <Collapse
                                    accordion
                                    defaultActiveKey={'1'}
                                    className='eco-collapse'
                                    expandIconPosition='left'
                                >
                                    <Panel header="Состояние земель" key="1" className='eco-panel-style'>
                                        <List
                                            size="medium"
                                            bordered
                                            dataSource={data}
                                            renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                        />
                                    </Panel>
                                    <Panel header="Состояние земельных участков" key="2" className='eco-panel-style'>
                                        <List
                                            size="medium"
                                            bordered
                                            dataSource={data1}
                                            renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                        /></Panel>
                                </Collapse>
                            </div>
                        </div>
                    </>
                }
                show={showModalEarth}
                hide={setShowModalEarth}
            />
            <Draggable_Modal
                title='Производственный экологический контроль за охраной водных ресурсов'
                content={
                    <>
                        <div style={{fontSize: '1.15rem'}}>
                            <div className='eco-div-withFloat'>
                                <Image
                                    className='eco-float-ico'
                                    width={150}
                                    style={{marginLeft: '-7px', marginRight: '17px'}}
                                    preview = {false}
                                    src={'/images/vibr.png'}
                                    placeholder={
                                        <Skeleton.Image />
                                    }
                                />
                                <strong>При осуществлении ПЭК за охраной водных объектов</strong> регулярному контролю подлежат нормируемые параметры и характеристики:
                            </div>
                            <div style={{marginTop: '40px', textAlign: 'center'}}>
                                <List
                                    size="medium"
                                    bordered
                                    dataSource={data2}
                                    renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                />
                            </div>
                        </div>
                    </>
                }
                show={showModalWater}
                hide={setShowModalWater}
            />
        </>
    );
};

export default Eco_Chap2_Theme1_3;