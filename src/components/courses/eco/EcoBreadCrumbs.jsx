import React from 'react';
import { Breadcrumb, Menu } from 'antd';
import {FirstChapter, SecondChapter, ThirdChapter} from "./nav/nav";

const EcoBreadCrumbs = ({themes, currentChapter, currentTheme, currentTitle, setChapter}) => {
    const chapterMenu = (
        <Menu>
            {currentChapter.id !== 1 &&
            <Menu.Item>
                <span onClick={() => {
                    const chap = new FirstChapter();
                    setChapter(chap, chap.themes[0][0], chap.titles[0][0]);
                }}>
                    Раздел 1
                </span>
            </Menu.Item>
            }
            {currentChapter.id !== 2 &&
            <Menu.Item>
                <span onClick={() => {
                    const chap = new SecondChapter();
                    setChapter(chap, chap.themes[0][0], chap.titles[0][0]);
                }}>
                    Раздел 2
                </span>
            </Menu.Item>
            }
            {currentChapter.id !== 3 &&
            <Menu.Item>
                <span onClick={() => {
                    const chap = new ThirdChapter();
                    setChapter(chap, chap.themes[0][0], chap.titles[0][0]);
                }}>
                    Раздел 3
                </span>
            </Menu.Item>
            }
        </Menu>
    );
    const themeMenu = (
        <Menu>
            {themes.map((theme, index) => {
                if(index + 1 !== currentTheme) {
                    return(
                        <Menu.Item  key={index+6}>
                            <span onClick={() => {
                                setChapter(currentChapter, currentChapter.themes[index][0], currentChapter.titles[index][0]);
                            }}>
                                Тема {index + 1}
                            </span>
                        </Menu.Item>
                    );}
            })}
        </Menu>
    );

    return (
        // <Breadcrumb className='eco-breadcrumb' style={{fontSize: '1rem', margin: '10px 0 0 20px'}}>
        <Breadcrumb className='eco-breadcrumb'>
            <Breadcrumb.Item overlay={chapterMenu}>
                <span>Раздел {currentChapter.id}</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={themeMenu}>
                <span>Тема {currentTheme}</span>
            </Breadcrumb.Item>
            {/*<Breadcrumb.Item>{currentTitle.slice(4, currentTitle.length)}</Breadcrumb.Item>*/}
            <Breadcrumb.Item>{currentTitle}</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default EcoBreadCrumbs;