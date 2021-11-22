import React from 'react';
import {BackTop, Button, Col, Collapse, Row} from "antd";
import {LeftCircleTwoTone, MenuOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const { Panel } = Collapse;

const Materials = ({setSwitchToMaterials}) => {
    const getLink = (pdfName) => {
        const path = `/files/${pdfName}.pdf`;
        return (
            <>
                <Collapse
                    expandIconPosition='left'
                >
                    <Panel header={pdfName} key="1" className='eco-panel-style inner-eco-link' showArrow>
                        <>
                            <div>
                                <embed src={path} width="100%" height="600px" />
                            </div>

                            <div className='eco-materials-link-container'>
                                <Link className='eco-materials-link' to={path} target="_blank" download>Загрузить</Link>
                            </div>
                        </>
                    </Panel>
                </Collapse>
            </>
        );
    }

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 40px'}}>
                <Col xs={{span: 24, offset: 0}} sm={{span: 16, offset: 4}} md={{span: 4, offset: 0}} lg={{span: 3, offset: 0}} xl={{span: 2, offset: 1}} className='eco-flex-row' style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Button
                        onClick={() => {setSwitchToMaterials(false)}}
                        icon={<LeftCircleTwoTone />}
                        className='eco-pagination-but'
                        size="large"
                    >
                        Вернуться
                    </Button>
                </Col>
                <Col xs={{span: 24, offset: 0}} sm={{span: 20, offset: 2}} md={{span: 16, offset: 0}} lg={{span: 18, offset: 0}} xl={{span: 18, offset: 0}} style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '27px', fontWeight: 'bold', color: 'darkblue'}}>Учебные материалы</h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}} xl={{span: 20, offset: 2}} xxl={{span: 18, offset: 3}} className='eco-materials-blue'>
                    <Collapse
                        // defaultActiveKey={1}
                        expandIconPosition='right'
                    >
                        <Panel header="Кодекс РФ об административных правонарушениях" key="1" className='eco-panel-style' extra={<MenuOutlined />}  showArrow>
                            <>
                                <div>
                                    <embed src="/files/Кодекс.pdf" width="100%" height="600px" />
                                </div>

                                <div className='eco-materials-link-container'>
                                    <Link className='eco-materials-link' to='/files/Кодекс.pdf' target="_blank" download>Загрузить</Link>
                                </div>
                            </>
                        </Panel>
                    </Collapse>

                    <Collapse
                        expandIconPosition='right'
                    >
                        <Panel header="Федеральные законы" key="1" className='eco-panel-style eco-materials' extra={<MenuOutlined />}  showArrow>
                            <>
                                {getLink('Закон РФ от 21.02.1992 N 2395-1')}
                                {getLink('Федеральный закон от 04.05.1999 N 96-ФЗ')}
                                {getLink('Федеральный закон от 10.01.2002 N 7-ФЗ')}
                                {getLink('Федеральный закон от 14.03.1995 N 33-ФЗ')}
                                {getLink('Федеральный закон от 21.07.2014 N 219-ФЗ')}
                                {getLink('Федеральный закон от 24.06.1998 N 89-ФЗ')}
                                {getLink('Федеральный закон от 30.03.1999 N 52-ФЗ')}
                            </>
                        </Panel>
                    </Collapse>

                    <Collapse
                        expandIconPosition='right'
                    >
                        <Panel header="Постановления" key="1" className='eco-panel-style eco-materials' extra={<MenuOutlined />}  showArrow>
                            <>
                                {getLink('Постановление Главного государственного санитарного врача РФ от 25.09.2007 N 74')}
                                {getLink('Постановление Правительства РФ от 03.03.2017 N 255')}
                                {getLink('Постановление Правительства РФ от 03.03.2018 N 222')}
                                {getLink('Постановление Правительства РФ от 09.12.2020 N 2055')}
                                {getLink('Постановление Правительства РФ от 13.09.2016 N 913')}
                                {getLink('Постановление Правительства РФ от 29.06.2018 N 758')}
                            </>
                        </Panel>
                    </Collapse>

                    <Collapse
                        expandIconPosition='right'
                    >
                        <Panel header="Приказы" key="1" className='eco-panel-style eco-materials' extra={<MenuOutlined />}  showArrow>
                            <>
                                {getLink('Приказ Минприроды России от 11.08.2020 N 581')}
                                {getLink('Приказ Минприроды России от 14.06.2018 N 261')}
                                {getLink('Приказ Минприроды России от 28.02.2018 N 74')}
                                {getLink('Приказ Росприроднадзора от 22.05.2017 N 242 ')}
                            </>
                        </Panel>
                    </Collapse>

                    <Collapse
                        expandIconPosition='right'
                    >
                        <Panel header="ГОСТ(ы)" key="1" className='eco-panel-style eco-materials' extra={<MenuOutlined />}  showArrow>
                            <>
                                {getLink('ГОСТ Р 56059-2014')}
                                {getLink('ГОСТ Р 56060-2014')}
                                {getLink('ГОСТ Р 56061-2014')}
                                {getLink('ГОСТ Р 56062-2014')}
                                {getLink('ГОСТ Р 56063-2014')}
                            </>
                        </Panel>
                    </Collapse>

                    <Collapse
                        expandIconPosition='right'
                    >
                        <Panel header="Типовые формы паспортов отходов I - IV классов опасности" key="1" className='eco-panel-style eco-materials' extra={<MenuOutlined />}  showArrow>
                            <>
                                {getLink('Типовая форма паспорта отходов I - IV классов опасности, включенных в федеральный классификационный каталог отходов')}
                                {getLink('Типовая форма паспорта отходов I - IV классов опасности, не включенных в федеральный классификационный каталог отходов')}
                            </>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </>
    );
};

export default Materials;