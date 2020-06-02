import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username        : '',
            password        : '',
            passwordConfirm : '',
            fullname        : '',
            email           : '',
            phoneNumber     : '',
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

    onRegister = (event) => {
        let { username, password, passwordConfirm, fullname, email, phoneNumber } = this.state;
        if (password === passwordConfirm) {
            localStorage.setItem('user', JSON.stringify({
                username    : username,
                password    : password,
                fullname    : fullname,
                email       : email,
                phoneNumber : phoneNumber
            }));
        }
        event.preventDefault();
    }

    render() {

        let { username, password, passwordConfirm, fullname, email, phoneNumber } = this.state;

        return (
            <div className="modal fade" id="modal-login" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">ĐĂNG NHẬP / ĐĂNG KÝ</h4>
                        </div>
                        <div className="modal-body">
                            <ul className="nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#login_tab"><strong>ĐĂNG NHẬP</strong></a></li>
                                <li><a data-toggle="tab" href="#signup_tab"><strong>ĐĂNG KÝ</strong></a></li>
                            </ul>

                            <div className="tab-content">
                                <div id="login_tab" className="tab-pane fade in active">

                                    <form action="#login" style={{ marginTop: '20px' }} onSubmit={this.onLogin}>
                                        <div className="form-group">
                                            <label htmlFor="username" className="require-label">Tên đăng nhập</label>
                                            <input className="form-control" type="text" required id="username" name="username" value={username} onChange={this.onChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="require-label">Mật khẩu</label>
                                            <input className="form-control" type="password" required id="password" name="password" value={password} onChange={this.onChange} />
                                        </div>
                                        <div className="form-group">
                                            <a href="# ">Quên mật khẩu?</a>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-success btn-block">ĐĂNG NHẬP</button>
                                        </div>
                                    </form>
                                </div>
                                <div id="signup_tab" className="tab-pane fade">

                                    <form action="#register" onSubmit={this.onRegister} style={{ marginTop: '20px' }}>
                                        <div className="form-group">
                                            <label htmlFor="reusername" className="require-label">Tên đăng nhập</label>
                                            <input type="text" required id="reusername" name="username" className="form-control" value={username} onChange={this.onChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="repassword" className="require-label">Mật khẩu</label>
                                            <input type="password" required id="repassword" name="password" className="form-control" value={password} onChange={this.onChange}/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="repasswordCf" className="require-label">Xác nhận mật khẩu</label>
                                            <input type="password" required id="repasswordCf" name="passwordConfirm" className="form-control" value={passwordConfirm} onChange={this.onChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="refullname" className="require-label">Họ và tên</label>
                                            <input type="text" required id="refullname" name="fullname" className="form-control" value={fullname} onChange={this.onChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="reemail" className="require-label">Email</label>
                                            <input type="text" required id="reemail" name="email" className="form-control" value={email} onChange={this.onChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="rephonenumber" className="require-label">Số điện thoại</label>
                                            <input type="number" required id="rephonenumber" name="phoneNumber" className="form-control" value={phoneNumber} onChange={this.onChange} />
                                        </div>

                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> Tôi chấp nhận các <a href="# ">Điều khoản</a> và <a href="# ">Điều kiện</a>
                                            </label>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-success btn-block">ĐĂNG KÝ</button>
                                        </div>

                                    </form>

                                </div>
                            </div>

                        </div>



                    </div>
                </div>

            </div>
        )
    }
}
