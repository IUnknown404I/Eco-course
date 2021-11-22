import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Popover} from 'antd';
import { BackTop } from 'antd';
import Slider from "react-slick";

const Eco_Chap3_Theme1_4 = () => {
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
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>
                        <strong>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Являющиеся государственными инспекторами в области охраны окружающей среды.</span>}
                                title=''
                                trigger="hover">
                                Должностные лица органов государственного надзора
                            </Popover> имеют право
                        </strong>
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={22}>
                    <div className='eco-slider-container eco-slider-flex-centered eco-slider-big-dots'>
                        <Slider {...carouselState} className='eco-slider'>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Составлять протоколы об административных правонарушениях,</strong> связанных с нарушениями обязательных требований, рассматривать дела об указанных административных правонарушениях и принимать меры по предотвращению таких нарушений.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Запрашивать и получать</strong> на основании мотивированных письменных запросов&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>От органов государственной власти, органов местного самоуправления, юридических лиц, индивидуальных предпринимателей и граждан.</span>}
                                        title=''
                                        trigger="hover">
                                        информацию и документы
                                    </Popover>, необходимые в ходе проведения проверки.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Беспрепятственно по предъявлении служебного удостоверения</strong> и&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Распоряжения.</span>}
                                        title=''
                                        trigger="hover">
                                        копии приказа
                                    </Popover>&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Заместителя руководителя.</span>}
                                        title=''
                                        trigger="hover">
                                        руководителя
                                    </Popover> органа государственного надзора о назначении проверки&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Используемые юридическими лицами, индивидуальными предпринимателями и гражданами при осуществлении хозяйственной и иной деятельности на территории.</span>}
                                        title=''
                                        trigger="hover">
                                        посещать и обследовать
                                    </Popover> здания, помещения, сооружения, в том числе очистные сооружения, обследовать другие обезвреживающие устройства, средства контроля, технические и транспортные средства, оборудование и материалы, а также проводить необходимые исследования, испытания, измерения, расследования, экспертизы и другие мероприятия по контролю.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Юридическим лицам, индивидуальным предпринимателям и гражданам.</span>}
                                        title=''
                                        trigger="hover">
                                        <strong style={{fontWeight: 'bold'}}>Выдавать</strong>
                                    </Popover> предписания об устранении выявленных нарушений обязательных требований, о проведении мероприятий по обеспечению предотвращения вреда растениям, животным, окружающей среде, безопасности государства, имуществу физических и юридических лиц, государственному или муниципальному имуществу, предотвращения возникновения чрезвычайных ситуаций природного и техногенного характера.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Направлять в уполномоченные органы&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>Связанные с нарушениями законодательства в области окружающей среды.</span>}
                                            title=''
                                            trigger="hover">
                                            материалы
                                        </Popover>
                                    </strong> для решения вопросов о возбуждении уголовных дел по признакам преступлений.
                                </div>
                            </div>
                            <div className='eco-slider-card padding-30'>
                                <div>
                                    <strong style={{fontWeight: 'bold'}}>Предъявлять иски о возмещении вреда,</strong> причиненного окружающей среде и ее компонентам вследствие нарушений обязательных требований.
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '80px'}}>
                <Col lg={{span: 16, offset: 0}} xl={{span: 11, offset: 3}} className='eco-flex-col' style={{gap: '25px', fontSize: '1.3rem'}}>
                    <div className='eco-flex-row eco-img-col'>
                        <Image
                            style={{width: '120px', marginRight: '20px'}}
                            src={'/svg/auction.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>Органы государственного надзора</strong> могут быть привлечены судом к участию в деле либо вправе вступать в дело по своей инициативе для дачи заключения по иску о возмещении вреда, причиненного окружающей среде и ее компонентам, безопасности государства, имуществу физических и юридических лиц, государственному или муниципальному имуществу вследствие нарушений обязательных требований.
                        </span>
                    </div>

                    <div className='eco-flex-row eco-img-col'>
                        <Image
                            style={{width: '100px', marginRight: '35px'}}
                            src={'/svg/user.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>Государственные инспектора</strong> в области охраны окружающей среды подлежат государственной защите в соответствии с законодательством Российской Федерации.
                        </span>
                    </div>
                </Col>

                <Col sm={{span: 24, offset: 0}} md={{span: 24, offset: 0}} lg={{span: 8, offset: 0}} xl={{span: 9, offset: 0}} className='eco-img-col flex-centered md-hidden'>
                    <Image
                        src={'/svg/realmen.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '50vh', maxWidth: '1100px'}}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap3_Theme1_4;