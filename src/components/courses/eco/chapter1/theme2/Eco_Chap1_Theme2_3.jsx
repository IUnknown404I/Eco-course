import React, {useState} from 'react';
import {Row, Col, Popover, Table, Steps, Button, Collapse} from 'antd';
import { BackTop } from 'antd';
import {BookTwoTone, CheckOutlined, InfoCircleTwoTone, WarningTwoTone} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { Step } = Steps;
const { Panel } = Collapse;

const Eco_Chap1_Theme2_3 = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const columns = [
        {
            title: <div style={{textAlign: 'center', fontSize: '1.3rem', color: 'white'}}>Коэффициент</div>,
            dataIndex: 'coef',
        },
        {
            title: <div style={{textAlign: 'center', fontSize: '1.3rem', color: 'white'}}>Условие</div>,
            dataIndex: 'condition',
        },
    ];
    const data1 = [
        {
            key: '1',
            coef: <strong>
                0
            </strong>,
            condition: 'При размещении отходов V класса опасности добывающей промышленности посредством закладки искусственно созданных полостей в горных породах при рекультивации земель и почвенного покрова (в соответствии с разделом проектной документации «Перечень мероприятий по охране окружающей среды» и (или) техническим проектом разработки месторождения полезных ископаемых)',
        },
        {
            key: '2',
            coef: <strong>
                0,3
            </strong>,
            condition: 'При размещении отходов производства и потребления, которые образовались в собственном производстве, в пределах установленных лимитов на их размещение на объектах размещения отходов, принадлежащих юридическому лицу или индивидуальному предпринимателю на праве собственности либо ином законном основании и оборудованных в соответствии с установленными требованиями',
        },
        {
            key: '3',
            coef: <strong>
                0,5
            </strong>,
            condition: 'При размещении отходов IV, V классов опасности, которые образовались при утилизации ранее размещенных отходов перерабатывающей и добывающей промышленности',
        },
        {
            key: '4',
            coef: <strong>
                0,67
            </strong>,
            condition: 'При размещении отходов III класса опасности, которые образовались в процессе обезвреживания отходов II класса опасности',
        },
        {
            key: '5',
            coef: <strong>
                0,49
            </strong>,
            condition: 'При размещении отходов IV класса опасности, которые образовались в процессе обезвреживания отходов III класса опасности',
        },
        {
            key: '6',
            coef: <strong>
                0,33
            </strong>,
            condition: 'При размещении отходов IV класса опасности, которые образовались в процессе обезвреживания отходов II класса опасности',
        },
    ];
    const data2 = [
        {
            key: '1',
            coef: <strong>
                0
            </strong>,
            condition: 'За объем или массу отходов производства и потребления, подлежащих накоплению и фактически использованных с момента образования в собственном производстве в соответствии с технологическим регламентом или переданных для использования в течение срока, предусмотренного законодательством Российской Федерации в области обращения с отходами',
        },
        {
            key: '2',
            coef: <strong>
                1
            </strong>,
            condition: 'За объем или массу отходов производства и потребления, размещенных в пределах лимитов на их размещение, а также в соответствии с отчетностью об образовании, использовании, обезвреживании и о размещении отходов производства и потребления, представляемой в соответствии с законодательством Российской Федерации в области обращения с отходами',
        },
        {
            key: '3',
            coef: <strong>
                25
            </strong>,
            condition: 'За объем или массу отходов производства и потребления, размещенных с превышением установленных лимитов на их размещение либо указанных в декларации о воздействии на окружающую среду, а также в отчетности об образовании, использовании, обезвреживании и о размещении отходов производства и потребления, представляемой в соответствии с законодательством Российской Федерации в области обращения с отходами',
        },
    ];

    const steps = [
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp;&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>Размещение.</span>}
                                    title=''
                                    trigger="hover">
                                    Хранение, захоронение
                                </Popover> отходов производства и потребления относится к видам негативного воздействия на окружающую среду и&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>В соответствии с ФЗ "Об охране окружающей среды" и ФЗ "Об отходах производства и потребления".</span>}
                                    title=''
                                    trigger="hover">
                                    является платным
                                </Popover>.
                            </h3>
                            <h3>
                                <strong>Кроме Федеральных законов «Об охране окружающей среды» и «Об отходах производства и потребления» внесение платы за размещение отходов регламентируют:</strong>
                            </h3>

                            <div className='eco-flex-col' style={{gap: '15px', fontSize: '1.3rem'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;  Постановление Правительства РФ от 13.09.2016 № 913 «О ставках платы за негативное воздействие на окружающую среду и дополнительных коэффициентах»;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; Постановление Правительства РФ от 03.03.2017 № 255 «Об исчислении и взимании платы за негативное воздействие на окружающую среду»;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; Постановление Правительства Российской Федерации от 29.06.2018 № 758 «О ставках платы за негативное воздействие на окружающую среду при размещении твердых коммунальных отходов IV класса опасности (малоопасные) и внесении изменений в некоторые акты Правительства Российской Федерации».
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
                    <Row className='eco-inv-card'>
                        <Col lg={{span: 24, offset: 0}} xl={{span: 10, offset: 0}} style={{padding: '15px 20px'}}>
                            <h3>
                                <WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; За образование, накопление, сбор, транспортировку, обработку, утилизацию, обезвреживание отходов&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>Однако если в ходе операций по обращению с отходами происходит загрязнение атмосферного воздуха, поверхностных вод, то вносится плата за негативное воздействие на окружающую среду в части выбросов и сбросов загрязняющих веществ в окружающую среду.</span>}
                                    title=''
                                    trigger="hover">
                                    плата за негативное воздействие на окружающую среду не вносится
                                </Popover>.
                            </h3>

                            <h3>
                                <strong>
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>В соответствии с постановлением Правительства РФ от 03.03.2017 № 255 «Об исчислении и взимании платы за негативное воздействие на окружающую среду».</span>}
                                        title=''
                                        trigger="hover">
                                        Виды базовых нормативов платы
                                    </Popover>:
                                </strong>
                            </h3>
                            <div className='eco-flex-col padding-15-30' style={{gap: '10px', fontSize: '1.3rem', margin: '-25px 0 0px'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; в пределах допустимых нормативов;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; в пределах&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '800px'}}
                                        className='pop_text'
                                        style={{maxWidth: '550px'}}
                                        content={<span>Временно согласованных нормативов.</span>}
                                        title=''
                                        trigger="hover">
                                        установленных лимитов
                                    </Popover>.
                                </div>
                            </div>

                            <h3>
                                <strong>Внесение платы за негативное воздействие на окружающую среду</strong> при размещении&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>За исключением ТКО.</span>}
                                    title=''
                                    trigger="hover">
                                    отходов
                                </Popover> осуществляется индивидуальными предпринимателями, юридическими лицами, в процессе осуществления которыми хозяйственной и (или) иной деятельности образуются отходы.
                            </h3>
                            <h3>
                                <strong>Плательщиками платы за негативное воздействие на окружающую среду</strong> при размещении ТКО являются операторы по обращению с ТКО, региональные операторы, осуществляющие деятельность по их размещению;
                            </h3>
                        </Col>

                        <Col lg={{span: 24, offset: 0}} xl={{span: 14, offset: 0}} style={{padding: '15px 20px'}}>
                            <h3>
                                <InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong>При размещении отходов</strong> на объектах размещения отходов, которые не оказывают негативное воздействие на окружающую среду, плата за негативное воздействие на окружающую среду не взимается.
                            </h3>
                            <h3>
                                <InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong>Исключение негативного воздействия на окружающую среду</strong> объектов размещения отходов достигается за счет осуществления природоохранных мероприятий, наличия технических решений и сооружений, обеспечивающих защиту окружающей среды, и подтверждается результатами мониторинга состояния окружающей среды, в том числе соблюдением нормативов предельно допустимых концентраций химических веществ.
                            </h3>
                            <h3>
                                <InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong>В случае накопления отходов</strong> в целях утилизации или обезвреживания в течение одиннадцати месяцев со дня образования этих отходов плата за их размещение не взимается.
                            </h3>
                            <h3>
                                <InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong>Расходы на плату за негативное воздействие на окружающую среду при размещении ТКО</strong> учитываются при установлении тарифов для оператора по обращению с ТКО, регионального оператора в порядке, установленном основами ценообразования в сфере обращения с ТКО.
                            </h3>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row className='eco-inv-card'>
                        <Col lg={{span: 24, offset: 0}} xl={{span: 13, offset: 0}} style={{padding: '15px 20px'}}>
                            <h3>
                                <InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong>Обоснованием исключения негативного воздействия на окружающую среду объектов размещения отходов являются данные инструментальных измерений о соблюдении нормативов качества окружающей среды:</strong>
                            </h3>
                            <div className='eco-flex-col padding-15-30' style={{gap: '10px', fontSize: '1.3rem', margin: '-25px 0 0px'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;  для атмосферного воздуха и почв − на границе земельного участка, на котором расположен ОРО;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; для поверхностных водных объектов − в месте выпуска сточных вод, поступающих с ОРО в водный объект;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; для подземных водных объектов − на границе земельного участка, на котором расположен ОРО, по направлению течении подземных вод.
                                </div>
                            </div>

                            <h3>
                                <strong>Базовые нормативы платы устанавливаются</strong> по каждому ингредиенту&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '800px'}}
                                    className='pop_text'
                                    style={{maxWidth: '550px'}}
                                    content={<span>Отхода.</span>}
                                    title=''
                                    trigger="hover">
                                    загрязняющего вещества
                                </Popover>, виду вредного воздействия с учетом степени опасности их для окружающей природной среды и здоровья населения. Дифференцированные ставки платы определяются умножением базовых нормативов платы на коэффициенты, учитывающие экологические факторы.
                            </h3>
                        </Col>

                        <Col lg={{span: 24, offset: 0}} xl={{span: 11, offset: 0}} style={{padding: '15px 20px'}}>
                            <Collapse
                                className='mycollapse'
                                defaultActiveKey={3}
                                expandIconPosition='right'
                                accordion
                            >
                                <Panel header={<span>Сгорание отходов</span>} key="1" className='eco-panel-style' showArrow>
                                    <div className='divChildren-margin-bottom-15' style={{fontSize: '1.25rem'}}>
                                        <strong style={{fontWeight: 'bold'}}>Сгорание отходов рассматривается как аварийный выброс загрязняющих веществ в атмосферу,</strong> вследствие чего применяется десятикратный тариф к&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '800px'}}
                                            className='pop_text'
                                            style={{maxWidth: '550px'}}
                                            content={<span>Установленный действующим порядком применения нормативов платы за загрязнение природной среды на территории РФ.</span>}
                                            title=''
                                            trigger="hover">
                                            нормативам платы за допустимые выбросы загрязняющих веществ
                                        </Popover>. Порядок расчета норматива платы за сгорание ТБО на полигонах устанавливают «Временные рекомендации по расчету выбросов вредных веществ в атмосферу в результате сгорания на полигонах ТБО и размера предъявляемого иска за загрязнение атмосферного воздуха».
                                    </div>
                                </Panel>
                                <Panel header={<span>Коэффициенты стимулирования юридических лиц и индивидуальных предпринимателей</span>} key="2" className='eco-panel-style' showArrow>
                                    <div className='divChildren-margin-bottom-15' style={{fontSize: '1.25rem'}}>
                                        <strong style={{fontWeight: 'bold'}}>В целях стимулирования юридических лиц и индивидуальных предпринимателей,</strong> осуществляющих хозяйственную и (или) иную деятельность, к проведению мероприятий по снижению негативного воздействия на окружающую среду и внедрению наилучших доступных технологий при исчислении платы за негативное воздействие на окружающую среду к ставкам такой платы применяются следующие коэффициенты:

                                        <Button
                                            className='mybut-primary'
                                            style={{width: '100%', marginTop: '10px'}}
                                            onClick={() => setShowModal1(true)}
                                        >
                                            <BookTwoTone twoToneColor='mediumseagreen'/> Коэффициенты стимулирования
                                        </Button>
                                    </div>
                                </Panel>
                                <Panel header={<span>Коэффициенты стимулирования юридических лиц и индивидуальных предпринимателей с 1 января 2020 года</span>} key="3" className='eco-panel-style' showArrow>
                                    <div className='divChildren-margin-bottom-15' style={{fontSize: '1.25rem'}}>
                                        <strong style={{fontWeight: 'bold'}}>С 1 января 2020 года в целях стимулирования юридических лиц и индивидуальных предпринимателей,</strong> осуществляющих хозяйственную и (или) иную деятельность, к проведению мероприятий по снижению негативного воздействия на окружающую среду и внедрению наилучших доступных технологий при исчислении платы за негативное воздействие на окружающую среду к ставкам такой платы применяются следующие дополнительные коэффициенты:

                                        <Button
                                            className='mybut-primary'
                                            style={{width: '100%', marginTop: '10px'}}
                                            onClick={() => setShowModal2(true)}
                                        >
                                            <BookTwoTone twoToneColor='mediumseagreen'/> Коэффициенты стимулирования
                                        </Button>
                                    </div>
                                </Panel>
                            </Collapse>
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
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>
                        Негативное воздействие на окружающую среду при размещении отходов
                    </strong></h1>
                </Col>
            </Row>

            <Row style={{marginTop: '-30px'}}>
                <Col offset={0} span={24} className='padding-30' style={{fontSize: '1.35rem'}}>
                    <div className='eco-steps-interaction-container eco-inv-card eco-container-left-border' style={{marginBottom: '20px'}}>
                        <Steps current={current} className='eco-steps-interaction'>
                            {steps.map((item, index) => (
                                <Step key={index} title={item.title} onClick={(event) => {setCurrent(index)}}/>
                            ))}
                        </Steps>
                        <div className="steps-content">{steps[current].content}</div>
                        <div className="steps-action">
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

            <Draggable_Modal
                title='Коэффициенты стимулирования'
                content={
                    <>
                        <Table
                            style={{marginTop: '-15px'}}
                            className='coef_table'
                            columns={columns}
                            dataSource={data1}
                            bordered
                            pagination={{pageSize: 3, position: ['bottomCenter']}}
                        />
                    </>
                }
                show={showModal1}
                hide={setShowModal1}
            />

            <Draggable_Modal
                title='Коэффициенты стимулирования с 1 января 2020 года'
                content={
                    <>
                        <Table
                            style={{marginTop: '-15px'}}
                            className='coef_table'
                            columns={columns}
                            dataSource={data2}
                            bordered
                            pagination={false}
                        />
                    </>
                }
                show={showModal2}
                hide={setShowModal2}
            />
        </>
    );
};

export default Eco_Chap1_Theme2_3;