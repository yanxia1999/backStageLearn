import React from "react";
import {Button, Layout, Avatar, Dropdown} from 'antd';
import { MenuFoldOutlined,SmileOutlined } from '@ant-design/icons';
import {useDispatch} from "react-redux";
import {collapseMenu} from "../../store/reducers/tab";
import './index.css';


const {Header} = Layout;

const CommonHeader = ({isCollapse}) => {
    const dispatch = useDispatch()
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    个人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={()=>logOut()} target="_blank" rel="noopener noreferrer">
                    退出
                </a>
            ),
            icon: <SmileOutlined/>
        }
    ];

    const logOut = ()=>{

    }

    const handlerClick=()=>{
        dispatch(collapseMenu())
    }
    return (
        <Header
            className="header-container"
        >
            <Button
                onClick={()=>handlerClick()}
                type="text"
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: "white"
                }}
                icon={<MenuFoldOutlined/>}
            />

        <Dropdown
            menu={{items}}
        >
            <Avatar src={<img src={require('../../assets/images/user.png')}/>}></Avatar>
        </Dropdown>
        </Header>
    )
}
export default CommonHeader;