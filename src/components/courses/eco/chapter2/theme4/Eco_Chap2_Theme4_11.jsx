import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Card, Tabs, Button, Popover, Collapse} from 'antd';
import { BackTop } from 'antd';
import {
    CheckOutlined,
    ExclamationCircleTwoTone,
    WarningTwoTone,
    MinusOutlined, InfoCircleTwoTone,
} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Eco_Chap2_Theme4_11 = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Процедура оформления лицензии на деятельность. Лицензирование деятельности по обращению с отходами I-IV классов опасности.</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}}>
                    <Card className='simple-card simple-card-radius'>
                        <h3><ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; <strong>Лицензирование отдельных видов деятельности</strong> осуществляется в целях предотвращения ущерба правам, законным интересам, жизни или здоровью граждан, окружающей среде,&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '600px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Памятникам истории и культуры.</span>}
                                title=''
                                trigger="hover">
                                объектам культурного наследия
                            </Popover> народов Российской Федерации, обороне и безопасности государства, возможность нанесения которого связана с осуществлением юридическими лицами и индивидуальными предпринимателями отдельных видов деятельности.
                        </h3>
                    </Card>
                </Col>
            </Row>

            <Row style={{marginTop: '25px'}}>
                <Col offset={0} span={24} className='padding-15-30'>
                    <Tabs size='large' className='eco-tab-list' animated centered>
                        <TabPane tab={<div style={{fontSize: '1.3rem'}}>Лицензирование деятельности</div>} key="1">
                            <Row>
                                <Col md={{span: 22, offset: 1}} lg={{span: 12, offset: 0}} xl={{span: 14, offset: 0}} style={{padding: '10px 20px 0'}}>
                                    <div>
                                        <h1><strong>Лицензирование деятельности по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I − IV классов опасности установлено следующими Федеральными законами:</strong></h1>

                                        <div className='eco-flex-col' style={{gap: '15px', padding: '0 0 0 25px', marginBottom: '15px'}}>
                                            <div>
                                                <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                                <Popover
                                                    color={"azure"}
                                                    overlayStyle={{maxWidth: '600px'}}
                                                    className='pop_text'
                                                    style={{maxWidth: '200px'}}
                                                    content={<span>"Лицензированию подлежит деятельность по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I − IV классов опасности".</span>}
                                                    title=''
                                                    trigger="hover">
                                                    пункт 1 (подпункт 30) статьи 12 ФЗ «О лицензировании отдельных видов деятельности»
                                                </Popover>;
                                            </div>
                                            <div>
                                                <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                                <Popover
                                                    color={"azure"}
                                                    overlayStyle={{maxWidth: '600px'}}
                                                    className='pop_text'
                                                    style={{maxWidth: '200px'}}
                                                    content={<span>"Лицензированию подлежит деятельность по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I − IV классов опасности осуществляется в соответствии с федеральным законом от 04.05.2011 № 99-ФЗ "О лицензировании отдельных видов деятельности"".</span>}
                                                    title=''
                                                    trigger="hover">
                                                    пункт 1 статьи 9 ФЗ «Об отходах производства и потребления»
                                                </Popover>;
                                            </div>
                                            <div>
                                                <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                                <Popover
                                                    color={"azure"}
                                                    overlayStyle={{maxWidth: '600px'}}
                                                    className='pop_text'
                                                    style={{maxWidth: '200px'}}
                                                    content={<span>"Отдельные виды деятельности в области охраны окружающей среды подлежат лицензированию".</span>}
                                                    title=''
                                                    trigger="hover">
                                                    пункт 1 статьи 30 ФЗ «Об охране окружающей среды»
                                                </Popover>;
                                            </div>
                                            <div>
                                                <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                                <Popover
                                                    color={"azure"}
                                                    overlayStyle={{maxWidth: '600px'}}
                                                    className='pop_text'
                                                    style={{maxWidth: '200px'}}
                                                    content={<span>"Санитарно-эпидемиологическое благополучие населения обеспечивается посредством: лицензирования видов деятельности, представляющих потенциальную опасность для человека".</span>}
                                                    title=''
                                                    trigger="hover">
                                                    пункт 1 статьи 2 ФЗ «О санитарно-эпидемиологическом благополучии населения»
                                                </Popover>;
                                            </div>
                                        </div>

                                    </div>
                                </Col>

                                <Col sm={{span: 24, offset: 0}} md={{span: 22, offset: 1}} lg={{span: 12, offset: 0}} xl={{span: 10, offset: 0}} className='eco-flex-col flex-centered padding-15-30'>
                                    <Button block className='mybut-primary' style={{margin: '0 0 15px'}} onClick={() => setShowModal(true)}>Порядок лицензирования деятельности</Button>

                                    <Image
                                        className='md-hidden'
                                        src={'/svg/license.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                        style={{width: '100%', height: '25vh', maxWidth: '1100px', marginLeft: '30px'}}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.3rem'}}>Обязательные требования</div>} key="2">
                            <div className='eco-flex-col' style={{gap: '20px', fontSize: '1.3rem', padding: '10px 20px 0'}}>
                                <Collapse
                                    className='mycollapse'
                                    // defaultActiveKey={1}
                                    expandIconPosition='right'
                                    accordion
                                >
                                    <Panel header="Для работ по сбору отходов I - IV классов опасности:" key="1" className='eco-panel-style'>
                                        <div className='eco-flex-col' style={{gap: '15px', fontSize: '1.25rem'}}>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; виды отходов I - IV классов опасности и (или) группы, подгруппы отходов I - IV классов опасности с указанием классов опасности видов отходов в соответствующих группах, подгруппах отходов, в отношении которых предоставляется лицензия, и соответствующие видам отходов и (или) группам, подгруппам отходов виды деятельности;
                                            </div>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; реквизиты санитарно-эпидемиологического заключения о соответствии санитарным правилам зданий, строений, сооружений, помещений и оборудования, которые планируется использовать для выполнения заявленных работ, составляющих деятельность по обращению с отходами.
                                            </div>
                                        </div>
                                    </Panel>
                                    <Panel header="Для работ по транспортированию отходов I - IV классов опасности:" key="2" className='eco-panel-style'>
                                        <div className='eco-flex-col' style={{gap: '15px', fontSize: '1.25rem'}}>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; виды отходов I - IV классов опасности и (или) группы, подгруппы отходов I - IV классов опасности с указанием классов опасности видов отходов в соответствующих группах, подгруппах отходов, в отношении которых предоставляется лицензия, и соответствующие видам отходов и (или) группам, подгруппам отходов виды деятельности.
                                            </div>
                                        </div>
                                    </Panel>
                                    <Panel header="Для работ по обработке отходов I - IV классов опасности:" key="3" className='eco-panel-style'>
                                        <div className='eco-flex-col' style={{gap: '15px', fontSize: '1.25rem'}}>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; виды отходов I - IV классов опасности и (или) группы, подгруппы отходов I - IV классов опасности с указанием классов опасности видов отходов в соответствующих группах, подгруппах отходов, в отношении которых предоставляется лицензия, и соответствующие видам отходов и (или) группам, подгруппам отходов виды деятельности;
                                            </div>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; реквизиты санитарно-эпидемиологического заключения о соответствии санитарным правилам зданий, строений, сооружений, помещений и оборудования, которые планируется использовать для выполнения заявленных работ, составляющих деятельность по обращению с отходами.
                                            </div>
                                        </div>
                                    </Panel>
                                    <Panel header="Для работ по утилизации отходов I - IV классов опасности:" key="4" className='eco-panel-style'>
                                        <div className='eco-flex-col' style={{gap: '15px', fontSize: '1.25rem'}}>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; виды отходов I - IV классов опасности и (или) группы, подгруппы отходов I - IV классов опасности с указанием классов опасности видов отходов в соответствующих группах, подгруппах отходов, в отношении которых предоставляется лицензия, и соответствующие видам отходов и (или) группам, подгруппам отходов виды деятельности;
                                            </div>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; реквизиты санитарно-эпидемиологического заключения о соответствии санитарным правилам зданий, строений, сооружений, помещений и оборудования, которые планируется использовать для выполнения заявленных работ, составляющих деятельность по обращению с отходами;
                                            </div>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; реквизиты положительного заключения государственной экологической экспертизы в случаях, когда обязанность по получению такого заключения предусмотрена Федеральным законом "Об экологической экспертизе".
                                            </div>
                                        </div>
                                    </Panel>
                                    <Panel header="Для работ по обезвреживанию отходов I - IV классов опасности:" key="5" className='eco-panel-style'>
                                        <div className='eco-flex-col' style={{gap: '15px', fontSize: '1.25rem'}}>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; виды отходов I - IV классов опасности и (или) группы, подгруппы отходов I - IV классов опасности с указанием классов опасности видов отходов в соответствующих группах, подгруппах отходов, в отношении которых предоставляется лицензия, и соответствующие видам отходов и (или) группам, подгруппам отходов виды деятельности;
                                            </div>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; реквизиты санитарно-эпидемиологического заключения о соответствии санитарным правилам зданий, строений, сооружений, помещений и оборудования, которые планируется использовать для выполнения заявленных работ, составляющих деятельность по обращению с отходами;
                                            </div>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; реквизиты положительного заключения государственной экологической экспертизы в случаях, определенных Федеральным законом "Об экологической экспертизе".
                                            </div>
                                        </div>
                                    </Panel>
                                    <Panel header="Для работ по размещению отходов I - IV классов опасности:" key="6" className='eco-panel-style'>
                                        <div className='eco-flex-col' style={{gap: '15px', fontSize: '1.25rem'}}>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; виды отходов I - IV классов опасности и (или) группы, подгруппы отходов I - IV классов опасности с указанием классов опасности видов отходов в соответствующих группах, подгруппах отходов, в отношении которых предоставляется лицензия, и соответствующие видам отходов и (или) группам, подгруппам отходов виды деятельности;
                                            </div>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; реквизиты санитарно-эпидемиологического заключения о соответствии санитарным правилам зданий, строений, сооружений, помещений и оборудования, которые планируется использовать для выполнения заявленных работ, составляющих деятельность по обращению с отходами;
                                            </div>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp; реквизиты положительного заключения государственной экологической экспертизы в случаях, определенных Федеральным законом "Об экологической экспертизе".
                                            </div>
                                            <div>
                                                <MinusOutlined style={{color: 'green'}}/>&nbsp;  реквизиты документов о праве собственности или ином законном основании пользования земельным участком, необходимым для осуществления лицензируемого вида деятельности.
                                            </div>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.3rem'}}>ФЗ о лицензировании</div>} key="3">
                            <div className='eco-flex-col' style={{gap: '20px', fontSize: '1.3rem', padding: '10px 20px 0'}}>
                                <h1>Поскольку ТКО обычно представляют собой отходы&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Хотя в отдельных случаях класс опасности может быть выше.</span>}
                                        title=''
                                        trigger="hover">
                                        IV класса опасности
                                    </Popover>, то, в соответствии с 99-ФЗ «О лицензировании отдельных видов деятельности» деятельность по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению <strong>ТКО подлежит лицензированию.</strong></h1>
                                <h1>В пункте 1 статьи 9 ФЗ «Об отходах производства и потребления» [20] определено, что лицензирование деятельности по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I − IV классов опасности осуществляется в соответствии с Федеральным законом от 4 мая 2011 года № 99-ФЗ «О лицензировании отдельных видов деятельности» с учетом положений ФЗ «Об отходах производства и потребления».</h1>
                                <h1><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; Объекты, на которых осуществляется деятельность по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I − IV классов опасности, <strong>подлежат федеральному государственному экологическому надзору.</strong></h1>
                            </div>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>

            <Draggable_Modal
                title='Порядок лицензирования деятельности'
                content={
                    <>
                        <div className='eco-flex-col' style={{gap: '10px', fontSize: '1.2rem'}}>
                            <h3><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; <strong>Порядок лицензирования деятельности</strong> по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Осуществляемой юридическими лицами и индивидуальными предпринимателями.</span>}
                                    title=''
                                    trigger="hover">
                                    I − IV классов опасности
                                </Popover> определяет Положение о лицензировании деятельности по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I-IV классов опасности.
                            </h3>
                            <h3><strong>Лицензирование деятельности в области обращения с отходами</strong> осуществляется&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Росприроднадзор.</span>}
                                    title=''
                                    trigger="hover">
                                    Федеральной службой по надзору в сфере природопользования
                                </Popover>.
                            </h3>
                            <h3>Лицензирование деятельности в области обращения с отходами осуществляют территориальные органы Росприроднадзора.</h3>
                            <h3><InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong>Юридические лица, индивидуальные предприниматели</strong> , имеющие лицензии на деятельность по обезвреживанию и размещению отходов I − IV классов опасности, вправе переоформить их на лицензии на деятельность по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I − IV классов опасности.</h3>
                        </div>
                    </>
                }
                show={showModal}
                hide={setShowModal}
            />
        </>
    );
};

export default Eco_Chap2_Theme4_11;