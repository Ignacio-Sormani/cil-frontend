import React from 'react';
import './login.css';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import { Formik } from 'formik';
import {
  emailValidation,
  passwordValidation,
  requiredValidation,
  numberValidation
} from '../../../helpers/validations';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';

class Login extends React.Component {
  render() {
    return (
      <>
        <Header historyProp={this.props.history} />
        <div className="newProduct-container">
          <h1>Nuevo Producto</h1>
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
              this.props.login(values).then(res => {
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
          <Formik
            initialValues={{
              name: '',
              description: '',
              category: '',
              price: '',
              stock: '',
              isActive: true,
              image: ''
            }}
            validate={values => {
              const errors = {};
              errors.name = requiredValidation(values.name);
              errors.description = requiredValidation(values.description);

              /*} errors.stock = numberValidation(values.stock);
            errors.price = numberValidation(values.price);{*/

              if (
                errors.name ||
                errors.description ||
                errors.price ||
                errors.stock
              ) {
                return errors;
              } else {
                return {};
              }
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);

              /* this.props.loginThunk(values).then(res => {
                if (res.type === 'LOGIN_FULFILLED') {
                  this.props.history.push('/private');
                } else {
                  setSubmitting(false);
                }
              });*/
            }}
          >
            {({
              values /*valores de form en cada momento*/,
              errors /*errores que surgen por incumplir validaciones*/,
              touched /*true o false para saber si cambio el valor del field */,
              handleChange /*actialisa el valor del field cuando pones un valor */,
              handleSubmit /*funcion que se ejecuta cuando haces click en el boton( el onSubmit 119 y 126) */,
              isSubmitting /*true o false para saber esta despachando el thunk (promesa del back) */
            }) => (
              <form onSubmit={handleSubmit} className="post-product-form">
                <TextField
                  id="name-field"
                  label="Nombre" /**PLACE HOLDER */
                  variant="outlined"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name && touched.name ? true : false}
                  helperText={errors.name && touched.name ? errors.name : ' '}
                />
                <TextField
                  id="description-field"
                  label="Descripcion"
                  variant="outlined"
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                  error={
                    errors.description && touched.description ? true : false
                  }
                  helperText={
                    errors.description && touched.description
                      ? errors.description
                      : ' '
                  }
                />
                <TextField
                  id="price-field"
                  label="Precio"
                  variant="outlined"
                  name="price"
                  onChange={handleChange}
                  value={values.price}
                  error={errors.price && touched.price ? true : false}
                  helperText={
                    errors.price && touched.price ? errors.price : ' '
                  }
                />
                <TextField
                  id="stock-field"
                  label="Stock"
                  variant="outlined"
                  name="stock"
                  onChange={handleChange}
                  value={values.stock}
                  error={errors.stock && touched.stock ? true : false}
                  helperText={
                    errors.stock && touched.stock ? errors.stock : ' '
                  }
                />
                <Checkbox
                  id="is-active-field"
                  label="Activo"
                  variant="outlined"
                  name="isActive"
                  onChange={handleChange}
                  value={values.isActive}
                />
                <Select
                  label="Categorias"
                  id="category-select"
                  variant="outlined"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                >
                  <MenuItem value="1">
                    <em>categorias</em>
                  </MenuItem>
                  <MenuItem value={10}>Viento</MenuItem>
                  <MenuItem value={20}>Percusion</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Button variant="outline" component="label">
                  Upload File
                  <input name="image" type="file" style={{ display: 'none' }} />
                </Button>
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
