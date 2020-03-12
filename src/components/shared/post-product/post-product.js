import React from 'react';
import './post-product.css';
import { Formik } from 'formik';
import {
  requiredValidation,
  numberValidation,
  categoryValidation
} from '../../../helpers/validations';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class postproduct extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    return (
      <>
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
            errors.stock = numberValidation(values.stock);
            errors.price = numberValidation(values.price);
            errors.category = categoryValidation(values.category);
            if (
              errors.name ||
              errors.description ||
              errors.price ||
              errors.stock ||
              errors.category
            ) {
              return errors;
            } else {
              return {};
            }
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.props
              .postProduct(values)
              .then(() => {
                setSubmitting(false);
              })
              .catch(err => {
                setSubmitting(false);
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
            <form onSubmit={handleSubmit} className="post-product-form">
              <h1>Post Product</h1>
              <TextField
                id="name-field"
                label="Nombre"
                variant="outlined"
                name="name"
                className="field"
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
                className="field"
                onChange={handleChange}
                value={values.description}
                error={errors.description && touched.description ? true : false}
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
                className="field"
                onChange={handleChange}
                value={values.price}
                error={errors.price && touched.price ? true : false}
                helperText={errors.price && touched.price ? errors.price : ' '}
              />
              <TextField
                id="stock-field"
                label="Stock"
                variant="outlined"
                name="stock"
                className="field"
                onChange={handleChange}
                value={values.stock}
                error={errors.stock && touched.stock ? true : false}
                helperText={errors.stock && touched.stock ? errors.stock : ' '}
              />
              <FormControl
                variant="outlined"
                error={errors.category && touched.category ? true : false}
              >
                <InputLabel>Categorias</InputLabel>
                <Select
                  label="Categorias"
                  id="category-select"
                  variant="outlined"
                  name="category"
                  className="field"
                  value={values.category}
                  onChange={handleChange}
                  error={errors.category && touched.category ? true : false}
                >
                  {this.props.categoryList.map(category => (
                    <MenuItem key={category._id} value={category}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControlLabel
                className="field form-control-label"
                control={
                  <Checkbox
                    id="is-active-field"
                    label="Activo"
                    variant="outlined"
                    name="isActive"
                    onChange={handleChange}
                    checked={values.isActive}
                  />
                }
                label="Activo"
                labelPlacement="start"
              />
              {
                // TO DO: save images from frontend
              }
              <Button
                variant="contained"
                type="submit"
                className="post-product-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <CircularProgress color="secondary" size={15} />
                ) : (
                  'Guardar Producto'
                )}
              </Button>
            </form>
          )}
        </Formik>
      </>
    );
  }
}

export default postproduct;
