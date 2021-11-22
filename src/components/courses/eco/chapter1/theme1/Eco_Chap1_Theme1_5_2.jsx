import React, {useState} from 'react';
import {BackTop, Col, List, Popover, Row,  Tree} from "antd";
import {
    CarryOutOutlined, CheckOutlined,
    DownOutlined, ExclamationCircleOutlined, WarningTwoTone,
} from "@ant-design/icons";
import Slider from "react-slick";

const Eco_Chap1_Theme1_5_2 = () => {
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

    const treeData = [
        {
            title: <strong style={{fontWeight: 'bold'}}>Объект является:</strong>,
            key: '0-0',
            icon: <DownOutlined />,
            children: [
                {
                    title: (
                        <> объектом размещения отходов производства и потребления после полного выполнения работ&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Исключающих негативное воздействие на окружающую среду, до снятия с государственного учета объектов, оказывающих негативное воздействие на окружающую среду.</span>}
                                title=''
                                trigger="hover">
                                по ликвидации и (или) рекультивации
                            </Popover>;
                        </>
                    ),
                    key: '0-0-0',
                    switcherIcon: <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '20px'}}/>,
                },
                {
                    title: (
                        <>
                            объектом обработки отходов производства и потребления IV и V классов опасности.;
                        </>
                    ),
                    key: '0-0-1',
                    switcherIcon: <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '20px'}}/>,
                },
            ],
        },
        {
            title: <strong style={{fontWeight: 'bold'}}>Осуществление на объекте, оказывающем негативное воздействие на окружающую среду:</strong>,
            key: '0-2',
            icon: <DownOutlined />,
            children: [
                {
                    title:
                    <>
                        хозяйственной и (или) иной деятельности на участках недр, предоставленных в пользование;
                    </>,
                    key: '0-2-0',
                    switcherIcon: <CarryOutOutlined style={{color: 'green'}}/>,
                },
                {
                    title:
                    <>
                        хозяйственной и (или) иной деятельности с использованием водных объектов, предоставленных в пользование;
                    </>,
                    key: '0-2-1',
                    switcherIcon: <CarryOutOutlined style={{color: 'green'}}/>,
                },
                {
                    title:
                        <>
                            хозяйственной и (или) иной деятельности по строительству объектов капитального строительства продолжительностью более 6 месяцев;
                        </>,
                    key: '0-2-2',
                    switcherIcon: <CarryOutOutlined style={{color: 'green'}}/>,
                },
                {
                    title:
                        <>
                            хозяйственной и (или) иной деятельности исключительно по добыче подземных вод;
                        </>,
                    key: '0-2-3',
                    switcherIcon: <CarryOutOutlined style={{color: 'green'}}/>,
                },
                {
                    title:
                        <>
                            хозяйственной и (или) иной деятельности;
                        </>,
                    key: '0-2-4',
                    switcherIcon: <CarryOutOutlined style={{color: 'green'}}/>,
                },
            ],
        },
        {
            title: <span><strong style={{fontWeight: 'bold'}}>Эксплуатация исследовательских ядерных установок нулевой мощности, радиационных источников, содержащих в своем составе только радионуклидные источники четвертой и пятой категорий.</strong></span>,
            key: '0-3',
            switcherIcon: <WarningTwoTone twoToneColor='red' style={{fontSize: '24px'}}/>,
        },
    ];
    const data = [
        <> <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '20px'}}/>&nbsp;&nbsp;
            <strong style={{fontWeight: 'bold'}}><Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>За исключением сбросов загрязняющих веществ, образующихся в результате использования вод для бытовых нужд, а также отсутствие сбросов загрязняющих веществ в окружающую среду.</span>}
                title=''
                trigger="hover">
                отсутствие сбросов загрязняющих веществ в составе сточных вод
            </Popover></strong>
            &nbsp;в централизованные системы водоотведения, другие сооружения и системы отведения и очистки сточных вод;
        </>,
        <> <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '20px'}}/>&nbsp;&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Или наличие на объекте стационарных источников загрязнения окружающей среды, масса загрязняющих веществ в выбросах в атмосферный воздух которых не превышает 10 тонн в год, а также при отсутствии в составе выбросов веществ I и II классов опасности, радиоактивных веществ.</span>}
                title=''
                trigger="hover">
                <strong style={{fontWeight: 'bold'}}>отсутствие выбросов загрязняющих веществ</strong> в атмосферный воздух
            </Popover>;
        </>,
        <> <CheckOutlined style={{color: 'green'}}/>&nbsp; Осуществление на объекте <strong style={{fontWeight: 'bold'}}>деятельности по&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>В том числе для собственных нужд.</span>}
                title=''
                trigger="hover">
                производству
            </Popover>
            &nbsp;электрической энергии</strong> и (или) пара и горячей воды;
        </>,
        <> <CheckOutlined style={{color: 'green'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>Использование на объекте оборудования</strong> исключительно для&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Предприятия опытного производства, научно-исследовательские институты, опытно-конструкторские бюро.</span>}
                title=''
                trigger="hover">
                исследований, разработок и испытаний новой продукции и процессов
            </Popover>;
        </>,
        <> <CheckOutlined style={{color: 'green'}}/>&nbsp; Осуществление на объекте хозяйственной и (или) иной&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>При условии отсутствия выбросов загрязняющих веществ в атмосферный воздух, сбросов загрязняющих веществ в окружающую среду.</span>}
                title=''
                trigger="hover">
                деятельности исключительно по добыче подземных вод
            </Popover>
            &nbsp;или <strong style={{fontWeight: 'bold'}}>для целей питьевого, хозяйственно-бытового водоснабжения и (или) технического водоснабжения;</strong>
        </>,
        <> <CheckOutlined style={{color: 'green'}}/>&nbsp; Осуществление на&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Оказывающем негативное воздействие на окружающую среду.</span>}
                title=''
                trigger="hover">
                объекте
            </Popover>
            &nbsp;хозяйственной и (или) иной деятельности <strong style={{fontWeight: 'bold'}}>по строительству объектов капитального строительства продолжительностью менее 6 месяцев;</strong>
        </>,
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Критерии отнесения объектов, оказывающих незначительное негативное и негативное воздействие на окружающую среду, к объектам III и IV категориям</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col lg={{span: 24, offset: 0}}  xl={{span: 20, offset: 2}} className='padding-15-30'>
                    <Slider {...carouselState} className='eco-slider'>
                        <div>
                            <div className='eco-slider-card'>
                                <Row>
                                    <Col lg={{span: 24, offset: 0}}  xl={{span: 20, offset: 2}}>
                                        <h1 className='eco-col-header' style={{background: 'rgb(76,175,80)', color: 'white', border: '2px solid forestgreen', marginTop: '-2px'}}>Критерии к объектам III категории</h1>

                                        <div style={{padding: '0 20px'}}>
                                            <Tree
                                                className='eco-list-style-tree'
                                                style={{fontSize: '1.2rem', lineHeight: '40px'}}
                                                showLine = {true}
                                                defaultExpandedKeys = {['0-0','0-2']}
                                                treeData = {treeData}
                                                switcherIcon={<DownOutlined style={{color: 'green', fontSize: '18px'}}/>}
                                                icon={<CarryOutOutlined />}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div>
                            <div className='eco-slider-card'>
                                <Row>
                                    <Col lg={{span: 24, offset: 0}}  xl={{span: 20, offset: 2}}>
                                        <h1 className='eco-col-header' style={{background: 'rgb(76,175,80)', color: 'white', border: '2px solid forestgreen', marginTop: '-2px'}}>Критерии к объектам IV категории</h1>

                                        <h3 style={{margin: '25px 0 0'}}>Наличие одновременно следующих критериев:</h3>
                                        <div style={{padding: '0 20px'}}>
                                            <div style={{textAlign: 'left'}}>
                                                <List
                                                    size="medium"
                                                    bordered
                                                    dataSource={data}
                                                    renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme1_5_2;