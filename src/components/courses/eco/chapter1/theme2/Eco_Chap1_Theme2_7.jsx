import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Popover} from 'antd';
import { BackTop } from 'antd';
import Slider from "react-slick";
import {InfoCircleTwoTone} from "@ant-design/icons";

const Eco_Chap1_Theme2_7 = () => {
    const [carouselState, setCarouselState] = useState({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
    });

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>
                        <strong>
                            Отчет об организации и о результатах осуществления производственного экологического контроля
                        </strong>
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col lg={{span: 24, offset: 0}} xl={{span: 22, offset: 1}} style={{padding: '0 15px'}}>
                    <div className='eco-slider-container eco-slider-flex-centered eco-slider-big-dots'>
                        <Slider {...carouselState} className='eco-slider'>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Отчет об организации и о результатах осуществления</strong> производственного экологического контроля представляется юридическими лицами и индивидуальными предпринимателями, осуществляющими хозяйственную и (или) иную деятельность на объектах I, II и III категорий (далее - объекты), ежегодно до 25 марта года, следующего за отчетным.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Юридические лица и индивидуальные предприниматели,</strong> осуществляющие деятельность на объектах I категории, а также на объектах II и III категории, подлежащих федеральному государственному экологическому надзору, представляют Отчет в территориальный орган Федеральной службы по надзору в сфере природопользования по месту осуществления деятельности.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Юридические лица и индивидуальные предприниматели,</strong> осуществляющие деятельность на объектах II и III категории, подлежащих региональному государственному экологическому надзору, представляют Отчет в орган исполнительной власти субъекта Российской Федерации, осуществляющий региональный государственный экологический надзор, по месту осуществления деятельности.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Отчет оформляется в двух экземплярах,</strong> один экземпляр которого хранится у юридического лица или индивидуального предпринимателя, осуществляющего хозяйственную и (или) иную деятельность на данном объекте, а второй экземпляр вместе с электронной версией отчета на магнитном носителе представляется&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '900px'}}
                                        className='pop_text'
                                        style={{maxWidth: '350px'}}
                                        content={<span>Или направляется в его адрес почтовым отправлением с описью вложения и с уведомлением о вручении.</span>}
                                        title=''
                                        trigger="hover">
                                        непосредственно в соответствующий орган
                                    </Popover>.
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '80px'}}>
                <Col md={{span: 22, offset: 1}} lg={{span: 11, offset: 3}} className='eco-flex-col' style={{gap: '25px', fontSize: '1.3rem'}}>
                    <div className='eco-flex-row eco-img-col'>
                        <Image
                            style={{width: '100px', marginRight: '30px'}}
                            src={'/svg/email.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            Отчет может быть направлен в виде электронного документа, подписанного усиленной квалифицированной&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '900px'}}
                                className='pop_text'
                                style={{width: '350px'}}
                                content={<span>В соответствии с требованиями Федерального закона от 6 апреля 2011 г. № 63-ФЗ "Об электронной подписи".</span>}
                                title=''
                                trigger="hover">
                                электронной подписью
                            </Popover>.
                        </span>
                    </div>

                    <div className='eco-flex-row eco-img-col'>
                        <Image
                            style={{width: '120px', marginRight: '2px'}}
                            // style={{height: '120px', marginRight: '35px'}}
                            src={'/svg/signature.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span style={{marginLeft: '10px'}}>
                            Отчет должен быть подписан&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '900px'}}
                                className='pop_text'
                                style={{maxWidth: '350px'}}
                                content={<span>Или должностным лицом, уполномоченным руководителем юридического лица подписывать отчет от имени юридического лица.</span>}
                                title=''
                                trigger="hover">
                                руководителем юридического лица
                            </Popover> индивидуальным предпринимателем.
                        </span>
                    </div>
                </Col>

                {/*<Col md={{span: 18, offset: 3}} lg={{span: 9, offset: 0}} className='eco-img-col flex-centered' style={{marginTop: '-70px'}}>*/}
                <Col md={{span: 18, offset: 3}} lg={{span: 9, offset: 0}} className='eco-img-col flex-centered'>
                    <Image
                        // src={'/svg/man.svg'}
                        src={'/svg/docs2.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        // style={{width: '100%', height: '45vh', maxWidth: '1100px'}}
                        style={{width: '100%', height: '35vh', maxWidth: '1100px'}}
                    />
                </Col>
            </Row>

            <Row style={{marginTop: '40px'}}>
                <Col offset={1} span={22}>
                    <h3>
                        <InfoCircleTwoTone/>&nbsp; <strong>Юридические лица и индивидуальные предприниматели,</strong> осуществляющие хозяйственную и (или) иную деятельность на объектах III категории, определенных в соответствии с законодательством в области охраны окружающей среды, представляют в уполномоченный Правительством Российской Федерации федеральный орган исполнительной власти или исполнительные органы государственной власти субъектов Российской Федерации в соответствии с их компетенцией отчетность об образовании, утилизации, обезвреживании, о размещении отходов в составе отчета об организации и о результатах осуществления производственного экологического контроля в порядке и сроки, которые определены законодательством в области охраны окружающей среды.
                    </h3>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme2_7;