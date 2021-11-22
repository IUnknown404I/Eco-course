import React, {useState} from 'react';
import {Row, Col, Collapse, List, Popover, Button, Image, Skeleton} from 'antd';
import { BackTop } from 'antd';
import Slider from "react-slick";
import {
    CheckOutlined,
    ExclamationCircleOutlined,
    FireOutlined,
} from '@ant-design/icons';
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { Panel } = Collapse;

const Eco_Chap2_Theme5_2 = () => {
    const [showModal, setShowModal] = useState(false);

    const data1 = [
        <> - При размещении отходов на объектах размещения отходов, которые не оказывают негативное воздействие на окружающую среду, плата за негативное воздействие на окружающую среду не взимается.</>,
        <> - Базовые нормативы платы устанавливаются по каждому ингредиенту загрязняющего вещества,&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '800px'}}
                className='pop_text'
                style={{maxWidth: '550px'}}
                content={<span>С учетом степени опасности их для окружающей природной среды и здоровья населения.</span>}
                title=''
                trigger="hover">
                виду вредного воздействия
            </Popover>.&nbsp;
            <strong style={{fontWeight: 'bold'}}>Дифференцированные ставки платы</strong> определяются умножением базовых нормативов платы на коэффициенты, учитывающие экологические факторы.
        </>,
    ];
    const data2 = [
        <>- В случае накопления отходов в целях утилизации или обезвреживания <strong style={{fontWeight: 'bold'}}>в течение одиннадцати месяцев</strong> со дня образования этих отходов плата за их размещение не взимается.</>,
        <>- Расходы на плату за негативное воздействие на окружающую среду при размещении ТКО учитываются при установлении тарифов для оператора по обращению с ТКО, регионального оператора.</>,
    ];

    const [carouselState, setCarouselState] = useState({
        infinite: true,
        speed: 500,
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

            <Row style={{marginTop: '30px'}}>
                <Col lg={{span: 24, offset: 0}} xl={{span: 22, offset: 1}} className='padding-15-30 eco-slider-container'>
                    <Slider {...carouselState} className='eco-slider'>
                        <div className='eco-slider-card eco-flex-col' style={{marginBottom: '20px'}}>
                            <h1 style={{textAlign: "center", fontSize: '1.65rem', margin: '20px 0 10px'}}>
                                <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong>Плата за размещение отходов</strong>
                            </h1>

                            <Row style={{justifyContent: 'space-around', padding: '10px 2%'}}>
                                <Col lg={{span: 22, offset: 1}} xl={{span: 12, offset: 0}} className='eco-carousel-container eco-div-padding'>
                                    <div>
                                        <div>
                                            <strong style={{fontWeight: "bold"}}>1. За образование, накопление, сбор, транспортировку, обработку, утилизацию, обезвреживание отходов</strong> плата за негативное воздействие на окружающую среду&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '800px'}}
                                                className='pop_text'
                                                style={{maxWidth: '550px'}}
                                                content={<span>Однако если в ходе операций по обращению с отходами происходит загрязнение атмосферного воздуха, поверхностных вод, то вносится плата за негативное воздействие на окружающую среду в части выбросов и сбросов загрязняющих веществ в окружающую сред.</span>}
                                                title=''
                                                trigger="hover">
                                                не вносится
                                            </Popover>.
                                        </div>
                                        <div style={{marginTop: '15px'}}>
                                            <strong style={{fontWeight: "bold"}}>2.&nbsp;
                                                <Popover
                                                    color={"azure"}
                                                    overlayStyle={{maxWidth: '800px'}}
                                                    className='pop_text'
                                                    style={{maxWidth: '550px'}}
                                                    content={<span>В соответствии с постановлением Правительства РФ от 03.03.2017 № 255 «Об исчислении и взимании платы за негативное воздействие на окружающую среду».</span>}
                                                    title=''
                                                    trigger="hover">
                                                    Виды базовых нормативов платы
                                                </Popover>
                                            </strong>:
                                            <div style={{padding: '7px 0px 0 20px'}}>
                                                <CheckOutlined style={{color: 'green'}}/>&nbsp; в пределах допустимых нормативов; <br/>
                                                <CheckOutlined style={{color: 'green'}}/>&nbsp; в пределах установленных лимитов.
                                            </div>
                                        </div>
                                        <div style={{marginTop: '15px'}}>
                                            <FireOutlined style={{color: 'red', fontSize: '23px'}}/>&nbsp;
                                            <strong style={{fontWeight: "bold"}}>Сгорание отходов</strong> рассматривается как аварийный выброс загрязняющих веществ в атмосферу, вследствие чего применяется <strong style={{fontWeight: "bold"}}>десятикратный тариф</strong> к нормативам платы за допустимые выбросы загрязняющих веществ.
                                        </div>
                                    </div>

                                    <Button block className='mybut' onClick={(event) => {
                                        event.stopPropagation();
                                        event.preventDefault();
                                        setShowModal(true);
                                    }}>Плата при размещении отходов</Button>
                                </Col>

                                <Col lg={{span: 22, offset: 1}} xl={{span: 12, offset: 0}} className='eco-carousel-container eco-div-padding'>
                                    <Collapse
                                        accordion
                                        expandIconPosition='left'
                                        className='mycollapse'
                                        defaultActiveKey={'2'}
                                    >
                                        <Panel header='Раздел 1' key="1" showArrow className='eco-panel-style'>
                                            <>
                                                <List
                                                    size="medium"
                                                    bordered
                                                    dataSource={data1}
                                                    renderItem={item => <List.Item className='special-list-item' style={{fontSize: '1.25rem'}}>{item}</List.Item>}
                                                />
                                            </>
                                        </Panel>
                                        <Panel header='Раздел 2' key="2" showArrow className='eco-panel-style'>
                                            <>
                                                <List
                                                    size="medium"
                                                    bordered
                                                    dataSource={data2}
                                                    renderItem={item => <List.Item className='special-list-item' style={{fontSize: '1.25rem'}}>{item}</List.Item>}
                                                />
                                            </>
                                        </Panel>
                                    </Collapse>
                                </Col>
                            </Row>
                        </div>

                        <div className='eco-slider-card eco-flex-col' style={{marginBottom: '10px'}}>
                            <h1 style={{textAlign: "center", fontSize: '1.65rem', margin: '20px 0 10px'}}>
                                <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong>Плата за выбросы загрязняющих веществ в атмосферный воздух</strong>
                            </h1>

                            <Row style={{justifyContent: 'center', padding: '10px 2%'}}>
                                <Col lg={{span: 22, offset: 1}} xl={{span: 10, offset: 0}} className='eco-img-col eco-div-padding'>
                                    <Image
                                        width={450}
                                        src={'/images/vix.jpg'}
                                        preview={false}
                                        placeholder={
                                            <Skeleton.Image />
                                        }
                                    />
                                </Col>

                                <Col lg={{span: 22, offset: 1}} xl={{span: 14, offset: 0}} className='eco-flex-col eco-img-col flex-left eco-div-padding'>
                                    <div className='eco-container-left-border'>
                                        <h1 style={{fontSize: '1.3rem'}}><strong>1.</strong> Плату за негативное воздействие на окружающую среду <strong>обязаны вносить юридические лица и индивидуальные предприниматели</strong>,&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '900px'}}
                                                className='pop_text'
                                                style={{maxWidth: '350px'}}
                                                content={<span>На территории Российской Федерации, континентальном шельфе Российской Федерации и в исключительной экономической зоне Российской Федерации.</span>}
                                                title=''
                                                trigger="hover">
                                                осуществляющие хозяйственную и (или) иную деятельность
                                            </Popover>,&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '900px'}}
                                                className='pop_text'
                                                style={{maxWidth: '350px'}}
                                                content={<span>За исключением юридических лиц и индивидуальных предпринимателей, осуществляющих хозяйственную и (или) иную деятельность исключительно на объектах IV категории.</span>}
                                                title=''
                                                trigger="hover">
                                                оказывающую негативное воздействие на окружающую среду
                                            </Popover>;
                                        </h1>
                                        <h1 style={{fontSize: '1.3rem'}}><strong>2. В бюджеты муниципальных районов, городских округов и городских округов с внутригородским делением</strong> подлежит зачислению плата за негативное воздействие на окружающую среду по нормативу 60 процентов;</h1>
                                        <h1 style={{fontSize: '1.3rem'}}><strong>3. Несвоевременное или неполное внесение</strong> лицом, обязанным вносить плату, платы влечет за собой уплату пеней в размере&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '900px'}}
                                                className='pop_text'
                                                style={{maxWidth: '350px'}}
                                                content={<span>Но не более чем в размере 0,2 процента за каждый день просрочки.</span>}
                                                title=''
                                                trigger="hover">
                                                одной трехсотой действующей
                                            </Popover>&nbsp;
                                            на день уплаты пеней ключевой ставки Банка России. Пеня начисляется за каждый календарный день просрочки исполнения обязанности по внесению платы.
                                        </h1>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Col>
            </Row>

            <Draggable_Modal
                title='Плата при размещении отходов'
                content={
                    <>
                        <div style={{fontSize: '1.15rem', marginTop: '-10px'}}>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>1. Внесение платы за негативное воздействие</strong> на окружающую среду при размещении отходов (за исключением ТКО) осуществляется <strong>индивидуальными предпринимателями</strong>, юридическими лицами в процессе осуществления которыми хозяйственной и (или) иной деятельности образуются отходы.
                            </div>
                            <div style={{marginTop: '25px'}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>2. Плательщиками платы за негативное воздействие</strong> на окружающую среду при размещении ТКО являются операторы по обращению с ТКО или региональные операторы, осуществляющие деятельность по их размещению.
                            </div>
                        </div>
                    </>
                }
                show={showModal}
                hide={setShowModal}
            />
        </>
    );
};

export default Eco_Chap2_Theme5_2;