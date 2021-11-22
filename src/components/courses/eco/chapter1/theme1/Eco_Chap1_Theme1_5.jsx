import React from 'react';
import {BackTop, Col, Collapse, Image, Popover, Row, Skeleton} from "antd";
import {CheckOutlined, WarningTwoTone} from "@ant-design/icons";

const { Panel } = Collapse;

const Eco_Chap1_Theme1_5 = () => {
    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>Критерии отнесения объектов, оказывающих значительное негативное воздействие на окружающую среду и относящихся к областям применения наилучших доступных технологий, к объектам I категории</strong></h1>
                </Col>
            </Row>

            <Row style={{marginTop: '30px'}}>
                <Col lg={{span: 22, offset: 1}}  xl={{span: 11, offset: 1}}>
                    <h1 style={{fontSize: '1.35rem', margin: '0 0 20px 10px'}}><WarningTwoTone twoToneColor='darkorange' style={{fontSize: '26px'}}/>&nbsp;&nbsp;Осуществление на объекте, оказывающем негативное воздействие на окружающую среду, хозяйственной и (или) иной деятельности <strong>в целях государственного регулирования выбросов загрязняющих веществ в атмосферный воздух устанавливаются:</strong></h1>

                    <div className=''>
                        <Collapse
                            className='mycollapse'
                            defaultActiveKey={1}
                            expandIconPosition='left'
                            accordion
                        >
                            <Panel header="По металлургическому производству с использованием оборудования" key="1" className='eco-panel-style'>
                                <div className='eco-flex-col' style={{gap: '15px'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Включая установки непрерывной разливки.</span>}
                                            title=''
                                            trigger="hover">
                                            для производства чугуна или стали
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        для обработки черных металлов с использованием станов горячей прокатки;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        для нанесения защитных распыленных металлических покрытий;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        для литейного производства черных металлов;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        для производства цветных металлов из руды, концентратов или вторичного сырья;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Включая легирование, рафинирование.</span>}
                                            title=''
                                            trigger="hover">
                                            для плавки и разливки цветных металлов
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        для производства ферросплавов;
                                    </div>
                                </div>
                            </Panel>
                            <Panel header="По производству следующей неметаллической минеральной продукции" key="2" className='eco-panel-style'>
                                <div className='eco-flex-col' style={{gap: '15px'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Включая легирование, рафинирование.</span>}
                                            title=''
                                            trigger="hover">
                                            стекло и изделия из стекла
                                        </Popover>
                                        , включая стекловолокно;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        огнеупорные керамические изделия и строительные керамические материалы;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Кроме огнеупорных керамических изделий и строительных керамических материалов.</span>}
                                            title=''
                                            trigger="hover">
                                            керамические или фарфоровые изделия
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        цементный клинкер во вращающихся печах или в других печах;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Негашеная, гашеная.</span>}
                                            title=''
                                            trigger="hover">
                                            известь
                                        </Popover>
                                        &nbsp;при наличии печей;
                                    </div>
                                </div>
                            </Panel>
                            <Panel header="По производству химических веществ и химических продуктов следующих основных органических химических веществ" key="3" className='eco-panel-style'>
                                <div className='eco-flex-col' style={{gap: '15px'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Линейные или циклические, насыщенные или ненасыщенные, алифатические или ароматические.</span>}
                                            title=''
                                            trigger="hover">
                                            простые углеводороды
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Спирты, альдегиды, кетоны, карбоновые кислоты, сложные эфиры, ацетаты, простые эфиры, пероксиды, эпоксидные смолы.</span>}
                                            title=''
                                            trigger="hover">
                                            кислородсодержащие углеводороды
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        серосодержащие углеводороды;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Амиды, азотистые соединения, нитросоединения или нитратные соединения, нитрилы, цианаты, изоцианаты.</span>}
                                            title=''
                                            trigger="hover">
                                            азотсодержащие углеводороды
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        фосфорсодержащие углеводороды;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        галогенированные углеводороды;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        полимеры, химические синтетические волокна и нити на основе целлюлозы;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        синтетический каучук;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        синтетические красители и пигменты;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        поверхностно-активные вещества;
                                    </div>
                                </div>
                            </Panel>
                            <Panel header="По производству химических веществ и химических продуктов следующих неорганических веществ" key="4" className='eco-panel-style'>
                                <div className='eco-flex-col' style={{gap: '15px'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Аммиак, хлор или хлористый водород, фтор или фтористый водород, оксиды углерода, соединения серы, оксиды азота, диоксид серы, карбонилхлорид.</span>}
                                            title=''
                                            trigger="hover">
                                            газы
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Хромовая кислота, фтористоводородная (плавиковая) кислота, фосфорная кислота, азотная кислота, соляная кислота, серная кислота, олеум, сернистая кислота.</span>}
                                            title=''
                                            trigger="hover">
                                            кислоты
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Гидроксид аммония, гидроксид калия, гидроксид натрия.</span>}
                                            title=''
                                            trigger="hover">
                                            основания
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Хлорид аммония, хлорат калия, карбонат калия, карбонат натрия.</span>}
                                            title=''
                                            trigger="hover">
                                            соли
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Карбид кальция, кремний, карбид кремния.</span>}
                                            title=''
                                            trigger="hover">
                                            неметаллы, оксиды металлов или другие неорганические соединения
                                        </Popover>;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Цианид натрия, цианид калия.</span>}
                                            title=''
                                            trigger="hover">
                                            специальные неорганические химикаты
                                        </Popover>
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        оксид магния;
                                    </div>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </Col>

                <Col lg={{span: 22, offset: 1}}  xl={{span: 11, offset: 1}}>
                    <Image
                        src={'/cati.jpg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', maxWidth: '1100px'}}
                    />

                    <h3><strong>А также:</strong></h3>
                    <div className='eco-flex-col'>
                        <div>
                            <div className='eco-flex-row'>
                                <div className='eco-numeration'>1</div>
                                <div className='eco-numeration-text'>
                                    по производству кокса;
                                </div>
                            </div>
                            <div className='eco-flex-row'>
                                <div className='eco-numeration'>2</div>
                                <div className='eco-numeration-text'>
                                    <span> по производству нефтепродуктов и добыче сырой нефти и (или)&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '450px'}}
                                            className='pop_text'
                                            style={{maxWidth: '200px'}}
                                            content={<span>Включая переработку природного газа.</span>}
                                            title=''
                                            trigger="hover">
                                        природного газа
                                    </Popover>;
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='eco-flex-row'>
                            <div className='eco-numeration'>3</div>
                            <div className='eco-numeration-text'>
                                <span> по добыче и (или) обогащению железных руд и по добыче и (или) подготовке&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '450px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>Алюминия (боксита), меди, свинца, цинка, олова, марганца, хрома, никеля, кобальта, молибдена, титана, тантала, ванадия, руд драгоценных металлов (золота, серебра, платины) за исключением оловянных руд, титановых руд, хромовых руд, руд и песков драгоценных металлов на россыпных месторождениях.</span>}
                                        title=''
                                        trigger="hover">
                                    руд цветных металлов
                                    </Popover>
                                </span>
                            </div>
                        </div>
                        <div className='eco-flex-row'>
                            <div className='eco-numeration'>4</div>
                            <div className='eco-numeration-text'>
                                <span> по обеспечению электрической энергией, газом и паром&nbsp;
                                    <Popover
                                        color={"azure"}
                                        overlayStyle={{maxWidth: '450px'}}
                                        className='pop_text'
                                        style={{maxWidth: '200px'}}
                                        content={<span>С установленной электрической мощностью 250 МВт и более при потреблении в качестве основного твердого и (или) жидкого топлива или с установленной электрической мощностью 500 МВт и более при потреблении в качестве основного газообразного топлива.</span>}
                                        title=''
                                        trigger="hover">
                                    с использованием оборудования
                                </Popover>;
                                </span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Eco_Chap1_Theme1_5;