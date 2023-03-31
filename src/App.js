import "antd/dist/reset.css";
import { useEffect, useState, admineducer, useContext } from "react";
import { Menu } from 'antd';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { UserOutlined, UnorderedListOutlined, UserAddOutlined, LogoutOutlined, UserSwitchOutlined } from '@ant-design/icons'
import Login from "./components/Login";
import Employee from "./components/EmployeeTable";
import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import { fetchEmployeeList } from "./services";
import { EmployeeStoreContext } from "./context/context";
import { FETCH_EMPLOYEE_LIST } from "./constants/actionTypes";
import axios from "axios";


function App() {
  const [admin, setAdmin] = useState(true);
  const [employee, setEmployee] = useState();
  const navigate = useNavigate();
  const { state: { data }, EmployeeStoreContextDispatch } = useContext(EmployeeStoreContext);

  const getEmployeeList = async () => {
    const emplist = await axios.get('https://nice-teal-calf-wear.cyclic.app/employee?page_size=5&page=0')
    setEmployee(emplist.data.data);
    EmployeeStoreContextDispatch({
      type: FETCH_EMPLOYEE_LIST,
      payload: emplist.data.data
    })
    return emplist.data.data;
  }
 console.log(employee, data);
  useEffect(() => {
      getEmployeeList();
  }, [])

  const allItems = [,
    { label: "Employees", icon: <UnorderedListOutlined />, key: '/employees' },
    { label: "Create Employee", icon: <UserAddOutlined />, key: '/create' },
    { label: "Update Employee", icon: <UserSwitchOutlined />, key: '/update' },
    { label: "Signout", icon: <LogoutOutlined />, key: 'signout', danger: true }
  ]


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        flex: 1,
        height: '100vh',
      }}
    >
      <Header active={employee && employee.active_employe} total={employee && employee.total_employee} admin={admin} />
      {!admin ?
        <Routes>
          <Route path="/auth" element={<Login admin={admin} setAdmin={setAdmin} />}></Route>
        </Routes>
        : <div style={{ display: 'flex', flex: 1, width: "100vw", height: "80vh", overflow: "hidden", overflowY: "scroll" }}>
          <SideMenu allItems={allItems} navigate={navigate} admin={admin} setAdmin={setAdmin} />
          <Content />
        </div>
      }
      <Footer />
    </div>
  );
}

function Header({admin, active, total}) {
  return (
    <div
      style={{
        height: 60,
        background: 'skyBlue',
       
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bolder',
        padding: 8
      }}
    ><div style={{ paddingLeft: 8 }}>EMPLOYEE MANAGEMENT SYSTEM</div>
      <div style={{ paddingRight: 8,  fontFamily: 'monospace', color:"gray" }}>{admin && `Active: ${active}/${total}`}</div>
    </div>
  )
}

function Footer() {
  return (
    <div
      style={{
        height: 60,
        background: 'gray',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bolder'
      }}
    >Made by ozair.co</div>
  )
}

function SideMenu({ allItems, navigate, admin, setAdmin }) {
  return (
    <div style={{
      height: "100%",
      width: "20vw"
    }}>
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
            admin ? setAdmin(false) : setAdmin(true)
            navigate('/auth')
          } else {
            navigate(key)
          }
        }}
        items={allItems} />
    </div>)
}

function Content() {
  return (<div>
    <Routes>
      <Route path="/employees" element={<Employee />}></Route>
      <Route path="/create" element={<CreateEmployee />}></Route>
      <Route path="/update" element={<UpdateEmployee />}></Route>
    </Routes>
  </div>)
}

export default App;
