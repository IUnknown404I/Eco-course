import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Button, Popover, Table} from 'antd';
import { BackTop } from 'antd';
import {CheckOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const Eco_Chap1_Theme1_11 = () => {
    const [showModalPerson, setShowModalPerson] = useState(false);
    const [showModalMust, setShowModalMust] = useState(false);
    const [showModalDec, setShowModalDec] = useState(false);

    const columns = [
        {
            title: <div style={{textAlign: 'center', fontSize: '1.3rem', color: 'white'}}>Кто обязан отчитываться</div>,
            dataIndex: 'must',
        },
        {
            title: <div style={{textAlign: 'center', fontSize: '1.3rem', color: 'white'}}>При условии</div>,
            className: 'column-money',
            dataIndex: 'condition',
        },
    ];
    const data = [
        {
            key: '1',
            must: <span>
                <Popover
                    color={"azure"}
                    overlayStyle={{maxWidth: '800px'}}
                    className='pop_text'
                    style={{maxWidth: '550px'}}
                    content={<span>Кроме лиц, ведущих деятельность на объектах IV категории, определённой в порядке, предусмотренном Постановлением Правительства РФ от 31.12.2020 № 3298.</span>}
                    title=''
                    trigger="hover">
                    Лица
                </Popover>, которые ведут деятельность в России или на приравненных к ней территориях
            </span>,
            condition: 'Выбросов загрязняющих веществ в атмосферный воздух стационарными источниками',
        },
        {
            key: '2',
            must: <span>
                <Popover
                    color={"azure"}
                    overlayStyle={{maxWidth: '800px'}}
                    className='pop_text'
                    style={{maxWidth: '550px'}}
                    content={<span>Вносят плату за негативку при размещении отходов.</span>}
                    title=''
                    trigger="hover">
                    Лица
                </Popover>, в результате деятельности которых образуются отходы
            </span>,
            condition: 'Сбросов загрязняющих веществ в составе сточных вод в водные объекты',
        },
        {
            key: '3',
            must: <span>
                Региональные операторы по обращению с твердыми коммунальными отходами,&nbsp;
                <Popover
                    color={"azure"}
                    overlayStyle={{maxWidth: '800px'}}
                    className='pop_text'
                    style={{maxWidth: '550px'}}
                    content={<span>Вносят плату за НВОС при размещении твердых коммунальных отходов.</span>}
                    title=''
                    trigger="hover">
                    операторы по обращению с твердыми коммунальными отходами, осуществляющие деятельность по их размещению
                </Popover>
            </span>,
            condition: 'Размещения отходов производства и потребления',
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>
                        Предоставление информации индивидуальными предпринимателями и юридическими лицами, осуществляющими деятельность в области обращения с отходами. Порядок представления отчетности организациями 3 категории по НВОС&nbsp;
                        <Popover
                            color={"azure"}
                            overlayStyle={{maxWidth: '800px'}}
                            className='pop_icon'
                            style={{maxWidth: '550px'}}
                            content={<span>Приказ Росстата от 09.10.2020 N 627 (ред. от 13.11.2020) "Об утверждении формы федерального статистического наблюдения с указаниями по ее заполнению для организации Федеральной службой по надзору в сфере природопользования федерального статистического наблюдения за отходами производства и потребления".</span>}
                            title=''
                            trigger="hover">
                            <InfoCircleTwoTone style={{fontSize: '22px'}} twoToneColor='mediumseagreen'/>
                        </Popover>
                    </strong></h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}} lg={{span: 20, offset: 2}} xl={{span: 12, offset: 1}} style={{marginBottom: '20px'}}>
                    <Table
                        style={{marginTop: '0'}}
                        className='coef_table'
                        columns={columns}
                        dataSource={data}
                        bordered
                        pagination={false}
                    />
                </Col>

                <Col sm={{span: 24, offset: 0}} md={{span: 22, offset: 1}} lg={{span: 18, offset: 3}} xl={{span: 9, offset: 1}} className='eco-flex-col flex-centered'>
                    <Button
                        style={{marginTop: '0'}}
                        block
                        className='mybut-primary'
                        onClick={() => setShowModalPerson(true)}
                    >
                        Лица, которые обязаны вносить плату
                    </Button>
                    <Button
                        block
                        className='mybut'
                        onClick={() => setShowModalMust(true)}
                    >
                        Обязаны вносить плату за НВОС
                    </Button>
                    <Button
                        block
                        className='mybut'
                        onClick={() => setShowModalDec(true)}
                    >
                        Декларация по НВОС
                    </Button>

                    <Image
                        src={'/svg/trash2.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        // style={{width: '100%', height: '40vh', maxWidth: '1100px', marginLeft: '30px'}}
                        style={{width: '100%', height: '35vh', maxWidth: '1100px', marginTop: '20px'}}
                    />
                </Col>
            </Row>

            <Draggable_Modal
                title='Лица, деятельность которых приводит к обязанности вносить плату'
                content={
                    <div style={{fontSize: '1.2rem'}}>
                        <h3 style={{fontSize: '1.3rem'}}><strong>Лица, деятельность которых приводит к обязанности вносить плату за негативное воздействие на окружающую среду, должны стоять на учете в Росприроднадзоре.</strong></h3>

                        <h3 style={{fontSize: '1.3rem'}}>
                            <strong>
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>В письме от 20 ноября 2020 г. № АА-03-02-32/40618.</span>}
                                    title=''
                                    trigger="hover">
                                    Роспотребнадзор отметил
                                </Popover>,
                            </strong> что&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>В соответствии с пунктом 1 статьи 16 закона № 7-Ф3.</span>}
                                title=''
                                trigger="hover">
                                плата за НВОС
                            </Popover> взимается за следующие его виды:
                        </h3>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp; выбросы загрязняющих веществ в атмосферный воздух стационарными источниками;
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сбросы загрязняющих веществ в водные объекты;
                        </div>
                        <div>
                            <CheckOutlined style={{color: 'green'}}/>&nbsp; хранение, захоронение отходов производства и потребления (размещения отходов).
                        </div>
                    </div>
                }
                show={showModalPerson}
                hide={setShowModalPerson}
            />
            <Draggable_Modal
                title='Обязаны вносить плату за НВОС'
                content={
                    <div style={{fontSize: '1.2rem'}}>
                        <h3 style={{fontSize: '1.3rem'}}><InfoCircleTwoTone/>&nbsp;&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Согласно пункту 1 статьи 16.1 Закона № 7-ФЗ.</span>}
                                title=''
                                trigger="hover">
                                Плату за НВОС обязаны вносить
                            </Popover> юридические лица и индивидуальные предприниматели, осуществляющие на территории Российской Федерации, континентальном шельфе Российской Федерации и в исключительной экономической зоне Российской Федерации хозяйственную и (или) иную деятельность,&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>За исключением юридических лиц и индивидуальных предпринимателей, осуществляющих хозяйственную и (или) иную деятельность исключительно на объектах IV категории.</span>}
                                title=''
                                trigger="hover">
                                оказывающую НВОС
                            </Popover>.
                        </h3>
                    </div>
                }
                show={showModalMust}
                hide={setShowModalMust}
            />
            <Draggable_Modal
                title='Декларация по НВОС'
                content={
                    <div style={{fontSize: '1.2rem'}}>
                        <h3 style={{fontSize: '1.3rem'}}><InfoCircleTwoTone/>&nbsp;&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>По условиям п.5 ст. 16.4 закона от 10.01.2002 № 7-ФЗ "Об охране окружающей среды".</span>}
                                title=''
                                trigger="hover">
                                Декларация предоставляется
                            </Popover> в уполномоченный&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>Росприроднадзор.</span>}
                                title=''
                                trigger="hover">
                                федеральный орган исполнительной власти
                            </Popover> по месту нахождения объекта, загрязняющего среду, не позднее 10 марта года, следующего за отчетным.
                        </h3>
                    </div>
                }
                show={showModalDec}
                hide={setShowModalDec}
            />
        </>
    );
};

export default Eco_Chap1_Theme1_11;