import { Layout, theme, Form, Input, Switch, Button, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const { Header, Content, Sider } = Layout;

const initialValues = { name: '', email: '', phone: '', role: '', isActive: false }
const CreateEmployee = () => {
    // const [form] = Form.useForm();
    const navigate = useNavigate();
    const [isActive, setActive] = useState(false)
    const onFinish = async (value) => {
        console.log(value);
        try {
            const newEmp = await axios.post('https://nice-teal-calf-wear.cyclic.app/employee/create', value)
            console.log('newEmp', newEmp);
            navigate('/employees')
        } catch (error) {
            console.log(error);
        }
        
    }

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return <Layout>
        <Typography typeof='secondary' style={{ marginLeft: 10, marginTop: 8, }}>Create Employee</Typography>
        <Content
            style={{
                display: "flex",
                justifyContent: "center",
                padding: 24,
                margin: 8,
                width: "80vw",
                background: colorBgContainer,
            }}
        >
            <Form
                // form={form}
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 80,
                }}
                layout="horizontal"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                initialValues={initialValues}
            >
                <Form.Item label="Name" name="name" rules={[
                    {
                        required: true,
                        message: 'Please input your Name!',
                    },
                ]} required >
                    <Input placeholder="Employee Name" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input placeholder="Employee Email" />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input placeholder="Employee Phone" />
                </Form.Item>
                <Form.Item
                    label="Role"
                    name="role"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your role!',
                        },
                    ]}
                >
                    <Input placeholder="Employee Role" />
                </Form.Item>
                <Form.Item label="Availability Status" name="isActive" valuePropName='checked'>
                    <Switch onChange={() => setActive(!isActive)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Add Employee</Button>
                </Form.Item>
            </Form>
        </Content>
    </Layout>
}

export default CreateEmployee