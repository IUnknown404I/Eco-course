import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import classes from './EcoPreview.module.css'
import {earth} from "../../../../earth/earth";
import {Modal, Row, Col, Button, Tree, Collapse} from 'antd';
import {
    StarTwoTone,
    ContactsTwoTone,
    HourglassTwoTone,
    FlagTwoTone,
    HomeTwoTone,
    InteractionTwoTone, MenuOutlined, DownOutlined, CarryOutOutlined,
} from '@ant-design/icons';
import EcoMain from "../EcoMain";

const { Panel } = Collapse;

const EcoPreview = () => {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const treeData = [
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 1</span>,
            key: '0-0',
            children: [
                {
                    title: (
                        <span
                        >
                            Основные принципы охраны окружающей среды
                        </span>
                    ),
                    key: '0-0-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                        >
                            Общие требования к хозяйственной и иной деятельности, оказывающей вредное воздействие на атмосферный воздух
                        </span>
                    ),
                    key: '0-0-1',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                        >
                            Основные принципы государственного управления в области охраны атмосферного воздуха
                        </span>
                    ),
                    key: '0-0-2',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                        >
                            Обеспечение санитарно-эпидемиологического благополучия населения
                        </span>
                    ),
                    key: '0-0-3',
                    switcherIcon: <>4.</>,
                },
                {
                    title: (
                        <span
                        >
                            Права и обязанности граждан, индивидуальных предпринимателей и юридических лиц
                        </span>
                    ),
                    key: '0-0-4',
                    switcherIcon: <>5.</>,
                },
                {
                    title: (
                        <span
                        >
                            Критерии отнесения объектов, оказывающих значительное негативное воздействие на окружающую среду и относящихся к областям применения наилучших доступных технологий, к объектам I категории
                        </span>
                    ),
                    key: '0-0-5',
                    switcherIcon: <>6.</>,
                },
                {
                    title: (
                        <span
                        >
                            Критерии отнесения объектов, оказывающих умеренное негативное воздействие на окружающую среду, к объектам II категории
                        </span>
                    ),
                    key: '0-0-6',
                    switcherIcon: <>7.</>,
                },
                {
                    title: (
                        <span
                        >
                            Критерии отнесения объектов, оказывающих незначительное негативное и негативное воздействие на окружающую среду
                        </span>
                    ),
                    key: '0-0-7',
                    switcherIcon: <>8.</>,
                },
                {
                    title: (
                        <span
                        >
                            Требования к обращению с отходами I - V классов опасности. Федеральный закон от 24.06.1998 N 89-ФЗ
                        </span>
                    ),
                    key: '0-0-8',
                    switcherIcon: <>9.</>,
                },
                {
                    title: (
                        <span
                        >
                            Паспортизация отходов. Приказ Минприроды России от 08.12.2020 N 1026.
                        </span>
                    ),
                    key: '0-0-9',
                    switcherIcon: <>10.</>,
                },
                {
                    title: (
                        <span
                        >
                            Федеральный оператор по обращению с отходами I и II классов опасности. Федеральный закон от 24.06.1998 N 89-ФЗ
                        </span>
                    ),
                    key: '0-0-10',
                    switcherIcon: <>11.</>,
                },
                {
                    title: (
                        <span
                        >
                            Федеральная схема обращения с отходами I и II классов опасности. Федеральный закон от 24.06.1998 N 89-ФЗ
                        </span>
                    ),
                    key: '0-0-11',
                    switcherIcon: <>12.</>,
                },
                {
                    title: (
                        <span
                        >
                            Особенности обращения с отходами I и II классов опасности. Федеральный закон от 24.06.1998 N 89-ФЗ
                        </span>
                    ),
                    key: '0-0-12',
                    switcherIcon: <>13.</>,
                },
                {
                    title: (
                        <span
                        >
                            Предоставление информации индивидуальными предпринимателями и юридическими лицами, осуществляющими деятельность в области обращения с отходами. Порядок представления отчетности организациями 3 категории по НВОС
                        </span>
                    ),
                    key: '0-0-13',
                    switcherIcon: <>14.</>,
                },
                {
                    title: (
                        <span
                        >
                            Декларация по НВОС
                        </span>
                    ),
                    key: '0-0-14',
                    switcherIcon: <>15.</>,
                },
            ],
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 2</span>,
            key: '0-1',
            children: [
                {
                    title: (
                        <span
                        >
                            Права должностных лиц органов государственного экологического контроля
                        </span>
                    ),
                    key: '0-1-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                        >
                            Производственный экологический контроль в области обращения с отходами производства и потребления
                        </span>
                    ),
                    key: '0-1-1',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                        >
                            Негативное воздействие на окружающую среду при размещении отходов
                        </span>
                    ),
                    key: '0-1-2',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                        >
                            Производственный экологический контроль
                        </span>
                    ),
                    key: '0-1-3',
                    switcherIcon: <>4.</>,
                },
                {
                    title: (
                        <span
                        >
                            Плата за негативное воздействие на окружающую среду
                        </span>
                    ),
                    key: '0-1-4',
                    switcherIcon: <>5.</>,
                },
                {
                    title: (
                        <span
                        >
                            Производственный контроль в области охраны окружающей среды (производственный экологический контроль)
                        </span>
                    ),
                    key: '0-1-5',
                    switcherIcon: <>6.</>,
                },
                {
                    title: (
                        <span
                        >
                            Отчет об организации и о результатах осуществления производственного экологического контроля
                        </span>
                    ),
                    key: '0-1-6',
                    switcherIcon: <>7.</>,
                },
            ],
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 3</span>,
            key: '0-2',
            children: [
                {
                    title: (
                        <span
                        >
                            Организационно-распорядительные документы по вопросам охраны окружающей среды на предприятии
                        </span>
                    ),
                    key: '0-2-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                        >
                            Документация по охране атмосферного воздуха
                        </span>
                    ),
                    key: '0-2-1',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                        >
                            Документация по охране водных объектов
                        </span>
                    ),
                    key: '0-2-2',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                        >
                            Документация по обращению с отходами
                        </span>
                    ),
                    key: '0-2-3',
                    switcherIcon: <>4.</>,
                },
                {
                    title: (
                        <span
                        >
                            Государственная статистическая отчетность
                        </span>
                    ),
                    key: '0-2-4',
                    switcherIcon: <>5.</>,
                },
                {
                    title: (
                        <span
                        >
                            Статистическая отчетность предприятия
                        </span>
                    ),
                    key: '0-2-5',
                    switcherIcon: <>6.</>,
                },
            ],
        },
    ];
    const treeData1 = [
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 1</span>,
            key: '0-0',
            children: [
                {
                    title: (
                        <span
                        >
                            Производственный экологический контроль
                        </span>
                    ),
                    key: '0-0-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                        >
                            Основные требования к организации и осуществлению производственного экологического контроля
                        </span>
                    ),
                    key: '0-0-1',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                        >
                            Категории экологического контроля
                        </span>
                    ),
                    key: '0-0-2',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                        >
                            Проведение производственного экологического контроля
                        </span>
                    ),
                    key: '0-0-3',
                    switcherIcon: <>4.</>,
                },
            ]
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 2</span>,
            key: '0-1',
            children: [
                {
                    title: (
                        <span
                        >
                            Требования, предъявляемые законодательством в области охраны атмосферного воздуха
                        </span>
                    ),
                    key: '0-1-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                        >
                            Требования охраны атмосферного воздуха при проектировании, размещении, строительстве, реконструкции и эксплуатации объектов хозяйственной и иной деятельности
                        </span>
                    ),
                    key: '0-1-1',
                    switcherIcon: <>2.</>,
                },
            ]
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 3</span>,
            key: '0-2',
            children: [
                {
                    title: (
                        <span
                        >
                            Требования, предъявляемые законодательством в области рационального использования и охраны водных объектов
                        </span>
                    ),
                    key: '0-2-1',
                    switcherIcon: <></>,
                },
            ]
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 4</span>,
            key: '0-3',
            children: [
                {
                    title: (
                        <span
                        >
                            Порядок отнесения отходов к классу опасности для окружающей среды. Паспортизация отходов I-IV класса опасности
                        </span>
                    ),
                    key: '0-3-1',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                        >
                            Требования к лицам, которые допущены к сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I - IV классов опасности
                        </span>
                    ),
                    key: '0-3-2',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                        >
                            Полномочия органов местного самоуправления в области обращения с твердыми коммунальными отходами (в ред. Федерального закона от 31.12.2017 N 503-ФЗ)
                        </span>
                    ),
                    key: '0-3-3',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                        >
                            Основные требования, предъявляемые к индивидуальным предпринимателям и юридическим лицам, осуществляющим деятельность в области обращения с отходами. Федеральный закон от 24.06.1998 N 89-ФЗ
                        </span>
                    ),
                    key: '0-3-4',
                    switcherIcon: <>4.</>,
                },
                {
                    title: (
                        <span
                        >
                            Порядок учета, транспортирования отходов
                        </span>
                    ),
                    key: '0-3-5',
                    switcherIcon: <>5.</>,
                },
                {
                    title: (
                        <span
                        >
                            Необходимость разработки ПНООЛР на предприятиях 1 и 2 категорий по НВОС
                        </span>
                    ),
                    key: '0-3-6',
                    switcherIcon: <>6.</>,
                },
                {
                    title: (
                        <span
                        >
                            Порядок разработки и утверждения нормативов образования отходов и лимитов на их размещение
                        </span>
                    ),
                    key: '0-3-7',
                    switcherIcon: <>7.</>,
                },
                {
                    title: (
                        <span
                        >
                            Разработка проектов нормативов образования отходов и лимитов на их размещение
                        </span>
                    ),
                    key: '0-3-8',
                    switcherIcon: <>8.</>,
                },
                {
                    title: (
                        <span
                        >
                            Методы определения (расчета) нормативов образования отходов
                        </span>
                    ),
                    key: '0-3-9',
                    switcherIcon: <>9.</>,
                },
                {
                    title: (
                        <span
                        >
                            Содержание и оформление нормативов образования отходов и лимитов на их размещение
                        </span>
                    ),
                    key: '0-3-10',
                    switcherIcon: <>10.</>,
                },
                {
                    title: (
                        <span
                        >
                            Процедура оформления лицензии на деятельность. Лицензирование деятельности по обращению с отходами I-IV классов опасности
                        </span>
                    ),
                    key: '0-3-11',
                    switcherIcon: <>11.</>,
                },
            ]
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 5</span>,
            key: '0-4',
            children: [
                {
                    title: (
                        <span
                        >
                            Общие вопросы исчисления и уплаты платы за негативное воздействие на окружающую среду
                        </span>
                    ),
                    key: '0-4-1',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                        >
                            Плата за размещение отходов и выбросы загрязняющих веществ в атмосферный воздух
                        </span>
                    ),
                    key: '0-4-2',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                        >
                            Коэффициенты к ставкам платы
                        </span>
                    ),
                    key: '0-4-3',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                        >
                            Правила исчисления и взимания платы за негативное воздействие на окружающую среду
                        </span>
                    ),
                    key: '0-4-4',
                    switcherIcon: <>4.</>,
                },
                {
                    title: (
                        <span
                        >
                            Исчисление и взимание платы за негативное воздействие на окружающую среду
                        </span>
                    ),
                    key: '0-4-5',
                    switcherIcon: <>5.</>,
                },
                {
                    title: (
                        <span
                        >
                            Административная ответственность
                        </span>
                    ),
                    key: '0-4-6',
                    switcherIcon: <>6.</>,
                },
            ]
        },
    ];
    const treeData2 = [
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 1</span>,
            key: '0-1',
            children: [
                {
                    title: (
                        <span
                        >
                            Обеспечение экологической безопасности при обращении с опасными отходами
                        </span>
                    ),
                    key: '0-1-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                        >
                            Общественный контроль
                        </span>
                    ),
                    key: '0-1-1',
                    switcherIcon: <>2.</>,
                },
                {
                    title: (
                        <span
                        >
                            Государственный экологический надзор
                        </span>
                    ),
                    key: '0-1-2',
                    switcherIcon: <>3.</>,
                },
                {
                    title: (
                        <span
                        >
                            Права должностных лиц органов государственного экологического надзора. Объекты государственного экологического надзора
                        </span>
                    ),
                    key: '0-1-3',
                    switcherIcon: <>4.</>,
                },
                {
                    title: (
                        <span
                        >
                            Действия эколога при проведении плановой/внеплановой выездной проверки предприятия. Порядок оформления результатов проверки
                        </span>
                    ),
                    key: '0-1-4',
                    switcherIcon: <>5.</>,
                },
                {
                    title: (
                        <span
                        >
                            Организация и проведение проверок
                        </span>
                    ),
                    key: '0-1-5',
                    switcherIcon: <>6.</>,
                },
                {
                    title: (
                        <span
                        >
                            Порядок организации проверки
                        </span>
                    ),
                    key: '0-1-6',
                    switcherIcon: <>7.</>,
                },
                {
                    title: (
                        <span
                        >
                            Порядок оформления результатов проверки
                        </span>
                    ),
                    key: '0-1-7',
                    switcherIcon: <>8.</>,
                },
            ]
        },
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 2</span>,
            key: '0-2',
            children: [
                {
                    title: (
                        <span
                        >
                            Административная ответственность за совершение экологических правонарушений
                        </span>
                    ),
                    key: '0-2-0',
                    switcherIcon: <>1.</>,
                },
                {
                    title: (
                        <span
                        >
                            Экологические преступления
                        </span>
                    ),
                    key: '0-2-1',
                    switcherIcon: <>2.</>,
                },
            ]
        },
    ];

    useEffect(() => {
        earth(true, 210);
    }, [])

    return (
        <>
            <EcoMain isPurposely={true}/>

            <div className={classes.container}>
                <div className={classes.card}>
                    <div className={classes.title}>
                        <div>
                            <h3><strong>ДОПОЛНИТЕЛЬНАЯ ПРОФЕССИОНАЛЬНАЯ ПРОГРАММА ПОВЫШЕНИЯ КВАЛИФИКАЦИИ</strong></h3>
                            <h3>«Обеспечение экологической безопасности руководителями и специалистами общехозяйственных систем управления»</h3>
                        </div>
                        <div className={classes.earth}>
                            <canvas className={`canvas_Earth ${classes.preview_canvas_Earth}`}/>
                        </div>
                    </div>

                    <Row className='padding-30'>
                        <Col sm={{span: 24}} lg={{span: 15}} className={classes.content}>
                            <div className='eco-flex-col'>
                                <strong><ContactsTwoTone style={{fontSize: '24px'}}/>&nbsp; Категории слушателей:</strong>
                                специалисты и руководители отделов/служб охраны окружающей среды и экологии.
                            </div>
                            <div className='eco-flex-col'>
                                <strong><StarTwoTone style={{fontSize: '24px'}}/>&nbsp; Цель курса:</strong>
                                Совершенствование и (или) получение новой компетенции, необходимой для профессиональной деятельности в рамках имеющейся квалификации в области охраны окружающей среды и обеспечения экологической безопасности.
                            </div>
                            <div className='eco-flex-col'>
                                <strong><FlagTwoTone style={{fontSize: '24px'}}/>&nbsp; Задачи учебного курса:</strong>
                                <div className='eco-flex-col' style={{paddingLeft: '30px'}}>
                                    <span><strong>•</strong>&nbsp; Формирование понимания государственной политики РФ в области охраны окружающей среды и экологической безопасности;</span>
                                    <span><strong>•</strong>&nbsp; Усвоение нормативно-правовых требований в области охраны окружающей среды и экологии;</span>
                                    <span><strong>•</strong>&nbsp; Развитие навыков самостоятельного анализа ситуации и решения поставленных задач.</span>
                                </div>
                            </div>
                        </Col>

                        <Col sm={{span: 24}} lg={{span: 9}} className='padding-30 eco-flex-col' style={{justifyContent: 'space-between'}}>
                            <div className='eco-flex-col flex-centered'>
                                <Button block onClick={() => {history.push('/eco');}} className={classes.preview_but_primary}>Перейти к изучению</Button>
                                <Button block onClick={() => {setShowModal(true);}} className={classes.preview_but}>Содержание курса</Button>

                                <div className={classes.preview_info_card}>
                                    <div>
                                        <span><HomeTwoTone twoToneColor={'darkorange'} style={{fontSize: '22px'}}/>&nbsp; Дистанционное обучение</span>
                                        <span><HourglassTwoTone twoToneColor={'darkorange'} style={{fontSize: '22px'}}/>&nbsp; 72 академических часа</span>
                                        <span><InteractionTwoTone twoToneColor={'darkorange'} style={{fontSize: '22px'}}/>&nbsp; Интерактивный курс</span>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.preview_mark}>
                                НОЦ ООО «Газпром межрегионгаз инжиниринг», 2021.
                            </div>
                        </Col>
                    </Row>

                    <div className={classes.sideCard}/>
                </div>
            </div>

            <Modal
                wrapClassName='preview_modal_container'
                title='Содержание курса'
                width={1200}
                centered
                visible={showModal}
                onCancel={() => setShowModal(false)}
                footer={[
                    <Button key="back" onClick={() => setShowModal(false)}>
                        Закрыть
                    </Button>
                ]}
            >
                <Collapse
                    accordion={true}
                    expandIconPosition='right'
                >
                    <Panel header="Раздел 1. Законодательная база в области охраны окружающей среды и экологической безопасности" key="1" className='eco-skeleton-panel-style' extra={<MenuOutlined />}  showArrow>
                        <>
                            <Tree
                                className='eco-skeleton-tree-style'
                                showLine = {true}
                                // defaultExpandedKeys = {['0-0']}
                                treeData = {treeData}
                                switcherIcon={<DownOutlined />}
                                icon={<CarryOutOutlined />}
                            />
                        </>
                    </Panel>
                    <Panel header="Раздел 2. Производственный экологический контроль на предприятиях" key="2" className='eco-skeleton-panel-style' extra={<MenuOutlined />}  showArrow>
                        <>
                            <Tree
                                className='eco-list-style-tree eco-skeleton-tree-style'
                                showLine = {true}
                                // defaultExpandedKeys = {['0-0']}
                                treeData = {treeData1}
                                switcherIcon={<DownOutlined />}
                                icon={<CarryOutOutlined />}
                            />
                        </>
                    </Panel>
                    <Panel header="Раздел 3. Государственный экологический надзор" key="3" className='eco-skeleton-panel-style' extra={<MenuOutlined />}  showArrow>
                        <>
                            <Tree
                                className='eco-list-style-tree eco-skeleton-tree-style'
                                showLine = {true}
                                // defaultExpandedKeys = {['0-1']}
                                treeData = {treeData2}
                                switcherIcon={<DownOutlined />}
                                icon={<CarryOutOutlined />}
                            />
                        </>
                    </Panel>
                </Collapse>
            </Modal>
        </>
    );
};

export default EcoPreview;