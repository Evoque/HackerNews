
import React from 'react';
import {Form, Icon, Input, Button, Checkbox, } from 'antd';
import styles from './Login.less';

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        console.log('what??');
        return (
            <div className={styles.loginContainer}> 
                <h1>Hacker News</h1>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className={styles.forgot} href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className={styles.loginBtn}> Log in </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create({name: 'normal_login'})(NormalLoginForm); 
