import React from 'react';
import {Form, Modal} from 'antd';
import md5 from 'md5';
import reqwest from 'reqwest';
import pub from '../js/pub.js';
import Redirect from 'react-router-dom';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                //组织参数
                let data = pub.baseValue
                data.fcn = "QueryHistory"
                data.args = values.accound
                console.log(JSON.stringify(data))
                //请求block  todo
                reqwest({
                    url: pub.blockchainUrl + '/query',
                    method: 'post',
                    crossOrigin: true,
                    data: data,
                    type: 'json',
                }).then((data) => {
                    if (data.resultValue.length == 0) {
                        Modal.error({
                            title: 'This is an error message',
                            content: (
                                <div>
                                    <p>帐号错误！</p>
                                </div>
                            )
                        });
                    } else {
                        if (md5(values.password) == data.resultValue[0].Value.Password) {
                            pub.setCookie("baseAdmin", md5(data.resultValue[0].Value.Name), 1);
                            location.replace("#/menu"); //或改location.hash
                        } else {
                            Modal.error({
                                title: 'This is an error message',
                                content: (
                                    <div>
                                        <p>密码错误！</p>
                                    </div>
                                )
                            });
                        }
                    }


                }).fail(function (err, msg) {
                    alert(JSON.stringify(err))
                    console.log(JSON.stringify(msg))
                }).always(function (resp) {
                });

            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div style={{width: 300, margin: '0px auto'}}>
                <Form onSubmit={this.handleSubmit} id="components-form-demo-normal-login">
                    <FormItem>
                        {getFieldDecorator('accound', {
                            rules: [{required: true, message: '请输入帐号!'}],
                        })(
                            <input className="input-a" style={{height: 40}} placeholder="帐 号"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码!'}],
                        })(
                            <input className="input-a" style={{height: 40}} type="password"
                                   placeholder="密 码"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <button id="login-btn" style={{height: 40, width: 250}} type="primary"
                                className="login-form-button">
                            <h4 style={{marginTop: '-8'}}>登 录</h4>
                        </button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
module.exports = WrappedNormalLoginForm;