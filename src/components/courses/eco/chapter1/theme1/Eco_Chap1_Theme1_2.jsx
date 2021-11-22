import React from 'react';
import {Image, Col, Row, Popover, Skeleton, Steps, Card, Tabs} from "antd";

const { Step } = Steps;
const { TabPane } = Tabs;

const Eco_Chap1_Theme1_2 = () => {

    return (
        <>

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Общие требования к хозяйственной и иной деятельности, оказывающей вредное воздействие на атмосферный воздух</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col sm={{span: 24, offset: 0}} md={{span: 22, offset: 1}} lg={{span: 22, offset: 1}}  xl={{span: 10, offset: 1}} className='eco-flex-col flex-centered' style={{marginBottom: '20px'}}>
                    <Image
                        className='eco-img'
                        src={'/breath.jpg'}
                        preview={false}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />
                </Col>
                <Col lg={{span: 22, offset: 1}}  xl={{span: 12, offset: 0}} className='eco-img-col'>
                    <Steps progressDot direction="vertical" className='eco-steps-style'>
                        <Step status={'process'} title={
                            <span>
                                В целях <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>предупреждения вредного воздействия на атмосферный воздух</strong> устанавливаются&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '450px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>В том числе к работам, услугам и соответствующим методам контроля, а также ограничения и условия осуществления хозяйственной и иной деятельности, оказывающей вредное воздействие на атмосферный воздух.</span>}
                                    title=''
                                    trigger="hover">
                                    обязательные для соблюдения при осуществлении хозяйственной и иной деятельности требования охраны атмосферного воздуха
                                </Popover>.
                            </span>
                        } />
                        <Step status={'process'} title={
                            <>
                                Органы исполнительной власти Российской Федерации и органы государственной власти субъектов Российской Федерации <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>могут вводить ограничения использования нефтепродуктов и других видов топлива,</strong> сжигание которых приводит к загрязнению атмосферного воздуха на соответствующей территории, а также стимулировать производство и применение экологически безопасных видов топлива и других энергоносителей.
                            </>
                        }/>
                        <Step status={'process'} title={
                            <>
                                <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Запрещается выброс в атмосферный воздух веществ,</strong> степень опасности которых для жизни и здоровья человека и для окружающей среды не установлена.
                            </>
                        }/>
                        <Step status={'process'} title={
                            <>
                                <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Действия, направленные на изменение состояния атмосферного воздуха и атмосферных явлений, могут осуществляться только при отсутствии вредных последствий</strong> для жизни и здоровья человека и для окружающей среды и на основании разрешений, выданных федеральным органом исполнительной власти в области охраны окружающей среды.
                            </>
                        }/>
                    </Steps>
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col lg={{span: 22, offset: 1}}  xl={{span: 17, offset: 4}}>
                    <Tabs tabPosition={'right'} type="card" size='large' className='eco-tab-list eco-tab-list-right-radius' centered animated>
                        <TabPane tab="объекты I категории" key="1">
                            <>
                                <Row style={{marginTop: '20px'}}>
                                    <Col offset={1} span={22}>
                                        <Card className='simple-card simple-card-radius'>
                                            <div>
                                                <div className='eco-div-withFloat'>
                                                    <Image
                                                        className='eco-float-ico'
                                                        preview = {false}
                                                        src={'/eco-ic.png'}
                                                        placeholder={
                                                            <Skeleton.Image />
                                                        }
                                                    />
                                                    <span>
                                                        Выбросы загрязняющих веществ в атмосферный воздух на <strong>объектах I категории</strong>, осуществляются на основании&nbsp;
                                                        <Popover
                                                            color={"azure"}
                                                            overlayStyle={{maxWidth: '450px'}}
                                                            className='pop_text'
                                                            style={{maxWidth: '200px'}}
                                                            content={<span>Выданного в соответствии с законодательством в области охраны окружающей среды</span>}
                                                            title=''
                                                            trigger="hover">
                                                                комплексного экологического разрешения
                                                        </Popover>.
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        </TabPane>
                        <TabPane tab="объекты II категории" key="2">
                            <>
                                <Row style={{marginTop: '20px'}}>
                                    <Col offset={1} span={22}>
                                        <Card className='simple-card simple-card-radius'>
                                            <div>
                                                <div className='eco-div-withFloat'>
                                                    <Image
                                                        className='eco-float-ico'
                                                        preview = {false}
                                                        src={'/eco-ic.png'}
                                                        placeholder={
                                                            <Skeleton.Image />
                                                        }
                                                    />
                                                    <span>
                                                        <Popover
                                                            color={"azure"}
                                                            overlayStyle={{maxWidth: '450px'}}
                                                            className='pop_text'
                                                            style={{maxWidth: '200px'}}
                                                            content={<span>За исключением выбросов радиоактивных веществ</span>}
                                                            title=''
                                                            trigger="hover">
                                                                Выбросы загрязняющих веществ в атмосферный воздух на
                                                        </Popover>
                                                        <strong> объектах II категории</strong> осуществляются на основании&nbsp;
                                                        <Popover
                                                            color={"azure"}
                                                            overlayStyle={{maxWidth: '450px'}}
                                                            className='pop_text'
                                                            style={{maxWidth: '200px'}}
                                                            content={<span>Представляемой в соответствии с законодательством в области охраны окружающей среды в уполномоченный Правительством Российской Федерации федеральный орган исполнительной власти или орган исполнительной власти субъекта Российской Федерации</span>}
                                                            title=''
                                                            trigger="hover">
                                                                декларации о воздействии на окружающую среду
                                                        </Popover>.
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        </TabPane>
                        <TabPane tab="объекты III категории" key="3">
                            <>
                                <Row style={{marginTop: '20px'}}>
                                    <Col offset={1} span={22}>
                                        <Card className='simple-card simple-card-radius'>
                                            <div>
                                                <div className='eco-div-withFloat'>
                                                    <Image
                                                        className='eco-float-ico'
                                                        preview = {false}
                                                        src={'/eco-ic.png'}
                                                        placeholder={
                                                            <Skeleton.Image />
                                                        }
                                                    />
                                                    <span>
                                                        Для осуществления выбросов загрязняющих веществ в атмосферный воздух на <strong>объектах III категории</strong> получение комплексного экологического разрешения и заполнение декларации о воздействии на окружающую среду не требуются. Юридические лица и индивидуальные предприниматели представляют отчетность о выбросах загрязняющих веществ в атмосферный воздух.
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
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

export default Eco_Chap1_Theme1_2;