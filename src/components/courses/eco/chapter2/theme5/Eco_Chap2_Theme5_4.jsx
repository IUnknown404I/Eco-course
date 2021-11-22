import React from 'react';
import {Row, Col, Descriptions, Skeleton, Image, Popover} from 'antd';
import { BackTop } from 'antd';

const Eco_Chap2_Theme5_4 = () => {
    return (
        <>
            <BackTop />

            <Row style={{marginTop: '25px'}}>
                <Col lg={{span: 24, offset: 0}} xl={{span: 22, offset: 1}} xxl={{span: 20, offset: 2}}>
                    <div className='eco-description-container'>
                        <Descriptions
                            title={<span>Правила исчисления и взимания платы за негативное воздействие на окружающую среду</span>}
                        >
                            <Descriptions.Item label="Плата" span={4}>плата, исчисленная по итогам отчетного периода и с учетом корректировки ее размера вносится не позднее 1-го марта года, следующего за отчетным периодом.</Descriptions.Item>
                            <Descriptions.Item label="Отчетный период " span={4}>отчетным периодом в отношении платы признается календарный год.</Descriptions.Item>
                            <Descriptions.Item label="Авансовые платежи" span={4}>лица, обязанные вносить плату, вносят квартальные авансовые платежи (кроме четвертого квартала) не позднее 20-го числа месяца, следующего за последним месяцем соответствующего квартала текущего отчетного периодапериодом.</Descriptions.Item>
                            <Descriptions.Item label="Квартальный авансовый платеж" span={4}>
                                <div style={{textAlign: 'left'}}>
                                    а) в размере 1/4 суммы платы, подлежащей уплате за предыдущий отчетный период;
                                    <br/>б) в размере 1/4 суммы платы, при исчислении которой платежная база определяется исходя из объема или массы выбросов загрязняющих веществ, сбросов загрязняющих веществ в пределах нормативов допустимых выбросов, временно разрешенных выбросов;
                                    <br/>в) в размере суммы платы, определенной путем умножения платежной базы, которая определена исходя из объема или массы выбросов загрязняющих веществ,  на соответствующие ставки платы с применением коэффициентов.
                                </div>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                </Col>
            </Row>

            <Row style={{marginTop: '20px'}}>
                <Col md={{span: 20, offset: 2}} lg={{span: 18, offset: 3}}>
                    <div className='eco-img-div-item extra' style={{marginTop: '30px', boxShadow: '1px 1px 2px 0 brown'}}>
                        <Image
                            style={{width: '80px', marginRight: '15px', marginLeft: '5px'}}
                            preview = {false}
                            src={'/images/att.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <h1 style={{fontSize: '1.2rem'}}>
                            Выбранный способ определения размера квартального авансового&nbsp;
                            <Popover
                                color={"azure"}
                                overlayStyle={{maxWidth: '800px'}}
                                className='pop_text'
                                style={{maxWidth: '550px'}}
                                content={<span>По каждому виду негативного воздействия на окружающую среду.</span>}
                                title=''
                                trigger="hover">
                                <span style={{fontFamily: 'Roboto sans-serif', fontSize: '19px'}}>платежа на год, следующий за отчетным периодом</span>
                            </Popover>, указывается лицами, обязанными вносить плату, в составе декларации о плате за отчетный период. <strong>При внесении квартальных авансовых платежей представление администратору декларации о плате не требуется!</strong></h1>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme5_4;