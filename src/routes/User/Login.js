
import React from 'react';
import {Form, Icon, Input, Button, Checkbox, } from 'antd';
import {connect} from 'dva';
import styles from './Login.less';

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const {form, dispatch} = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                const {username} = values;
                dispatch({type: 'modelGlobal/QUERY_USER', payload: {username}});
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className={styles.loginContainer}>
                <h1>Hacker News</h1>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {})(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                                type="password" placeholder="Password (type anything or leave it alone)"
                            />
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

export default connect()(Form.create()(Login)); 
