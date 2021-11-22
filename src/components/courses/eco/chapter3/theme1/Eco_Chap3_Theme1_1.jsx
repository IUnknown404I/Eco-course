import React from 'react';
import {Row, Col, Table, Tabs, Skeleton, Image, Popover} from 'antd';
import { BackTop } from 'antd';
import {ExclamationCircleTwoTone} from "@ant-design/icons";

const { TabPane } = Tabs;

const Eco_Chap3_Theme1_1 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Виды государственного экологического надзора (ГЭН). Федеральный и региональный ГЭН</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col lg={{span: 22, offset: 1}} xl={{span: 14, offset: 1}}>
                    <Tabs size='large' className='eco-tab-list' animated>
                        <TabPane tab={<div style={{fontSize: '1.35rem'}}>Государственный контроль</div>} key="1">
                            <div className='eco-flex-col' style={{gap: '20px', fontSize: '1.3rem'}}>
                                <div style={{marginBottom: '30px', fontSize: '1.35rem'}}>
                                    <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; <strong style={{fontWeight: 'bold'}}>Сущность контроля в обобщенном виде состоит</strong> в наблюдении за соответствием деятельности подконтрольного объекта нормам права с целью выяснения, соответствует ли его деятельность заданным параметрам, не допущены ли в ней какие-либо нарушения законности.
                                </div>

                                <div className='eco-flex-row eco-img-col'>
                                    <Image
                                        style={{width: '100px', marginRight: '15px'}}
                                        src={'/svg/children.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                    />
                                    <span>
                                        <strong style={{fontWeight: 'bold'}}>Контрольные процедуры имеют своей целью</strong> не только выявление соответствия осуществляемой деятельности предписаниям норм права, но и оценку рациональности, разумности, эффективности осуществляемых действий.
                                    </span>
                                </div>
                                <div className='eco-flex-row eco-img-col'>
                                    <Image
                                        style={{width: '100px', marginRight: '15px'}}
                                        src={'/svg/children.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                    />
                                    <span>
                                        <strong style={{fontWeight: 'bold'}}>Контроль представляет собой</strong> систему наблюдения над деятельностью и корректировки поведения подконтрольных объектов в целях соответствия их деятельности установленным нормам права и целям осуществляемой деятельности.
                                    </span>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.35rem'}}>Государственный надзор</div>} key="2">
                            <div className='eco-flex-col' style={{gap: '20px', fontSize: '1.3rem'}}>
                                <div style={{marginBottom: '30px', fontSize: '1.35rem'}}>
                                    <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; <strong style={{fontWeight: 'bold'}}>Надзор как способ обеспечения законности состоит</strong> в постоянном и систематическом наблюдении специальных государственных органов за деятельностью не подчиненных им органов и лиц с целью выявления нарушений законности.
                                </div>
                                <div style={{marginBottom: '30px', fontSize: '1.35rem'}}>
                                    <strong style={{fontWeight: 'bold'}}>Надзор осуществляется</strong>&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '450px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Прокурорский надзор.</span>}
                                        title=''
                                        trigger="hover">
                                        органами прокуратуры
                                    </Popover> и&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '450px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Административный надзор.</span>}
                                        title=''
                                        trigger="hover">
                                        специально уполномоченными органами исполнительной власти
                                    </Popover>.
                                </div>

                                <div className='eco-flex-row eco-img-col'>
                                    <Image
                                        style={{width: '100px', marginRight: '15px'}}
                                        src={'/svg/children.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                    />
                                    <span>
                                        <strong style={{fontWeight: 'bold'}}>При осуществлении надзора оценка деятельности поднадзорного объекта</strong> дается только с точки зрения законности его действий, но не целесообразности и эффективности подконтрольного объекта. В связи с этим&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>В отличии от контроля.</span>}
                                            title=''
                                            trigger="hover">
                                            при надзоре
                                        </Popover> вмешательство в текущую административно-хозяйственную деятельность поднадзорного&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Должностного лица.</span>}
                                            title=''
                                            trigger="hover">
                                            исполнительного органа
                                        </Popover> не допускается.
                                    </span>
                                </div>
                                <div className='eco-flex-row eco-img-col'>
                                    <Image
                                        style={{width: '100px', marginRight: '15px'}}
                                        src={'/svg/children.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                    />
                                    <span>
                                        <strong style={{fontWeight: 'bold'}}>Надзор заключается</strong> в создании системы проверки соблюдения закона в процессе осуществления различных видов деятельности с последующим инициированием процедуры привлечения к юридической ответственности за нарушение законодательства.
                                    </span>
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                </Col>

                <Col xs={{span: 8, offset: 8}} sm={{span: 14, offset: 5}} md={{span: 12, offset: 6}} lg={{span: 10, offset: 7}} xl={{span: 8, offset: 1}} className='eco-flex-row flex-centered'>
                    <Image
                        src={'/svg/nadzor.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '60vh', maxWidth: '1100px'}}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap3_Theme1_1;