import { Button, Form, Input } from 'antd';
import { LockOutlined, adminOutlined } from '@ant-design/icons'
import {useNavigate} from 'react-router-dom';
import  axios from 'axios';
import React from 'react';

const Login = ({admin, setAdmin}) => {
    const navigate = useNavigate();
    const onFinish = async(value) => {
        console.log(value);
        const admin = await axios.post('https://nice-teal-calf-wear.cyclic.app/auth/login', value);
        console.log(admin);
        setAdmin(true)
        navigate('/employees')
    };
    return (
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}
            style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
                alignItems: 'center'
            }}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input prefix={<adminOutlined className="site-form-item-icon" />} placeholder="admin email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block >
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Login;