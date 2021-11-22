import React from 'react';
import {Row, Col, Tabs, Skeleton, Image, Popover} from 'antd';
import { BackTop } from 'antd';
import {
    CheckCircleOutlined, CheckOutlined, ExclamationCircleOutlined
} from "@ant-design/icons";

const { TabPane } = Tabs;

const Eco_Chap3_Theme1_6 = () => {

    // setInterval(() => {
    //         if(document.querySelector('.ant-image-img').style.width < 308) {
    //             document.querySelector('#img-check-width').style.marginTop = "-340px";
    //         } else {
    //             document.querySelector('#img-check-width').style.marginTop = "initial";
    //         }
    //     }, 100);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Организация и проведение проверок</strong></h1>
                </Col>
            </Row>

            <Row>
                {/*xs={{span: 23, offset: 0}} sm={{span: 23, offset: 0}} md={{span: 23, offset: 0}} lg={{span: 23, offset: 0}}*/}
                <Col xl={{span: 24, offset: 0}} xxl={{span: 19, offset: 0}}>
                    <Tabs size='large' className='eco-tab-list eco-tabs-tab-adaptive-font-small' tabPosition={'left'} animated>
                        <TabPane tab={<div style={{opacity: '.75'}}>Организация и проведение плановой проверки</div>} key="1">
                            <>
                                <div className='eco-numeration text-centered flex-centered' style={{fontSize: '1.3rem'}}><CheckCircleOutlined style={{color: 'white', fontSize: '23px'}}/>&nbsp; Организация и проведение плановой проверки</div>
                                <div className='padding-15-30 eco-flex-col' style={{gap: '15px'}}>
                                    <div>
                                        <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Предметом плановой проверки является</strong> соблюдение совокупности предъявляемых обязательных требований и требований, установленных муниципальными правовыми актами, а также соответствие сведений, содержащихся в уведомлении о начале осуществления отдельных видов предпринимательской деятельности, обязательным требованиям.
                                    </div>
                                    <div>
                                        <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Отдельные виды государственного контроля (надзора)</strong> могут осуществляться без проведения плановых проверок.
                                    </div>
                                    <div>
                                        В случае, если деятельность юридического лица, индивидуального предпринимателя и (или) используемые ими производственные объекты отнесены к определенной категории риска, определенному классу (категории) опасности, <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>плановая проверка</strong> таких юридического лица, индивидуального предпринимателя <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>не проводится.</strong>
                                    </div>
                                    <div>
                                        Плановые проверки проводятся <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>не чаще чем один раз в три года.</strong>
                                    </div>
                                    <div>
                                        В отношении юридических лиц, индивидуальных предпринимателей, осуществляющих&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>В сфере здравоохранения, сфере образования, в социальной сфере, в сфере теплоснабжения, в сфере электроэнергетики, в сфере энергосбережения и повышения энергетической эффективности.</span>}
                                            title=''
                                            trigger="hover">
                                            определенные виды деятельности
                                        </Popover>  плановые проверки могут проводиться <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>два и более раза в три года.</strong>
                                    </div>
                                </div>
                            </>
                        </TabPane>
                        <TabPane tab={<div style={{opacity: '.75'}}>Организация и проведение внеплановой проверки</div>} key="2">
                            <>
                                <div className='eco-numeration text-centered flex-centered' style={{fontSize: '1.3rem'}}><CheckCircleOutlined style={{color: 'white', fontSize: '23px'}}/>&nbsp; Организация и проведение внеплановой проверки (выдержки)</div>
                                <div className='padding-15-30 eco-flex-col' style={{gap: '15px'}}>
                                    <div>
                                        <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Предметом внеплановой проверки является</strong>&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>Юридическим лицом, индивидуальным предпринимателем в процессе осуществления деятельности.</span>}
                                            title=''
                                            trigger="hover">
                                            соблюдение
                                        </Popover> обязательных требований и требований, установленных муниципальными правовыми актами,&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>Органов государственного контроля (надзора), органов муниципального контроля.</span>}
                                            title=''
                                            trigger="hover">
                                            выполнение предписаний
                                        </Popover>, проведение мероприятий по предотвращению причинения вреда жизни, здоровью граждан, вреда животным, растениям, окружающей среде,&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>Памятникам истории и культуры.</span>}
                                            title=''
                                            trigger="hover">
                                            объектам культурного наследия.
                                        </Popover>
                                    </div>
                                </div>
                            </>
                        </TabPane>
                        <TabPane tab={<div style={{opacity: '.75'}}>Документарная проверка</div>} key="3">
                            <>
                                <div className='eco-numeration text-centered flex-centered' style={{fontSize: '1.3rem'}}><CheckCircleOutlined style={{color: 'white', fontSize: '23px'}}/>&nbsp; Документарная проверка</div>
                                <div className='padding-15-30 eco-flex-col' style={{gap: '15px'}}>
                                    <div>
                                        <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Предметом документарной проверки являются</strong> сведения, содержащиеся в&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>Юридического лица, индивидуального предпринимателя.</span>}
                                            title=''
                                            trigger="hover">
                                            документах
                                        </Popover>, устанавливающих их организационно-правовую форму, права и обязанности, документы, используемые при осуществлении их деятельности и связанные с исполнением ими обязательных требований и требований, установленных муниципальными правовыми актами, исполнением предписаний и постановлений органов государственного&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>Надзора.</span>}
                                            title=''
                                            trigger="hover">
                                            контроля
                                        </Popover>, органов муниципального контроля.
                                    </div>
                                    <div>
                                        <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>В процессе проведения документарной проверки</strong> должностными лицами органа государственного контроля (надзора), органа муниципального контроля в первую очередь рассматриваются документы юридического лица, индивидуального предпринимателя, в том числе уведомления о начале осуществления отдельных видов предпринимательской деятельности.
                                    </div>
                                </div>
                            </>
                        </TabPane>
                        <TabPane tab={<div style={{opacity: '.75'}}>Выездная проверка</div>} key="4">
                            <>
                                <div className='eco-numeration text-centered flex-centered' style={{fontSize: '1.3rem'}}><CheckCircleOutlined style={{color: 'white', fontSize: '23px'}}/>&nbsp; Документарная проверка</div>
                                <div className='padding-15-30 eco-flex-col' style={{gap: '15px'}}>
                                    <div>
                                        <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Предметом выездной проверки являются</strong> содержащиеся в&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>Юридического лица, индивидуального предпринимателя.</span>}
                                            title=''
                                            trigger="hover">
                                            документах
                                        </Popover> сведения, а также соответствие их работников, состояние используемых указанными лицами при осуществлении деятельности территорий, зданий, строений, сооружений, помещений, оборудования, подобных объектов, транспортных средств, производимые и реализуемые&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>Выполняемая работа, предоставляемые услуги.</span>}
                                            title=''
                                            trigger="hover">
                                            товары
                                        </Popover> и принимаемые ими меры по исполнению обязательных требований и требований, установленных муниципальными правовыми актами.
                                    </div>
                                    <div>
                                        <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '800px'}}
                                                className='pop_text'
                                                style={{maxWidth: '550px'}}
                                                content={<span>Как плановая, так и внеплановая.</span>}
                                                title=''
                                                trigger="hover">
                                                Выездная проверка
                                            </Popover> проводится
                                        </strong> по месту нахождения юридического лица, месту осуществления деятельности индивидуального предпринимателя и (или) по месту фактического осуществления их деятельности.
                                    </div>
                                    <div>
                                        <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Выездная проверка проводится в случае, если при документарной проверке не представляется возможным:</strong>
                                        <div className='eco-flex-col' style={{padding: '5px 0 0 25px'}}>
                                            <div><CheckOutlined style={{color: 'green'}}/>&nbsp; удостовериться в полноте и достоверности сведений, содержащихся в уведомлении о начале осуществления отдельных видов предпринимательской деятельности и иных имеющихся в распоряжении органа государственного контроля (надзора), органа муниципального контроля документах юридического лица, индивидуального предпринимателя;</div>
                                            <div><CheckOutlined style={{color: 'green'}}/>&nbsp; оценить соответствие деятельности юридического лица, индивидуального предпринимателя обязательным требованиям или требованиям, установленным муниципальными правовыми актами, без проведения соответствующего мероприятия по контролю.</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </TabPane>
                        <TabPane tab={<div style={{opacity: '.75'}}>Срок проведения проверки</div>} key="5">
                            <>
                                <div className='eco-numeration text-centered flex-centered' style={{fontSize: '1.3rem'}}><CheckCircleOutlined style={{color: 'white', fontSize: '23px'}}/>&nbsp; Срок проведения проверки</div>
                                <div className='padding-15-30 eco-flex-col' style={{gap: '15px'}}>
                                    <div>
                                        <ExclamationCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Срок проведения каждой из проверок не может превышать двадцать рабочих дней.</strong>
                                    </div>
                                    <div>
                                        В отношении одного субъекта малого предпринимательства общий срок проведения плановых выездных проверок&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>В исключительных случаях срок проведения выездной плановой проверки может быть продлён не более чем на двадцать рабочих дней, в отношении малых предприятий - не более чем на пятьдесят часов, микропредприятий- не более чем на пятнадцать часов.</span>}
                                            title=''
                                            trigger="hover">
                                            товары
                                        </Popover> не может превышать пятьдесят часов для малого предприятия и пятнадцать часов для микропредприятия в год.
                                    </div>
                                    <div>
                                        Срок проведения проверок в отношении юридического лица, которое осуществляет свою деятельность на территориях нескольких субъектов Российской Федерации, устанавливается отдельно&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>При этом общий срок произведения проверки не может превышать шестьдесят рабочих дней.</span>}
                                            title=''
                                            trigger="hover">
                                            по каждому филиалу, представительству, обособленному структурному подразделению юридического лица.
                                        </Popover>
                                    </div>
                                </div>
                            </>
                        </TabPane>
                    </Tabs>
                </Col>

                {/*<Col xs={{span: 1, push: 24}} sm={{span: 1, push: 24}} md={{span: 1, push: 24}} lg={{span: 1, push: 24}} xl={{span: 1, push: 24}} xxl={{span: 5, offset: 0, push: 0}} className='eco-img-col'>*/}
                <Col xl={{span: 24}} xxl={{span: 5, offset: 0}} className='eco-img-col xxl-hidden'>
                    <Image
                        id='img-check-width'
                        src={'/svg/man2.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '70vh', maxWidth: '1100px'}}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap3_Theme1_6;