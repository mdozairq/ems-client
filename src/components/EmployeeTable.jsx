import { useState, useContext } from 'react';
import { Layout, theme, Table, Divider, Tag ,Typography} from 'antd'
import { EmployeeStoreContext } from '../context/context';

const { Header, Content, Sider } = Layout;



const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <span>{text}</span>
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone"
    },
    {
        title: "Role",
        dataIndex: "role",
        key: "role"
    },
    {
        title: "Availability Status",
        key: "isActive",
        dataIndex: "isActive",
        render: (isActive, _id) => (
            <span>
                {
                    (
                        <Tag color={isActive ? "green" : "red"} key={_id}>
                            {isActive ? "Active" : "Inactive"}
                        </Tag>
                    )}
            </span>
        )
    },
];

const Employee = () => {
    const { state: { data } } = useContext(EmployeeStoreContext);
    
    const [select, setSelect] = useState({
        selectedRowKeys: [],
        loading: false
    });
    
    const { selectedRowKeys, loading } = select;

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys) => {
            setSelect({
                ...select,
                selectedRowKeys: selectedRowKeys
            });
        }
    }

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return <Layout>
        <Typography typeof='secondary' style={{marginLeft: 10,marginTop: 8,}}>Employee List</Typography>
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
        <Table
            dataSource={data && data.employee_list}
            columns={columns}
            loading={loading}
            pagination={{
                showQuickJumper: true,
                defaultPageSize: 10,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "30"]
            }}
            style={{ width: "100%" }}
        />
    </Content>
    </Layout>
}

export default Employee