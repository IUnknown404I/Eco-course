import React, {useState} from 'react';
import {Row, Col} from 'antd';
import { BackTop } from 'antd';
import Slider from "react-slick";
import {
    WarningTwoTone,
    QuestionCircleTwoTone,
} from '@ant-design/icons';

const Eco_Chap2_Theme2_1 = () => {
    const [carouselState, setCarouselState] = useState({
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    });

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className='eco-sample-prev-arrow'
                onClick={onClick}
            />
        );
    }
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className='eco-sample-next-arrow'
                onClick={onClick}
            />
        );
    }

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 10px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>Требования в области охраны атмосферного воздуха, предъявляемые к предприятиям</h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}} className='padding-15-30'>
                    <div className='eco-slider-container'>
                        <Slider {...carouselState} className='eco-slider'>
                            <div>
                                <div className='eco-slider-card'>
                                    <div style={{marginBottom: '20px'}}>
                                        <h1 style={{textAlign: "center", fontSize: '1.5rem', margin: '30px 0 40px'}}>
                                            <QuestionCircleTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp;&nbsp;
                                            <strong>Определение нормативов допустимых выбросов для объектов категорий:</strong>
                                        </h1>

                                        <Row className='eco-flex-row'>
                                            <Col md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}} xl={{span: 10, offset: 1}}>
                                                <div className='eco-num-row'>
                                                    <div>I</div>
                                                </div>
                                                <div className='eco-num-text text-centered'>
                                                    Для <strong style={{fontWeight: 'bold'}}>объектов I категории НВОС</strong>, нормативы допустимых выбросов определяются комплексным экологическим разрешением, выдачу комплексного экологического разрешения осуществляет Федеральная служба по надзору в сфере природопользования
                                                </div>
                                            </Col>
                                            <Col md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}} xl={{span: 10, offset: 2}}>
                                                <div className='eco-num-row'>
                                                    <div>II</div>
                                                </div>
                                                <div className='eco-num-text text-centered'>
                                                    Для <strong style={{fontWeight: 'bold'}}>объектов II категории НВОС</strong>, выбросы в атмосферный воздух осуществляются в соответствии с декларацией о воздействии на окружающую среду
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='eco-flex-row' style={{marginTop: '40px'}}>
                                            <Col md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}} xl={{span: 10, offset: 1}}>
                                                <div className='eco-num-row'>
                                                    <div>III</div>
                                                </div>
                                                <div className='eco-num-text text-centered'>
                                                    Для <strong style={{fontWeight: 'bold'}}>объектов III категории НВОС</strong>, нормативы допустимых выбросов, не будут рассчитываться, при условии отсутствия в составе выбросов радиоактивных, высокотоксичных веществ, веществ, обладающих канцерогенными, мутагенными свойствами
                                                </div>
                                            </Col>
                                            <Col md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}} xl={{span: 10, offset: 2}}>
                                                <div className='eco-num-row'>
                                                    <div>IV</div>
                                                </div>
                                                <div className='eco-num-text text-centered'>
                                                    Для <strong style={{fontWeight: 'bold'}}>объектов IV категории НВОС</strong> расчёт нормативов допустимых выбросов не требуется
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='eco-slider-card'>
                                    <div style={{marginBottom: '10px'}}>
                                        <h1 style={{textAlign: "center", fontSize: '1.5rem', margin: '30px 0 25px'}}>
                                            <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp;&nbsp;
                                            <strong>Несоблюдение нормативов допустимых выбросов:</strong>
                                        </h1>

                                        <Row className='eco-flex-row'>
                                            <Col md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}} xl={{span: 10, offset: 1}} className='eco-flex-row'>
                                                <div className='eco-flex-row flex-centered'>
                                                    <div className='eco-num-col'>1</div>
                                                    <div className='eco-num-text'>
                                                        При <strong style={{fontWeight: 'bold'}}>невозможности соблюдения нормативов</strong> допустимых выбросов, технологических нормативов действующим стационарным источником (и (или) совокупностью стационарных источников, расположенных на объекте, оказывающем негативное воздействие на окружающую среду) устанавливаются временно разрешенные выбросы.
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}} xl={{span: 10, offset: 2}} className='eco-flex-row'>
                                                <div className='eco-flex-row flex-centered'>
                                                    <div className='eco-num-col'>2</div>
                                                    <div className='eco-num-text'>
                                                        <strong style={{fontWeight: 'bold'}}>План мероприятий по охране окружающей среды</strong> разрабатывается и утверждается юридическими лицами или индивидуальными предпринимателями, осуществляющими хозяйственную и (или) иную деятельность на объектах II и III категорий, на период поэтапного достижения нормативов допустимых выбросов
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='eco-flex-row'>
                                            <Col md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}} xl={{span: 10, offset: 1}} className='eco-flex-row'>
                                                <div className='eco-flex-row flex-centered'>
                                                    <div className='eco-num-col'>3</div>
                                                    <div className='eco-num-text'>
                                                        <strong style={{fontWeight: 'bold'}}>Программа повышения экологической эффективности</strong> разрабатывается и утверждается юридическими лицами или индивидуальными предпринимателями, осуществляющими хозяйственную и (или) иную деятельность на объектах I категории, на период поэтапного достижения нормативов допустимых выбросов, технологических нормативов
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}} xl={{span: 10, offset: 2}} className='eco-flex-row'>
                                                <div className='eco-flex-row flex-centered'>
                                                    <div className='eco-num-col'>4</div>
                                                    <div className='eco-num-text'>
                                                        <strong style={{fontWeight: 'bold'}}>Юридические лица и индивидуальные предприниматели</strong> ежегодно представляют отчет о выполнении плана мероприятий по охране окружающей среды, программы повышения экологической эффективности
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme2_1;