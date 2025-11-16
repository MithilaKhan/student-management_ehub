"use client"
import InputField from "@/shared/InputField";
import { Checkbox, Form, Input } from "antd";
import React from "react";
const Login = () => {

  return (
    <div
    >
      <div className=" mb-6">
        <h1 className="text-[25px] font-semibold mb-2">Log in to your account</h1>
        <p className="text-[#11D279]"> Please enter your email and password to continue</p>
      </div>
      <Form
        layout="vertical"
      >

        <InputField name={"email"} label={"Email"} />

        <Form.Item
          name="password"
          label={<p>Password</p>}
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Enter your password"
            style={{
              height: 48,
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none"
            }}
          />
        </Form.Item>

        <div className="flex items-center justify-between">
          <Form.Item style={{ marginBottom: 0 }} name="remember" valuePropName="checked" >
            <Checkbox defaultChecked>Remember me</Checkbox>
          </Form.Item>

          <a
            className="login-form-forgot text-primary font-semibold"
            href="/forgot-password"
          >
            Forgot password
          </a>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <button
            type="submit"
            style={{
              width: '100%',
              height: 45,
              color: "white",
              fontWeight: "400px",
              fontSize: "18px",

              marginTop: 20
            }}
            className="flex items-center justify-center bg-[#1A5FA4] rounded-lg"
          >
            Sign in
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;