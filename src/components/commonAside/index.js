import React from "react";
import MenuConfig from "../../config";
import { Layout, Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import {useDispatch} from "react-redux";
const { Sider } = Layout;
const iconToElement = (icon) => React.createElement(Icon[icon])

// 处理菜单数据
const items = MenuConfig.map((item) => {
    const child = {
        key:item.path,
        icon: iconToElement(item.icon),
        label: item.label
    }
    if(item.children){
        child.children = item.children.map((childItem) => {
            return {
                key: childItem.path,
                icon: iconToElement(childItem.icon),
                label: childItem.label
            }
        })
    }
    return child
})

// 动态获取icon

const CommonAside=({isCollapse})=>{
    const dispatch = useDispatch()
    console.log(isCollapse,'-----------isCollapse')
    return (
        <Sider trigger={null}
               collapsed={isCollapse}
               collapsible >
            <h3 style={{color:"white",height:'60px',lineHeight:'60px',textAlign:'center',fontWeight:'bold',fontSize:'20px'}}>{isCollapse?'后台':'通用后台管理系统'}</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
                style={{
                    height: '80%',
                }}
            />
        </Sider>
    )
}

export default CommonAside;
