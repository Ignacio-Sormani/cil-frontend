import React from 'react';
import './login.css';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import { Formik } from 'formik';
import {
  emailValidation,
  passwordValidation
} from '../../../helpers/validations';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

class Login extends React.Component {
  render() {
    return (
      <>
        <Header historyProp={this.props.history} />
        <div className="login-container">
          <h1>LOGIN</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              errors.email = emailValidation(values.email);
              errors.password = passwordValidation(values.password);
              if (errors.password || errors.email) {
                return errors;
              } else {
                return {};
              }
            }}
            onSubmit={(values, { setSubmitting }) => {
              this.props.loginThunk(values).then(res => {
                if (res.type === 'LOGIN_FULFILLED') {
                  this.props.history.push('/private');
                } else {
                  setSubmitting(false);
                }
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting
            }) => (
              <form onSubmit={handleSubmit} className="login-form">
                <TextField
                  id="email-field"
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  error={errors.email && touched.email ? true : false}
                  helperText={
                    errors.email && touched.email ? errors.email : ' '
                  }
                />
                <TextField
                  id="password-field"
                  type="password"
                  label="Contraseña"
                  variant="outlined"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  error={errors.password && touched.password ? true : false}
                  helperText={
                    errors.password && touched.password ? errors.password : ' '
                  }
                />
                <div className="errMsg">
                  {this.props.error && 'Su email o contraseña son incorrectos!'}
                </div>
                <Button
                  variant="contained"
                  type="submit"
                  className="login-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <CircularProgress color="secondary" size={15} />
                  ) : (
                    'LOGIN'
                  )}
                </Button>
              </form>
            )}
          </Formik>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
