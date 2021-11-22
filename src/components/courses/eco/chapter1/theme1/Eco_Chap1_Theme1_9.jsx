import React, {useState} from 'react';
import {Row, Col, Image, Skeleton} from 'antd';
import { BackTop } from 'antd';
import Slider from "react-slick";
import {WarningTwoTone} from "@ant-design/icons";

const Eco_Chap1_Theme1_9 = () => {
    const [carouselState, setCarouselState] = useState({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>В целях организации деятельности по обращению с отходами I и II классов опасности утверждается федеральная схема обращения с отходами I и II классов опасности, которая включает:</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}} className='padding-15-30'>
                    <div className='eco-slider-container eco-slider-flex-centered eco-slider-big-dots'>
                        <Slider {...carouselState} className='eco-slider'>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>1</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        Сведения о видах отходов I и II классов опасности, об источниках образования отходов I и II классов опасности, о нормативах образования отходов и лимитах на их размещение, утвержденных в отношении отходов I и II классов опасности
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>2</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        Сведения о местах нахождения, мощности, технических характеристиках объектов обработки, утилизации, обезвреживания и размещения отходов I и II классов опасности
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>3</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        Сведения об операторах по обращению с отходами I и II классов опасности
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>4</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        Сведения о фактическом количестве образующихся, обработанных, утилизированных, обезвреженных и размещенных отходах I и II классов опасности
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>5</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        Схему потоков отходов I и II классов опасности от источников их образования до объектов обработки, утилизации, обезвреживания и размещения отходов I и II классов опасности
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>6</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        Данные о целевых показателях по обезвреживанию и размещению отходов I и II классов опасности
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>7</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        Баланс количественных характеристик образования отходов I и II классов опасности с мощностями по их обработке, утилизации, обезвреживанию и размещению
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>8</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        Данные о планируемых строительстве, реконструкции, выведении из эксплуатации объектов обработки, утилизации, обезвреживания и размещения отходов I и II классов опасности
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>9</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        Данные об оценке потребностей в финансировании планируемых строительства, реконструкции, выведения из эксплуатации, включая рекультивацию территорий, объектов обработки, утилизации, обезвреживания и размещения отходов I и II классов опасности
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col sm={{span: 24, offset: 0}} lg={{span: 20, offset: 2}} xl={{span: 12, offset: 3}}>
                    <div className='eco-flex-row eco-img-col eco-img-div-item extra padding-15-30'>
                        <Image
                            style={{width: '80px', marginRight: '15px'}}
                            src={'/svg/recycle-bin.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span style={{fontSize: '1.3rem'}}>
                            <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; Индивидуальные предприниматели, юридические лица, в результате хозяйственной и (или) иной деятельности которых образуются отходы I и II классов опасности, федеральный оператор, операторы по обращению с отходами I и II классов опасности, региональные операторы по обращению с твердыми коммунальными отходами <strong style={{fontWeight: 'bold'}}>обязаны осуществлять свою деятельность в соответствии с федеральной схемой обращения с отходами I и II классов опасности.</strong>
                        </span>
                    </div>
                </Col>

                <Col sm={{span: 22, offset: 1}} lg={{span: 16, offset: 4}} xl={{span: 8, offset: 0}} className='eco-flex-row flex-centered'>
                    <Image
                        src={'/svg/trashman2.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '35vh', maxWidth: '1100px'}}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme1_9;