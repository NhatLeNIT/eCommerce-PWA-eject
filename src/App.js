import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div className="app-content content">
                <div className="content-wrapper">
                    <div className="content-header row">
                    </div>
                    <div className="content-body">
                        <section className="flexbox-container">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="col-md-4 col-10 box-shadow-2 p-0">
                                    <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                                        <div className="card-header border-0">
                                            <div className="card-title text-center">
                                                <img src="images/logo/stack-logo-dark.png" alt="branding logo" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                           
                                            <div className="card-body">
                                                <form className="form-horizontal" action="index.html" noValidate>
                                                    <fieldset className="form-group position-relative has-icon-left">
                                                        <input type="text" className="form-control" id="user-name" placeholder="Your Username" required />
                                                        <div className="form-control-position">
                                                            <i className="ft-user" />
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="form-group position-relative has-icon-left">
                                                        <input type="password" className="form-control" id="user-password" placeholder="Enter Password" required />
                                                        <div className="form-control-position">
                                                            <i className="fa fa-key" />
                                                        </div>
                                                    </fieldset>
                                                    <div className="form-group row">
                                                        <div className="col-md-6 col-12 text-center text-sm-left">
                                                            <fieldset>
                                                                <input type="checkbox" id="remember-me" className="chk-remember" />
                                                                <label htmlFor="remember-me"> Remember Me</label>
                                                            </fieldset>
                                                        </div>
                                                        <div className="col-md-6 col-12 float-sm-left text-center text-sm-right"><a href="recover-password.html" className="card-link">Forgot Password?</a></div>
                                                    </div>
                                                    <button type="submit" className="btn btn-outline-primary btn-block"><i className="ft-unlock" /> Login</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
