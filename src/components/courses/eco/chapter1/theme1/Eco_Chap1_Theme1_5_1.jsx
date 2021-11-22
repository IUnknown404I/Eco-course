import React from 'react';
import {BackTop, Col, Collapse, Image, Popover, Row, Skeleton} from "antd";
import {CheckOutlined, MenuOutlined, WarningTwoTone} from "@ant-design/icons";

const { Panel } = Collapse;


const Eco_Chap1_Theme1_5_1 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Критерии отнесения объектов, оказывающих умеренное негативное воздействие на окружающую среду, к объектам II категории</strong></h1>
                </Col>
            </Row>

            <Row style={{marginTop: '50px'}}>
                <Col lg={{span: 22, offset: 1}}  xl={{span: 10, offset: 0}} className='eco-flex-col' style={{alignItems: 'center'}}>
                    <Row>
                        <Col offset={2} span={20}>
                            <Image
                                src={'/out2.jpg'}
                                placeholder={ <Skeleton.Image /> }
                                preview={false}
                            />
                        </Col>
                    </Row>

                    <div style={{display: 'inline-block', marginLeft: '30px', width: '80%'}}>
                        <h3><strong>А также:</strong></h3>
                        <div>
                            <div>
                                <div className='eco-flex-row'>
                                    <div className='eco-numeration'>1</div>
                                    <div className='eco-numeration-text'>
                                        по производству бумаги и (или) картона, фанеры, древесно-стружечных и древесно-волокнистых плит;
                                    </div>
                                </div>
                                <div className='eco-flex-row'>
                                    <div className='eco-numeration'>2</div>
                                    <div className='eco-numeration-text'>
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>С использованием оборудования для промывки, отбеливания, мерсеризации, окрашивания текстильных волокон и (или) отбеливания, окрашивания текстильной продукции.</span>}
                                            title=''
                                            trigger="hover">
                                            по производству текстильных изделий;
                                        </Popover>
                                    </div>
                                </div>
                            </div>
                            <div className='eco-flex-row'>
                                <div className='eco-numeration'>3</div>
                                <div className='eco-numeration-text'>
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '450px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>С использованием оборудования для дубления, крашения, выделки шкур и кож.</span>}
                                        title=''
                                        trigger="hover">
                                        по производству кожи и изделий из кожи;
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col lg={{span: 22, offset: 1}}  xl={{span: 13, offset: 0}}>
                    <h1 style={{fontSize: '1.35rem', marginBottom: '20px'}}><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp;&nbsp;Осуществление на объекте, оказывающем негативное воздействие на окружающую среду, хозяйственной и (или) иной деятельности <strong>в целях государственного регулирования выбросов загрязняющих веществ в атмосферный воздух устанавливаются:</strong></h1>

                    <div>
                        <Collapse
                            className='mycollapse'
                            defaultActiveKey={1}
                            expandIconPosition='right'
                            accordion
                        >
                            <Panel header="По добыче" key="1" className='eco-panel-style' extra={<MenuOutlined />} showArrow={false}>
                                <>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        руд и песков драгоценных металлов, оловянных руд, титановых руд, хромовых руд на россыпных месторождениях и (или) их подготовке;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        руд и песков драгоценных металлов, оловянных руд, титановых руд, хромовых руд на россыпных месторождениях и (или) их подготовке;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        полезных ископаемых;
                                    </p>
                                </>
                            </Panel>
                            <Panel header="По обеспечению" key="2" className='eco-panel-style' extra={<MenuOutlined />} showArrow={false}>
                                <>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        электрической энергией, газом и паром;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        паром и горячей водой;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        электрической энергией, газом и паром;
                                    </p>
                                </>
                            </Panel>
                            <Panel header="По металлургическому производству с использованием оборудования" key="3" className='eco-panel-style' extra={<MenuOutlined />} showArrow={false}>
                                <>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        для производства чугуна или стали;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        для обработки черных металлов с использованием станов горячей прокатки;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        для нанесения защитных распыленных металлических покрытий;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        для&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Включая легирование, рафинирование, и разливки цветных металлов.</span>}
                                            title=''
                                            trigger="hover">
                                            плавки
                                        </Popover>;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        для литейного производства черных металлов;
                                    </p>
                                </>
                            </Panel>
                            <Panel header="По производству следующей неметаллической минеральной продукции" key="4" className='eco-panel-style' extra={<MenuOutlined />} showArrow={false}>
                                <>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Кроме огнеупорных керамических изделий и строительных керамических материалов.</span>}
                                            title=''
                                            trigger="hover">
                                            керамические или фарфоровые изделия
                                        </Popover>;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        по&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>В части, касающейся очистки сточных вод централизованных систем водоотведения (канализации).</span>}
                                            title=''
                                            trigger="hover">
                                            сбору и обработке сточных вод
                                        </Popover>;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        стекло и изделия из стекла, включая стекловолокно;
                                    </p>
                                    <p>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        огнеупорные керамические изделия и строительные керамические материалы;
                                    </p>
                                </>
                            </Panel>
                        </Collapse>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme1_5_1;