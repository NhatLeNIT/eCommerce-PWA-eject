import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import Login from './containers/Back/Login';
import Home from './containers/Back/Home/Home';
import Page404 from './containers/Back/Errors/404';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';


class App extends Component {

    render() {
        let redirect = this.props.memberAuth.accessToken !== '' ? (
            <Redirect from="/admin/login" to="/admin" exact />
        ) : (
                <Redirect from="/admin" to="/admin/login" />
            )

        return (
            <Fragment>
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="bottom-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick />
                <Switch>
                    {/* {redirect} */}
                    {/* <Route path="/admin" exact component={Home} /> */}
                    <Route path="/admin/login"  component={Login} />
                    <Route component={Page404} />
                    
                </Switch>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        memberAuth: state.memberLogin
    }
}

export default connect(mapStateToProps, null)(App);
