import React from 'react';
import {Row, Col, Carousel, Popover, Divider, Image, Skeleton} from 'antd';
import { BackTop } from 'antd';
import {
    CheckSquareTwoTone,
} from '@ant-design/icons';

const Eco_Chap2_Theme5_5 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 35px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Исчисление и взимание платы за негативное воздействие на окружающую среду</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col offset={1} span={22}>
                    <Row className='flex-centered'>
                        <Col md={{span: 6, offset: 0}} lg={{span: 7, offset: 0}} xl={{span: 6, offset: 0}}>
                            <h1 style={{textAlign: "center", fontSize: '1.4rem'}}>Плата исчисляется по следующей формуле:</h1>
                        </Col>

                        <Col md={{span: 18, offset: 0}} lg={{span: 15, offset: 0}} xl={{span: 12, offset: 1}}>
                            <div className='eco-numeration text-centered' style={{justifyContent: 'space-around', fontSize: '1.4rem'}}>
                                <span>М</span>
                                <span>x</span>
                                <span>Н</span>
                                <span>x</span>
                                <span>Кот</span>
                                <span>x</span>
                                <span>Кн</span>
                                <span>x</span>
                                <span>Кд</span>
                                <span>=</span>
                                <span>П</span>
                            </div>
                        </Col>
                        <span style={{fontSize: '1.4rem'}}>, где:</span>
                    </Row>


                    <div className='eco-carousel-height-150' style={{marginTop: '20px'}}>
                        <Carousel appendDots={(dots) => <ul>{dots}</ul>} arrows={true}>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    <strong>М</strong> – платежная база по выбросу  i-го загрязняющего вещества.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    <strong>Н</strong> – ставка платы за выброс i-го загрязняющего вещества.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    <strong>Кот</strong> – дополнительный коэффициент к ставкам платы за выброс i-го загрязняющего вещества, принимаемый для территорий, подлежащих особой охране.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    <strong>Кн</strong> – коэффициент к ставкам платы за выброс i-го загрязняющего вещества по отношению к нормативам выбросов.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    <strong>Кд</strong> –&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Установленный Постановлением Правительства РФ от 11.09.2020 N 1393 "О применении в 2021 году ставок платы за негативное воздействие на окружающую среду".</span>}
                                        title=''
                                        trigger="hover">
                                        доп. коэффициент
                                    </Popover>
                                    &nbsp;(равен 1.08).
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>

            <Divider/>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 20, offset: 2}}>
                    <div className='eco-inv-card' style={{padding: '20px 30px'}}>
                        <Col span={20}>
                            <div className='eco-div-withFloat eco-img-col'>
                                <Image
                                    style={{maxWidth: '300px'}}
                                    preview = {false}
                                    src={'/images/terminal.png'}
                                    placeholder={
                                        <Skeleton.Image />
                                    }
                                />
                                <div style={{marginLeft: '15px'}}>
                                    {/*<strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>Платежная база определяется лицами</strong>, обязанными вносить плату, самостоятельно на основе данных производственного экологического контроля для каждого стационарного источника, фактически использовавшегося в отчетный период, в отношении каждого загрязняющего вещества, включенного в перечень загрязняющих веществ.*/}
                                    <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>Платежной базой является объем или масса выбросов загрязняющих веществ в отчетном периоде.</span>}
                                            title=''
                                            trigger="hover">
                                            Платежная база
                                        </Popover>&nbsp;определяется лицами
                                    </strong>, обязанными вносить плату, самостоятельно на основе данных производственного экологического контроля для каждого стационарного источника, фактически использовавшегося в отчетный период, в отношении каждого загрязняющего вещества, включенного в перечень загрязняющих веществ.
                                </div>
                            </div>
                        </Col>

                        <div style={{marginTop: '20px'}}>
                            <strong style={{fontWeight: 'bold'}}>При определении платежной базы учитываются:</strong>
                            <div style={{padding: '5px 40px'}}>
                                <CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; объем или масса выбросов загрязняющих веществ в пределах временно разрешенных выбросов загрязняющих веществ
                                <br/><CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; объем или масса выбросов загрязняющих веществ в пределах нормативов допустимых выбросов либо технологических нормативов;
                                <br/><CheckSquareTwoTone twoToneColor='mediumseagreen'/>&nbsp; объем или масса выбросов загрязняющих веществ, веществ, превышающие нормативы допустимых выбросов либо технологических нормативы, выбросы
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme5_5;