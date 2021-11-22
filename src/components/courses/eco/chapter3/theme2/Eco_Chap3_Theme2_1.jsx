import React, {useState} from 'react';
import {Row, Col, Tabs, List, Card, Image, Skeleton, Button} from 'antd';
import { BackTop } from 'antd';
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { TabPane } = Tabs;

const Eco_Chap3_Theme2_1 = () => {
    const [showModal, setShowModal] = useState(false);

    const data1 = [
        <div><strong style={{fontWeight: 'bold'}}>Нарушение экологических требований</strong> при планировании, технико-экономическом обосновании, проектировании, размещении, строительстве, реконструкции, вводе в эксплуатацию, эксплуатации предприятий, сооружений, технологических линий и иных объектов.</div>,
        <div><strong style={{fontWeight: 'bold'}}>Загрязнение</strong> окружающей природной среды и причинение вследствие этого вреда здоровью человека, растительному и животному миру, имуществу граждан и юридических лиц.</div>,
        <div><strong style={{fontWeight: 'bold'}}>Несоблюдение стандартов, норм и иных нормативов</strong> качества окружающей природной среды.</div>,
        <div><strong style={{fontWeight: 'bold'}}>Превышение установленных уровней радиационного воздействия.</strong> </div>,
    ];
    const data2 = [
        <div><strong style={{fontWeight: 'bold'}}>Нарушение экологических требований</strong> по обезвреживанию, переработке, утилизации, складированию или захоронению производственных и бытовых отходов.</div>,
        <div><strong style={{fontWeight: 'bold'}}>Несоблюдение экологических требований</strong> при использовании в народном хозяйстве и захоронении радиоактивных материалов, химических и иных вредных веществ.</div>,
        <div><strong style={{fontWeight: 'bold'}}>Невыполнение обязательных мер</strong> по восстановлению нарушенной окружающей природной среды и воспроизводству природных ресурсов.</div>,
        <div><strong style={{fontWeight: 'bold'}}>Неподчинение предписаниям органов</strong>, осуществляющих государственный экологический контроль.</div>,
    ];
    const data3 = [
        <div><strong style={{fontWeight: 'bold'}}>Невыполнение обязанностей</strong> по проведению государственной экологической экспертизы и требований, содержащихся в заключении экологической экспертизы, а также в предоставлении заведомо неправильных и необоснованных экспертных заключений.</div>,
        <div><strong style={{fontWeight: 'bold'}}>Нарушение установленного порядка или правил</strong> добывания, сбора, заготовки, продажи, скупки, приобретения, обмена, пересылки, ввоза и вывоза за границу объектов растительного и животного мира, их продуктов, а также ботанических, зоологических и минералогических коллекций.</div>,
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Административная ответственность за совершение экологических правонарушений</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 20, offset: 2}} lg={{span: 14, offset: 1}} xl={{span: 9, offset: 3}} className='eco-flex-col'>
                    <div className='eco-flex-row flex-centered'>
                        <div className='eco-num-col'>1</div>
                        <div className='eco-num-text'>
                            <strong style={{fontWeight: 'bold'}}>Административная ответственность</strong> выражается в применении мер административного взыскания за совершение экологического правонарушения
                        </div>
                    </div>
                    <div className='eco-flex-row flex-centered'>
                        <div className='eco-num-col'>2</div>
                        <div className='eco-num-text'>
                            В Законе «Об охране окружающей среды» предусмотрены следующие виды экологических правонарушений, влекущих административную ответственность:
                        </div>
                    </div>
                </Col>

                <Col md={{span: 20, offset: 2}} lg={{span: 9, offset: 0}} xl={{span: 8, offset: 1}}>
                    <div className='eco-inv-card' style={{boxShadow: '0 1px 3px 0 darkorange'}}>
                        <div className='eco-img-col'>
                            <Image
                                className='eco-img-ico'
                                style={{maxWidth: '100px', marginRight: '12px'}}
                                preview = {false}
                                src={'/images/shtr.png'}
                                placeholder={
                                    <Skeleton.Image />
                                }
                            />
                            <div style={{textAlign: 'center'}}>
                                Одной из наиболее распространенных мер административной ответственности за экологические правонарушения является <strong style={{display: 'inline-block', fontWeight: 'bold'}}>штраф</strong>.
                            </div>
                        </div>

                        <Button block onClick={() => {setShowModal(true)}} className='mybut-primary-orange'>Информация по штрафам</Button>
                    </div>
                </Col>

                <Col lg={{span: 24, offset: 0}} xl={{span: 20, offset: 2}} style={{marginTop: '20px'}}>
                    <fieldset className='fieldset-eco fieldset-eco-modal'>
                        <legend style={{fontSize: '1.25rem'}}>Виды правонарушений</legend>

                        <Tabs animated tabPosition={'left'} style={{display: 'flex', justifyContent: 'space-around'}}>
                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Раздел 1</span>} key="1">
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

                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Раздел 2</span>} key="2">
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
                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Раздел 3</span>} key="3">
                            <List
                                grid={{
                                    gutter: 12,
                                    column: 1,
                                }}
                                dataSource = {data3}
                                renderItem = {item =>
                                    (<List.Item>
                                        <Card title='' className='eco-list-card-style'>{item}</Card>
                                    </List.Item>)}
                            />
                        </TabPane>
                    </Tabs>
                </fieldset>
                </Col>
            </Row>

            <Draggable_Modal
                title='Информация по штрафам'
                content={
                    <>
                        <div style={{fontSize: '1.15rem', marginTop: '-10px'}}>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Штрафы за административные экологические правонарушения <strong>налагаются специально уполномоченными государственными органами</strong> в области охраны окружающей среды, регулирования использования природных ресурсов в соответствии с их компетенцией. Меры административной ответственности применяются без обращения в суд и по упрощенной процедуре.
                            </div>
                            <div style={{marginTop: '25px'}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Суммы взыскиваемых штрафов перечисляются <strong>на специальные счета государственных экологических фондов.</strong> Постановление о наложении штрафа в административном порядке может быть обжаловано в суд или арбитражный суд.
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

export default Eco_Chap3_Theme2_1;