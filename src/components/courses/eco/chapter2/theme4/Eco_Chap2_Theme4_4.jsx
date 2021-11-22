import React, {useState} from 'react';
import {Row, Col, Image, Skeleton, Popover, Button, Divider} from 'antd';
import { BackTop } from 'antd';
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";
import {CheckOutlined, WarningTwoTone} from "@ant-design/icons";

const Eco_Chap2_Theme4_4 = () => {
    const [showModalTrash, setShowModalTrash] = useState(false);
    const [showModalClasses, setShowModalClasses] = useState(false);
    const [showModalMust, setShowModalMust] = useState(false);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Основные требования, предъявляемые к индивидуальным предпринимателям и юридическим лицам, осуществляющим деятельность в области обращения с отходами. Федеральный закон от 24.06.1998 N 89-ФЗ</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col lg={{span: 22, offset: 1}} xl={{span: 12, offset: 0}} className='eco-div-padding'>
                    <h1 className='eco-div-padding'><strong>Требования к эксплуатации</strong> зданий, сооружений и иных объектов, связанных с обращением с отходами:</h1>

                    <div className='eco-img-div-item extra padding-30' style={{marginTop: '10px'}}>
                        <Image
                            style={{width: '120px', marginRight: '25px', marginLeft: '0'}}
                            preview = {false}
                            src={'/svg/banned.svg'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span style={{fontSize: '1.3rem'}}>
                            <strong style={{fontWeight: 'bold'}}>Запрещается</strong> ввод в эксплуатацию зданий, сооружений и иных объектов, которые связаны с обращением с отходами и не оснащены техническими средствами и технологиями обезвреживания и безопасного размещения отходов.
                        </span>
                    </div>

                    {/*<div className='eco-img-col flex-centered'>*/}
                    {/*    <Image*/}
                    {/*        src={'/svg/trash1.svg'}*/}
                    {/*        preview={false}*/}
                    {/*        placeholder={ <Skeleton.Image /> }*/}
                    {/*        style={{width: '100%', height: '40vh', maxWidth: '1100px'}}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <h1 className='eco-div-padding'><strong>Отходы в зависимости от степени негативного воздействия на окружающую среду подразделяются:</strong></h1>

                    <div className='eco-flex-row flex-centered'>
                        <Row>
                            <Col className='eco-flex-col flex-centered'>
                                <div className='eco-numeration-num'>I</div>
                                <div className='eco-numeration-num'>II</div>
                                <div className='eco-numeration-num'>III</div>
                                <div className='eco-numeration-num'>IV</div>
                                <div className='eco-numeration-num'>V</div>
                            </Col>
                            <Col className='eco-flex-col flex-left' style={{justifyContent: 'space-around'}}>
                                <div className='eco-numeration-text' style={{fontSize: '1.35rem', width: '100%'}}>
                                    класс – чрезвычайно опасные отходы;
                                </div>
                                <div className='eco-numeration-text' style={{fontSize: '1.35rem', width: '100%'}}>
                                    класс – высокоопасные отходы;
                                </div>
                                <div className='eco-numeration-text' style={{fontSize: '1.35rem', width: '100%'}}>
                                    класс – умеренно опасные отходы;
                                </div>
                                <div className='eco-numeration-text' style={{fontSize: '1.35rem', width: '100%'}}>
                                    класс – малоопасные отходы;
                                </div>
                                <div className='eco-numeration-text' style={{fontSize: '1.35rem', width: '100%'}}>
                                    класс – практически неопасные отходы;
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col lg={{span: 22, offset: 1}} xl={{span: 12, offset: 0}} className='eco-div-padding'>
                    <h1 className='eco-div-padding'><strong>Обязанности юридических лиц и индивидуальных предпринимателей</strong> при эксплуатации зданий, сооружений и иных объектов, связанной с обращением с отходами:</h1>

                    <Button block className='mybut-primary' onClick={() => setShowModalMust(true)} style={{marginTop: '0'}}>Обязанности</Button>

                    <div className='eco-img-col flex-centered'>
                        <hr style={{width: '85%', margin: '20px 0'}}/>
                    </div>

                    <Button block className='mybut-primary' onClick={() => setShowModalTrash(true)} style={{marginTop: '0'}}>Отходы производства и потребления</Button>
                    <Button block className='mybut' onClick={() => setShowModalClasses(true)}>Классы опасности и паспорт отходов</Button>

                    <div className='eco-img-col flex-centered'>
                        <hr style={{width: '85%', margin: '20px 0'}}/>
                    </div>

                    {/*<h1 className='eco-div-padding'><strong>Отходы в зависимости от степени негативного воздействия на окружающую среду подразделяются:</strong></h1>*/}

                    {/*<div style={{padding: '0 30px'}}>*/}
                    {/*    <Row>*/}
                    {/*        <Col className='eco-flex-col flex-centered'>*/}
                    {/*            <div className='eco-numeration-num'>I</div>*/}
                    {/*            <div className='eco-numeration-num'>II</div>*/}
                    {/*            <div className='eco-numeration-num'>III</div>*/}
                    {/*            <div className='eco-numeration-num'>IV</div>*/}
                    {/*        </Col>*/}
                    {/*        <Col className='eco-flex-col flex-left' style={{justifyContent: 'space-around'}}>*/}
                    {/*            <div className='eco-numeration-text' style={{fontSize: '1.35rem'}}>*/}
                    {/*                класс – чрезвычайно опасные отходы;*/}
                    {/*            </div>*/}
                    {/*            <div className='eco-numeration-text' style={{fontSize: '1.35rem'}}>*/}
                    {/*                класс – чрезвычайно опасные отходы;*/}
                    {/*            </div>*/}
                    {/*            <div className='eco-numeration-text' style={{fontSize: '1.35rem'}}>*/}
                    {/*                класс – чрезвычайно опасные отходы;*/}
                    {/*            </div>*/}
                    {/*            <div className='eco-numeration-text' style={{fontSize: '1.35rem'}}>*/}
                    {/*                класс – чрезвычайно опасные отходы;*/}
                    {/*            </div>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</div>*/}

                    <div className='eco-img-col flex-centered'>
                        <Image
                            src={'/svg/trash1.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                            style={{width: '100%', height: '50vh', maxWidth: '1100px'}}
                        />
                    </div>
                </Col>
            </Row>

            <Draggable_Modal
                title='Отходы производства и потребления'
                content={
                    <>
                        <div className='eco-flex-row eco-img-col'>
                            <Image
                                style={{width: '120px', marginRight: '25px'}}
                                src={'/svg/warning.svg'}
                                preview={false}
                                placeholder={ <Skeleton.Image /> }
                            />
                            <span style={{fontSize: '1.2rem'}}>
                                <strong>Отходы производства и потребления могут являться</strong> опасными отходами, которые содержат вредные вещества, обладающие опасными свойствами (токсичностью, взрывоопасностью, пожароопасностью, высокой реакционной способностью) или содержащие возбудителей инфекционных болезней, либо которые могут представлять непосредственную или потенциальную опасность для окружающей среды и здоровья человека самостоятельно или при вступлении в контакт с другими веществами.
                            </span>
                        </div>
                    </>
                }
                show={showModalTrash}
                hide={setShowModalTrash}
            />
            <Draggable_Modal
                title='Классы опасности и паспорт отходов'
                content={
                    <>
                        <div className='eco-flex-row eco-img-col'>
                            <Image
                                style={{width: '120px', marginRight: '25px'}}
                                src={'/svg/data.svg'}
                                preview={false}
                                placeholder={ <Skeleton.Image /> }
                            />
                            <span style={{fontSize: '1.2rem'}}>
                                Индивидуальные предприниматели, юридические лица, в процессе деятельности которых образуются отходы I - V классов опасности, <strong>обязаны осуществить&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Подтверждение отнесения отходов I - V классов опасности к конкретному классу опасности осуществляется уполномоченным Правительством РФ федеральным органом исполнительной власти.</span>}
                                    title=''
                                    trigger="hover">
                                    отнесение соответствующих отходов к конкретному классу опасности.
                                </Popover></strong> На основании данных о составе отходов, оценки степени их негативного воздействия на окружающую среду составляется&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Порядок паспортизации отходов и типовые формы паспортов отходов устанавливаются уполномоченным Правительством РФ Федеральным органом исполнительной власти.</span>}
                                    title=''
                                    trigger="hover">
                                    паспорт отходов.
                                </Popover> I - IV классов опасности.
                            </span>
                        </div>
                    </>
                }
                show={showModalClasses}
                hide={setShowModalClasses}
            />
            <Draggable_Modal
                title='Обязанности юридических лиц и индивидуальных предпринимателей'
                content={
                    <>
                        <h3 style={{marginTop: '-15px'}}>
                            <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; <strong>Обязанности юридических лиц и индивидуальных предпринимателей при эксплуатации зданий, сооружений и иных объектов, связанной с обращением с отходами:</strong>
                        </h3>

                        <div className='eco-flex-col eco-div-padding' style={{gap: '15px', fontSize: '1.2rem'}}>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; соблюдать&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>И иные требования, установленные законодательством РФ в области обращения с отходами.</span>}
                                    title=''
                                    trigger="hover">
                                    требования, правила и нормы
                                </Popover> в области обращения с отходами;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; разрабатывать проекты&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>За исключением субъектов малого и среднего предпринимательства.</span>}
                                    title=''
                                    trigger="hover">
                                    нормативов образования отходов и лимитов на размещение отходов
                                </Popover> в целях уменьшения количества их образования;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; вносить плату за негативное воздействие на окружающую среду при размещении отходов;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; соблюдать требования при обращении с группами однородных отходов;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; внедрять малоотходные технологии и на основе новейших научно-технических достижений, а также внедрять наилучшие доступные технологии;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; проводить мониторинг состояния окружающей среды на территориях объектов размещения отходов;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; предоставлять в установленном порядке необходимую информацию в области обращения с отходами;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; соблюдать требования по предупреждению аварий, связанных с обращением с отходами, и принимать неотложные меры по их ликвидации;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; разрабатывать планы мероприятий по предупреждению и ликвидации чрезмерных ситуаций техногенного характера, связанных с обращением с отходами, планы ликвидации последствия этих чрезвычайных ситуаций;
                            </div>
                            <div>
                                <CheckOutlined style={{color: 'green'}}/>&nbsp; в случае возникновения или угрозы аварий, связанных с обращением с отходами, немедленно информировать об этом соответствующие федеральные органы исполнительной власти в области обращения с отходами, органы исполнительной власти субъектов РФ, органы местного самоуправления;
                            </div>
                        </div>
                    </>
                }
                show={showModalMust}
                hide={setShowModalMust}
            />
        </>
    );
};

export default Eco_Chap2_Theme4_4;