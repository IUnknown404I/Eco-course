import React, {useEffect, useState} from 'react';
import {PageHeader, Layout, Col, Row, Button} from 'antd';
import {
    LeftCircleTwoTone,
    RightCircleTwoTone,
    KeyOutlined,
    DoubleLeftOutlined,
    TrophyOutlined,
} from '@ant-design/icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EcoSubMenu from "./EcoSubMenu";
import CourseSkeleton from "./CourseSkeleton";
import Literature from "./Literature";
import Glossary from "./Glossary";
import Materials from "./Materials";

import {FirstChapter, SecondChapter, ThirdChapter} from "./nav/nav";
import Test_Main from "./tests/Test_Main";
import EcoBreadCrumbs from "./EcoBreadCrumbs";
import Secret from "../../Secret";

const { Content, Footer, Sider } = Layout;

const EcoMain = ({isPurposely}) => {
    const [purposely, setPurposely] = useState(isPurposely);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [breakpoint, setBreakpoint] = useState(60)

    const [currentChapter, setCurrentChapter] = useState(new FirstChapter());
    const [themes, setThemes] = useState(currentChapter.themes);
    const [titles, setTitles] = useState(currentChapter.titles);
    const [switchToChapterTesting, setSwitchToChapterTesting] = useState(false);
    const [chapterForTesting, setChapterForTesting] = useState(1);

    const [currentPage, setCurrentPage] = useState(themes[0][0]);
    const [currentTitle, setCurrentTitle] = useState(titles[0][0]);
    const [currentSubTitle, setCurrentSubTitle] = useState('');
    const [switchToGlossary, setSwitchToGlossary] = useState(false);
    const [switchToLiterature, setSwitchToLiterature] = useState(false);
    const [switchToMaterials, setSwitchToMaterials] = useState(false);
    const [switchToSkeleton, setSwitchToSkeleton] = useState(true);

    const getCurrentTheme = () => {
        for(const theme of themes) {
            if(theme.indexOf(currentPage) !== -1) {
                return theme;
            }
        }
    }
    const isLastInThemePage = () => {
        const currentTheme = getCurrentTheme();
        return currentPage ===
            currentTheme[currentTheme.length - 1];
    }
    const isLastPage = () => {
        const currentTheme = getCurrentTheme();
        return currentTheme === themes[themes.length - 1]
            ? currentTheme[currentTheme.length - 1] === currentPage
            : false;
    }

    const changePage = isNext => {
        if(!purposely) return;
        const currentTheme = getCurrentTheme();

        switch (isNext) {
            case true: {
                if(isLastInThemePage()) {
                    setCurrentPage(themes[themes.indexOf(currentTheme) + 1][0]);
                    break;
                } else {
                    setCurrentPage(currentTheme[currentTheme.indexOf(currentPage) + 1]);
                    break;
                }
            }
            case false: {
                if(currentTheme[0] === currentPage) {
                    setCurrentPage(themes[themes.indexOf(currentTheme) - 1][themes[themes.indexOf(currentTheme) - 1].length - 1]);
                } else {
                    setCurrentPage(currentTheme[currentTheme.indexOf(currentPage) - 1]);
                }
            }
        }
    }

    const checkSwitches = () => {
        return switchToGlossary || switchToLiterature || switchToMaterials || switchToSkeleton || switchToChapterTesting;
    }

    const changeCurrentTitle = () => {
        if(!purposely) return;

        else if(switchToGlossary) {
            setCurrentTitle('Глоссарий');
            return;
        }
        else if(switchToLiterature) {
            setCurrentTitle('Литература');
            return;
        }
        else if(switchToMaterials) {
            setCurrentTitle('Материалы');
            return;
        }
        else if(switchToSkeleton) {
            setCurrentTitle('Структура курса');
            return;
        }
        else if(switchToChapterTesting) {
            setCurrentTitle(`Тестирование по ${chapterForTesting} разделу`);
            return;
        }

        const currentTheme = getCurrentTheme();
        setCurrentTitle(titles[themes.indexOf(currentTheme)][currentTheme.indexOf(currentPage)]);
    }

    const changeCurrentSubTitle = () => {
        if(!purposely) return;

        if(switchToGlossary || switchToLiterature || switchToMaterials || switchToSkeleton || switchToChapterTesting) {
            setCurrentSubTitle('');
        } else {
            setCurrentSubTitle(`Тема ${themes.indexOf(getCurrentTheme()) + 1}`);
        }
    }

    const changeChapter = (isNext) => {
        let chap;
        if(isNext) {
            chap = currentChapter.id === 1 ? new SecondChapter() : new ThirdChapter();
        } else {
            chap = currentChapter.id === 3 ? new SecondChapter() : new FirstChapter();
        }

        setCurrentChapter(chap);
        setThemes(chap.themes);
        setTitles(chap.titles);
        setCurrentPage(chap.themes[0][0]);
        setCurrentTitle(chap.titles[0][0]);
    }

    const setChapter = (chapter, page, title) => {
        setCurrentChapter(chapter);
        setThemes(chapter.themes);
        setTitles(chapter.titles);
        setCurrentPage(page);
        setCurrentTitle(title);
    }

    useEffect(() => {
        const auth = localStorage.getItem('auth');
        const authTime = localStorage.getItem('authTime');
        if(auth && authTime && ((Date.now() - parseInt(authTime)) <= 1000*60*60*24*14)) {
            setPurposely(true);
        } else {
            localStorage.setItem('auth', '0');
            localStorage.removeItem('authTime');
        }
    }, []);

    useEffect(() => {
        if(!collapsed && !breakpoint && document.querySelector('.ant-layout-sider-zero-width-trigger')) {
            document.querySelector('.ant-layout-sider-zero-width-trigger').style.left = '200px';
        }
        else if (document.querySelector('.ant-layout-sider-zero-width-trigger')) {
            document.querySelector('.ant-layout-sider-zero-width-trigger').style.left = '0';
        }
    }, [collapsed]);

    useEffect(() => {
        window.scrollTo(0,0);

        changeCurrentTitle();
        changeCurrentSubTitle();

        if(switchToChapterTesting) {
            setSelectedKeys([`test-${chapterForTesting}`]);
        } else {
            setSelectedKeys([currentChapter.getSelectedMenuItem(themes, currentPage, switchToGlossary, switchToLiterature, switchToMaterials, switchToSkeleton)]);
        }
    }, [currentPage, switchToGlossary, switchToLiterature, switchToMaterials, switchToSkeleton, switchToChapterTesting, chapterForTesting]);

    return (
        <Layout style={{ minHeight: '100vh'}} className='eco-main-layout'>

            <Sider className='eco-sider-style'
                   collapsible
                   collapsed={collapsed}
                   collapsedWidth={breakpoint}
                   onCollapse={() => setCollapsed(!collapsed)}
                   breakpoint='lg'
                   onBreakpoint={(breakpoint) => {breakpoint ? setBreakpoint(0) : setBreakpoint(60);}}
            >
                <div className="logo" />
                <EcoSubMenu
                    currentChapter={currentChapter}
                    selectedKeys={selectedKeys}
                    setCurrentPage={setCurrentPage}
                    setSwitchToGlossary={setSwitchToGlossary}
                    setSwitchToLiterature={setSwitchToLiterature}
                    setSwitchToMaterials={setSwitchToMaterials}
                    setSwitchToSkeleton={setSwitchToSkeleton}
                    setSwitchToChapterTesting={setSwitchToChapterTesting}
                    setChapterForTesting={setChapterForTesting}
                    themes={themes}
                    collapsed={collapsed}
                />
            </Sider>

            <Layout className="site-layout">
                <PageHeader
                    className="site-page-header"
                    backIcon={<DoubleLeftOutlined/>}
                    title={<span>{checkSwitches() ? currentTitle : currentChapter.name}</span>}
                    subTitle={<span>{currentSubTitle}</span>}
                    onBack={() => {setSwitchToGlossary(false); setSwitchToLiterature(false); setSwitchToMaterials(false); setSwitchToSkeleton(true)}}
                >

                    {!checkSwitches() &&
                    <EcoBreadCrumbs
                        themes={themes}
                        currentChapter={currentChapter}
                        currentTheme={(themes.indexOf(getCurrentTheme()) + 1)}
                        currentTitle={currentTitle}
                        setChapter={setChapter}
                    />
                    }
                </PageHeader>

                <hr/>

                <Content className='course_content'>
                    {purposely
                        ?
                        <div className="site-layout-background" style={{padding: 10, minHeight: 360}}>
                            {switchToGlossary
                                ? <Glossary setSwitchToGlossary={setSwitchToGlossary}/>
                                : switchToLiterature
                                    ? <Literature setSwitchToLiterature={setSwitchToLiterature}/>
                                    : switchToMaterials
                                        ? <Materials setSwitchToMaterials={setSwitchToMaterials}/>
                                        : switchToSkeleton
                                            ? <CourseSkeleton
                                                currentChapter={currentChapter}
                                                themes={themes}
                                                setCurrentPage={setCurrentPage}
                                                setSwitchToGlossary={setSwitchToGlossary}
                                                setSwitchToLiterature={setSwitchToLiterature}
                                                setSwitchToMaterials={setSwitchToMaterials}
                                                setSwitchToSkeleton={setSwitchToSkeleton}
                                                setSwitchToChapterTesting={setSwitchToChapterTesting}
                                                setChapterForTesting={setChapterForTesting}
                                                setChapter={setChapter}
                                            />
                                            : switchToChapterTesting
                                                ? <Test_Main
                                                    chapter={chapterForTesting}
                                                    setSwitchToChapterTesting={setSwitchToChapterTesting}
                                                />
                                                : (
                                                    currentPage
                                                )
                            }
                        </div>
                        : <Secret setPurposely={setPurposely}/>
                    }
                </Content>

                {checkSwitches()
                    ? void(0)
                    :
                    <Row className='eco-pagination-row'>
                        <Col span={20} offset={2}>
                            <div className='eco-pagination'>
                                <Button
                                    onClick={() => {
                                        if(currentPage===themes[0][0]) {
                                            changeChapter(false)
                                        } else {
                                            changePage(false);
                                        }
                                    }}
                                    icon={<LeftCircleTwoTone/>}
                                    className='eco-pagination-but eco-pagination-but-first'
                                    size="large"
                                    disabled={currentPage===themes[0][0] && currentChapter.id === 1}
                                >
                                    {currentPage===themes[0][0] ? 'Предыдущий раздел' : 'Назад'}
                                </Button>

                                {isLastPage() &&
                                <Button
                                    onClick={() => {
                                        setChapterForTesting(currentChapter.id);
                                        setSwitchToChapterTesting(true);
                                    }}
                                    icon={<KeyOutlined  style={{color: 'brown', fontSize: '18px'}}/>}
                                    className='eco-pagination-but eco-pagination-but-test'
                                    size="large"
                                >
                                    Проверь себя!
                                </Button>
                                }

                                <Button
                                    onClick={() => {
                                        if(isLastPage() && currentChapter.id === 3) {
                                            window.location.assign('https://umcmrg.ru/course/view.php?id=83&section=3');
                                        }
                                        else if(!isLastPage())
                                            changePage(true);
                                        else {
                                            changeChapter(true);
                                        }
                                    }}
                                    className={isLastPage() && currentChapter.id === 3 ? 'eco-pagination-but eco-pagination-but-final' : 'eco-pagination-but eco-pagination-but-last'}
                                    size="large"
                                >
                                    { isLastPage() && currentChapter.id === 3 ? <span><TrophyOutlined style={{fontSize: '1.2rem', color: 'darkorange'}}/> Итоговое тестирование</span>
                                        : isLastPage() ? <span>Следующий раздел&nbsp; <RightCircleTwoTone /></span>
                                            : <span>Далее&nbsp; <RightCircleTwoTone /></span> }
                                </Button>
                            </div>
                        </Col>
                    </Row>
                }

                <Footer style={{ textAlign: 'center' }}>НОЦ ООО «Газпром межрегионгаз инжиниринг», 2021.<span></span><span></span></Footer>
            </Layout>

        </Layout>
    );
};

export default EcoMain;