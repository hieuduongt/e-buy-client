import React, { ReactNode, useReducer } from 'react';
import { Col, Form, Input, Row, MenuProps } from 'antd';
import { Content } from 'antd/es/layout/layout';
import '../index.css'
import { GiftOutlined, PropertySafetyOutlined, SearchOutlined, ShopOutlined, ShoppingCartOutlined, WhatsAppOutlined } from '@ant-design/icons';

type MainLayoutProps = {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [form] = Form.useForm()
    const Search = () => {

    }
    return (
        <div>
            <div style={{ display: 'block', alignItems: 'center', backgroundColor: "white", padding: "0px 20px" }}>
                <Row gutter={16} align="middle">
                    <Col span={10}>
                        <div className="nav-link">
                            <a href="#">
                                <PropertySafetyOutlined style={{ fontSize: "14px", marginRight: "3px", color: "rgb(96 90 90)" }} />
                                Daily Deals
                            </a>
                            <a href="#" style={{
                                padding: "0px 3px"
                            }}>
                                <ShopOutlined style={{ fontSize: "14px", marginRight: "3px", color: "rgb(96 90 90)" }} />
                                Brand Outlet
                            </a>
                            <a href="#">
                                <GiftOutlined style={{ fontSize: "14px", marginRight: "3px", color: "rgb(96 90 90)" }} />
                                Gift divs
                            </a>
                            <a href="#">
                                <WhatsAppOutlined style={{ fontSize: "14px", marginRight: "3px", color: "rgb(96 90 90)" }} />
                                Help & Contact
                            </a>
                        </div>
                    </Col>
                    <Col span={6}>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <div className="action-item">
                            <a href="#">Sell</a>
                            <a href='#'>About Us</a>
                            <a href="#">Login</a>
                            <a href="#">Register</a>
                        </div>
                    </Col>
                </Row>
                <div className='logo-search' style={{ display: "flex", marginLeft: "94px" }}>
                    <div>
                        <a href="/" >
                            <img src={`${process.env.PUBLIC_URL}/ebuy-logo.png`} alt="logo" style={{width: "99px"}}/>
                        </a>
                    </div>
                    <Form
                        form={form}
                        style={{ display: "flex", width: "85%" }}
                    >
                        <Form.Item
                            name='search'
                            style={{ width: "100%" }}
                        >
                            <Input style={{
                                height: "51px",
                                position: "relative",
                                top: "44px",
                                left: "20px",
                                width: "100%"
                            }} />
                        </Form.Item>
                        <SearchOutlined
                            style={{
                                position: "relative",
                                fontSize: "30px",
                                top: " 51px",
                                right: " 27px",
                                borderLeft: "1px solid #c2baba",
                                height: "25px",
                                padding: "8px",
                                color: "#646060"
                            }}
                            onClick={() => Search()} />
                    </Form>
                    <div className='cart'>
                        <ShoppingCartOutlined
                            style={{
                                position: "relative",
                                fontSize: "36px",
                                top: "57px",
                                color: "#4b4949"
                            }}
                        />
                    </div>
                </div>
            </div>
            <Content className="content">
                {children}
            </Content>
        </div>
    );
};

export default MainLayout;