import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Popover, Button} from 'antd';
import { BackTop } from 'antd';
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";
import {CheckOutlined, InfoCircleTwoTone} from "@ant-design/icons";

const Eco_Chap2_Theme4_9 = () => {
    const [showModalMethods, setShowModalMethods] = useState(false);
    const [showModalNormal, setShowModalNormal] = useState(false);
    const [showModalExp, setShowModalExp] = useState(false);
    const [showModalStat, setShowModalStat] = useState(false);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Методы определения (расчета) нормативов образования отходов</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 22, offset: 1}} lg={{span: 18, offset: 3}} xl={{span: 12, offset: 0}} xxl={{span: 13, offset: 0}} className='eco-div-padding' style={{fontSize: '1.35rem'}}>
                    <h1><InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; <strong>Норматив образования отходов определяет установленное количество отходов конкретного вида при производстве единицы продукции. За расчетную единицу продукции (работ, услуг) в зависимости от источника образования отходов могут приниматься:</strong></h1>

                    <div className='eco-flex-row flex-left padding-15-30'>
                        <Image
                            style={{width: '80px', marginRight: '15px'}}
                            src={'/svg/measure-tape.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Например, километр.</span>}
                                    title=''
                                    trigger="hover">
                                    единица
                                </Popover> расстояния
                            </strong> - для отходов обслуживания транспортных средств;
                        </span>
                    </div>
                    <div className='eco-flex-row flex-left padding-15-30'>
                        <Image
                            style={{width: '80px', marginRight: '15px'}}
                            src={'/svg/select.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>единица площади</strong> - для отходов при уборке территории;
                        </span>
                    </div>
                    <div className='eco-flex-row flex-left padding-15-30'>
                        <Image
                            style={{width: '80px', marginRight: '15px'}}
                            src={'/svg/manager.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>человек</strong> - для отходов, образовавшихся в жилых помещениях, на производственных объектах, где количество образующихся отходов зависит от количества работающих;
                        </span>
                    </div>
                    <div className='eco-flex-row flex-left padding-15-30'>
                        <Image
                            style={{width: '80px', marginRight: '15px'}}
                            src={'/svg/scale.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>единица места</strong> - для гостиниц, столовых и других организаций и учреждений.
                        </span>
                    </div>
                </Col>

                <Col md={{span: 22, offset: 1}} lg={{span: 18, offset: 3}} xl={{span: 12, offset: 0}} xxl={{span: 11, offset: 0}} className='eco-div-padding'>
                    <div className='eco-img-div-item extra padding-30 eco-flex-col' style={{marginTop: '10px', gap: '15px'}}>
                        <div>
                            <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Для обоснования нормативов образования отходов используются сведения, содержащиеся в одном из следующих источников информации:</strong>
                        </div>
                        <div className='eco-flex-col' style={{gap: '5px', padding: '0 0 0 25px', marginBottom: '15px'}}>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; показатели, характеризующие образование отходов, в том числе&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Содержащиеся в проектной документации, технологических регламентах, инструкциях, технических условиях, документах в области стандартизации и иных документах, регламентирующих хозяйственную или иную деятельность юридического лица, индивидуального предпринимателя.</span>}
                                    title=''
                                    trigger="hover">
                                    технологические показатели образования отходов
                                </Popover>;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; удельные отраслевые нормативы образования отходов;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о сроке службы материалов и изделий;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; критерии, указывающие на утрату товаров (продукции) потребительских свойств.
                            </div>
                        </div>
                    </div>

                    <Button block className='mybut-primary' onClick={() => setShowModalMethods(true)} style={{marginTop: '0'}}>Методы расчётов нормативов образования отходов</Button>
                    <Button block className='mybut-primary' onClick={() => setShowModalNormal(true)}>Расчёт нормативов по материально-сырьевому балансу</Button>
                    <div className='eco-img-col flex-centered'>
                        <hr style={{width: '85%', margin: '20px 0'}}/>
                    </div>
                    <Button block className='mybut' onClick={() => setShowModalExp(true)} style={{marginTop: '0'}}>Экспериментальный метод</Button>
                    <Button block className='mybut' onClick={() => setShowModalStat(true)}>Статистический метод</Button>
                </Col>
            </Row>

            <Draggable_Modal
                title='Методы расчётов нормативов образования отходов'
                content={
                    <>
                        <div style={{marginTop: '-10px', gap: '15px'}}>
                            <div>
                                <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>Для обоснования нормативов образования отходов используются сведения, содержащиеся в одном из следующих источников информации:</strong>
                            </div>
                            <div className='eco-flex-col' style={{gap: '5px', padding: '0 0 0 25px', marginTop: '10px', fontSize: '1.25rem'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; показатели, характеризующие образование отходов, в том числе&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Содержащиеся в проектной документации, технологических регламентах, инструкциях, технических условиях, документах в области стандартизации и иных документах, регламентирующих хозяйственную или иную деятельность юридического лица, индивидуального предпринимателя.</span>}
                                        title=''
                                        trigger="hover">
                                        технологические показатели образования отходов
                                    </Popover>;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; удельные отраслевые нормативы образования отходов;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о сроке службы материалов и изделий;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; критерии, указывающие на утрату товаров (продукции) потребительских свойств.
                                </div>
                            </div>
                        </div>
                    </>
                }
                show={showModalMethods}
                hide={setShowModalMethods}
            />
            <Draggable_Modal
                title='Расчёт нормативов по материально-сырьевому балансу'
                content={
                    <>
                        <div style={{marginTop: '-10px', gap: '15px'}}>
                            <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>
                                При расчете нормативов образования отходов по материально-сырьевому балансу количество образующихся отходов в единицу времени определяют расчетным путем, используя следующие данные:
                            </strong>
                            <div className='eco-flex-col' style={{gap: '5px', padding: '0 0 0 25px', marginTop: '10px', fontSize: '1.25rem'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; количество используемого сырья и материалов;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; количество сырья и материалов, перешедшее в продукцию (при необходимости);
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; количество произведённой продукции;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; нормы естественной убыли;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; количество веществ, выбрасываемых в атмосферный воздух и сбрасываемых со сточными водами.
                                </div>
                            </div>

                            <div style={{margin: '15px 0', fontSize: '1.25rem'}}>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; В качестве источников исходных данных для расчета используются&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>И другая документация, регламентирующая использование сырья и материалов, материалы учёта расхода сырья и материалов, получения продукции, результаты инвертаризации источников выбросов, сбросов загрязняющих веществ, источников образования отходов, данные контроля выбросов, сбросов и образования отходов.</span>}
                                    title=''
                                    trigger="hover">
                                    технологические показатели образования отходов
                                </Popover>, технологические карты, описание рецептур, технологические регламенты.
                            </div>

                            <div className='eco-flex-col flex-centered' style={{margin: '25px 0 -15px'}}>
                                <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>
                                    При применении метода материально-сырьевого баланса нормативы образования отходов рассчитывается по формуле:
                                </strong>

                                <div className='eco-flex-row flex-centered' style={{fontSize: '1.3rem', gap: '15px'}}>
                                    <Image
                                        style={{height: '20vh', marginRight: '15px'}}
                                        src={'/svg/func1.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                    />, где:
                                </div>
                            </div>

                            <div className='eco-flex-row flex-centered ' style={{fontSize: '1.25rem', margin: '0 0'}}>
                                <Image
                                    style={{height: '80px', marginRight: '10px'}}
                                    src={'/svg/_func1-1.svg'}
                                    preview={false}
                                    placeholder={ <Skeleton.Image /> }
                                />
                                <span style={{marginBottom: '15px'}}>
                                    - норматив образования отходов, тонн на единицу продукции;
                                </span>
                            </div>
                            <div className='eco-flex-row flex-centered ' style={{fontSize: '1.25rem', margin: '0 0'}}>
                                <Image
                                    style={{height: '80px', marginRight: '10px'}}
                                    src={'/svg/_func1-2.svg'}
                                    preview={false}
                                    placeholder={ <Skeleton.Image /> }
                                />
                                <span style={{marginBottom: '15px'}}>
                                    - норматив образования отходов, тонн на единицу продукции;
                                </span>
                            </div>
                            <div className='eco-flex-row flex-centered ' style={{fontSize: '1.25rem', margin: '0 0'}}>
                                <Image
                                    style={{height: '80px', marginRight: '10px'}}
                                    src={'/svg/_func1-3.svg'}
                                    preview={false}
                                    placeholder={ <Skeleton.Image /> }
                                />
                                <span style={{marginBottom: '15px'}}>
                                    - норматив образования отходов, тонн на единицу продукции;
                                </span>
                            </div>
                        </div>
                    </>
                }
                show={showModalNormal}
                hide={setShowModalNormal}
            />
            <Draggable_Modal
                title='Экспериментальный метод'
                content={
                    <>
                        <div style={{marginTop: '-10px', gap: '15px'}}>
                            <div style={{margin: '15px 0', fontSize: '1.25rem'}}>
                                Данный метод позволяет определить норматив образования отходов на основе проведения опытных измерений в производственных условиях. Первоначально на основе статистической обработки опытных измерений массы полезного продукта, получаемого из единицы массы сырья (материалов), определяется показатель, характеризующий долю полезного продукта в единице сырья в процентах (Cпп). Исходя из значения <strong>этого показателя и данных о массе извлеченного из сырья полезного продукта (Mпп) определяется масса образования отходов (Vо) по формуле:</strong>
                            </div>

                            <div className='eco-flex-col flex-centered' style={{margin: '25px 0 -15px'}}>
                                <div className='eco-flex-row flex-centered' style={{fontSize: '1.3rem', gap: '15px'}}>
                                    <Image
                                        style={{height: '20vh', marginRight: '15px'}}
                                        src={'/svg/func2.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                    />, где:
                                </div>
                            </div>

                            <div className='padding-15-30' style={{margin: '15px 0', fontSize: '1.25rem'}}>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; Норматив образования отхода на единицу произведенной продукции определяется как отношение массы образования отходов к количеству продукции, при производстве которой образуется отход.
                            </div>
                        </div>
                    </>
                }
                show={showModalExp}
                hide={setShowModalExp}
            />
            <Draggable_Modal
                title='Статистический метод'
                content={
                    <>
                        <div style={{marginTop: '-10px', gap: '15px'}}>

                            <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; Метод расчета нормативов образования отходов по фактическим объемам образования отходов (статистический метод):
                            </strong>
                            <div style={{margin: '15px 0', fontSize: '1.25rem'}}>
                                Данный метод предусматривает расчет норматива образования отходов на основе статистической обработки информации по обращению с отходами за&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Не менее 3-х лет.</span>}
                                    title=''
                                    trigger="hover">
                                    базовый период
                                </Popover>. При этом сначала определяется удельное количество образования отходов по каждому году за рассматриваемый период. Удельное количество образования отходов исчисляется путем деления количества образовавшихся отходов на количество использованного сырья или произведенной продукции.
                            </div>

                            <div className='eco-flex-col flex-centered' style={{margin: '25px 0 -15px'}}>
                                <strong style={{fontWeight: 'bold', fontSize: '1.35rem'}}>
                                    Норматив образования отходов определяется по формуле:
                                </strong>

                                <div className='eco-flex-row flex-centered' style={{fontSize: '1.3rem', gap: '15px'}}>
                                    <Image
                                        style={{height: '20vh', marginRight: '15px'}}
                                        src={'/svg/func3.svg'}
                                        preview={false}
                                        placeholder={ <Skeleton.Image /> }
                                    /> где:
                                </div>
                            </div>

                            <div className='eco-flex-row flex-centered ' style={{fontSize: '1.25rem', margin: '0 0'}}>
                                <Image
                                    style={{height: '70px', marginRight: '10px'}}
                                    src={'/svg/_func3-2.svg'}
                                    preview={false}
                                    placeholder={ <Skeleton.Image /> }
                                />
                                <span style={{marginBottom: '15px'}}>
                                    - количество лет в рассматриваемом периоде;
                                </span>
                            </div>
                            <div className='eco-flex-row flex-centered ' style={{fontSize: '1.25rem', margin: '0 0'}}>
                                <Image
                                    style={{height: '70px', marginRight: '10px'}}
                                    src={'/svg/_func3-1.svg'}
                                    preview={false}
                                    placeholder={ <Skeleton.Image /> }
                                />
                                <span style={{marginBottom: '15px'}}>
                                    - удельное количество образованного в i-ом году отхода;
                                </span>
                            </div>
                        </div>
                    </>
                }
                show={showModalStat}
                hide={setShowModalStat}
            />
        </>
    );
};

export default Eco_Chap2_Theme4_9;