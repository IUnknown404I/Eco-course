import React, {useState} from 'react';
import {BackTop, Button, Carousel, Col, Image, List, Popover, Row, Skeleton} from "antd";
import {BookTwoTone, CheckOutlined, WarningTwoTone} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const EcoChap1Theme3_3 = () => {
    const data = [
        <> - При невозможности соблюдения нормативов допустимых сбросов - <strong style={{fontWeight: 'bold'}}>план снижения сбросов загрязняющих веществ</strong> в водный объект и <strong style={{fontWeight: 'bold'}}>отчёт о ходе выполнения плана снижения сбросов</strong> загрязняющих веществ в водные объекты;</>,
        <> - <strong style={{fontWeight: 'bold'}}>Санитарно-эпидемиологическое заключение</strong> о соответствии водного объекта санитарным правилам;</>,
        <> - <strong style={{fontWeight: 'bold'}}>Разрешение на сброс</strong> загрязняющих веществ в окружающую среду;</>,
        <> - <strong style={{fontWeight: 'bold'}}>Нормативы допустимых сбросов</strong> (далее - НДС) веществ и микроорганизмов в водные объекты. Для предприятий, у которых фактический сброс ниже расчётных значений допустимых сбросов, НДС устанавливается по фактическому сбросу;</>,
        <> - <strong style={{fontWeight: 'bold'}}>Решение о предоставлении водного объекта в пользование</strong> для сброса сточных и (или) дренажных вод;</>,
    ];
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Для предприятий, осуществляющих любой сброс вод в водные объекты, основная документация включает</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col lg={{span: 24, offset: 0}} xl={{span: 22, offset: 1}} className='padding-15-30'>
                    <div className='eco-carousel-height-250'>
                        <Carousel appendDots={(dots) => <ul>{dots}</ul>} arrows={true}>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    1. Схема размещения мест сброса сточных и (или) дренажных вод, а также узлов приёма таких вод, согласованная с территориальными органами Федерального агентства водных ресурсов.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    2. Информация о поверке средств измерений, используемых для учёта объёма сброса сточных и (или) дренажных вод.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    3. Журнал учёта водоотведения средствами измерений или журнал учёта водоотведения другими методами.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    4. Журнал учёта качества сбрасываемых сточных (дренажных) вод.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    5.&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Для предоставления в установленные сроки в территориальный орган Федерального агентства водных ресурсов.</span>}
                                        title=''
                                        trigger="hover">
                                        Сведения
                                    </Popover>, полученные в результате учёта объёма сброса сточных (дренажных) вод и их качества.
                                </div>
                            </div>
                            <div className='eco-carousel-card'>
                                <div className='eco-carousel-item'>
                                    6.&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Подлежащие передаче в органы государственной санитарно-эпидемиологической службы в установленном порядке для подтверждения соответствия санитарным правилам.</span>}
                                        title=''
                                        trigger="hover">
                                        Результаты лабораторного контроля качества
                                    </Popover> сточных вод и воды водного объекта в створах, расположенных до и после выпуска сточных вод.
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>

            <Row  style={{marginTop: '20px'}}>
                <Col lg={{span: 20, offset: 2}} xl={{span: 14, offset: 5}} xxl={{span: 9, offset: 1}} className='eco-div-padding'>
                    <div className='eco-img-col'>
                        <Image
                            style={{border: '1px solid forestgreen', borderRadius: '15px'}}
                            src={'/images/water.jpg'}
                            preview={false}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                    </div>

                    <Button
                        className='mybut-primary'
                        style={{width: '100%', marginTop: '10px'}}
                        onClick={() => setShowModal(true)}
                    >
                        <BookTwoTone twoToneColor='mediumseagreen'/> Дополнительная документация
                    </Button>
                </Col>

                <Col lg={{span: 20, offset: 2}} xl={{span: 18, offset: 3}} xxl={{span: 13, offset: 0}} style={{borderLeft: '3px solid rgb(76,175,80)', borderTopLeftRadius: '12px'}}>
                    <h1 className='eco-col-header' style={{width: '99%', background: 'rgb(76,175,80)', borderBottomLeftRadius: '0', color: 'white'}}>Сопроводительная документация</h1>

                    <div className='eco-flex-col' style={{gap: '15px', padding: '0 20px'}}>
                        <h4>
                            <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '24px'}}/>&nbsp; <strong>Документирование деятельности по охране водных объектов в настоящее время регламентировано преимущественно Водным кодексом РФ от 03.06.2006 № 74-ФЗ.</strong>
                        </h4>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Приказ, распоряжение или иной документ по форме федерального государственного статистического наблюдения № 2-ТП (водхоз).</span>}
                                title=''
                                trigger="hover">
                                Сведения об использовании воды
                            </Popover> (в части водоотведения и других показателей);
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{width: 'fit-content', maxWidth: '1000px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Приказ, распоряжение или иной документ.</span>}
                                title=''
                                trigger="hover">
                                Документ
                            </Popover> о назначении лица, уполномоченного вести учёт водоотведения и качества&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Дренажных.</span>}
                                title=''
                                trigger="hover">
                                сточных вод
                            </Popover> в организации;
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp; Копии аттестатов аккредитации лабораторий, выполняющих лабораторные исследования проб воды;
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{width: 'fit-content',maxWidth: '1000px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Периодичность, место отбора проб, объём и перечень определяемых ингредиентов.</span>}
                                title=''
                                trigger="hover">
                                Программа проведения измерений качества сточных и (или) дренажных вод
                            </Popover>;
                        </div>
                    </div>
                </Col>
            </Row>

            <Draggable_Modal
                title='Дополнительная документация по охране водных объектов'
                content={
                    <>
                        <fieldset className='fieldset-eco fieldset-eco-modal'>
                            <List
                                className='borderless'
                                size="medium"
                                bordered
                                dataSource={data}
                                renderItem={item => <List.Item className='special-list-item'>{item}</List.Item>}
                            />
                        </fieldset>
                    </>
                }
                show={showModal}
                hide={setShowModal}
            />
        </>
    );
};

export default EcoChap1Theme3_3;