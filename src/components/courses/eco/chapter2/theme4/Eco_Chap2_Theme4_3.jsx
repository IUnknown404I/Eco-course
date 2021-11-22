import React from 'react';
import {Row, Col, Divider, Image, Skeleton, Popover} from 'antd';
import { BackTop } from 'antd';
import NumListCard from "../../../../UI/numListCard/NumListCard";

const Eco_Chap2_Theme4_3 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}>
                        Полномочия органов местного самоуправления в области обращения с твердыми коммунальными отходами (в ред. Федерального закона от 31.12.2017 N 503-ФЗ)
                    </h1>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col md={{span: 22, offset: 1}} lg={{span: 18, offset: 3}} className='eco-inv-card eco-numeration-container-blue' style={{padding: '20px 20px'}}>
                    <div className='eco-div-withFloat eco-img-col'>
                        <Image
                            className='eco-float-ico'
                            style={{maxWidth: '150px', marginLeft: '-7px'}}
                            preview = {false}
                            src={'/images/yprav.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <h1 style={{fontSize: '1.45rem', marginLeft: '10px'}}>К <strong>полномочиям органов</strong> местного самоуправления муниципальных районов, городских поселений и городских округов в области обращения с твердыми коммунальными отходами относятся:</h1>
                    </div>

                    <Divider/>
                    <Row className='eco-flex-row' style={{marginTop: '40px'}}>
                        <Col md={{span: 22, offset: 1}} lg={{span: 9, offset: 2}} className='eco-img-col text-centered'>
                            <NumListCard num={1} text={<span>Определение <strong style={{fontWeight: 'bold'}}>схемы размещения мест</strong> накопления твердых коммунальных отходов и ведение реестра мест накопления твердых коммунальных отходов</span>}/>
                        </Col>
                        <Col md={{span: 22, offset: 1}} lg={{span: 9, offset: 2}} className='eco-img-col text-centered'>
                            <NumListCard num={2} text={<span>Организация <strong style={{fontWeight: 'bold'}}>экологического воспитания и формирования экологической культуры</strong> в области обращения с твердыми коммунальными отходами</span>}/>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col md={{span: 22, offset: 1}} lg={{span: 20, offset: 2}} className='eco-img-col'>
                            <NumListCard num={3} text={<span><strong style={{fontWeight: 'bold'}}>Создание и содержание</strong> площадок накопления&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '450px'}}
                                    className='pop_text'
                                    style={{maxWidth: '200px'}}
                                    content={<span>За исключением установленных законодательством Российской Федерации случаев, когда такая обязанность лежит на других лицах.</span>}
                                    title=''
                                    trigger="hover">
                                    твердых коммунальных отходов
                                </Popover>
                            </span>}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap2_Theme4_3;