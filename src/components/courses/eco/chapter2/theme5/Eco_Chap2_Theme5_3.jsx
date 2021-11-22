import React from 'react';
import {Row, Col, Tabs, Table} from 'antd';
import { BackTop } from 'antd';
import {
    PlusCircleOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;

const Eco_Chap2_Theme5_3 = () => {
    const columns = [
        {
            title: <div style={{textAlign: 'center', fontSize: '1.3rem', color: 'white'}}>Коэффициент</div>,
            dataIndex: 'coef',
        },
        {
            title: <div style={{textAlign: 'center', fontSize: '1.3rem', color: 'white'}}>Условие</div>,
            className: 'column-money',
            dataIndex: 'condition',
        },
    ];
    const data1 = [
        {
            key: '1',
            coef: <strong style={{fontWeight: 'bold'}}>0</strong>,
            condition: 'При размещении отходов V класса опасности добывающей промышленности посредством закладки искусственно созданных полостей в горных породах при рекультивации земель и почвенного покрова',
        },
        {
            key: '2',
            coef: <strong style={{fontWeight: 'bold'}}>0,3</strong>,
            condition: 'При размещении отходов производства и потребления, которые образовались в собственном производстве, в пределах установленных лимитов на их размещение на объектах размещения отходов ',
        },
        {
            key: '3',
            coef: <strong style={{fontWeight: 'bold'}}>0,5</strong>,
            condition: 'При размещении отходов IV, V классов опасности, которые образовались при утилизации ранее размещенных отходов перерабатывающей и добывающей промышленности',
        },
        {
            key: '4',
            coef: <strong style={{fontWeight: 'bold'}}>0,67</strong>,
            condition: 'При размещении отходов III класса опасности, которые образовались в процессе обезвреживания отходов II класса опасности',
        },
        {
            key: '5',
            coef: <strong style={{fontWeight: 'bold'}}>0,49</strong>,
            condition: 'При размещении отходов IV класса опасности, которые образовались в процессе обезвреживания отходов III класса опасности',
        },
        {
            key: '6',
            coef: <strong style={{fontWeight: 'bold'}}>0,33</strong>,
            condition: 'При размещении отходов IV класса опасности, которые образовались в процессе обезвреживания отходов II класса опасности',
        },
    ];
    const data2 = [
        {
            key: '1',
            coef: <strong style={{fontWeight: 'bold'}}>0</strong>,
            condition: 'За объем или массу отходов производства и потребления, подлежащих накоплению и фактически использованных с момента образования в собственном производстве в соответствии с технологическим регламентом или переданных для использования в течение срока, предусмотренного законодательством Российской Федерации в области обращения с отходами',
        },
        {
            key: '2',
            coef: <strong style={{fontWeight: 'bold'}}>1</strong>,
            condition: 'За объем или массу отходов производства и потребления, размещенных в пределах лимитов на их размещение, а также в соответствии с отчетностью об образовании, использовании, обезвреживании и о размещении отходов производства и потребления, представляемой в соответствии с законодательством Российской Федерации в области обращения с отходами',
        },
        {
            key: '3',
            coef: <strong style={{fontWeight: 'bold'}}>0,25</strong>,
            condition: 'За объем или массу отходов производства и потребления, размещенных с превышением установленных лимитов на их размещение либо указанных в декларации о воздействии на окружающую среду, а также в отчетности об образовании, использовании, обезвреживании и о размещении отходов производства и потребления, представляемой в соответствии с законодательством Российской Федерации в области обращения с отходами',
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>Коэффициенты к ставкам платы</h1>
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col lg={{span: 24, offset: 0}} xl={{span: 22, offset: 1}}>
                    <Tabs type="card" size='large' className='eco-tab-list' centered animated>
                        <TabPane tab={<div style={{fontSize: '1.35rem'}}>Граждане</div>} key="1">
                            <Col offset={1} span={22}>
                                <h1 style={{textAlign: "center", fontSize: '1.3rem'}}><InfoCircleOutlined style={{color: 'darkorange', fontSize: '24px'}}/>&nbsp; <strong>В целях стимулирования юридических лиц и индивидуальных предпринимателей</strong>, осуществляющих хозяйственную и (или) иную деятельность, к проведению мероприятий по снижению негативного воздействия на окружающую среду и внедрению наилучших доступных технологий при исчислении платы за негативное воздействие на окружающую среду к ставкам такой платы <strong>применяются следующие коэффициенты</strong>:</h1>
                            </Col>

                            <Table
                                className='coef_table'
                                columns={columns}
                                dataSource={data1}
                                bordered
                                pagination={{pageSize: 3, position: ['bottomCenter']}}
                            />
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.35rem'}}>ИП и Юр. лица</div>} key="2">
                            <Col offset={1} span={22}>
                                <h1 style={{textAlign: "center", fontSize: '1.3rem'}}><PlusCircleOutlined style={{color: 'darkorange', fontSize: '24px'}}/>&nbsp; <strong>С 1 января 2020 года в целях стимулирования юридических лиц и индивидуальных предпринимателей</strong>, осуществляющих хозяйственную и (или) иную деятельность, к проведению мероприятий по снижению негативного воздействия на окружающую среду и внедрению наилучших доступных технологий при исчислении платы за негативное воздействие на окружающую среду к ставкам такой платы применяются следующие <strong>дополнительные коэффициенты</strong>:</h1>
                            </Col>

                            <Table
                                className='coef_table'
                                columns={columns}
                                dataSource={data2}
                                bordered
                                pagination={false}
                            />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme5_3;