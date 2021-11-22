import React, {useState} from 'react';
import {Row, Col, Button, Image, Skeleton, Popover} from 'antd';
import { BackTop } from 'antd';
import {CheckOutlined, InfoCircleTwoTone} from "@ant-design/icons";

const Eco_Chap2_Theme4_7 = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>При обосновании лимитов на размещение отходов учитываются массы (объемы) отходов, планируемые:</strong>
                            </div>
                            <div className='eco-flex-col' style={{gap: '15px', padding: '0 0 0 25px', marginBottom: '15px'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; для размещения на объектах размещения отходов, находящихся в&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Владении, пользовании.</span>}
                                        title=''
                                        trigger="hover">
                                        собственности
                                    </Popover>, юридического лица или индивидуального предпринимателя;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; для передачи на размещение другим индивидуальным предпринимателям или юридическим лицам.
                                </div>
                            </div>
                            <div>
                                <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>В лимиты на размещение отходов не включаются:</strong>
                            </div>
                            <div className='eco-flex-col' style={{gap: '15px', padding: '0 0 0 25px', marginBottom: '15px'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Объём.</span>}
                                        title=''
                                        trigger="hover">
                                        масса
                                    </Popover> отходов, накопление которых осуществляется в целях их дальнейшей реализации и (или) обработки, утилизации, обезвреживания;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Объём.</span>}
                                        title=''
                                        trigger="hover">
                                        масса
                                    </Popover> вскрышных и вмещающих&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Используемых в соответствии с утверждённым в установленном порядке техническим проектом разработки месторождений полезных ископаемых для ликвидации горных выработок.</span>}
                                        title=''
                                        trigger="hover">
                                        горных пород
                                    </Popover>.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Нормативы образования отходов и лимиты на их размещение</strong> разрабатываются для каждого объекта&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>А в случае, предусмотренном пунктом 12 статьи 31.1 Федерального закона от 10 января 2002 г. № 7-Ф3 "Об охране окружающей среды" для объекта II категории.</span>}
                                    title=''
                                    trigger="hover">
                                    I категории
                                </Popover> в соответствии с&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Утверждённым Министерством природных ресурсов и экологии РФ.</span>}
                                    title=''
                                    trigger="hover">
                                    методическими указаниями
                                </Popover> по разработке нормативов образования отходов и лимитов на их размещение.
                            </div>
                            <div>
                                Нормативы образования отходов разрабатываются индивидуальными предпринимателями и юридическими лицами на основании расчетов и имеющихся данных об удельном&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>При производстве продукции, выполнении работ, оказании услуг, проектной документации.</span>}
                                    title=''
                                    trigger="hover">
                                    образовании отходов
                                </Popover>.
                            </div>
                            <div>
                                Нормативы образования отходов служат для определения ожидаемых количеств образующихся&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>С учётом планируемых объёмов производства продукции, выполняемых работ, оказания услуг.</span>}
                                    title=''
                                    trigger="hover">
                                    отходов конкретных видов
                                </Popover>.
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp;&nbsp;
                                <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Далее - Порядок.</span>}
                                        title=''
                                        trigger="hover">
                                        Порядок разработки и утверждения нормативов образования отходов и лимитов на их размещение
                                    </Popover> предназначен</strong> для юридических лиц и индивидуальных предпринимателей, осуществляющих хозяйственную и (или) иную деятельность&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>В случае, предусмотренным пунктом 12 статьи 31.1 Федерального закона от 10 января 2002 г. № 7-Ф3 "Об охране окружающей среды", и в соответствии с пунктом 2 статьи 18 Федерального закона от 24 июня 1998 г. № 89-Ф3 "Об отходах производства и потребления".</span>}
                                    title=''
                                    trigger="hover">
                                    на объектах I категории, а также на объектах II категории
                                </Popover> территориальных органов Федеральной службы по надзору в сфере природопользования и органов исполнительной власти субъекта Российской Федерации, осуществляющих государственный экологический надзор.
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Для объектов&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>А также в случае, предусмотренном пунктом 12 статьи 31.1 Федерального закона от 10 января 2002 г. № 7-Ф3 "Об охране окружающей среды" для объекта II категории.</span>}
                                    title=''
                                    trigger="hover">
                                    I категории
                                </Popover>,</strong> обоснование нормативов образования отходов производства и потребления и лимитов на их размещение включается в заявку на получение комплексного экологического разрешения форма которой утверждена приказом Минприроды России от 11 октября 2018 г. N 510 "Об утверждении формы заявки на получение комплексного экологического разрешения и формы комплексного экологического разрешения" с изменениями, внесенными приказом Минприроды России от 23 июня 2020 г. N 383.
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Нормативы образования отходов и лимиты на их размещение устанавливаются</strong> комплексным экологическим разрешением, выдаваемым территориальными органами Федеральной службы по надзору в сфере природопользования.
                            </div>
                            <div>
                                Нормативы образования отходов и лимиты на их размещение устанавливаются на период действия комплексного экологического разрешения и могут продлеваться на тот же срок в случае продления комплексного экологического разрешения.
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Внесение изменений в установленные нормативы образования отходов и лимиты на их размещение осуществляется</strong> путем пересмотра комплексного экологического разрешения в соответствии с Правилами рассмотрения заявок на получение комплексных экологических разрешений, выдачи, переоформления, пересмотра, отзыва комплексных экологических разрешений и внесения изменений в них, утвержденными постановлением Правительства Российской Федерации от 13 февраля 2019 г. N 143.
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Нормативы образования отходов и лимиты на их размещение утверждаются территориальными органами Федеральной службы по надзору в сфере природопользования.</strong>
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; Индивидуальные предприниматели и юридические лица, осуществляющие деятельность на объектах I категории, <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>представляют в территориальные органы Федеральной службы по надзору в сфере природопользования по месту размещения объекта:</strong>
                            </div>

                            <div style={{padding: '5px 0 0 10px'}}>
                                <div className='eco-flex-row flex-left'>
                                    <div className='eco-numeration-num' style={{fontSize: '2.5rem'}}>1</div>
                                    <strong style={{fontWeight: 'bold'}}>заявление об утверждении нормативов образования отходов и лимитов на их размещение с указанием следующих сведений (далее – заявление):</strong>
                                </div>

                                <div className='eco-flex-col' style={{gap: '15px', padding: '0 0 0 45px', marginBottom: '15px'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; наименование, организационно-правовая форма и адрес юридического лица или фамилия, имя, отчество, место жительства индивидуального предпринимателя;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; код объекта, оказывающего негативное воздействие на окружающую среду;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; вид основной деятельности, виды и объем производимой продукции (товара).
                                    </div>
                                </div>

                                <div className='eco-flex-row flex-left' style={{marginBottom: '0'}}>
                                    <div className='eco-numeration-num' style={{fontSize: '2.5rem'}}>2</div>
                                    <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>нормативы образования отходов и лимиты на их размещение.</strong>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Заявление и нормативы образования отходов и лимиты на их размещение</strong> принимаются территориальными органами Федеральной службы по надзору в сфере природопользования по описи.
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; В случае выявления неточностей и (или) неполноты сведений, содержащихся в заявлении и нормативах образования отходов и лимитах на их размещение, территориальные органы Федеральной службы по надзору в сфере природопользования <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>в течение 5 рабочих дней с даты их приема</strong> вручают индивидуальному предпринимателю или юридическому лицу <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>уведомление о необходимости устранения в течение 10 рабочих дней выявленных нарушений и (или) предоставления документов</strong> уведомление о необходимости устранения в течение 10 рабочих дней выявленных нарушений и (или) предоставления документов.
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Территориальные органы Федеральной службы по надзору в сфере природопользования</strong> принимают решение об утверждении нормативов образования отходов и лимитов на их размещение.
                            </div>

                            <div>
                                <strong style={{fontWeight: 'bold'}}>Основанием для отказа в утверждении нормативов образования отходов и лимитов на их размещение является:</strong>
                            </div>
                            <div className='eco-flex-col' style={{gap: '15px', padding: '0 0 0 25px', margin: '-10px 0 10px 0'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; наличие недостоверной информации, связанной с наличием арифметических или логических ошибок при заполнении форм, предусмотренных методическими указаниями;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; отсутствие объекта размещения отходов , в государственном реестре объектов размещения отходов и (или) в перечне объектов размещения твердых коммунальных отходов на территории субъекта Российской Федерации;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; превышение количества отходов, предлагаемого для размещения, над имеющейся вместимостью объекта размещения отходов.
                                </div>
                            </div>

                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Решение об утверждении нормативов</strong> образования отходов и лимитов на их размещение и утвержденные нормативы образования отходов и лимиты на их размещение <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>либо решение об отказе</strong> в их утверждении направляется (вручается) индивидуальному предпринимателю и юридическому лицу в течение 3 рабочих дней с даты принятия такого решения.
                            </div>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                            <div>
                                <InfoCircleTwoTone twoToneColor={'darkorange'} style={{fontSize: '24px'}}/>&nbsp; Нормативы образования отходов и лимиты на их размещение утверждаются <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>сроком не более чем на 5 лет</strong> и действуют до получения комплексного экологического заключения.
                            </div>
                        </Col>
                    </Row>
                </>,
        },
    ];

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>
                        <strong>Приказом Минприроды России от 08.12.2020 N 1029 "Об утверждении порядка разработки и утверждения нормативов образования отходов и лимитов на их размещение" определены основные положения выполнения требований 89-ФЗ:</strong>
                    </h1>
                </Col>
            </Row>

            <Row style={{marginTop: '40px'}}>
                <Col lg={{span: 22, offset: 1}} xl={{span: 11, offset: 0}}  className='eco-img-col flex-centered' style={{padding: '0 20px 0 0'}}>
                    <Image
                        src={'/svg/ecologyCycle1.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '50vh', maxWidth: '1100px'}}
                    />
                </Col>

                <Col lg={{span: 22, offset: 1}} xl={{span: 13, offset: 0}}>
                    <div className='eco-steps-interaction-container eco-inv-card' style={{marginBottom: '20px'}}>
                        <div className='eco-flex-row flex-left'><div className='eco-steps-current-num'>{current + 1}</div>из {steps.length}</div>
                        <div className="steps-content">{steps[current].content}</div>
                        <div className="steps-action-2 eco-steps-action-space">
                            {current > 0 && (
                                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                    Вернуться
                                </Button>
                            )}
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => next()}>
                                    Далее
                                </Button>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme4_7;