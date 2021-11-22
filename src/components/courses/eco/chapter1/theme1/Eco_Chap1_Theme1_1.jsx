import React, {useState} from 'react';
import {Row, Col, List, Card, Button} from 'antd';
import { Tabs, Popover, Carousel, Collapse, BackTop } from 'antd';
import {
    GoldOutlined,
    SettingOutlined, WarningTwoTone,
} from '@ant-design/icons';
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Eco_Chap1_Theme1_1 = () => {
    const data1 = [
        'Cоблюдение права человека на благоприятную окружающую среду.',
        'Обеспечение благоприятных условий жизнедеятельности человека.',
        'Научно обоснованное сочетание экологических, экономических и социальных интересов человека, общества и государства в целях обеспечения устойчивого развития и благоприятной окружающей среды.',
        'Охрана, воспроизводство и рациональное использование природных ресурсов как необходимые условия обеспечения благоприятной окружающей среды и экологической безопасности.',
        'Ответственность за обеспечение благоприятной окружающей среды и экологической безопасности на соответствующих территориях.',
        'Платность природопользования и возмещение вреда окружающей среде',
    ];
    const data2 = [
        'Независимость государственного экологического надзора.',
        'Презумпция экологической опасности планируемой хозяйственной и иной деятельности.',
        'Обязательность оценки воздействия на окружающую среду при принятии решений об осуществлении хозяйственной и иной деятельности.',
        'Учет природных и социально-экономических особенностей территорий при планировании и осуществлении хозяйственной и иной деятельности.',
        'Обязательность проведения проверки проектов и иной документации, обосновывающих хозяйственную и иную деятельность, которая может оказать негативное воздействие на окружающую среду, создать угрозу жизни, здоровью и имуществу граждан, на соответствие требованиям технических регламентов в области охраны окружающей среды.',
        'Приоритет сохранения естественных экологических систем, природных ландшафтов и природных комплексов.',
    ];
    const data3 = [
        'Обязательность участия в деятельности по охране окружающей среды.',
        'Сохранение биологического разнообразия.',
        'Обеспечение сочетания общего и индивидуального подходов к установлению мер государственного регулирования в области охраны окружающей среды.',
        'Запрещение хозяйственной и иной деятельности, последствия воздействия которой непредсказуемы для окружающей среды.',
        'Обеспечение снижения негативного воздействия хозяйственной и иной деятельности на окружающую среду.',
        'Допустимость воздействия хозяйственной и иной деятельности на природную среду.',
    ];

    const [showModalCategories, setShowModalCategories] = useState(false);
    const [showModalCriteries, setShowModalCriteries] = useState(false);
    const [showModalSpecial, setShowModalSpecial] = useState(false);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Основные принципы охраны окружающей среды</strong></h1>
                </Col>
            </Row>

            <Row style={{margin: '20px 0'}}>

                <Col offset={2} span={20} className='eco-inv-card eco-container-left-border eco-container-right-border' style={{padding: '20px 10px 35px'}}>
                    <Row>
                        <Col span={24} className='eco-flex-row flex-centered'>
                            <h1 style={{textAlign: 'center'}}><strong>Определение&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '450px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>В отношении которых применяются меры государственного регулирования в области охраны окружающей среды</span>}
                                    title=''
                                    trigger="hover">
                                        загрязняющих веществ:
                                </Popover></strong>
                            </h1>
                        </Col>

                        <Col lg={{span: 22, offset: 1}}  xl={{span: 11, offset: 1}} className='eco-flex-row flex-centered' style={{marginBottom: '20px'}}>
                            <Carousel style={{border: '2px solid green', borderRadius: '5px', margin: '0 0'}} autoplay appendDots={(dots) => <ul>{dots}</ul>}>
                                <div className='eco-carousel-card'>
                                    <div className='eco-carousel-item'>
                                        <strong>1.</strong> C учетом уровня токсичности, канцерогенных и (или) мутагенных свойств химических и иных веществ, а также их способности к преобразованию в окружающей среде в соединения, обладающие большей токсичностью.
                                    </div>
                                </div>
                                <div className='eco-carousel-card'>
                                    <div className='eco-carousel-item'>
                                        <strong>2.</strong> C учетом данных государственного экологического мониторинга и социально-гигиенического мониторинга.
                                    </div>
                                </div>
                                <div className='eco-carousel-card'>
                                    <div className='eco-carousel-item'>
                                        <strong>3.</strong> При наличии методик (методов) измерения загрязняющих веществ.
                                    </div>
                                </div>
                            </Carousel>
                        </Col>

                        <Col sm={{span: 24, offset: 0}}  md={{span: 24, offset: 0}}  lg={{span: 22, offset: 1}}  xl={{span: 10, offset: 1}} className='eco-flex-col flex-centered'>
                            <Button
                                style={{marginTop: '0'}}
                                block
                                className='mybut-primary'
                                onClick={() => setShowModalCategories(true)}
                            >
                                Категории объектов
                            </Button>

                            <Button
                                block
                                className='mybut'
                                onClick={() => setShowModalCriteries(true)}
                            >
                                {/*<GoldTwoTone style={{fontSize: '24px'}}/> Критерии распределения по категориям*/}
                                <GoldOutlined style={{color: 'darkorange', fontSize: '22px'}}/> Критерии распределения по категориям
                            </Button>

                            <Button
                                block
                                className='mybut'
                                onClick={() => setShowModalSpecial(true)}
                            >
                                {/*<SettingTwoTone /> Особенности установления критериев*/}
                                <SettingOutlined style={{color: 'darkorange', fontSize: '22px'}}/> Особенности установления критериев
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{margin: '60px 0 15px'}}>
                <Col offset={1} span={22}>
                    <h3 style={{textAlign: 'center'}}>
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '450px'}}
                            className='pop_text'
                            style={{maxWidth: '200px'}}
                            content={<span>Органов государственной власти Российской Федерации, органов государственной власти субъектов Российской Федерации, органов местного самоуправления, юридических и физических лиц</span>}
                            title=''
                            trigger="hover">
                            <strong>Хозяйственная и иная деятельность</strong>
                        </Popover>
                        <strong>, оказывающая воздействие на окружающую среду,</strong> должна осуществляться на основе следующих принципов:
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col span={23}>
                    <Tabs animated tabPosition={'left'} style={{display: 'flex', justifyContent: 'space-around'}}>
                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Раздел 1</span>} key="1">
                            <List
                                grid={{
                                    gutter: 12,
                                    column: 2,
                                }}
                                dataSource = {data1}
                                renderItem = {item =>
                                    (<List.Item>
                                        <Card title='' className='eco-list-card-style'>{item}</Card>
                                    </List.Item>)}
                            />
                        </TabPane>

                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Раздел 2</span>} key="2">
                            <List
                                grid={{
                                    gutter: 12,
                                    column: 2,
                                }}
                                dataSource = {data2}
                                renderItem = {item =>
                                    (<List.Item>
                                        <Card title='' className='eco-list-card-style'>{item}</Card>
                                    </List.Item>)}
                            />
                        </TabPane>
                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Раздел 3</span>} key="3">
                            <List
                                grid={{
                                    gutter: 12,
                                    column: 2,
                                }}
                                dataSource = {data3}
                                renderItem = {item =>
                                    (<List.Item>
                                        <Card title='' className='eco-list-card-style'>{item}</Card>
                                    </List.Item>)}
                            />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>

            <Draggable_Modal
                title='Категории объектов, оказывающих негативное воздействие на окружающую среду'
                content={
                    <>
                        <h3>Объекты, оказывающие негативное воздействие на окружающую среду, в зависимости от уровня такого воздействия подразделяются на четыре категории:</h3>

                        <div>
                            <Collapse
                                className='eco-collapse'
                                expandIconPosition='left'
                            >
                                <Panel header="1. Объекты I категории" key="1" className='eco-panel-style'>
                                    <div>Объекты, оказывающие значительное негативное воздействие на окружающую среду и относящиеся к областям применения наилучших доступных технологий</div>
                                </Panel>
                                <Panel header="2. Объекты II категории" key="2" className='eco-panel-style'>
                                    <div>Объекты, оказывающие умеренное негативное воздействие на окружающую среду</div>
                                </Panel>
                                <Panel header="3. Объекты III категории" key="3" className='eco-panel-style'>
                                    <div>Объекты, оказывающие незначительное негативное воздействие на окружающую среду</div>
                                </Panel>
                                <Panel header="4. Объекты IV категории" key="4" className='eco-panel-style'>
                                    <div>Объекты, оказывающие минимальное негативное воздействие на окружающую среду</div>
                                </Panel>
                            </Collapse>
                        </div>
                    </>
                }
                centered={true}
                show={showModalCategories}
                hide={setShowModalCategories}
            />

            <Draggable_Modal
                title='Критерии отнесения объектов к категориям'
                content={
                    <>
                        <h3>Критерии, на основании которых осуществляется отнесение объектов, оказывающих негативное воздействие на окружающую среду, к объектам I, II, III и IV категорий, устанавливаются <strong>Правительством Российской Федерации.</strong></h3>
                        <h3>
                            Присвоение&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Оказывающему негативное воздействие на окружающую среду</span>}
                                title=''
                                trigger="hover">
                                объекту
                            </Popover>
                            &nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>Категория объекта может быть изменена при актуализации учетных сведений об объекте, оказывающем негативное воздействие на окружающую среду</span>}
                                title=''
                                trigger="hover">
                                соответствующей категории
                            </Popover>
                            &nbsp;осуществляется <strong>при его постановке на государственный учет </strong>
                            объектов, оказывающих негативное воздействие на окружающую среду.
                        </h3>
                    </>
                }
                show={showModalCriteries}
                hide={setShowModalCriteries}
            />

            <Draggable_Modal
                title='Особенности установления критериев'
                content={
                    <>
                        <h3><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; <strong>При установлении критериев, на основании которых осуществляется отнесение объектов,</strong> оказывающих негативное воздействие на окружающую среду, к соответствующей категории, учитываются:</h3>

                        <div>
                            <p>
                                - <strong>уровни воздействия на окружающую среду</strong>&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '450px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>отрасль, часть отрасли, производство</span>}
                                    title=''
                                    trigger="hover">
                                    видов хозяйственной и (или) иной деятельности
                                </Popover>;
                            </p>
                            <p>
                                - <strong>уровень токсичности, канцерогенные и мутагенные свойства загрязняющих веществ,</strong> содержащихся в выбросах, сбросах загрязняющих веществ, а также классы опасности отходов производства и потребления;
                            </p>
                            <p>
                                - <strong>классификация промышленных объектов и производств;</strong>
                            </p>
                            <p>
                                - особенности осуществления деятельности <strong>в области использования атомной энергии.</strong>
                            </p>
                        </div>
                    </>
                }
                show={showModalSpecial}
                hide={setShowModalSpecial}
            />
        </>
    );
};

export default Eco_Chap1_Theme1_1;