import React from 'react';
import {BackTop, Col, Image, Row, Skeleton, Tabs} from "antd";
import NumListCard from "../../../../UI/numListCard/NumListCard";

const { TabPane } = Tabs;


const EcoChap1Theme3_1 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 30px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Организационно-распорядительные документы по вопросам охраны окружающей среды на предприятии</strong></h1>
                </Col>
            </Row>

            <Row style={{margin: '10px 0 0'}}>
                <Col lg={{span: 22, offset: 1}} xl={{span: 9, offset: 1}}>
                    <Tabs animated centered tabPosition={'top'} defaultActiveKey='2' style={{display: 'flex', justifyContent: 'space-around'}}>
                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Документация в общем виде</span>} key="1">
                            <>
                                <h2 style={{marginBottom: '20px'}}><strong style={{fontWeight: 'bold'}}>В общем виде документация может быть:</strong></h2>
                                <div className='eco-flex-col'>
                                    <NumListCard num={1} text='обосновывающая' popover='Включает проекты нормативов допустимого воздействия на окружающую среду, материалы оценки воздействия на окружающую среду объектов капитального строительства и другую аналогичную документацию'/>
                                    <NumListCard num={2} text='разрешительная' popover='Области охраны окружающей среды и экологической безопасности оформляется в соответствии с действующими нормативными правовыми актами и включает лицензии на отдельные виды деятельности, осуществляемые предприятием, договоры и решения на водопользование, разрешения на выбросы (сбросы) загрязняющих веществ, лимиты размещения отходов, заключения, сертификаты соответствия на топливо, сырьё, оборудование и т. п. или другие аналогичные документы'/>
                                    <NumListCard num={3} text='организационно-распорядительная' popover='Оформляется для установления ответственности, прав и обязанностей, принятия и реализации мероприятий, изменений во внутренней нормативной документации должностными лицами в пределах их компетенции и может включать приказы, распоряжения, служебные записки и т.п'/>
                                    <NumListCard num={4} text='плановая' popover='Оформляется в форме отдельных документов, определяющих, как правило, содержание экологических программ и программ производственного экологического контроля'/>
                                    <NumListCard num={5} text='договорная' popover='Под которой подразумеваются договоры, технические задания на выполнение работ, акты выполненных работ, оформляется на производство работ, поставки продукции и оказание услуг, поставку программных продуктов в области охраны окружающей среды и т.п'/>
                                    <NumListCard num={6} text='отчётная'
                                                 popover='Включает различные зарегистрированные данные, в том числе:
                                            - результаты производственного контроля;
                                            - записи результатов предпринятых действий по выполнению предписаний;
                                            - протоколы совещаний по экологической тематике;
                                            - сведения государственного статистического наблюдения предприятия (формы 2-ТП (водхоз), 2-ТП (воздух), 2-ТП (отходы), 4-ОС и др.);
                                            - оперативную отчётность о выполнении мероприятий и программ в области охраны окружающей среды;
                                            - расчёты размера платы за негативное воздействие на окружающую среду;
                                            - зарегистрированные данные по обучению и подтверждению компетентности персонала;
                                            - зарегистрированные данные о поверке и калибровке измерительных приборов и оборудования, аттестаты аккредитации лабораторий;
                                            - первичные регистрационные данные (журналы, акты, протоколы)
                                     '/>
                                </div>
                            </>
                        </TabPane>
                        <TabPane tab={<span style={{fontSize: '20px', color: 'green'}}>Смежная внутренняя документация</span>} key="2">
                            <>
                                <h2 style={{marginBottom: '20px'}}><strong style={{fontWeight: 'bold'}}>В общем виде документация может быть:</strong></h2>
                                <div className='eco-flex-col'>
                                    <NumListCard num={1} text='технологическая и техническая документация'/>
                                    <NumListCard num={2} text='документация в области безопасности гидротехнических сооружений и промышленной безопасности, пожарной безопасности, предупреждения и ликвидации чрезвычайных ситуаций'/>
                                    <NumListCard num={3} text='документация управления персоналом' popover='положения о подразделениях, должностные инструкции и т.п'/>
                                    <NumListCard num={4} text='документация по делопроизводству'/>
                                </div>
                            </>
                        </TabPane>
                    </Tabs>
                </Col>

                <Col lg={{span: 24, offset: 0}} xl={{span: 12, offset: 1}} className='eco-flex-col'>
                    <div className='eco-img-div-item extra'>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/images/doc-1.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>Состав документации определяется в зависимости</strong> от характера и условий воздействия предприятия (организации) на окружающую среду исходя из прямых указаний в законах и подзаконных нормативных актах на обязательность определённых документов, <strong style={{fontWeight: 'bold'}}>а также исходя из необходимости документального подтверждения выполнения предприятием установленных требований</strong> в области охраны окружающей среды и обеспечения экологической безопасности.
                        </span>
                    </div>
                    <div className='eco-img-div-item extra'>
                        <Image
                            className='eco-img-ico'
                            preview = {false}
                            src={'/images/doc.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span>
                            Деятельность по охране окружающей среды и обеспечению экологической безопасности <strong style={{fontWeight: 'bold'}}>подлежит обязательному документированию.</strong>
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default EcoChap1Theme3_1;