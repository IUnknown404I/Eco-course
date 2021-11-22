import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Popover} from 'antd';
import { BackTop } from 'antd';
import Slider from "react-slick";
import {CheckOutlined} from "@ant-design/icons";

const Eco_Chap3_Theme1_2 = () => {
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
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Общественный контроль</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={22}>
                    <div className='eco-slider-container eco-slider-flex-centered eco-slider-big-dots'>
                        <Slider {...carouselState} className='eco-slider'>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Правовые основы организации и осуществления общественного контроля</strong> за деятельностью органов государственной власти, органов местного самоуправления, государственных и муниципальных организаций, иных органов и организаций, осуществляющих в соответствии с федеральными законами отдельные публичные полномочия устанавливает Федеральный закон от 21 июля 2014 года №212-ФЗ «Об основах общественного контроля в Российской Федерации».
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Под общественным контролем понимается</strong> деятельность субъектов общественного контроля, осуществляемая в целях наблюдения за деятельностью органов государственной власти, органов местного самоуправления, государственных и муниципальных организаций, иных органов и организаций, осуществляющих в соответствии с федеральными законами отдельные публичные полномочия, а также в целях общественной проверки, анализа и общественной оценки издаваемых ими актов и принимаемых решений.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Общественный экологический контроль.</span>}
                                        title=''
                                        trigger="hover">
                                        <strong style={{fontWeight: 'bold'}}>Общественный контроль в области охраны окружающей среды</strong>
                                    </Popover> осуществляется в целях реализации права каждого на благоприятную окружающую среду и предотвращения нарушения законодательства в области охраны окружающей среды.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Общественный экологический контроль осуществляется</strong> общественными объединениями и иными некоммерческими организациями в соответствии с их уставами, а также гражданами в соответствии с законодательством.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Результаты общественного экологического контроля,</strong> представленные в органы государственной власти Российской Федерации, органы государственной власти субъектов Российской Федерации, органы местного самоуправления, подлежат обязательному рассмотрению в порядке, установленном законодательством.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Граждане, изъявившие желание оказывать органам государственного надзора содействие</strong> в природоохранной деятельности на добровольной и безвозмездной основе, могут осуществлять&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Общественный экологический контроль.</span>}
                                        title=''
                                        trigger="hover">
                                        общественный контроль в области охраны окружающей среды
                                    </Popover> в качестве&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Общественные инспекторы по охране окружающей среды при осуществлении государственной деятельности взаимодействуют с общественными советами органов государственного лесного и экологического надзора.</span>}
                                        title=''
                                        trigger="hover">
                                        общественных инспекторов по охране окружающей среды.
                                    </Popover>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '60px'}}>
                <Col md={{span: 24, offset: 0}} lg={{span: 20, offset: 2}} className='eco-flex-col' style={{gap: '15px'}}>
                    <h1><strong>Общественные инспекторы по охране окружающей среды имеют право:</strong></h1>

                    <div>
                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '800px'}}
                            className='pop_text'
                            style={{maxWidth: '550px'}}
                            content={<span>В том числе с помощью фото- и видеосъемки.</span>}
                            title=''
                            trigger="hover">
                            фиксировать
                        </Popover> правонарушения в области охраны окружающей среды и природопользования и направлять&nbsp;
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '800px'}}
                            className='pop_text'
                            style={{maxWidth: '550px'}}
                            content={<span>Содержащие данные, указывающие на наличие признаков административного правонарушения.</span>}
                            title=''
                            trigger="hover">
                            соответствующие материалы
                        </Popover> в органы государственного надзора;
                    </div>
                    <div>
                        <CheckOutlined style={{color: 'green'}}/>&nbsp; принимать меры по обеспечению сохранности вещественных доказательств на местах совершения правонарушений;
                    </div>
                    <div>
                        <CheckOutlined style={{color: 'green'}}/>&nbsp; сообщать в устной форме физическим лицам информацию, касающуюся совершения физическим лицом правонарушения в области охраны окружающей среды;
                    </div>
                    <div>
                        <CheckOutlined style={{color: 'green'}}/>&nbsp; содействовать в реализации государственных программ по охране объектов животного мира и среды их обитания;
                    </div>
                    <div>
                        <CheckOutlined style={{color: 'green'}}/>&nbsp; обращаться в органы&nbsp;
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '800px'}}
                            className='pop_text'
                            style={{maxWidth: '550px'}}
                            content={<span>Органы государственной власти РФ, органы государственной власти субъектов РФ, органы местного самоуправления.</span>}
                            title=''
                            trigger="hover">
                            власти
                        </Popover> к должностным лицам, в организации о предоставлении своевременной, полной, достоверной, необходимой для осуществления общественного контроля в области&nbsp;
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '800px'}}
                            className='pop_text'
                            style={{maxWidth: '550px'}}
                            content={<span>Информации о состоянии окружающей среды, принимаемых мерах по её охране, об обстоятельствах и фактах осуществления хозяйственной и иной деятельности, которые негативно воздействуют на окружающую среду, создают угрозу жизни, здоровью и имуществу граждан.</span>}
                            title=''
                            trigger="hover">
                            охраны окружающей среды;
                        </Popover>
                    </div>
                    <div>
                        <CheckOutlined style={{color: 'green'}}/>&nbsp; участвовать в работе по экологическому просвещению населения.
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 22, offset: 1}} lg={{span: 14, offset: 5}}>
                    <div className='eco-flex-row eco-img-col eco-img-div-item extra'>
                        <Image
                            style={{width: '80px', marginRight: '15px'}}
                            src={'/svg/docs.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>Общественным инспекторам по охране окружающей среды выдаются удостоверения.</strong>
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap3_Theme1_2;