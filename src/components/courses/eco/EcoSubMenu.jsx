import React, {useEffect, useState} from 'react';
import {
    PaperClipOutlined,
    ImportOutlined,
    PieChartOutlined,
    ProfileOutlined,
    BookOutlined,
    LinkOutlined,
    DeploymentUnitOutlined,
    KeyOutlined,
} from "@ant-design/icons";
import {Image, Menu} from "antd";
import {NavLink, useHistory} from "react-router-dom";

const { SubMenu } = Menu;

const EcoSubMenu = ({currentChapter, selectedKeys, setCurrentPage, setSwitchToGlossary, setSwitchToLiterature, setSwitchToMaterials, setSwitchToSkeleton, themes, collapsed, setChapterForTesting, setSwitchToChapterTesting}) => {
    const history = useHistory();
    const [currentSub1, setCurrentSub1] = useState(<></>);

    const clearSwitches = () => {
        setSwitchToGlossary(false);
        setSwitchToLiterature(false);
        setSwitchToMaterials(false);
        setSwitchToSkeleton(false);
        setSwitchToChapterTesting(false);
    }

    useEffect(() => {
        switch (currentChapter.id) {
            case 1: setCurrentSub1(
                <SubMenu key="sub1" icon={<PieChartOutlined />} title="Навигация">
                    <Menu.ItemGroup key="g1" title="Тема 1">
                        <Menu.Item key="11" onClick={() => {setCurrentPage(themes[0][0]); clearSwitches();}}>Охрана окружающей среды</Menu.Item>
                        <Menu.Item key="12" onClick={() => {setCurrentPage(themes[0][1]); clearSwitches();}}>Охрана атмосферного воздуха</Menu.Item>
                        <Menu.Item key="13" onClick={() => {setCurrentPage(themes[0][3]); clearSwitches();}}>Благополучие населения</Menu.Item>
                        <Menu.Item key="14" onClick={() => {setCurrentPage(themes[0][4]); clearSwitches();}}>Права и обязанности</Menu.Item>
                        <Menu.Item key="15" onClick={() => {setCurrentPage(themes[0][5]); clearSwitches();}}>Категорийность объектов</Menu.Item>
                        <Menu.Item key="16" onClick={() => {setCurrentPage(themes[0][8]); clearSwitches();}}>Требования к обращению с отходами</Menu.Item>
                        <Menu.Item key="17" onClick={() => {setCurrentPage(themes[0][9]); clearSwitches();}}>Паспортизация отходов</Menu.Item>
                        <Menu.Item key="18" onClick={() => {setCurrentPage(themes[0][10]); clearSwitches();}}>Федеральный оператор по обращению с отходами</Menu.Item>
                        <Menu.Item key="19" onClick={() => {setCurrentPage(themes[0][11]); clearSwitches();}}>Федеральная схема обращения с отходами</Menu.Item>
                        <Menu.Item key="20" onClick={() => {setCurrentPage(themes[0][12]); clearSwitches();}}>Особенности обращения с отходами</Menu.Item>
                        <Menu.Item key="21" onClick={() => {setCurrentPage(themes[0][13]); clearSwitches();}}>Предоставление информации</Menu.Item>
                        <Menu.Item key="22" onClick={() => {setCurrentPage(themes[0][14]); clearSwitches();}}>Декларация по НВОС</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Тема 2">
                        <Menu.Item key="111" onClick={() => {setCurrentPage(themes[1][0]); clearSwitches();}}>Система государственного управления</Menu.Item>
                        <Menu.Item key="112" onClick={() => {setCurrentPage(themes[1][1]); clearSwitches();}}>Производственный экологический контроль</Menu.Item>
                        <Menu.Item key="113" onClick={() => {setCurrentPage(themes[1][2]); clearSwitches();}}>Негативное воздействие на окружающую среду</Menu.Item>
                        <Menu.Item key="114" onClick={() => {setCurrentPage(themes[1][3]); clearSwitches();}}>Производственный экологический контроль</Menu.Item>
                        <Menu.Item key="115" onClick={() => {setCurrentPage(themes[1][4]); clearSwitches();}}>Плата за негативное воздействие</Menu.Item>
                        <Menu.Item key="116" onClick={() => {setCurrentPage(themes[1][5]); clearSwitches();}}>Производственный контроль (охрана окружающей среды)</Menu.Item>
                        <Menu.Item key="117" onClick={() => {setCurrentPage(themes[1][6]); clearSwitches();}}>Отчет об экологическом контроле</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g3" title="Тема 3">
                        <Menu.Item key="121" onClick={() => {setCurrentPage(themes[2][0]); clearSwitches();}}>Система документации</Menu.Item>
                        <Menu.Item key="122" onClick={() => {setCurrentPage(themes[2][1]); clearSwitches();}}>Документация - атмосферный воздух</Menu.Item>
                        <Menu.Item key="123" onClick={() => {setCurrentPage(themes[2][2]); clearSwitches();}}>Документация - водные объекты</Menu.Item>
                        <Menu.Item key="124" onClick={() => {setCurrentPage(themes[2][3]); clearSwitches();}}>Документация - обращение с отходами</Menu.Item>
                        <Menu.Item key="125" onClick={() => {setCurrentPage(themes[2][4]); clearSwitches();}}>Государственная статистическая отчетность</Menu.Item>
                        <Menu.Item key="126" onClick={() => {setCurrentPage(themes[2][5]); clearSwitches();}}>Статистическая отчетность предприятия</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            ); return;

            case 2: setCurrentSub1(
                <SubMenu key="sub1" icon={<PieChartOutlined />} title="Навигация">
                    <Menu.ItemGroup key="g1" title="Тема 1">
                        <Menu.Item key="211" onClick={() => {setCurrentPage(themes[0][0]); clearSwitches();}}>Производственный экологический контроль</Menu.Item>
                        <Menu.Item key="212" onClick={() => {setCurrentPage(themes[0][1]); clearSwitches();}}>Основные требования экологического контроля</Menu.Item>
                        <Menu.Item key="213" onClick={() => {setCurrentPage(themes[0][2]); clearSwitches();}}>Категории экологического контроля</Menu.Item>
                        <Menu.Item key="214" onClick={() => {setCurrentPage(themes[0][3]); clearSwitches();}}>Проведение экологического контроля</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Тема 2">
                        <Menu.Item key="221" onClick={() => {setCurrentPage(themes[1][0]); clearSwitches();}}>Требования к предприятиям</Menu.Item>
                        <Menu.Item key="222" onClick={() => {setCurrentPage(themes[1][1]); clearSwitches();}}>Требования охраны атмосферного воздуха</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g3" title="Тема 3">
                        <Menu.Item key="231" onClick={() => {setCurrentPage(themes[2][0]); clearSwitches();}}>Требования охраны водных объектов</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g4" title="Тема 4">
                        <Menu.Item key="241" onClick={() => {setCurrentPage(themes[3][0]); clearSwitches();}}>Паспортизация отходов</Menu.Item>
                        <Menu.Item key="242" onClick={() => {setCurrentPage(themes[3][1]); clearSwitches();}}>Требования к сотрудникам</Menu.Item>
                        <Menu.Item key="243" onClick={() => {setCurrentPage(themes[3][2]); clearSwitches();}}>Полномочия органов местного самоуправления</Menu.Item>
                        <Menu.Item key="244" onClick={() => {setCurrentPage(themes[3][3]); clearSwitches();}}>Основные требования обращения с отходами</Menu.Item>
                        <Menu.Item key="245" onClick={() => {setCurrentPage(themes[3][4]); clearSwitches();}}>Порядок учета, транспортирования отходов</Menu.Item>
                        <Menu.Item key="246" onClick={() => {setCurrentPage(themes[3][5]); clearSwitches();}}>Необходимость разработки ПНООЛР</Menu.Item>
                        <Menu.Item key="247" onClick={() => {setCurrentPage(themes[3][6]); clearSwitches();}}>Порядок разработки и утверждения нормативов</Menu.Item>
                        <Menu.Item key="248" onClick={() => {setCurrentPage(themes[3][7]); clearSwitches();}}>Разработка проектов нормативов</Menu.Item>
                        <Menu.Item key="249" onClick={() => {setCurrentPage(themes[3][8]); clearSwitches();}}>Методы определения нормативов</Menu.Item>
                        <Menu.Item key="2410" onClick={() => {setCurrentPage(themes[3][9]); clearSwitches();}}>Содержание и оформление нормативов</Menu.Item>
                        <Menu.Item key="2411" onClick={() => {setCurrentPage(themes[3][10]); clearSwitches();}}>Лицензирование деятельности</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g5" title="Тема 5">
                        <Menu.Item key="251" onClick={() => {setCurrentPage(themes[4][0]); clearSwitches();}}>Плата за негативное воздействие</Menu.Item>
                        <Menu.Item key="252" onClick={() => {setCurrentPage(themes[4][1]); clearSwitches();}}>Плата по отходам</Menu.Item>
                        <Menu.Item key="253" onClick={() => {setCurrentPage(themes[4][2]); clearSwitches();}}>Коэффициенты к ставкам платы</Menu.Item>
                        <Menu.Item key="254" onClick={() => {setCurrentPage(themes[4][3]); clearSwitches();}}>Правила исчисления и взимания платы</Menu.Item>
                        <Menu.Item key="255" onClick={() => {setCurrentPage(themes[4][4]); clearSwitches();}}>Исчисление и взимание платы</Menu.Item>
                        <Menu.Item key="256" onClick={() => {setCurrentPage(themes[4][5]); clearSwitches();}}>Административная ответственность</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            ); return;

            case 3: setCurrentSub1(
                <SubMenu key="sub1" icon={<PieChartOutlined />} title="Навигация">
                    <Menu.ItemGroup key="g1" title="Тема 1">
                        <Menu.Item key="111" onClick={() => {setCurrentPage(themes[0][0]); clearSwitches();}}>Обеспечение экологической безопасности</Menu.Item>
                        <Menu.Item key="112" onClick={() => {setCurrentPage(themes[0][1]); clearSwitches();}}>Общественный контроль</Menu.Item>
                        <Menu.Item key="113" onClick={() => {setCurrentPage(themes[0][2]); clearSwitches();}}>Государственный экологический надзор</Menu.Item>
                        <Menu.Item key="114" onClick={() => {setCurrentPage(themes[0][3]); clearSwitches();}}>Права должностных лиц. Объекты экологического надзора</Menu.Item>
                        <Menu.Item key="115" onClick={() => {setCurrentPage(themes[0][4]); clearSwitches();}}>Действия эколога при проведении проверки</Menu.Item>
                        <Menu.Item key="116" onClick={() => {setCurrentPage(themes[0][5]); clearSwitches();}}>Организация и проведение проверок</Menu.Item>
                        <Menu.Item key="117" onClick={() => {setCurrentPage(themes[0][6]); clearSwitches();}}>Порядок организации проверки</Menu.Item>
                        <Menu.Item key="118" onClick={() => {setCurrentPage(themes[0][7]); clearSwitches();}}>Порядок оформления результатов проверки</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Тема 2">
                        <Menu.Item key="121" onClick={() => {setCurrentPage(themes[1][0]); clearSwitches();}}>Совершение экологических правонарушений</Menu.Item>
                        <Menu.Item key="122" onClick={() => {setCurrentPage(themes[1][1]); clearSwitches();}}>Экологические преступления</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            ); return;

            default: setCurrentSub1(null); return;
        }
    }, [currentChapter]);

    return (
        <Menu
            // theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
        >
            <div style={{margin: '10px 0 20px 0'}} className='eco-img-col'>
                {collapsed
                    ?
                    <Image
                        preview = {false}
                        src={'/images/logo-mini.png'}
                        // src={'https://courses.umcmrg.ru/img/logo/logo-mini.png'}
                    />
                    :
                    <Image
                        preview = {false}
                        src={'/images/mrg_white.jpg'}
                    />
                }
            </div>
            {currentSub1}

            <Menu.Item
                key="7"
                icon={<DeploymentUnitOutlined />}
                onClick={() => {
                    clearSwitches();
                    setSwitchToSkeleton(true);
                }}
            >
                Структура
            </Menu.Item>
            <Menu.Item
                key="5"
                icon={<BookOutlined />}
                onClick={() => {
                    clearSwitches();
                    setSwitchToLiterature(true);
                }}
            >
                Литература
            </Menu.Item>
            <Menu.Item
                key="4"
                icon={<ProfileOutlined />}
                onClick={() => {
                    clearSwitches();
                    setSwitchToGlossary(true);
                }}
            >
                Глоссарий
            </Menu.Item>

            <Menu.Item
                key="6"
                icon={<PaperClipOutlined />}
                onClick={() => {
                    clearSwitches();
                    setSwitchToMaterials(true);
                }}
            >
                Материалы
            </Menu.Item>

            <SubMenu key="sub3" icon={<LinkOutlined />} title="Ссылки">
                <Menu.Item key="path_1">
                    <NavLink to={{ pathname: "https://rpn.gov.ru/fkko/?states=Все&hazardClass%5B%5D=1" }} target="_blank">
                        Федеральный классификационный каталог отходов
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="path_2">
                    <NavLink to={{ pathname: "http://fcao.ru/metodiki-kkha.html" }} target="_blank">
                        Реестр методик
                    </NavLink>
                </Menu.Item>
            </SubMenu>

            <SubMenu key="subTests" icon={<KeyOutlined />} title="Тестирование">
                <Menu.Item
                    onClick={() => {
                        clearSwitches();
                        setChapterForTesting(1);
                        setSwitchToChapterTesting(true);
                    }}
                    key="test-1"
                >
                    Тест - Раздел 1
                </Menu.Item>
                <Menu.Item
                    onClick={() => {
                        clearSwitches();
                        setChapterForTesting(2);
                        setSwitchToChapterTesting(true);
                    }}
                    key="test-2"
                >
                    Тест - Раздел 2
                </Menu.Item>
                <Menu.Item
                    onClick={() => {
                        clearSwitches();
                        setChapterForTesting(3);
                        setSwitchToChapterTesting(true);
                    }}
                    key="test-3"
                >
                    Тест - Раздел 3
                </Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default EcoSubMenu;