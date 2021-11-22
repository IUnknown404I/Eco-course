import React from 'react';
import {Row, Col, List, Popover} from 'antd';
import { BackTop } from 'antd';
import { Timeline } from 'antd';
import {
    StopOutlined,
    ExceptionOutlined,
} from '@ant-design/icons';

const Eco_Chap2_Theme3_1 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>Требования, предъявляемые законодательством в области рационального использования и охраны водных объектов</h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 12, offset: 0}} xl={{span: 11, offset: 1}} className='eco-timeline-container'>
                    <h1 style={{fontSize: '1.45rem', marginBottom: '30px'}} className='eco-numeration text-centered'>Основные требования по предоставлению водных объектов в пользование для сброса сточных вод:</h1>

                    <Timeline>
                        <Timeline.Item dot={<StopOutlined style={{color: 'red', fontSize: '25px'}}/>}>
                            <div>
                                <h1 style={{fontSize: '1.45rem'}}><strong>Запрещается</strong> сброс сточных, в том числе дренажных, вод в водные объекты:</h1>

                                <div className='eco-flex-col'>
                                    <span>- содержащие природные лечебные ресурсы</span>
                                    <span>- отнесенные к особо охраняемым водным объектам</span>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item dot={<StopOutlined style={{color: 'red', fontSize: '25px'}}/>}>
                            <div>
                                <h1 style={{fontSize: '1.45rem'}}><strong>Запрещается</strong> сброс&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '500px'}}
                                        className='pop_text'
                                        style={{maxWidth: '350px'}}
                                        content={<span>В том числе дренажных.</span>}
                                        title=''
                                        trigger="hover">
                                        сточных вод
                                    </Popover>
                                    &nbsp;в водные объекты, расположенные в границах:
                                </h1>

                                <div className='eco-flex-col'>
                                    <span>- зон санитарной охраны источников питьевого и хозяйственно-бытового водоснабжения</span>
                                    <span>- первой, второй зон округов горно-санитарной охраны лечебно-оздоровительных местностей и курортов</span>
                                    <span>- рыбоохранной зоны озера Байкал, рыбохозяйственных заповедных зон</span>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item color="orange">
                            <h1 style={{fontSize: '1.45rem'}}>Сброс сточных, в том числе дренажных, вод <strong>может быть ограничен</strong>, приостановлен или запрещен</h1>
                        </Timeline.Item>
                    </Timeline>
                </Col>

                <Col md={{span: 24, offset: 0}} lg={{span: 12, offset: 0}} xl={{span: 10, offset: 1}} className='eco-timeline-container'>
                    <h1 style={{fontSize: '1.45rem', marginBottom: '30px'}} className='eco-numeration text-centered'>Нормирование сбросов загрязняющих веществ в водные объекты для водопользователей:</h1>

                    <Timeline>
                        <Timeline.Item dot={<ExceptionOutlined style={{color: 'green', fontSize: '27px'}}/>} style={{fontSize: '1.3rem'}}>
                            1. Нормативы допустимых&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '500px'}}
                                className='pop_text'
                                style={{maxWidth: '350px'}}
                                content={<span>За исключением радиоактивных веществ.</span>}
                                title=''
                                trigger="hover">
                                сбросов веществ
                            </Popover>
                            &nbsp;и микроорганизмов в водные объекты для водопользователей утверждаются <strong style={{fontWeight: 'bold'}}>Федеральным агентством</strong> водных ресурсов
                        </Timeline.Item>
                        <Timeline.Item dot={<ExceptionOutlined style={{color: 'green', fontSize: '27px'}}/>} style={{fontSize: '1.3rem'}}>2. Нормативы допустимых сбросов радиоактивных веществ в водные объекты для водопользователей утверждаются <strong style={{fontWeight: 'bold'}}>Федеральной службой</strong> по экологическому, технологическому и атомному надзору</Timeline.Item>
                        <Timeline.Item color="orange">
                            <h1 style={{fontSize: '1.3rem'}}>
                                3. При невозможности соблюдения указанных нормативов Федеральная служба по надзору в сфере природопользования <strong>может устанавливать лимиты</strong> на сбросы веществ и микроорганизмов в&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '500px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>На основе разрешений, действующих только в период проведения мероприятий по охране окружающей среды, внедрения наилучших существующих технологий и (или) реализации других природоохранных проектов.</span>}
                                    title=''
                                    trigger="hover">
                                    водные объекты для водопользователей
                                </Popover>
                            </h1>
                        </Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme3_1;