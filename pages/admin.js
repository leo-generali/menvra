import { Component, Fragment } from 'react';
import axios from 'axios';
import { Formik, Field, Form, FieldArray } from 'formik';

import { P } from '../styles/typography';

class Admin extends Component {
  // componentDidMount() {
  //   axios
  //     .get('/api/gradients')
  //     .then((response) => this.setState({ gradients: response.data }));
  // }

  _submitNewGradient = (values) => {
    axios.post('/api/gradients', values);
  };

  render() {
    const initialValues = {
      name: '',
      tags: [''],
      default_deg: '',
      colors: [
        {
          color: '',
          percent: ''
        }
      ]
    };

    const labelStyle = {
      fontSize: '1.6rem'
    };

    const inputStyle = {
      display: 'flex'
    };

    return (
      <div>
        <P>Admin Page</P>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            this._submitNewGradient(values);
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <div>
                <label style={labelStyle} htmlFor="name">
                  Name
                </label>
                <Field name="name" type="text" />
              </div>
              <div>
                <label style={labelStyle} htmlFor="default_deg">
                  Degree
                </label>
                <Field name="default_deg" type="text" />
              </div>
              <FieldArray name="tags">
                {({ remove, insert }) => (
                  <Fragment>
                    {values.tags.map((_, index) => (
                      <div style={inputStyle} key={index}>
                        <div>
                          <label style={labelStyle} htmlFor="tags">
                            Tag:
                          </label>
                          <Field name={`tags[${index}]`} type="text" />
                        </div>
                        <button type="button" onClick={() => insert(index, '')}>
                          Add tag
                        </button>
                        <button type="button" onClick={() => remove(index)}>
                          Remove tag
                        </button>
                      </div>
                    ))}
                  </Fragment>
                )}
              </FieldArray>
              <FieldArray name="colors">
                {({ remove, insert }) => (
                  <Fragment>
                    {values.colors.map((_, index) => (
                      <div style={inputStyle} key={index}>
                        <div>
                          <label style={labelStyle} htmlFor="colors">
                            Color:
                          </label>
                          <Field name={`colors[${index}].color`} type="text" />
                        </div>
                        <div>
                          <label style={labelStyle} htmlFor="colors">
                            Percent:
                          </label>
                          <Field
                            name={`colors[${index}].percent`}
                            type="number"
                          />
                        </div>
                        <button type="button" onClick={() => insert(index, '')}>
                          Add color
                        </button>
                        <button type="button" onClick={() => remove(index)}>
                          Remove color
                        </button>
                      </div>
                    ))}
                  </Fragment>
                )}
              </FieldArray>
              <button style={{ marginTop: 10 }} type="submit">
                Create Gradient
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Admin;
