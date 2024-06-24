import React from "react";
import { Button, Form, Input, message } from "antd";
import {useRequest} from 'ahooks'
import styles from './index.less';
import { registerUser } from "@/service/user";
import { history } from "umi";

const Register: React.FC = () => {

  const [form] = Form.useForm();
  const {run: doRegister} = useRequest(registerUser, {
    manual: true,
    onSuccess: res =>{
      if(res) {
        message.success('恭喜你，注册成功！');
        form.resetFields();
        setTimeout(() =>{
          history.push('/login');
        },2000)
      }
    }
  })
  
    const onFinish = () =>{
        form.validateFields().then(values =>{
          doRegister(values);
        })
        
    }
  return (
    <div className={styles.reg_box}>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="userPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
