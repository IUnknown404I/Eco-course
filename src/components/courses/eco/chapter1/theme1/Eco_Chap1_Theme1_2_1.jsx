import React, {useState} from 'react';
import {Button, Col, Image, List, Popover, Row, Skeleton, Tree} from "antd";
import {ContainerTwoTone, CarryOutOutlined, DownOutlined} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const Eco_Chap1_Theme1_2_1 = () => {
    const data1 = [
        'приоритет охраны жизни и здоровья человека, настоящего и будущего поколений;',
        'обеспечение благоприятных экологических условий для жизни, труда и отдыха человека;',
        'недопущение необратимых последствий загрязнения атмосферного воздуха для окружающей среды;',
        'обязательность государственного регулирования выбросов загрязняющих веществ в атмосферный воздух и вредных физических воздействий на него;',
        'гласность, полнота и достоверность информации о состоянии атмосферного воздуха, его загрязнении;',
        'научная обоснованность, системность и комплексность подхода к охране атмосферного воздуха и охране окружающей среды в целом;',
        'обязательность соблюдения требований законодательства Российской Федерации в области охраны атмосферного воздуха, ответственность за нарушение данного законодательства.',
    ];
    const treeData = [
        {
            title: <strong>- предельно допустимые выбросы;</strong>,
            key: '0-0',
            icon: <DownOutlined/>,
            children: [
                {
                    title: (
                        <>
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '450px'}}
                                className='pop_text'
                                style={{maxWidth: '200px'}}
                                content={<span>При невозможности соблюдения предельно допустимых выбросов и (или) технологических нормативов выбросов для действующего стационарного источника и (или) совокупности действующих стационарных источников устанавливаются временно разрешенные выбросы на период поэтапного достижения предельно допустимых выбросов и (или) технологических нормативов выбросов.</span>}
                                title=''
                                trigger="hover">
                                Предельно допустимые выбросы определяются
                            </Popover>,
                            &nbsp;в отношении загрязняющих веществ, перечень которых устанавливается Правительством Российской Федерации для стационарного источника и (или) совокупности стационарных источников расчетным путем на основе нормативов качества атмосферного воздуха с учетом фонового уровня загрязнения атмосферного воздуха.
                        </>
                    ),
                    key: '0-0-0',
                    switcherIcon: <CarryOutOutlined style={{color: 'green', fontSize: '20px'}}/>,
                }
            ],
        },
        {
            title: <strong>- технологические нормативы выбросов;</strong>,
            key: '0-2',
            icon: <DownOutlined />,
            children: [
                {
                    title: 'Технологический норматив выброса устанавливается в соответствии с законодательством в области охраны окружающей среды.',
                    key: '0-2-0',
                    switcherIcon: <CarryOutOutlined style={{color: 'green', fontSize: '20px'}}/>,
                }
            ],
        },
        {
            title: <strong>- технические нормативы выбросов.</strong>,
            key: '0-3',
            icon: <DownOutlined />,
            children: [
                {
                    title: 'Для передвижных источников технические нормативы выбросов устанавливаются техническими регламентами, принимаемыми в соответствии с законодательством Российской Федерации о техническом регулировании.',
                    key: '0-3-0',
                    switcherIcon: <CarryOutOutlined style={{color: 'green', fontSize: '20px'}}/>,
                }
            ],
        },
        {
            title: <>- <strong>предельно допустимые нормативы</strong> вредных физических воздействий на атмосферный воздух;</>,
            key: '0-1',
            switcherIcon: <CarryOutOutlined style={{color: 'green', fontSize: '20px'}}/>,
        },
    ];

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Основные принципы государственного управления в области охраны атмосферного воздуха</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col lg={{span: 18, offset: 3}}  xl={{span: 8, offset: 0}} className='eco-flex-col flex-centered vertical-centered'>
                    <Image
                        className='eco-img'
                        src={'/gosup.jpg'}
                        preview={false}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />
                </Col>

                <Col lg={{span: 22, offset: 1}}  xl={{span: 15, offset: 0}}>
                    <div>
                        <List
                            className='eco-list-style-inv'
                            size="small"
                            bordered = {false}
                            header={
                                <div style={{fontSize: '22px', marginBottom: '10px'}}>
                                    <span>
                                        <strong style={{fontWeight: 'bold'}}>Государственное управление в области охраны атмосферного воздуха основывается</strong> на следующих принципах:
                                    </span>
                                </div>}
                            dataSource={data1}
                            renderItem={(item, index) => <List.Item className='eco-list-item-style'><span>{index + 1}</span>{item}</List.Item>}
                        />
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '50px'}}>
                <Col sm={{span: 24, offset: 0}}  md={{span: 24, offset: 0}}  lg={{span: 24, offset: 0}}  xl={{span: 22, offset: 1}} className='eco-flex-col flex-centered'>
                    <div className='eco-but-info'>
                        <Button
                            className='eco-but-inside eco-but-inside-hover'
                            onClick={() => {setShowModal(true)}}
                        >
                            <ContainerTwoTone twoToneColor='mediumseagreen'/> Категории объектов, оказывающих негативное воздействие на окружающую среду
                        </Button>
                    </div>
                </Col>
            </Row>

            <Draggable_Modal
                title='Нормативы выбросов загрязняющих веществ в атмосферный воздух и вредных физических воздействий на атмосферный воздух'
                content={
                    <>
                        <div className='' style={{marginTop: '-20px'}}>
                                         <span style={{fontSize: '20px'}}>
                                            <strong>В целях государственного регулирования выбросов загрязняющих веществ</strong> в атмосферный воздух устанавливаются:
                                        </span>

                            <Tree
                                className='eco-list-style-tree'
                                showLine = {true}
                                defaultExpandedKeys = {['0-0']}
                                treeData = {treeData}
                                switcherIcon={<DownOutlined style={{color: 'green', fontSize: '18px'}}/>}
                                icon={<CarryOutOutlined />}
                            />
                        </div>
                    </>
                }
                show={showModal}
                hide={setShowModal}
            />
        </>
    );
};

export default Eco_Chap1_Theme1_2_1;