import React from 'react';
import {Row, Col, Image, Skeleton, Card} from 'antd';
import { BackTop } from 'antd';

const Eco_Chap2_Theme5_1 = () => {
    return (
        <>
            <BackTop />

            <Row style={{marginTop: '30px'}}>
                <Col lg={{span: 24, offset: 0}} xl={{span: 20, offset: 2}}>

                    <Card className='simple-card'>
                        <Row style={{margin: '20px 0 20px', marginTop: '-5px'}}>
                            <Col md={{span: 24, offset: 0}} lg={{span: 20, offset: 2}}>
                                <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>
                                    <strong style={{fontSize: '1.65rem'}}>Общие вопросы исчисления и уплаты платы за негативное воздействие на окружающую среду</strong>.
                                    <br/>
                                    Кроме Федеральных законов «Об охране окружающей среды» внесение платы регламентируют:
                                </h1>
                            </Col>
                        </Row>

                        <Row style={{marginTop: '25px'}}>
                            <Col sm={{span: 22, offset: 1}} md={{span: 18, offset: 3}} lg={{span: 9, offset: 1}} className='eco-flex-col'>
                                <div className='eco-numeration text-centered flex-centered'>1</div>
                                <div className='eco-num-text text-centered' style={{fontSize: '1.3rem'}}>
                                    Постановление Правительства РФ <strong style={{fontWeight: 'bold'}}>от 13.09.2016 № 913</strong> «О ставках платы за негативное воздействие на окружающую среду и дополнительных коэффициентах»
                                </div>
                            </Col>
                            <Col sm={{span: 22, offset: 1}} md={{span: 18, offset: 3}} lg={{span: 12, offset: 1}} className='eco-flex-col'>
                                <div className='eco-numeration text-centered flex-centered'>2</div>
                                <div className='eco-num-text text-centered' style={{fontSize: '1.3rem'}}>
                                    Постановление Правительства Российской Федерации <strong style={{fontWeight: 'bold'}}>от 29.06.2018 № 758</strong> «О ставках платы за негативное воздействие на окружающую среду при размещении твердых коммунальных отходов IV класса опасности (малоопасные) и внесении изменений в некоторые акты Правительства Российской Федерации»
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={{span: 22, offset: 1}} md={{span: 18, offset: 3}} lg={{span: 9, offset: 1}} className='eco-flex-col'>
                                <div className='eco-numeration text-centered flex-centered'>3</div>
                                <div className='eco-num-text text-centered' style={{fontSize: '1.3rem'}}>
                                    Постановление Правительства РФ <strong style={{fontWeight: 'bold'}}>от 03.03.2017 № 255</strong> «Об исчислении и взимании платы за негативное воздействие на окружающую среду»
                                </div>
                            </Col>
                            <Col sm={{span: 22, offset: 1}} md={{span: 18, offset: 3}} lg={{span: 12, offset: 1}} className='eco-flex-col'>
                                <div className='eco-numeration text-centered flex-centered'>4</div>
                                <div className='eco-num-text text-centered' style={{fontSize: '1.3rem'}}>
                                    Постановление Правительства РФ <strong style={{fontWeight: 'bold'}}>от 13.09.2016 № 913</strong> «О ставках платы за негативное воздействие на окружающую среду и дополнительных коэффициентах»
                                </div>
                            </Col>
                        </Row>
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col sm={{span: 24, offset: 0}} md={{span: 18, offset: 3}} lg={{span: 14, offset: 5}}>
                    <div className='eco-img-div-item extra' style={{marginTop: '30px', boxShadow: '1px 1px 2px 0 brown'}}>
                        <Image
                            style={{width: '100px', marginRight: '13px', marginLeft: '5px'}}
                            preview = {false}
                            src={'/images/money.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <span style={{fontSize: '1.25rem'}}>
                            При <strong style={{fontWeight: 'bold'}}>выбросах, сбросах и размещении отходов</strong> взимается плата за негативное воздействие на окружающую среду в соответствии с ФЗ от 10 января 2002 года № 7-ФЗ «Об охране окружающей среды».
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme5_1;