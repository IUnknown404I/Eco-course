import React from 'react';
import {Image, Col, Row, Popover, Skeleton, Steps} from "antd";

const { Step } = Steps;

const Eco_Chap1_Theme1_2 = () => {

    return (
        <>

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Федеральный оператор по обращению с отходами I и II классов опасности осуществляет следующие функции:</strong></h1>
                </Col>
            </Row>

            <Row>
                <Col sm={{span: 22, offset: 1}} md={{span: 18, offset: 3}} lg={{span: 8, offset: 2}} className='eco-flex-col flex-centered vertical-centered'>
                    <Image
                        src={'/svg/trashmans1.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '60vh', maxWidth: '1100px'}}
                    />
                </Col>
                <Col sm={{span: 24, offset: 0}} md={{span: 20, offset: 2}} lg={{span: 12, offset: 0}} className='eco-img-col' style={{fontSize: '1.35rem'}}>
                    <Steps progressDot direction="vertical" className='eco-steps-style'>
                        <Step status={'process'} title={
                            <span style={{fontSize: '1.35rem', lineHeight: '38px'}}>
                                Осуществляет деятельность по сбору, транспортированию, обработке, утилизации, обезвреживанию, размещению отходов I и II классов опасности&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '450px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>Или с привлечением операторов по обращению с отходами I и II классов опасности на основании договоров оказания услуг по обращению с отходами I и II классов опасности.</span>}
                                    title=''
                                    trigger="hover">
                                    самостоятельно
                                </Popover> в соответствии с федеральной схемой обращения с отходами I и II классов опасности
                            </span>
                        } />
                        <Step status={'process'} title={
                            <span style={{fontSize: '1.35rem', lineHeight: '38px'}}>
                                Представляет в федеральный орган исполнительной власти, уполномоченный в области государственного регулирования тарифов, предложения по установлению тарифов на услуги федерального оператора по обращению с отходами I и II классов опасности
                            </span>
                        } />
                        <Step status={'process'} title={
                            <span style={{fontSize: '1.35rem', lineHeight: '38px'}}>
                                Является оператором государственной информационной системы учета и контроля за обращением с отходами I и II классов опасности
                            </span>
                        } />
                        <Step status={'process'} title={
                            <span style={{fontSize: '1.35rem', lineHeight: '38px'}}>
                                Осуществляет иные функции в области обращения с отходами I и II классов опасности
                            </span>
                        } />
                    </Steps>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme1_2;