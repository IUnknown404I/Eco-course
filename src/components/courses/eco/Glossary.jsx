import React, {useEffect} from 'react';
import {Col, Row, Button, BackTop} from "antd";
import {LeftCircleTwoTone} from "@ant-design/icons";
import GlossaryParagraph from "../../UI/glossary_paragraph/Glossary_Paragraph";

const Glossary = ({setSwitchToGlossary}) => {
    useEffect(() => {
        window.scrollTo(0,1);
    }, []);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 40px'}}>
                <Col xs={{span: 24, offset: 0}} sm={{span: 16, offset: 4}} md={{span: 4, offset: 0}} lg={{span: 3, offset: 0}} xl={{span: 2, offset: 1}} className='eco-flex-row' style={{textAlign: 'center', justifyContent: 'center'}}>
                    <Button
                        onClick={() => {setSwitchToGlossary(false)}}
                        icon={<LeftCircleTwoTone />}
                        className='eco-pagination-but'
                        size="large"
                    >
                        Вернуться
                    </Button>
                </Col>
                <Col xs={{span: 24, offset: 0}} sm={{span: 20, offset: 2}} md={{span: 16, offset: 0}} lg={{span: 18, offset: 0}} xl={{span: 18, offset: 0}} style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: '27px', fontWeight: 'bold', color: 'darkblue'}}>Глоссарий</h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 22, offset: 1}} lg={{span: 20, offset: 2}} xl={{span: 18, offset: 3}} className='eco-glossary'>

                    <GlossaryParagraph text='Вред окружающей среде - негативное изменение окружающей среды в результате ее загрязнения, повлекшее за собой деградацию естественных экологических систем и истощение природных ресурсов'/>

                    <GlossaryParagraph text='Временно разрешенные сбросы - объем или масса химических веществ либо смеси химических веществ, микроорганизмов, иных веществ в сточных водах, разрешенные для сброса в водные объекты на период выполнения плана мероприятий по охране окружающей среды или достижения технологических нормативов на период реализации программы повышения экологической эффективности'/>

                    <GlossaryParagraph text='Временно разрешенные выбросы - объем или масса химических веществ либо смеси химических веществ, микроорганизмов, иных веществ, разрешенные для выброса в атмосферный воздух и устанавливаемые для действующих стационарных источников в целях достижения нормативов допустимых выбросов на период выполнения плана мероприятий по охране окружающей среды или достижения технологических нормативов на период реализации программы повышения экологической эффективности'/>

                    <GlossaryParagraph text='Загрязнение окружающей среды - поступление в окружающую среду вещества и (или) энергии, свойства, местоположение или количество которых оказывают негативное воздействие на окружающую среду'/>

                    <GlossaryParagraph text='Загрязняющее вещество - вещество или смесь веществ и микроорганизмов, которые в количестве и (или) концентрациях, превышающих установленные для химических веществ, в том числе радиоактивных, иных веществ и микроорганизмов нормативы, оказывают негативное воздействие на окружающую среду, жизнь, здоровье человека'/>

                    <GlossaryParagraph text='Комплексное экологическое разрешение - документ, который выдается уполномоченным федеральным органом исполнительной власти юридическому лицу или индивидуальному предпринимателю, осуществляющим хозяйственную и (или) иную деятельность на объекте, оказывающем негативное воздействие на окружающую среду, и содержит обязательные для выполнения требования в области охраны окружающей среды'/>

                    <GlossaryParagraph text='Контроль в области охраны окружающей среды - система мер, направленная на предотвращение, выявление и пресечение нарушения законодательства в области охраны окружающей среды, обеспечение соблюдения юридическими лицами и индивидуальными предпринимателями требований, в том числе нормативов и нормативных документов, федеральных норм и правил, в области охраны окружающей среды'/>

                    <GlossaryParagraph text='Накопленный вред окружающей среде - вред окружающей среде, возникший в результате прошлой экономической и иной деятельности, обязанности по устранению которого не были выполнены либо были выполнены не в полном объеме'/>

                    <GlossaryParagraph text='Негативное воздействие на окружающую среду - воздействие хозяйственной и иной деятельности, последствия которой приводят к негативным изменениям качества окружающей среды'/>

                    <GlossaryParagraph text='Нормативы в области охраны окружающей среды - установленные нормативы качества окружающей среды и нормативы допустимого воздействия на нее, при соблюдении которых обеспечивается устойчивое функционирование естественных экологических систем и сохраняется биологическое разнообразие'/>

                    <GlossaryParagraph text='Нормативы допустимых сбросов - нормативы сбросов загрязняющих веществ в составе сточных вод в водные объекты, которые определяются как объем или масса химических веществ либо смеси химических веществ, микроорганизмов, иных веществ, как показатели активности радиоактивных веществ, допустимые для сброса в водные объекты стационарными источниками'/>

                    <GlossaryParagraph text='Оценка воздействия на окружающую среду - вид деятельности по выявлению, анализу и учету прямых, косвенных и иных последствий воздействия на окружающую среду планируемой хозяйственной и иной деятельности в целях принятия решения о возможности или невозможности ее осуществления'/>

                    <GlossaryParagraph text='Охрана окружающей среды - деятельность органов государственной власти Российской Федерации, органов государственной власти субъектов Российской Федерации, органов местного самоуправления, общественных объединений и некоммерческих организаций, юридических и физических лиц, направленная на сохранение и восстановление природной среды, рациональное использование и воспроизводство природных ресурсов, предотвращение негативного воздействия хозяйственной и иной деятельности на окружающую среду и ликвидацию ее последствий'/>

                    <GlossaryParagraph text='Объект, оказывающий негативное воздействие на окружающую среду - объект капитального строительства и (или) другой объект, а также их совокупность, объединенные единым назначением и (или) неразрывно связанные физически или технологически и расположенные в пределах одного или нескольких земельных участков'/>

                    <GlossaryParagraph text='Природный объект - естественная экологическая система, природный ландшафт и составляющие их элементы, сохранившие свои природные свойства'/>

                    <GlossaryParagraph text='Технологические нормативы - нормативы выбросов, сбросов загрязняющих веществ, нормативы допустимых физических воздействий, которые устанавливаются с применением технологических показателей'/>

                    <GlossaryParagraph text='Требования в области охраны окружающей среды - предъявляемые к хозяйственной и иной деятельности обязательные условия, ограничения или их совокупность, установленные законами, иными нормативными правовыми актами, нормативами в области охраны окружающей среды, федеральными нормами и правилами в области охраны окружающей среды и иными нормативными документами в области охраны окружающей среды'/>

                    <GlossaryParagraph text='Экологическая безопасность - состояние защищенности природной среды и жизненно важных интересов человека от возможного негативного воздействия хозяйственной и иной деятельности, чрезвычайных ситуаций природного и техногенного характера, их последствий'/>

                    <GlossaryParagraph text='Экологический аудит - независимая, комплексная, документированная оценка соблюдения юридическим лицом или индивидуальным предпринимателем требований, в том числе нормативов и нормативных документов, федеральных норм и правил, в области охраны окружающей среды, требований международных стандартов и подготовка рекомендаций по улучшению такой деятельности'/>

                </Col>
            </Row>
        </>
    );
};

export default Glossary;