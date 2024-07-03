import React,{useEffect} from "react";
import {Col, Row, Card} from 'antd';
import './home.css'
import {getUserInfo} from '../../api/user'
const Home = () => {
    const userImg = require(('../../assets/images/user.png'))
    useEffect(()=>{
        getUserInfoDemo()
    },[])
    const getUserInfoDemo =async () => {
        const res = await getUserInfo()
        console.log(res,'----------res')
    }
    return (
        <div>
            <Row className="home">
                <Col span={8}>
                    <Card
                        hoverable
                        bordered={false}
                    >
                        <div className="user">
                            <img src={userImg}/>
                            <div className="userinfo">
                                <p className="name">Admin</p>
                                <p className="access">超级管理员</p>
                            </div>
                        </div>
                        <div className="login-info">
                            <p>
                                上次登录时间:
                                <span>2024-7-2</span>
                            </p>
                            <p>
                                上次登录地点:
                                <span>杭州</span>
                            </p>
                        </div>
                    </Card>
                </Col>
                <Col span={16}>
                    111
                </Col>
            </Row>
        </div>
    )
}
export default Home;