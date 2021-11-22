import React from 'react';
import {BackTop, Col, Collapse, Image, Popover, Row, Skeleton} from "antd";
import {InfoCircleTwoTone} from "@ant-design/icons";
import {Link} from "react-router-dom";

const { Panel } = Collapse;

const Eco_Chap1_Theme1_7 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Паспортизация отходов. Приказ Минприроды России от 08.12.2020 N 1026.</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={22}>
                    <h3>
                        <InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; Порядок паспортизации отходов I - IV классов опасности:
                    </h3>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col lg={{span: 22, offset: 1}}  xl={{span: 13, offset: 1}} className='eco-flex-col' style={{gap: '20px', padding: '0 20px 0 50px'}}>
                    <div className='eco-flex-row eco-img-col'>
                        <Image
                            style={{width: '90px', marginRight: '30px'}}
                            src={'/svg/doc2.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>Паспорт отходов I - IV классов опасности представляет собой</strong> документ, удостоверяющий принадлежность отходов к отходам соответствующего вида и класса опасности и содержащий сведения об их составе.
                        </span>
                    </div>
                    <div className='eco-flex-row eco-img-col'>
                        <Image
                            style={{width: '90px', marginRight: '30px'}}
                            src={'/svg/businessman.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>Паспортизация отходов I - IV классов опасности осуществляется</strong> индивидуальными предпринимателями и юридическими лицами, в процессе деятельности которых образуются отходы I - IV классов опасности.
                        </span>
                    </div>
                    <div className='eco-flex-row eco-img-col'>
                        <Image
                            style={{width: '90px', marginRight: '30px'}}
                            src={'/svg/server.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '450px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Документы, на основании которых установлено соответствие отходов I - IV классов опасности виду отходов, подлежат хранению юридическими лицами и индивидуальными предпринимателями в течении всего срока действия паспорта отходов.</span>}
                                    title=''
                                    trigger="hover">
                                    Установление соответствия отходов виду отходов
                                </Popover> производится
                            </strong> путем сопоставления и установления идентичности классификационных&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Происхождение, состав, агрегатное состояние и физическая форма.</span>}
                                title=''
                                trigger="hover">
                                признаков
                            </Popover> с использованием банка данных об отходах.
                        </span>
                    </div>
                </Col>

                <Col md={{span: 22, offset: 1}} lg={{span: 20, offset: 2}}  xl={{span: 9, offset: 0}} className='eco-flex-col eco-img-col' style={{alignItems: 'unset'}}>
                    <div className='eco-flex-row'>
                        <div className='eco-num-col'>1</div>
                        <div className='eco-num-text'>
                            Паспорт отходов, не включенных в&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Федеральный классификационный каталог отходов.</span>}
                                title=''
                                trigger="hover">
                                ФККО
                            </Popover>, подлежит переоформлению на паспорт отходов, включенных в ФККО, в течение 30 календарных дней с даты включения соответствующего вида отходов в ФККО, о чем индивидуальный предприниматель или юридическое лицо уведомляется Росприроднадзором в письменной форме в течение 10 календарных дней.
                        </div>
                    </div>
                    <div className='eco-flex-row'>
                        <div className='eco-num-col'>2</div>
                        <div className='eco-num-text'>
                            Паспорта отходов, включенных в ФККО, действуют бессрочно.
                        </div>
                    </div>
                    <div className='eco-flex-row'>
                        <div className='eco-num-col'>3</div>
                        <div className='eco-num-text'>
                            Внесение изменений в паспорта отходов не допускается.
                        </div>
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col md={{span: 22, offset: 1}} lg={{span: 22, offset: 1}}  xl={{span: 11, offset: 1}} className='eco-materials eco-materials-green'>
                    <Collapse
                        // defaultActiveKey={1}
                        expandIconPosition='right'
                        className='mycollapse'
                    >
                        <Panel header={<span>Типовая форма паспорта отходов I - IV классов опасности, включенных в федеральный классификационный каталог отходов</span>} key="1" className='eco-panel-style' showArrow>
                            <>
                                <div>
                                    <embed src="/files/Типовая форма паспорта отходов I - IV классов опасности, включенных в федеральный классификационный каталог отходов.pdf" width="100%" height="500px" />
                                </div>

                                <div className='eco-materials-link-container'>
                                    <Link className='eco-materials-link' to='/files/Типовая форма паспорта отходов I - IV классов опасности, включенных в федеральный классификационный каталог отходов.pdf' target="_blank" download>Загрузить</Link>
                                </div>
                            </>
                        </Panel>
                    </Collapse>
                </Col>
                <Col md={{span: 22, offset: 1}} lg={{span: 22, offset: 1}}  xl={{span: 11, offset: 1}} className='eco-materials eco-materials-green'>
                    <Collapse
                        // defaultActiveKey={1}
                        expandIconPosition='right'
                        className='mycollapse'
                    >
                        <Panel header="Типовая форма паспорта отходов I - IV классов опасности, не включенных в федеральный классификационный каталог отходов" key="1" className='eco-panel-style' showArrow>
                            <>
                                <div>
                                    <embed src="/files/Типовая форма паспорта отходов I - IV классов опасности, не включенных в федеральный классификационный каталог отходов.pdf" width="100%" height="500px" />
                                </div>

                                <div className='eco-materials-link-container'>
                                    <Link className='eco-materials-link' to='/files/Типовая форма паспорта отходов I - IV классов опасности, не включенных в федеральный классификационный каталог отходов.pdf' target="_blank" download>Загрузить</Link>
                                </div>
                            </>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme1_7;