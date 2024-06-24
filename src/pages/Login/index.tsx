import React from "react";
import styles from "./index.less";
import { Button, Card, Checkbox, Form, Input, message } from "antd";
import { useRequest } from "ahooks";
import { login } from "@/service/user";
import { history } from "umi";

const Login: React.FC = () => {
  const { run: doLogin } = useRequest(login, {
    manual: true,
    onSuccess: (res) => {
      message.success("登陆成功");
      setTimeout(() => {
        history.push("/home");
      }, 1000);
    },
  });
  // 提交表单
  const onFinish = (values: any) => {
    doLogin(values);
  };
  return (
    <div className={styles.login_box}>
      <Card title="用户登陆" bordered={false} style={{ width: "400px" }}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ width: "300px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="userPassword"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button
              style={{ marginRight: "40px" }}
              onClick={() => history.push("/register")}
            >
              注册
            </Button>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
