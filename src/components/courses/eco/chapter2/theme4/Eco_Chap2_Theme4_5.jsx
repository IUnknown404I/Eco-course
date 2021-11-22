import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Card, Tabs, Button} from 'antd';
import { BackTop } from 'antd';
import {CheckOutlined, ExclamationCircleTwoTone} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { TabPane } = Tabs;

const Eco_Chap2_Theme4_5 = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Порядок учета, транспортирования отходов. Федеральный закон от 24.06.1998 N 89-ФЗ</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 22, offset: 1}} lg={{span: 18, offset: 3}}>
                    <Card className='simple-card simple-card-radius'>
                        <h3><ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; <strong>Индивидуальные предприниматели</strong> и юридические лица обязаны вести в установленном порядке учет образовавшихся, использованных, обезвреженных, переданных другим лицам или полученных от других лиц, а также размещенных отходов.</h3>

                        <h3><ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; <strong>Должностные лица,</strong> которые допущены на предприятии к обращению с отходами I - IV класса опасности, обязаны иметь профессиональную подготовку, подтвержденную соответствующими документами.</h3>
                    </Card>

                    <Col lg={{span: 24, offset: 0}} xl={{span: 22, offset: 1}}>
                        <Button block className='mybut-primary' onClick={() => setShowModal(true)}>Ответственность за неисполнение законодательства</Button>
                    </Col>
                </Col>
            </Row>

            <Row style={{marginTop: '25px'}}>
                <Col lg={{span: 22, offset: 1}} xl={{span: 15, offset: 1}} className='padding-15-30'>
                    <Tabs size='large' className='eco-tab-list' animated centered>
                        <TabPane tab={<div style={{fontSize: '1.2rem'}}>Ответственность за допуск работников к работе с отходами I - IV класса</div>} key="1">
                            <div className='eco-flex-col' style={{gap: '20px', fontSize: '1.3rem'}}>
                                <div className='eco-flex-row eco-img-col'>
                                    <Image
                                        style={{width: '100px', marginRight: '15px'}}
                                        src={'/svg/manager.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                    />
                                    <span>
                                        <strong style={{fontWeight: 'bold'}}>Ответственность за допуск работников к работе с отходами I - IV класса</strong> опасности несет соответствующее должностное лицо организации.
                                    </span>
                                </div>
                                <div className='eco-flex-row eco-img-col'>
                                    <Image
                                        style={{width: '100px', marginRight: '15px'}}
                                        src={'/svg/worker.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                    />
                                    <span>
                                        <strong style={{fontWeight: 'bold'}}>Порядок профессиональной подготовки лиц,</strong> допущенных к сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I - IV классов опасности, и требования к ее осуществлению устанавливаются федеральным органом исполнительной власти, осуществляющим функции по выработке государственной политики и нормативно-правовому регулированию в сфере образования.
                                    </span>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.2rem'}}>Транспортирование отходов I - IV класса опасности</div>} key="2">
                            <div>
                                <h1><strong>Транспортирование отходов I - IV класса опасности должно осуществляться с учетом следующих требований:</strong></h1>

                                <div className='eco-flex-col' style={{gap: '15px', padding: '0 0 0 25px', marginBottom: '15px'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; наличие паспорта отхода;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; наличие специально оборудованных и снабженных специальными знаками транспортных средств;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; соблюдение требований безопасности к транспортированию отходов на транспортных средствах;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; наличие документации для транспортирования и передачи отходов с указанием количества транспортируемых отходов, цели и места назначения их транспортирования.
                                    </div>
                                </div>

                                <h1><strong>Порядок транспортирования отходов I - IV классов опасности,</strong> предусматривающий дифференцированные требования в зависимости от вида отходов и класса опасности отходов, требования к погрузочно-разгрузочным работам, маркировке отходов, требования к обеспечению экологической безопасности и пожарной безопасности, устанавливается федеральным органом исполнительной власти в области транспорта.</h1>
                            </div>
                        </TabPane>
                    </Tabs>
                </Col>

                <Col sm={{span: 24, offset: 0}} md={{span: 22, offset: 1}} lg={{span: 22, offset: 1}} xl={{span: 6, offset: 1}} className='eco-div-padding eco-img-col flex-centered'>
                    <Image
                        src={'/svg/trashTruck1.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '40vh', maxWidth: '1100px'}}
                    />
                </Col>
            </Row>

            <Draggable_Modal
                title='Ответственность за неисполнение законодательства'
                content={
                    <>
                        <div className='eco-flex-col' style={{gap: '20px', fontSize: '1.2rem'}}>
                            <div className='eco-flex-row eco-img-col'>
                                <Image
                                    style={{width: '100px', marginRight: '25px'}}
                                    src={'/svg/document-wrong.svg'}
                                    preview={false}
                                    placeholder={ <Skeleton.Image /> }
                                />
                                <span>
                                    <strong style={{fontWeight: 'bold'}}>Неисполнение или ненадлежащее исполнение</strong> законодательства Российской Федерации в области обращения с отходами должностными лицами и гражданам и влечет за собой дисциплинарную, административную, уголовную или гражданско-правовую ответственность в соответствии с законодательством Российской Федерации.
                                </span>
                            </div>
                            <div className='eco-flex-row eco-img-col'>
                                <Image
                                    style={{width: '100px', marginRight: '25px'}}
                                    src={'/svg/banned.svg'}
                                    preview={false}
                                    placeholder={ <Skeleton.Image /> }
                                />
                                <span>
                                    При отсутствии технической или иной возможности обеспечить безопасность для окружающей среды и здоровья человека, деятельность по обращению с опасными отходами <strong style={{fontWeight: 'bold'}}>может быть ограничена или запрещена.</strong>
                                </span>
                            </div>
                        </div>
                    </>
                }
                show={showModal}
                hide={setShowModal}
            />
        </>
    );
};

export default Eco_Chap2_Theme4_5;