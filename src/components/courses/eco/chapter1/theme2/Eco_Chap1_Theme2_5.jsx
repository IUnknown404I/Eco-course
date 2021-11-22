import React, {useState} from 'react';
import {Row, Col, Tabs, Popover, Image, Skeleton, Button} from 'antd';
import { BackTop } from 'antd';
import {
    CheckCircleOutlined,
    CheckOutlined,
    ExclamationCircleTwoTone,
    MinusOutlined,
} from "@ant-design/icons";
import Draggable_Modal from "../../../../UI/draggable_modal/Draggable_Modal";

const { TabPane } = Tabs;

const Eco_Chap1_Theme2_5 = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    return (
        <>
            <BackTop />

            <Row style={{margin: '20px 0 20px'}}>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: "center", fontSize: '1.65rem'}}><strong>
                        Плата за негативное воздействие на окружающую среду
                    </strong></h1>
                </Col>
            </Row>

            <Row className='padding-15-30'>
                <Col md={{span: 20, offset: 2}} lg={{span: 8, offset: 0}} className='eco-flex-col eco-img-col'>
                    <Image
                        src={'/svg/pay-isometric.svg'}
                        preview={false}
                        placeholder={ <Skeleton.Image /> }
                        style={{width: '100%', height: '40vh', maxWidth: '1100px'}}
                    />

                    <Button block className='mybut-primary' onClick={() => {setShowModal1(true)}}>Право лиц, обязанных вносить плату</Button>
                    <Button block className='mybut-primary' onClick={() => {setShowModal2(true)}}>Платежная база</Button>
                </Col>

                <Col md={{span: 24, offset: 0}} lg={{span: 16, offset: 0}} className='eco-div-padding'>
                    <Tabs size='large' className='eco-tab-list' tabPosition={'top'} animated>
                        <TabPane tab={<div style={{fontSize: '1.2rem', opacity: '.75'}}>Категории оплаты</div>} key="1">
                            <>
                                <div style={{fontSize: '1.3rem'}}><strong style={{fontWeight: 'bold'}}>К объектам I категории по степени негативного воздействия на окружающую среду относятся следующие объекты обращения с отходами:</strong></div>
                                <div className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; выбросы загрязняющих веществ в атмосферный воздух стационарными источниками;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; сбросы загрязняющих веществ в водные объекты;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; хранение, размещение, захоронение отходов производства и потребления.
                                    </div>
                                </div>
                            </>
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.2rem', opacity: '.75'}}>Лица, обязанные вносить плату</div>} key="2">
                            <>
                                <div style={{fontSize: '1.3rem'}}>&nbsp;
                                    <strong style={{fontWeight: 'bold'}}>Лица, обязанные вносить плату за негативное воздействие на окружающую среду:</strong>
                                </div>
                                <div className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '900px'}}
                                            className='pop_text'
                                            style={{maxWidth: '350px'}}
                                            content={<span>За исключением юридических лиц и индивидуальных предпринимателей, осуществляющих хозяйственную и (или) иную деятельность исключительно на объектах IV категории.</span>}
                                            title=''
                                            trigger="hover">
                                            юридические лица и индивидуальные предприниматели
                                        </Popover>, осуществляющие на территории Российской Федерации, континентальном шельфе Российской Федерации и в исключительной экономической зоне Российской Федерации хозяйственную и (или) иную деятельность, оказывающую негативное воздействие на окружающую среду;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; региональные операторы по обращению с твердыми коммунальными отходами, операторы по обращению с твердыми коммунальными отходами, осуществляющие деятельность по их размещению.
                                    </div>
                                </div>
                            </>
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.2rem', opacity: '.75'}}>Вычеты из суммы платы</div>} key="3">
                            <>
                                <div style={{fontSize: '1.3rem'}}><CheckCircleOutlined style={{color: 'white', fontSize: '23px'}}/>&nbsp;
                                    <strong style={{fontWeight: 'bold'}}>Из суммы платы за негативное воздействие на окружающую среду вычитаются:</strong>
                                </div>
                                <div className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                                    <div>
                                        <MinusOutlined style={{color: 'green'}}/>&nbsp; затраты на&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '900px'}}
                                            className='pop_text'
                                            style={{maxWidth: '350px'}}
                                            content={<span>Затратами на реализацию мероприятий по снижению негативного воздействия на окружающую среду признаются документально подтвержденные расходы лиц, обязанных вносить плату, в отчетном периоде на финансирование мероприятий.</span>}
                                            title=''
                                            trigger="hover">
                                            реализацию мероприятий по снижению негативного воздействия на окружающую среду
                                        </Popover>, фактически произведенные лицами, обязанными вносить плату, в пределах исчисленной платы за негативное воздействие на окружающую среду раздельно в отношении каждого загрязняющего вещества, включенного в перечень загрязняющих веществ, класса опасности отходов производства и потребления.
                                    </div>
                                </div>
                            </>
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.2rem', opacity: '.75'}}>Плата</div>} key="4">
                            <>
                                <div style={{fontSize: '1.3rem'}}>
                                    <strong style={{fontWeight: 'bold'}}>Отчетным периодом в отношении платы признается календарный год.</strong>
                                </div>
                                <div className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                                    <div>
                                        <MinusOutlined style={{color: 'green'}}/>&nbsp; Плата, исчисленная по итогам отчетного периода, с учетом корректировки ее размера вносится не позднее 1-го марта года, следующего за отчетным периодом.
                                    </div>
                                </div>
                            </>
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.2rem', opacity: '.75'}}>Несвоевременное или неполное внесение платы</div>} key="5">
                            <>
                                <div style={{fontSize: '1.3rem'}}>
                                    <strong style={{fontWeight: 'bold'}}>Несвоевременное или неполное внесение лицом платы влечет за собой:</strong>
                                </div>
                                <div className='eco-flex-col padding-15-30' style={{gap: '15px'}}>
                                    <div>
                                        <MinusOutlined style={{color: 'green'}}/>&nbsp; уплату пеней в размере 1/300 действующей на день уплаты пеней ключевой ставки Банка России, но не более чем в размере 0,2% за каждый день просрочки.
                                    </div>
                                </div>

                                <div>
                                    <CheckCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; Пеня начисляется за каждый календарный день просрочки исполнения обязанности по внесению платы, начиная со следующего дня после окончания сроков, определенных выше.
                                </div>
                            </>
                        </TabPane>
                        <TabPane tab={<div style={{fontSize: '1.2rem', opacity: '.75'}}>Контроль за исчислением платы</div>} key="6">
                            <>
                                <div className='eco-flex-col' style={{gap: '15px'}}>
                                    <div>
                                        <CheckCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>Контроль за исчислением платы осуществляется</strong> администратором платы в течение 9 месяцев со дня приема декларации о плате или при проведении государственного экологического надзора.
                                    </div>
                                    <div>
                                        <CheckCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>
                                        Предметом&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '900px'}}
                                            className='pop_text'
                                            style={{maxWidth: '350px'}}
                                            content={<span>Контроль за правильностью исчисления платы за негативное воздействие на окружающую среду, полнотой и своевременностью ее внесения осуществляется уполномоченным Правительством Российской Федерации федеральным органом исполнительной власти.</span>}
                                            title=''
                                            trigger="hover">
                                            контроля за исчислением платы
                                        </Popover> являются
                                        </strong> правильность исчисления, полнота и своевременность внесения платы, обязанность по внесению которой в соответствии с законодательством в области охраны окружающей среды возложена на лицо, обязанное вносить плату.
                                    </div>
                                    <div>
                                        <CheckCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>Контроль за исчислением платы осуществляется</strong> посредством осуществления мероприятий по проверке полноты и правильности заполнения декларации о плате и соблюдения сроков ее представления, своевременности внесения платы.
                                    </div>
                                    <div>
                                        <CheckCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>При проверке декларации о плате устанавливается</strong> соответствие сведений и расчетов, представленных лицом, обязанным вносить плату, в составе декларации о плате и прилагаемых к ней документах.
                                    </div>
                                    <div>
                                        <CheckCircleOutlined style={{color: 'darkorange', fontSize: '23px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>Лица, обязанные вносить плату</strong>, не позднее 10-го марта года, следующего за отчетным периодом, представляют администратору платы по месту учета объекта, оказывающего негативное воздействие на окружающую среду, объекта размещения отходов производства и потребления декларацию о плате.
                                    </div>
                                </div>
                            </>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>

            <Draggable_Modal
                title='Право лиц, обязанных вносить плату'
                content={
                    <>
                        <div className='eco-flex-col' style={{marginTop: '-10px', gap: '15px', fontSize: '1.25rem'}}>
                            <div>
                                <ExclamationCircleTwoTone style={{fontSize: '24px'}}/>&nbsp;&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>За исключением субъектов малого и среднего предпринимателя.</span>}
                                    title=''
                                    trigger="hover">
                                    Лица, обязанные вносить плату
                                </Popover>,&nbsp;
                                <Popover
                                    color={"azure"}
                                    overlayStyle={{maxWidth: '900px'}}
                                    className='pop_text'
                                    style={{maxWidth: '350px'}}
                                    content={<span>Кроме четвертого квартала.</span>}
                                    title=''
                                    trigger="hover">
                                    <strong style={{fontWeight: 'bold'}}>вносят квартальные авансовые платежи</strong>
                                </Popover> не позднее 20-го числа месяца, следующего за последним месяцем соответствующего квартала текущего отчетного периода.
                            </div>

                            <div>
                                <strong style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Лица, обязанные вносить плату, вправе выбрать один из следующих способов определения размера квартального авансового платежа для каждого вида негативного воздействия на окружающую среду, за которое взимается плата:</strong>
                                <div className='eco-flex-col' style={{gap: '5px', padding: '0 0 0 25px', marginTop: '10px', fontSize: '1.25rem'}}>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp;  размере 1/4 суммы платы за негативное воздействие на окружающую среду, подлежащей уплате за предыдущий год;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; в размере 1/4 суммы платы за негативное воздействие на окружающую среду, при исчислении которой платежная база определяется исходя из объема или массы выбросов загрязняющих веществ, сбросов загрязняющих веществ в пределах нормативов допустимых выбросов, нормативов допустимых сбросов, временно разрешенных выбросов, временно разрешенных сбросов, лимитов на размещение отходов производства и потребления;
                                    </div>
                                    <div>
                                        <CheckOutlined style={{color: 'green'}}/>&nbsp; в размере, определённом путём умножения&nbsp;
                                        <Popover
                                            color={"azure"}
                                            overlayStyle={{maxWidth: '900px'}}
                                            className='pop_text'
                                            style={{maxWidth: '350px'}}
                                            content={<span>которая определена на основе данных производственного экологического контроля об объеме или о массе выбросов загрязняющих веществ, сбросов загрязняющих веществ либо об объеме или о массе размещенных отходов производства.</span>}
                                            title=''
                                            trigger="hover">
                                            платежной базы
                                        </Popover> и потребления в предыдущем квартале текущего отчетного периода, на соответствующие ставки платы за негативное воздействие на окружающую среду с применением коэффициентов.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                show={showModal1}
                hide={setShowModal1}
            />
            <Draggable_Modal
                title='Право лиц, обязанных вносить плату'
                content={
                    <>
                        <div className='eco-flex-col' style={{marginTop: '-10px', gap: '15px', fontSize: '1.25rem'}}>
                            <div>
                                <ExclamationCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>Платежная база определяется</strong> лицами, обязанными вносить плату, для каждого стационарного источника, фактически использовавшегося в отчетный период, в отношении каждого загрязняющего вещества, включенного в перечень загрязняющих веществ, класса опасности отходов производства и потребления.
                            </div>
                            <div>
                                <ExclamationCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>При определении платежной базы учитываются</strong> объем и (или) масса выбросов загрязняющих веществ, сбросов загрязняющих веществ в пределах нормативов допустимых выбросов, нормативов допустимых сбросов, временно разрешенных выбросов, временно разрешенных сбросов, превышающие такие нормативы, выбросы и сбросы (включая аварийные), технологические нормативы, а также учитываются лимиты на размещение отходов производства и потребления и их превышение.
                            </div>
                            <div>
                                <ExclamationCircleTwoTone style={{fontSize: '24px'}}/>&nbsp; <strong style={{fontWeight: 'bold'}}>Информация о платежной базе представляется</strong> за отчетный период лицами, обязанными вносить плату, администратору доходов бюджетов бюджетной системы Российской Федерации в составе декларации о плате за негативное воздействие на окружающую среду.
                            </div>
                        </div>
                    </>
                }
                show={showModal2}
                hide={setShowModal2}
            />
        </>
    );
};

export default Eco_Chap1_Theme2_5;