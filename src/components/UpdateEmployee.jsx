import { Layout, theme, Form, Input, Switch, Button, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;


const UpdateEmployee = () => {
    const [form] = Form.useForm();


    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    return <Layout>
         <Typography typeof='secondary' style={{marginLeft: 10,marginTop: 8,}}>Update Employee</Typography>
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
                form={form}
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
            //   initialValues={{
            //     requiredMarkValue: requiredMark,
            //   }}
            //   onValuesChange={onRequiredTypeChange}
            //   requiredMark={requiredMark}
            >
                <Form.Item label="Name" required >
                    <Input placeholder="Employee Name" />
                </Form.Item>
                <Form.Item
                    label="Email"
                >
                    <Input placeholder="Employee Email" />
                </Form.Item>
                <Form.Item
                    label="Phone"
                >
                    <Input placeholder="Employee Phone" />
                </Form.Item>
                <Form.Item
                    label="Role"
                >
                    <Input placeholder="Employee Role" />
                </Form.Item>
                <Form.Item label="Availability Status" valuePropName="checked">
                    <Switch />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Update Employee</Button>
                </Form.Item>
            </Form>
        </Content>
    </Layout>
}

export default UpdateEmployee