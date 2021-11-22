import React from 'react';
import {BackTop, Col, Image, Row, Skeleton} from "antd";
import {ExclamationCircleTwoTone} from "@ant-design/icons";

const Eco_Chap1_Theme1_6 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Требования к обращению с отходами I - V классов опасности. Федеральный закон от 24.06.1998 N 89-ФЗ</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col md={{span: 24, offset: 0}}  lg={{span: 22, offset: 1}}>
                    <h3>
                        <ExclamationCircleTwoTone twoToneColor='darkorange'/>&nbsp; Индивидуальные предприниматели, юридические лица, в процессе деятельности которых образуются отходы I - V классов опасности, обязаны осуществить отнесение соответствующих отходов к конкретному классу опасности для подтверждения такого отнесения в порядке, установленном уполномоченным Правительством Российской Федерации федеральным органом исполнительной власти.
                    </h3>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col md={{span: 22, offset: 1}} lg={{span: 16, offset: 4}}  xl={{span: 10, offset: 1}} className='eco-flex-row flex-centered'>
                    <Image
                        src={'/svg/recycle.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        // style={{width: '100%', height: '40vh', maxWidth: '1100px', marginLeft: '30px'}}
                        style={{width: '100%', height: '40vh', maxWidth: '1100px'}}
                    />
                </Col>

                <Col lg={{span: 22, offset: 1}}  xl={{span: 11, offset: 1}} className='eco-flex-col' style={{gap: '20px'}}>
                    <div className='eco-flex-row eco-img-col'>
                        <Image
                            style={{width: '100px', marginRight: '30px'}}
                            src={'/svg/doc2.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            На основании данных о составе отходов, оценки степени их негативного воздействия на окружающую среду составляется <strong style={{fontWeight: 'bold'}}>паспорт отходов I - IV классов опасности.</strong> Порядок паспортизации отходов и типовые формы паспортов отходов устанавливаются уполномоченным Правительством Российской Федерации федеральным органом исполнительной власти.
                        </span>
                    </div>
                    <div className='eco-flex-row eco-img-col' style={{marginLeft: '-10px'}}>
                        <Image
                            style={{width: '120px', marginRight: '20px'}}
                            src={'/svg/russia.svg'}
                            preview={false}
                            placeholder={ <Skeleton.Image /> }
                        />
                        <span>
                            <strong style={{fontWeight: 'bold'}}>При обращении с группами однородных отходов I - V классов опасности</strong> должны соблюдаться требования, установленные федеральным органом исполнительной власти, осуществляющим государственное регулирование в области охраны окружающей среды.
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme1_6;