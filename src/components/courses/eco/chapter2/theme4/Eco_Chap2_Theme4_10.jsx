import React, {useState} from 'react';
import {Row, Col, Popover, Steps, Button} from 'antd';
import { BackTop } from 'antd';
import {CheckOutlined, InfoCircleTwoTone, PlusOutlined, WarningTwoTone} from "@ant-design/icons";

const { Step } = Steps;

const Eco_Chap2_Theme4_10 = () => {
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
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; НООЛР, разрабатываемые применительно к объектам НВОС I категории, содержат:</strong>
                            </h3>

                            <Row>
                                <Col md={{span: 22, offset: 1}} lg={{span: 12, offset: 0}} className='padding-15-30' style={{fontSize: '1.3rem'}}>
                                    <div className='eco-flex-col' style={{gap: '15px'}}>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; титульный лист;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; содержание НООЛР;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; общие сведения о юридическом лице, индивидуальном предпринимателе;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о хозяйственной и иной деятельности;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения об образуемых отходах;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; обоснование нормативов образования отходов;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; обоснование нормативов образования отходов;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; расчет максимального образования отходов за год;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; обоснование запрашиваемых лимитов на размещение отходов, включающее;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о местах (площадках) накопления отходов;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о планируемой&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '600px'}}
                                                className='pop_text'
                                                style={{maxWidth: '200px'}}
                                                content={<span>И (или) утилизации, и (или) обезвреживании отходов.</span>}
                                                title=''
                                                trigger="hover">
                                                ежегодной обработке
                                            </Popover>;
                                        </div>
                                    </div>
                                </Col>
                                <Col md={{span: 22, offset: 1}} lg={{span: 12, offset: 0}} className='padding-15-30' style={{fontSize: '1.3rem'}}>
                                    <div className='eco-flex-col' style={{gap: '15px'}}>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о планируемой ежегодной передаче отходов другим хозяйствующим субъектам с целью их дальнейшей&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '600px'}}
                                                className='pop_text'
                                                style={{maxWidth: '200px'}}
                                                content={<span>И (или) утилизации, и (или) обезвреживании отходов.</span>}
                                                title=''
                                                trigger="hover">
                                                обработки
                                            </Popover>;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о планируемом ежегодном приеме отходов от других хозяйствующих субъектов с целью их дальнейшей&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '600px'}}
                                                className='pop_text'
                                                style={{maxWidth: '200px'}}
                                                content={<span>И (или) утилизации, и (или) обезвреживании отходов.</span>}
                                                title=''
                                                trigger="hover">
                                                обработки
                                            </Popover>;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о планируемом ежегодном размещении отходов,&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '600px'}}
                                                className='pop_text'
                                                style={{maxWidth: '200px'}}
                                                content={<span>На самостоятельно эксплуатируемых (собственных) объектах размещения отходов.</span>}
                                                title=''
                                                trigger="hover">
                                                принятых от других хозяйствующих субъектов
                                            </Popover>;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о планируемой ежегодной передаче отходов,&nbsp;
                                            <Popover
                                                color={"azure"}
                                                overlayStyle={{maxWidth: '600px'}}
                                                className='pop_text'
                                                style={{maxWidth: '200px'}}
                                                content={<span>С целью их дальнейшего размещения.</span>}
                                                title=''
                                                trigger="hover">
                                                ругим хозяйствующим субъектам
                                            </Popover>;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сводные данные по образованию отходов и запрашиваемым лимитам на их размещение;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; список использованных источников;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; приложения;
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; НООЛР, разрабатываемые применительно к объектам НВОС II категории, содержат:</strong>
                            </h3>

                            <Row>
                                <Col md={{span: 20, offset: 2}} lg={{span: 12, offset: 0}} className='padding-15-30' style={{fontSize: '1.3rem'}}>
                                    <div className='eco-flex-col' style={{gap: '15px'}}>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; титульный лист;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; содержание НООЛР;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; общие сведения о юридическом лице, индивидуальном предпринимателе;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; обоснование массы или объема планируемых на размещение отходов, включающее:

                                            <div className='eco-flex-col' style={{padding: '10px 0 0 35px', gap: '10px'}}>
                                                <div>
                                                    <PlusOutlined style={{color: 'green'}}/>&nbsp; сведения о местах (площадках) накопления отходов;
                                                </div>
                                                <div>
                                                    <PlusOutlined style={{color: 'green'}}/>&nbsp; сведения о планируемой&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '600px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '200px'}}
                                                        content={<span>И (или) утилизации, и (или) обезвреживании отходов.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        ежегодной обработке
                                                    </Popover>;
                                                </div>
                                                <div>
                                                    <PlusOutlined style={{color: 'green'}}/>&nbsp; сведения о планируемой ежегодной передаче отходов другим хозяйствующим субъектам с целью их дальнейшей&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '600px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '200px'}}
                                                        content={<span>И (или) утилизации, и (или) обезвреживании отходов.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        ежегодной обработке
                                                    </Popover>;
                                                </div>
                                                <div>
                                                    <PlusOutlined style={{color: 'green'}}/>&nbsp; сведения о планируемом ежегодном приеме отходов от других хозяйствующих субъектов с целью их дальнейшей&nbsp;
                                                    <Popover
                                                        color={"azure"}
                                                        overlayStyle={{maxWidth: '600px'}}
                                                        className='pop_text'
                                                        style={{maxWidth: '200px'}}
                                                        content={<span>И (или) утилизации, и (или) обезвреживании отходов.</span>}
                                                        title=''
                                                        trigger="hover">
                                                        ежегодной обработке
                                                    </Popover>;
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={{span: 20, offset: 2}} lg={{span: 12, offset: 0}} className='padding-15-30' style={{fontSize: '1.3rem'}}>
                                    <div className='eco-flex-col' style={{gap: '15px'}}>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения о хозяйственной и иной деятельности;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сведения об образуемых отходах;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; обоснование нормативов образования отходов;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; расчет максимального образования отходов за год;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; обоснование массы или объема планируемых к размещению отходов на самостоятельно эксплуатируемых (собственных) объектах размещения отходов;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; обоснование массы или объема планируемых к ежегодной передаче отходов другим хозяйствующим субъектам с целью их дальнейшего размещения;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; сводные данные по образованию отходов;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; список использованных источников;
                                        </div>
                                        <div>
                                            <CheckOutlined style={{color: 'green'}}/>&nbsp; приложения;
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; В разделе "Общие сведения о юридическом лице, индивидуальном предпринимателе" НООЛР для объектов НВОС I и II категорий содержатся:</strong>
                            </h3>

                            <div className='eco-flex-col' style={{gap: '15px', fontSize: '1.3rem'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>В том числе фирменное наименование.</span>}
                                        title=''
                                        trigger="hover">
                                        полное и сокращенное наименование
                                    </Popover>, организационно-правовая форма юридического лица, место его нахождения, государственный регистрационный номер записи о создании&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>И данные документа, подтверждающего факт внесения записи о юридическом лице в Единый государственный реестр юридических лиц - для юридического лица.</span>}
                                        title=''
                                        trigger="hover">
                                        юридического лица
                                    </Popover>;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; фамилия, имя и отчество индивидуального предпринимателя, место его жительства, данные документа, удостоверяющего его личность, государственный регистрационный номер записи о государственной регистрации в качестве&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>И данные документа, подтверждающего факт внесения записи о юридическом лице в Единый государственный реестр юридических лиц - для юридического лица.</span>}
                                        title=''
                                        trigger="hover">
                                        индивидуального предпринимателя
                                    </Popover>;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; идентификационный номер налогоплательщика;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; коды по&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Общероссийскому классификатору организационно-правовых форм.</span>}
                                        title=''
                                        trigger="hover">
                                        ОКОПФ
                                    </Popover>,&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Общероссийскому классификатору основных фондов.</span>}
                                        title=''
                                        trigger="hover">
                                        ОКОФ
                                    </Popover>,&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Общероссийскому классификатору видов экономической деятельности.</span>}
                                        title=''
                                        trigger="hover">
                                        ОКВЭД
                                    </Popover>,&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Общероссийскому классификатору территорий муниципальных образований.</span>}
                                        title=''
                                        trigger="hover">
                                        ОКТМО
                                    </Popover>;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; вид основной хозяйственной и иной деятельности;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; номера телефонов,&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>При наличии.</span>}
                                        title=''
                                        trigger="hover">
                                        телефакса
                                    </Popover>;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>При наличии.</span>}
                                        title=''
                                        trigger="hover">
                                        адрес электронной почты
                                    </Popover>;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; фамилии и инициалы руководителя юридического лица и лиц,&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>С указанием должностей.</span>}
                                        title=''
                                        trigger="hover">
                                        ответственных за обращение с отходами
                                    </Popover>;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; перечень&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Основных и вспомогательных цехов, участков и других объектов, в том числе объектов размещения отходов.</span>}
                                        title=''
                                        trigger="hover">
                                        структурных подразделений
                                    </Popover>, входящих в состав объекта НВОС, в результате хозяйственной и иной деятельности которых образуются отходы;
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
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; В разделе "Сведения о хозяйственной и иной деятельности" НООЛР для объектов НВОС I и II категорий в текстовой форме приводится краткая характеристика и показатели хозяйственной и иной деятельности объекта НВОС, в процессе которой образуются отходы.</strong>
                            </h3>
                            <h3>
                                По каждому структурному подразделению, входящему в состав объекта НВОС, информация по которым включена в НООЛР, представляются блок-схемы технологических процессов, включающие в виде отдельных блоков:
                            </h3>

                            <div className='eco-flex-col' style={{gap: '15px', fontSize: '1.3rem'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; используемые сырье, материалы, полуфабрикаты;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; производственные операции (без детализации производственных процессов);
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; производимую продукцию (оказываемые услуги, выполняемые работы);
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; образующиеся отходы;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; операции по обращению с отходами включающие их сбор, накопление, обработку, утилизацию, обезвреживание, размещение, а также по передаче отходов другим структурным подразделениям или другим хозяйствующим субъектам.
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
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; В разделе "Расчет максимального образования отходов за год" НООЛР для объектов НВОС I и II категорий приводятся расчеты годового образовании отходов за каждый год периода действия НООЛР.</strong>
                            </h3>
                            <h3>
                                Расчеты годового образования отходов для каждого вида отхода оформляются в отдельном подразделе НООЛР. Расчеты проводятся с использованием соответствующего норматива образования отходов и плановых показателей производства продукции, выполнения работ, оказания услуг. В подразделе приводятся расчеты&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Если вид отзодов образуется в разных подразделениях.</span>}
                                    title=''
                                    trigger="hover">
                                    по каждому структурному подразделению объекта НВОС
                                </Popover> и по объектам НВОС в целом.
                            </h3>
                            <h3>
                                По результатам произведенных расчетов для каждого вида отходов определяется максимальное значение годового количества образования отходов по объекту НВОС. В конце раздела представляются сводные данные о нормативах образования отходов и максимальном годовом количестве образования отходов по объекту НВОС в целом.
                            </h3>
                            <h3>
                                <InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; Указываются наименование&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>В соответствии с Порядком ведения государственного кадастра отходов, утверждённым приказом Министерства природных ресурсов и экологии РФ от 30 сентября 2011 г. № 792.</span>}
                                    title=''
                                    trigger="hover">
                                    вида отхода и код
                                </Popover> по федеральному классификационному каталогу отходов, формируемому Росприроднадзором.
                            </h3>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; В подразделе "Сведения о планируемом размещении отходов на самостоятельно эксплуатируемых (собственных) объектах размещения отходов" приводится обоснование планируемого ежегодного размещения отходов на самостоятельно эксплуатируемых (собственных) объектах размещения отходов.</strong>
                            </h3>
                            <h3>
                                В обосновании используются результаты инвентаризации самостоятельно эксплуатируемых объектов размещения отходов, проводимой в соответствии&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '600px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Утверждёнными приказом Министерства природных ресурсов и экологии РФ от 25 февраля 2010 г. № 49 с изменениями, внесёнными приказом Министерства природных ресурсов и экологии РФ от 9 декабря 2010 г. № 541.</span>}
                                    title=''
                                    trigger="hover">
                                    с Правилами инвентаризации объектов размещения отходов
                                </Popover>.
                            </h3>
                            <h3>
                                Методическим указаниям указывается наименование и номер объекта размещения отходов в государственном реестре объектов размещения отходов, формируемом Росприроднадзором.
                            </h3>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; В разделе "Сводные данные по образованию отходов производства и потребления и запрашиваемым лимитам на их размещение" НООЛР для объектов НВОС I категории указываются перечень и количество видов отходов, планируемых к ежегодному размещению в конкретных объектах размещения отходов, в табличном виде.</strong>
                            </h3>
                            <h3>
                                В соответствующих графах указывается наименование вида отхода и код по федеральному классификационному каталогу отходов, формируемому Росприроднадзором.
                            </h3>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; В разделе "Обоснование массы или объема планируемых к размещению отходов производства и потребления" НООЛР для объектов НВОС II категории приводятся обоснование величины планируемых к размещению отходов.</strong>
                            </h3>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; В подразделе "Сведения о местах (площадках) накопления отходов" приводится перечень и вместимость мест (площадок, контейнеров, бункеров и других объектов) накопления отходов, предназначенных для формирования партии отходов с целью их дальнейшей обработки, утилизации, обезвреживания, размещения, передачи другим хозяйствующим субъектам в табличном виде.</strong>
                            </h3>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; В подразделе "Сведения о планируемой ежегодной обработке и (или) утилизации, и (или) обезвреживании отходов" приводится обоснование количества планируемой ежегодной обработки и (или) утилизации, и (или) обезвреживания отходов.</strong>
                            </h3>
                            <h3>
                                При использовании отходов производств черных металлов IV и V классов опасности для ликвидации горных выработок указывают реквизиты положительного заключения государственной экологической экспертизы на проект ликвидации горных выработок с использованием отходов производства черных металлов IV и V классов опасности.
                            </h3>
                            <h3>
                                Сведения о планируемой ежегодной обработке и (или) утилизации, и (или) обезвреживании отходов каждого вида приводятся в табличном виде согласно рекомендуемому образцу.
                            </h3>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp; В разделе "Сводные данные по образованию отходов и их размещению" НООЛР объектов НВОС II категории указываются перечень и количество видов отходов, планируемых к ежегодному размещению в конкретных объектах размещения отходов, в табличном виде согласно рекомендуемому образцу.</strong>
                            </h3>
                            <h3>
                                Указывается наименование вида отхода и код по федеральному классификационному каталогу отходов, формируемому Росприроднадзором, наименование и номер объекта размещения отходов в государственном реестре объектов размещения отходов.
                            </h3>
                        </Col>
                    </Row>
                </>,
        },
        {
            title: '',
            content:
                <>
                    <Row>
                        <Col offset={0} span={24} className='eco-inv-card' style={{padding: '15px 20px'}}>
                            <h3>
                                <strong><InfoCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; В раздел "Приложения" НООЛР объектов НВОС I и II категорий включаются:</strong>
                            </h3>

                            <div className='eco-flex-col' style={{gap: '15px', fontSize: '1.3rem'}}>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; заверенные хозяйствующим субъектом копии документов, подтверждающих данные материально-сырьевого баланса по основному производству;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; заверенные хозяйствующим субъектом копии договоров на передачу отходов&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>С целью их обработки, утилизации, обезвреживания, размещения отходов определённых видов и классов опасности (при наличии).</span>}
                                        title=''
                                        trigger="hover">
                                        иным хозяйствующим субъектам
                                    </Popover>;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; карта-схема расположения самостоятельно&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '600px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Собственных.</span>}
                                        title=''
                                        trigger="hover">
                                        эксплуатируемых
                                    </Popover> объектов размещения отходов;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; карта-схема расположения мест накопления отходов;
                                </div>
                                <div>
                                    <CheckOutlined style={{color: 'green'}}/>&nbsp; иные документы и материалы по усмотрению хозяйствующего субъекта.
                                </div>
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
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Содержание и оформление нормативов образования отходов и лимитов на их размещение</strong></h1>
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
        </>
    );
};

export default Eco_Chap2_Theme4_10;