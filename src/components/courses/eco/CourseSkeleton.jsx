import React from 'react';
import {BackTop, Button, Col, Collapse, Divider, Row, Tree} from "antd";
import {
    BookTwoTone,
    BulbTwoTone,
    CarryOutOutlined,
    DownOutlined,
    LeftCircleTwoTone,
    LinkOutlined,
    MenuOutlined,
    ProfileTwoTone,
    KeyOutlined,
    PaperClipOutlined,
    PieChartOutlined,
} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {FirstChapter, SecondChapter, ThirdChapter} from "./nav/nav";

const { Panel } = Collapse;

const CourseSkeleton = ({currentChapter, setChapter, themes, setCurrentPage, setSwitchToSkeleton, setSwitchToGlossary, setSwitchToLiterature, setSwitchToMaterials, setSwitchToChapterTesting, setChapterForTesting}) => {
    const clearSwitches = () => {
        setSwitchToGlossary(false);
        setSwitchToLiterature(false);
        setSwitchToMaterials(false);
        setSwitchToSkeleton(false);
        setSwitchToChapterTesting(false);
    }

    const verifyChapterChange = (chap, theme, page) => {
        if(currentChapter.id !== chap.id) {
            setChapter(chap, chap.themes[theme][page], chap.titles[theme][page]);
            return false;
        }
        return true;
    }

    const treeData = [
        {
            title: <span className='eco-skeleton-tree-theme'>Тема 1</span>,
            key: '0-0',
            children: [
                {
                    title: (
                        <span
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,0)) {
                                    setCurrentPage(themes[0][0])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,1)) {
                                    setCurrentPage(themes[0][1])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,2)) {
                                    setCurrentPage(themes[0][2])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,3)) {
                                    setCurrentPage(themes[0][3])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,4)) {
                                    setCurrentPage(themes[0][4])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,5)) {
                                    setCurrentPage(themes[0][5])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,6)) {
                                    setCurrentPage(themes[0][6])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,7)) {
                                    setCurrentPage(themes[0][7])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,8)) {
                                    setCurrentPage(themes[0][8])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,9)) {
                                    setCurrentPage(themes[0][9])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,10)) {
                                    setCurrentPage(themes[0][10])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,11)) {
                                    setCurrentPage(themes[0][11])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,12)) {
                                    setCurrentPage(themes[0][12])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,13)) {
                                    setCurrentPage(themes[0][13])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),0,14)) {
                                    setCurrentPage(themes[0][14])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),1,0)) {
                                    setCurrentPage(themes[1][0])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),1,1)) {
                                    setCurrentPage(themes[1][1])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),1,2)) {
                                    setCurrentPage(themes[1][2])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),1,3)) {
                                    setCurrentPage(themes[1][3])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),1,4)) {
                                    setCurrentPage(themes[1][4])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),1,5)) {
                                    setCurrentPage(themes[1][5])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),1,6)) {
                                    setCurrentPage(themes[1][6])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,0)) {
                                    setCurrentPage(themes[2][0])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,1)) {
                                    setCurrentPage(themes[2][1])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,2)) {
                                    setCurrentPage(themes[2][2])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,3)) {
                                    setCurrentPage(themes[2][3])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,4)) {
                                    setCurrentPage(themes[2][4])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new FirstChapter(),2,5)) {
                                    setCurrentPage(themes[2][5])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new SecondChapter(),0,0)) {
                                    setCurrentPage(themes[0][0])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new SecondChapter(),0,1)) {
                                    setCurrentPage(themes[0][1])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new SecondChapter(),0,2)) {
                                    setCurrentPage(themes[0][2])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if(verifyChapterChange(new SecondChapter(),0,3)) {
                                    setCurrentPage(themes[0][3])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 1, 0)) {
                                    setCurrentPage(themes[1][0])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 1, 1)) {
                                    setCurrentPage(themes[1][1])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 2, 0)) {
                                    setCurrentPage(themes[2][0])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 0)) {
                                    setCurrentPage(themes[3][0])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 1)) {
                                    setCurrentPage(themes[3][1])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 2)) {
                                    setCurrentPage(themes[3][2])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 3)) {
                                    setCurrentPage(themes[3][3])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 4)) {
                                    setCurrentPage(themes[3][4])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 5)) {
                                    setCurrentPage(themes[3][5])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 6)) {
                                    setCurrentPage(themes[3][6])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 7)) {
                                    setCurrentPage(themes[3][7])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 8)) {
                                    setCurrentPage(themes[3][8])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 9)) {
                                    setCurrentPage(themes[3][9])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 3, 10)) {
                                    setCurrentPage(themes[3][10])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 0)) {
                                    setCurrentPage(themes[4][0])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 1)) {
                                    setCurrentPage(themes[4][1])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 2)) {
                                    setCurrentPage(themes[4][2])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 3)) {
                                    setCurrentPage(themes[4][3])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 4)) {
                                    setCurrentPage(themes[4][4])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new SecondChapter(), 4, 5)) {
                                    setCurrentPage(themes[4][5])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new ThirdChapter(), 0, 0)) {
                                    setCurrentPage(themes[0][0])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new ThirdChapter(), 0, 1)) {
                                    setCurrentPage(themes[0][1])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new ThirdChapter(), 0, 2)) {
                                    setCurrentPage(themes[0][2])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new ThirdChapter(), 0, 3)) {
                                    setCurrentPage(themes[0][3])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new ThirdChapter(), 0, 4)) {
                                    setCurrentPage(themes[0][4])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new ThirdChapter(), 0, 5)) {
                                    setCurrentPage(themes[0][5])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new ThirdChapter(), 0, 6)) {
                                    setCurrentPage(themes[0][6])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new ThirdChapter(), 0, 7)) {
                                    setCurrentPage(themes[0][7])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new ThirdChapter(), 1, 0)) {
                                    setCurrentPage(themes[1][0])
                                }
                                clearSwitches();
                            }}
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
                            onClick={() => {
                                if (verifyChapterChange(new ThirdChapter(), 1, 1)) {
                                    setCurrentPage(themes[1][1])
                                }
                                clearSwitches();
                            }}
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
    const treeDataTests = [
        {
            title: <div className='eco-skeleton-tree-chapter'>Тесты</div>,
            key: '1',
            icon: <DownOutlined/>,
            children: [
                {
                    title: (
                        <span
                            onClick={() => {
                                clearSwitches();
                                setChapterForTesting(1);
                                setSwitchToChapterTesting(true);
                            }}
                        >
                            По <strong style={{fontWeight: 'bold'}}>1-ому</strong> разделу
                        </span>
                    ),
                    key: '11',
                    switcherIcon: <KeyOutlined style={{color: 'brown'}}/>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                clearSwitches();
                                setChapterForTesting(2);
                                setSwitchToChapterTesting(true);
                            }}
                        >
                            По <strong style={{fontWeight: 'bold'}}>2-ому</strong> разделу
                        </span>
                    ),
                    key: '12',
                    switcherIcon: <KeyOutlined style={{color: 'brown'}}/>,
                },
                {
                    title: (
                        <span
                            onClick={() => {
                                clearSwitches();
                                setChapterForTesting(3);
                                setSwitchToChapterTesting(true);
                            }}
                        >
                            По <strong style={{fontWeight: 'bold'}}>3-ему</strong> разделу
                        </span>
                    ),
                    key: '13',
                    switcherIcon: <KeyOutlined style={{color: 'brown'}}/>,
                },
            ]
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 40px'}}>
                <Col xs={{span: 24, offset: 0}} sm={{span: 16, offset: 4}} md={{span: 4, offset: 0}} lg={{span: 3, offset: 0}} xl={{span: 2, offset: 1}} className='eco-flex-row' style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Button
                        onClick={() => {setSwitchToSkeleton(false)}}
                        icon={<LeftCircleTwoTone />}
                        className='eco-pagination-but'
                        size="large"
                    >
                        К курсу
                    </Button>
                </Col>
                <Col xs={{span: 24, offset: 0}} sm={{span: 20, offset: 2}} md={{span: 16, offset: 0}} lg={{span: 12, offset: 3}} xl={{span: 12, offset: 3}} style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '27px', fontWeight: 'bold', color: 'darkblue'}}>Структура курса</h1>
                </Col>
                <Col xs={{span: 24, offset: 0}} sm={{span: 16, offset: 4}} md={{span: 14, offset: 5}} lg={{span: 6, offset: 0}} xl={{span: 5, offset: 0}} style={{textAlign: 'center'}}>
                    <div>
                       <BulbTwoTone />&nbsp;
                       Нажимайте на элементы для перехода
                   </div>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 22, offset: 1}} className='eco-materials-blue'>
                    <Collapse
                        accordion={true}
                        expandIconPosition='right'
                    >
                        <Panel header="Раздел 1. Законодательная база в области охраны окружающей среды и экологической безопасности" key="1" className='eco-skeleton-panel-style' extra={<PieChartOutlined />}  showArrow>
                            <>
                                <Tree
                                    className='eco-list-style-tree eco-skeleton-tree-style'
                                    showLine = {true}
                                    // defaultExpandedKeys = {['0-0']}
                                    treeData = {treeData}
                                    switcherIcon={<DownOutlined />}
                                    icon={<CarryOutOutlined />}
                                />
                            </>
                        </Panel>
                        <Panel header="Раздел 2. Производственный экологический контроль на предприятиях" key="2" className='eco-skeleton-panel-style' extra={<PieChartOutlined />}  showArrow>
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
                        <Panel header="Раздел 3. Государственный экологический надзор" key="3" className='eco-skeleton-panel-style' extra={<PieChartOutlined />}  showArrow>
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
                        <Panel header="Тестирование по разделам" key="4" className='eco-skeleton-panel-style' extra={<KeyOutlined />}  showArrow>
                            <>
                                <Tree
                                    defaultExpandedKeys = {['1']}
                                    className='eco-list-style-tree eco-skeleton-tree-style'
                                    showLine = {true}
                                    treeData = {treeDataTests}
                                    switcherIcon={<DownOutlined />}
                                    icon={<CarryOutOutlined />}
                                />
                            </>
                        </Panel>
                        <Panel header="Ссылки" key="5" className='eco-skeleton-panel-style' extra={<LinkOutlined />}  showArrow>
                            <>
                                <div style={{color: 'darkblue', fontSize: '1.4rem'}}>Внешние ресурсы:</div>
                                <div className='eco-div-padding eco-flex-col' style={{gap: '5px', fontSize: '1.3rem'}}>
                                    <div>
                                        <a href="https://rpn.gov.ru/fkko/?states=Все&hazardClass%5B%5D=1" target="_blank">
                                            <LinkOutlined /> Федеральный классификационный каталог отходов
                                        </a>
                                    </div>
                                    <div>
                                        <NavLink to={{ pathname: "http://fcao.ru/metodiki-kkha.html" }} target="_blank">
                                            <LinkOutlined /> Реестр методик
                                        </NavLink>
                                    </div>
                                </div>
                            </>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>

            <Divider />

            <Row style={{marginTop: '30px'}}>
                <Col xs={{span: 24, offset: 0}} sm={{span: 18, offset: 3}} md={{span: 10, offset: 1}} lg={{span: 7, offset: 0}} style={{marginBottom: '10px'}}>
                    <Button
                        className='skeleton-but'
                        style={{width: '100%'}}
                        onClick={() => {clearSwitches(); setSwitchToGlossary(true)}}
                    >
                        <ProfileTwoTone/> Глоссарий
                    </Button>
                </Col>
                <Col xs={{span: 24, offset: 0}} sm={{span: 18, offset: 3}} md={{span: 10, offset: 2}} lg={{span: 8, offset: 1}} style={{marginBottom: '10px'}}>
                    <Button
                        className='skeleton-but'
                        style={{width: '100%'}}
                        onClick={() => {clearSwitches(); setSwitchToLiterature(true)}}
                    >
                        <BookTwoTone/> Список Литературы
                    </Button>
                </Col>
                <Col xs={{span: 24, offset: 0}} sm={{span: 18, offset: 3}} md={{span: 10, offset: 7}} lg={{span: 7, offset: 1}}>
                    <Button
                        className='skeleton-but'
                        style={{width: '100%'}}
                        onClick={() => {clearSwitches(); setSwitchToMaterials(true)}}
                    >
                        <PaperClipOutlined style={{color: 'rgb(24,144,255)'}}/> Материалы
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default CourseSkeleton;