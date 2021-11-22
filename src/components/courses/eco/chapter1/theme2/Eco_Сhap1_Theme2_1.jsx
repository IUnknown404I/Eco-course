import React from 'react';
import {BackTop, Col, Image, Row, Skeleton} from "antd";

const EcoChap1Theme2_1 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 30px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Права должностных лиц органов государственного экологического контроля</strong></h1>
                </Col>
            </Row>

            <Row style={{margin: '10px 0 0'}}>
                <Col md={{span: 22, offset: 1}} lg={{span: 11, offset: 1}} style={{marginBottom: '20px', borderLeft: '4px solid rgba(132,219,255, 0.6)', borderTopLeftRadius: '13px'}}>
                    <h1 className='eco-col-header' style={{background: 'rgba(132,219,255, 0.6)', borderBottomLeftRadius: '0'}}>1. Должностные лица</h1>
                    <div className='eco-div-padding'>
                        <h4><strong>Должностные лица органов, осуществляющих государственный экологический контроль (надзор), являющиеся государственными инспекторами</strong> в области охраны окружающей среды имеют право:</h4>
                        <div style={{marginTop: '33px'}}>
                            - направлять в уполномоченные органы материалы, связанные с нарушениями законодательства в области охраны окружающей среды, для решения вопросов о возбуждении уголовных дел;
                        </div> <br/>
                        <div>
                            - предъявлять в установленном законодательством Российской Федерации порядке иски о возмещении вреда, причиненного окружающей среде и ее компонентам вследствие нарушений обязательных требований.
                        </div>
                    </div>
                </Col>

                <Col md={{span: 22, offset: 1}} lg={{span: 10, offset: 1}} className='eco-flex-col' style={{padding: '0 15px', justifyContent: 'space-around'}}>
                    <div className='eco-div-withFloat'>
                        <Image
                            className='eco-float-ico'
                            style={{maxWidth: '90px', marginLeft: '-7px', marginRight: '17px'}}
                            preview = {false}
                            src={'/gos.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <strong style={{fontWeight:'bold'}}>2.</strong> Органы государственного надзора <strong style={{fontWeight:'bold'}}>могут быть привлечены судом к участию в деле</strong>  для дачи заключения по иску о возмещении вреда, причиненного окружающей среде и ее компонентам, безопасности государства, имуществу физических и юридических лиц, государственному или муниципальному имуществу вследствие нарушений обязательных требований.
                    </div>

                    <div className='eco-div-withFloat' style={{marginTop: '10px'}}>
                        <Image
                            className='eco-float-ico'
                            preview = {false}
                            src={'/team.png'}
                            placeholder={
                                <Skeleton.Image />
                            }
                        />
                        <strong style={{fontWeight:'bold'}}>3.</strong> Государственные инспектора в области охраны окружающей среды <strong style={{fontWeight:'bold'}}>подлежат государственной защите в соответствии с законодательством Российской Федерации.</strong>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default EcoChap1Theme2_1;