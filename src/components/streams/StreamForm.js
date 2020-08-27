import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';

class StreamForm extends Component {
    getTextBox = (formProps) => {
        //console.log(formProps)
        return (
            <div className="form-group">
                <label className="">{formProps.label}</label>
                <input className="form-control" {...formProps.input} autoComplete="off" />
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        );
    }

    renderError = (meta) => {
        if (meta.error && meta.touched) {
            return (
                <div className="text-danger">
                    * {meta.error}
                </div>
            );
        }
    }

    onSubmit = (formEle) => {
        this.props.onSubmit(formEle);
    }


    render() {
        //console.log(this.props);
        return <div>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.getTextBox} label="Name" />
                <Field name="description" component={this.getTextBox} label="Description" />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    }
}

const validate = (formVal) => {
    const error = {}
    if (!formVal.name) {
        error.name = "Please enter name";
    }
    if (!formVal.description) {
        error.description = "Please enter description";
    }
    return error;
}

// const formWrap =  reduxForm({
//     form: 'streamCreate',
//     validate: validate
// })(StreamForm);

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamForm);