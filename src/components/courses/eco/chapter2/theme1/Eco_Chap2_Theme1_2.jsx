import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Tabs, Card, Popover} from 'antd';
import { BackTop } from 'antd';
import Slider from "react-slick";
import NumListCard from "../../../../UI/numListCard/NumListCard";
import {
    CheckSquareTwoTone,
} from '@ant-design/icons';

const { TabPane } = Tabs;

const Eco_Chap2_Theme1_2 = () => {
    const [carouselState, setCarouselState] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>Основные требования к организации и осуществлению&nbsp;
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '900px'}}
                            className='pop_text'
                            style={{maxWidth: '350px'}}
                            content={<span>Далее - ПЭК.</span>}
                            title=''
                            trigger="hover">
                            <strong>производственного экологического контроля</strong>
                        </Popover>.
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}} className='padding-15-30'>
                    <div className='eco-slider-container'>
                        <Slider {...carouselState} className='eco-slider'>
                            <div>
                                <div className='eco-slider-card'>
                                    <div>
                                        Контроль за своевременной разработкой и соблюдением установленных нормативов, лимитов допустимого воздействия на окружающую среду и соответствующих разрешений.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='eco-slider-card'>
                                    <div>
                                        Контроль за соблюдением природоохранных требований.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='eco-slider-card'>
                                    <div>
                                        Контроль за соблюдением условий и объемов добычи природных ресурсов.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='eco-slider-card'>
                                    <div>
                                        Контроль за соблюдением нормативов допустимых и временно допустимых концентраций загрязняющих веществ в сточных водах.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='eco-slider-card'>
                                    <div>
                                        Контроль за соблюдением режима охраны и использования особо охраняемых природных территорий.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='eco-slider-card'>
                                    <div>
                                        Контроль за выполнением мероприятий по охране окружающей среды.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='eco-slider-card'>
                                    <div>
                                        Контроль за выполнением мероприятий по рациональному использованию и восстановлению природных ресурсов.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='eco-slider-card'>
                                    <div>
                                        Контроль за выполнением предписаний должностных лиц, осуществляющих государственный и муниципальный экологический контроль.
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '45px'}}>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}}>
                    <Tabs type="card" size='large' className='eco-tab-list' centered animated>
                        <TabPane tab="Структура ПЭК" key="1">
                            <>
                                <Row style={{marginTop: '20px'}}>
                                    <Col sm={{span: 22, offset: 1}} lg={{span: 12, offset: 6}} xl={{span: 12, offset: 1}}>
                                        <h1 style={{fontSize: '1.4rem'}}><strong>Структура ПЭК включает:</strong></h1>

                                        <div style={{marginTop: '20px', fontSize: '1.25rem'}} className='eco-p-low'>
                                            <p> <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; ПЭК за соблюдением общих требований природоохранного законодательства; </p>
                                            <p> <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; ПЭК за охраной атмосферного воздуха; </p>
                                            <p> <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; ПЭК за охраной водных объектов; </p>
                                            <p> <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; ПЭК в области обращения с отходами; </p>
                                            <p> <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; ПЭК за охраной земель и почв. </p>
                                        </div>
                                    </Col>

                                    <Col sm={{span: 22, offset: 1}} lg={{span: 18, offset: 3}} xl={{span: 10, offset: 0}}>
                                        <Card className='simple-card'>
                                            <div>
                                                <div className='eco-flex-row eco-img-col'>
                                                    <Image
                                                        style={{width: '120px', marginRight: '5px'}}
                                                        preview = {false}
                                                        src={'/images/eco-control.jpg'}
                                                        placeholder={
                                                            <Skeleton.Image />
                                                        }
                                                    />
                                                    <strong>В определенных случаях ПЭК может включать в себя:</strong>
                                                </div>
                                                <div style={{marginTop: '15px', paddingLeft: '5%'}}>
                                                    - ПЭК за соблюдением режимов особо охраняемых природных территорий; <br/>
                                                    - ПЭК за охраной объектов животного мира и среды их обитания; <br/>
                                                    - ПЭК за охраной лесов и иной растительности.
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </>
                        </TabPane>
                        <TabPane tab="Основные задачи ПЭК" key="2">
                            <>
                                <Row style={{marginTop: '20px'}}>
                                    <Col md={{span: 22, offset: 1}} lg={{span: 11, offset: 0}} className='eco-div-padding eco-flex-col'>
                                        <NumListCard num={1} text={<span>контроль за <strong style={{fontWeight: 'bold'}}>обращением с опасными отходами</strong></span>}/>
                                        <NumListCard num={2} text={<span>контроль за <strong style={{fontWeight: 'bold'}}>учетом номенклатуры и количества загрязняющих веществ</strong>, поступающих в окружающую среду в результате деятельности организации, а также уровня оказываемого физического и биологического воздействия</span>}/>
                                        <NumListCard num={3} text={<span>контроль за <strong style={{fontWeight: 'bold'}}>состоянием окружающей среды</strong> в районе объектов, оказывающих негативное воздействие на окружающую среду</span>}/>
                                        <NumListCard num={4} text={<span>контроль <strong style={{fontWeight: 'bold'}}>эффективной работы систем учета</strong> использования природных ресурсов</span>}/>
                                        <NumListCard num={5} text={<span>контроль за <strong style={{fontWeight: 'bold'}}>эксплуатацией природоохранного оборудования и сооружений</strong></span>}/>
                                    </Col>
                                    <Col md={{span: 22, offset: 1}} lg={{span: 13, offset: 0}} className='eco-div-padding eco-flex-col'>
                                        <NumListCard num={6} text={<span>контроль за своевременным предоставлением <strong style={{fontWeight: 'bold'}}>сведений о состоянии и загрязнении</strong> окружающей среды, об источниках ее загрязнения, о состоянии природных ресурсов, об их использовании и охране</span>}/>
                                        <NumListCard num={7} text={<span>контроль за своевременным предоставлением <strong style={{fontWeight: 'bold'}}>достоверной информации</strong></span>} popover='Предусмотренной системой государственного статистического наблюдения, системой обмена информацией с государственными органами управления в области охраны окружающей среды'/>
                                        <NumListCard num={8} text={<span>контроль за организацией и <strong style={{fontWeight: 'bold'}}>проведением обучения, инструктажа и проверки знаний</strong> в области охраны окружающей среды и природопользования</span>}/>
                                        <NumListCard num={9} text={<span>подтверждение соответствия требованиям <strong style={{fontWeight: 'bold'}}>технических регламентов</strong> в области охраны окружающей среды и экологической безопасности на основании собственных доказательств</span>}/>
                                        <NumListCard num={10} text={<span>контроль за <strong style={{fontWeight: 'bold'}}>ведением документации</strong> по охране окружающей среды</span>}/>
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

export default Eco_Chap2_Theme1_2;