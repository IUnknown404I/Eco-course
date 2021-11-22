import React from 'react';
import {Row, Col, Image, Skeleton, Popover, Steps} from 'antd';
import { BackTop } from 'antd';

const { Step } = Steps;

const Eco_Chap2_Theme4_2 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>Требования к лицам, которые допущены к сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I - IV классов опасности</h1>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col xs={{span: 24, offset: 0}} sm={{span: 20, offset: 2}} md={{span: 14, offset: 5}} lg={{span: 8, offset: 0}} xl={{span: 6, offset: 2}} className='eco-flex-row flex-centered'>
                    <Image
                        style={{background: 'transparent', maxHeight: '40vh'}}
                        src={'/images/aa.png'}
                        preview={false}
                        placeholder={
                            <Skeleton.Image />
                        }
                    />
                </Col>

                <Col md={{span: 22, offset: 1}} lg={{span: 16, offset: 0}} xl={{span: 12, offset: 1}} className='eco-img-col'>
                    <Steps progressDot direction="vertical" className='eco-steps-style eco-steps-style-light'>
                        <Step status={'process'} title={<span><strong style={{fontWeight: 'bold'}}>Профессиональное обучение и дополнительное профессиональное образование</strong> лиц, которые допущены к сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I - IV классов опасности, осуществляются в соответствии с законодательством об образовании.</span>} />
                        <Step status={'process'} title={
                            <span>
                                Лица, которые допущены к сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I - IV классов опасности, обязаны иметь&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '450px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Выданные по результатам прохождения профессионального обучения или получения дополнительного профессионального образования.</span>}
                                    title=''
                                    trigger="hover">
                                    <strong style={{fontWeight: 'bold'}}>документы о квалификации</strong>
                                </Popover>, необходимых для работы с отходами I - IV классов опасности.
                            </span>
                        } />
                        <Step status={'process'} title={<span><strong style={{fontWeight: 'bold'}}>Ответственность за допуск</strong> работников к работе с отходами I - IV класса опасности несет соответствующее должностное лицо организации.</span>}/>
                    </Steps>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme4_2;