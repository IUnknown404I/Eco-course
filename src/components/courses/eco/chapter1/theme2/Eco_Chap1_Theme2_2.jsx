import React, {useState} from 'react';
import {Row, Col, Popover, Table} from 'antd';
import { BackTop } from 'antd';
import {CheckOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import Slider from "react-slick";

const Eco_Chap1_Theme2_2 = () => {
    const [carouselState, setCarouselState] = useState({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    const columns = [
        {
            title: <div style={{textAlign: 'center', fontSize: '1.3rem', color: 'white'}}>Мероприятия по проведению производственного контроля</div>,
            dataIndex: 'activity',
        },
        {
            title: <div style={{textAlign: 'center', fontSize: '1.3rem', color: 'white'}}>Ответственный исполнитель</div>,
            dataIndex: 'dec',
        },
        {
            title: <div style={{textAlign: 'center', fontSize: '1.3rem', color: 'white'}}>Сроки выполнения</div>,
            dataIndex: 'time',
        },
    ];
    const data = [
        {
            key: '1',
            activity: <span>
                Ведение «Журнала учета движения отходов»
            </span>,
            dec: 'Ответственный за ООС',
            time: 'По мере образования отходов',
        },
        {
            key: '2',
            activity: <span>
                Оформление «Журнала учета движения отходов»
            </span>,
            dec: 'Ответственный за ООС',
            time: 'Ежеквартально',
        },
        {
            key: '3',
            activity: <span>
                Расчет и внесение платы за негативное воздействие на окружающую среду
            </span>,
            dec: 'Ответственный за ООС, Генеральный директор',
            time: 'Ежеквартально',
        },
        {
            key: '4',
            activity: <span>
                Контроль условий сбора и накопления отходов (контроль степени заполнения тары, площадки накопления и т.п.)
            </span>,
            dec: 'Ответственный за ООС',
            time: 'Еженедельно',
        },
        {
            key: '5',
            activity: <span>
                Заключение договоров на вывоз отходов
            </span>,
            dec: 'Ответственный за ООС',
            time: 'Ежегодно',
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>
                        Производственный экологический контроль в области обращения с отходами производства и потребления
                    </strong></h1>
                </Col>
            </Row>

            <Row className='padding-30'>
                <Col md={{span: 24, offset: 0}} lg={{span: 20, offset: 2}} xl={{span: 10, offset: 0}} className='eco-div-padding'>
                    <h3><InfoCircleTwoTone style={{fontSize: '23px'}}/>&nbsp;<strong>В целях осуществления производственного экологического контроля деятельности в области обращения с отходами производства и потребления выполняет следующие функции:</strong></h3>

                    <div className='eco-slider-container eco-slider-flex-centered eco-slider-big-dots'>
                        <Slider {...carouselState} className='eco-slider'>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>1</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        учет и отчетность в области обращения с отходами производства и потребления;
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>2</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>В соответствии с приказом МПР от 08.12.2020 г. № 1028.</span>}
                                            title=''
                                            trigger="hover">
                                            ведение журнала первичного учета движения отходов;
                                        </Popover>
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>3</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        контроль соблюдения экологических требований, при обращении с отходами производства и потребления, отчетность о выполнении предписаний органов экологического контроля;
                                    </div>
                                </div>
                            </div>
                            <div className='eco-slider-card padding-15-30'>
                                <div className='eco-flex-row' style={{margin: '0 0'}}>
                                    <div className='eco-numeration-num'>4</div>
                                    <div className='eco-numeration-text' style={{fontSize: '1.25rem'}}>
                                        организация и участие в проведении инвентаризации отходов и объектов их размещения, паспортизации, подтверждения отнесения отходов к конкретному классу опасности, разработке проектов нормативов образования отходов и лимитов на их размещение.
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <div style={{fontSize: '1.2rem', marginTop: '30px'}}>
                        <h3 style={{fontSize: '1.3rem'}}>
                            <strong>
                                При осуществлении производственного контроля регулярному наблюдению подлежат нормируемые параметры и характеристики:
                            </strong>
                        </h3>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp; соблюдение технологических процессов и оборудования, связанных с образованием отходов;
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp; систем удаления отходов;
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp; объектов накопления отходов;
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о мероприятиях по проведению производственного контроля.
                        </div>
                    </div>
                </Col>

                <Col md={{span: 24, offset: 0}} lg={{span: 20, offset: 2}} xl={{span: 13, offset: 1}} >
                    <Table
                        style={{marginTop: '0'}}
                        className='coef_table'
                        columns={columns}
                        dataSource={data}
                        bordered
                        pagination={false}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme2_2;