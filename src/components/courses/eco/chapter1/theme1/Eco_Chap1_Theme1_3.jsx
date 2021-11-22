import React from 'react';
import {BackTop, Card, Col, Image, List, Popover, Row, Skeleton} from "antd";

const Eco_Chap1_Theme1_3 = () => {
    const data = [
        <>
            <strong style={{fontWeight: 'bold'}}>
            Выполнения&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Профилактических</span>}
                title=''
                trigger="hover">
                    санитарно-противоэпидемических мероприятий
            </Popover>
            &nbsp;и обязательного соблюдения&nbsp;
            <Popover
                color={"azure"}
                overlayStyle={{maxWidth: '450px'}}
                className='pop_text'
                style={{maxWidth: '200px'}}
                content={<span>Индивидуальными предпринимателями, юридическими лицами</span>}
                title=''
                trigger="hover">
                    гражданами
            </Popover>
            &nbsp;санитарных правил</strong>&nbsp;
            как составной части осуществляемой ими деятельности.
        </>,
        <>
            Государственного <strong style={{fontWeight: 'bold'}}>санитарно-эпидемиологического нормирования.</strong>
        </>,
        <>
            Федерального государственного <strong style={{fontWeight: 'bold'}}>санитарно-эпидемиологического надзора.</strong>
        </>,
        <>
            Обязательного <strong style={{fontWeight: 'bold'}}>подтверждения соответствия продукции</strong> санитарно-эпидемиологическим требованиям.
        </>,
        <>
            <strong style={{fontWeight: 'bold'}}>Лицензирования видов деятельности,</strong> представляющих потенциальную опасность для человека.
        </>,
        <>
            <strong style={{fontWeight: 'bold'}}>Государственной регистрации</strong> потенциально опасных для человека химических и биологических веществ, отдельных видов продукции, радиоактивных веществ, отходов производства и потребления, а также впервые ввозимых на территорию Российской Федерации отдельных видов продукции.
        </>,
        <>
            <strong style={{fontWeight: 'bold'}}>Проведения социально-гигиенического мониторинга.</strong>
        </>,
        <>
            <strong style={{fontWeight: 'bold'}}>Научных исследований</strong> в области обеспечения санитарно-эпидемиологического благополучия населения.
        </>,
    ];


    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Обеспечение санитарно-эпидемиологического благополучия населения</strong></h1>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col md={{span: 22, offset: 1}}  lg={{span: 11, offset: 2}} style={{marginTop: '14px'}}>
                    <h1 style={{fontSize: '22px', marginBottom: '20px'}}>Санитарно-эпидемиологическое благополучие населения обеспечивается посредством:</h1>

                    <List
                        grid={{
                            gutter: 20,
                            column: 1,
                        }}
                        dataSource = {data}
                        renderItem = {item =>
                            (<List.Item>
                                <Card title='' className='eco-list-card-style'>{item}</Card>
                            </List.Item>)}
                    />
                </Col>

                <Col md={{span: 16, offset: 4}}  lg={{span: 8, offset: 1}} className='epi-img-col'>
                    <Image
                        className='epi-img'
                        // width={500}
                        src={'/epi.jpg'}
                        preview={false}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />

                    <div className='eco-img-div-item extra epi-extra' style={{background: 'white', marginTop: '30px'}}>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/virus.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            Формирование и ведение открытых и общедоступных&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Направленных на своевременное информирование органов государственной власти, органов местного самоуправления, юридических лиц, индивидуальных предпринимателей и граждан о возникновении инфекционных заболеваний, массовых неинфекционных заболеваний (отравлений), состоянии среды обитания и проводимых санитарно-противоэпидемических (профилактических) мероприятиях</span>}
                                title=''
                                trigger="hover">
                                    федеральных информационных ресурсов
                            </Popover>
                            &nbsp;и&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>В соответствии с санитарно-эпидемиологической обстановкой и прогнозом ее изменения</span>}
                                title=''
                                trigger="hover">
                                    профилактики заболеваний
                            </Popover>.
                        </span>
                    </div>
                    <div className='eco-img-div-item extra epi-extra'>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/virus.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            Обеспечение мер по гигиеническому воспитанию и обучению населения и пропаганде здорового образа жизни.
                        </span>
                    </div>
                    <div className='eco-img-div-item extra epi-extra'>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/virus.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            Обеспечение мер по привлечению к ответственности за нарушение законодательства Российской Федерации в области обеспечения санитарно-эпидемиологического благополучия населения.
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme1_3;