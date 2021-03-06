import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------------- Form Set -----------------------------------------------
export const FormSet = ({ children, className }) => {
    return <div className={`fd-form__set${className ? ' ' + className : ''}`}>{children}</div>;
};
FormSet.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------------- Form Item -----------------------------------------------
export const FormItem = ({ isCheck, isInline, children, className }) => {
    return (
        <div
            className={`fd-form__item${isInline ? ' fd-form__item--inline' : ''}${
                isCheck ? ' fd-form__item--check' : ''
            }${className ? ' ' + className : ''}`}>
            {children}
        </div>
    );
};
FormItem.propTypes = {
    className: PropTypes.string,
    isCheck: PropTypes.bool,
    isInline: PropTypes.bool
};

// ------------------------------------------------- Form Label ----------------------------------------------
export const FormLabel = ({ required, children, className, ...props }) => {
    return (
        <label className={`fd-form__label${required ? ' is-required' : ''}${className ? ' ' + className : ''}`} {...props}>
            {children}
        </label>
    );
};
FormLabel.propTypes = {
    className: PropTypes.string,
    required: PropTypes.bool
};

// ------------------------------------------------- Form Message ----------------------------------------------
export const FormMessage = ({ type, children, className, ...props }) => {
    return <span className={`fd-form__message${type ? '  fd-form__message--' + type : ''}${className ? ' ' + className : ''}`} {...props}>{children}</span>;
};
FormMessage.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['', 'error', 'warning', 'help'])
};

// ------------------------------------------------- Form Input ----------------------------------------------
export const FormInput = ({ state, className, ...props }) => {
    return (
        <input
            className={`fd-form__control${state ? ' is-' + state : ''}${className ? ' ' + className : ''}`}
            {...props} />
    );
};
FormInput.propTypes = {
    className: PropTypes.string,
    state: PropTypes.string
};

// ------------------------------------------------- Form Textarea ----------------------------------------------
export const FormTextarea = ({ children, className, ...props }) => {
    return (
        <textarea className={`fd-form__control${className ? ' ' + className : ''}`} {...props}>
            {children}
        </textarea>
    );
};
FormTextarea.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------------- Form Fieldset ----------------------------------------------
export const FormFieldset = ({ children, className, ...props }) => {
    return <fieldset className={`fd-form__set${className ? ' ' + className : ''}`} {...props}>{children}</fieldset>;
};
FormFieldset.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------------- Form Legend ----------------------------------------------
export const FormLegend = ({ children, className, ...props }) => {
    return <legend className={`fd-form__legend${className ? ' ' + className : ''}`} {...props}>{children}</legend>;
};
FormLegend.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------------- Form Select ----------------------------------------------
export const FormSelect = ({ disabled, children, className, ...props }) => {
    return (
        <select className={`fd-form__control${className ? ' ' + className : ''}`} {...props}
            disabled={disabled ? true : ''}>
            {children}
        </select>
    );
};
FormSelect.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool
};

// ------------------------------------------------- Form Radio ----------------------------------------------
export class FormRadio extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectedItem: this.props.defaultChecked
        };
    }

    handleChange(e) {
        this.setState({
            selectedItem: e.currentTarget.value
        });
    }

    render() {
        const { inputs, disabled, isInline } = this.props;
        let result;

        if (isInline) {
            result = inputs.map(inputItem => (
                <div className='fd-form__item fd-form__item--inline fd-form__item--check' key={inputItem.id}>
                    <label className='fd-form__label' htmlFor={inputItem.id}>
                        <input
                            className='fd-form__control'
                            type='radio'
                            id={inputItem.id}
                            name={inputItem.name}
                            value={inputItem.value}
                            disabled={disabled ? true : ''}
                            onChange={this.handleChange}
                            checked={this.state.selectedItem === inputItem.id} />
                        {inputItem.label}
                    </label>
                </div>
            ));
        } else {
            result = inputs.map(inputItem => (
                <div className='fd-form__item fd-form__item--check' key={inputItem.id}>
                    <input
                        className='fd-form__control'
                        type='radio'
                        id={inputItem.id}
                        name={inputItem.name}
                        value={inputItem.value}
                        disabled={disabled ? true : ''}
                        onChange={this.handleChange}
                        checked={this.state.selectedItem === inputItem.id} />
                    <label className='fd-form__label' htmlFor={inputItem.id}>
                        {inputItem.label}
                    </label>
                </div>
            ));
        }
        return <div>{result}</div>;
    }
}
FormRadio.propTypes = {
    defaultChecked: PropTypes.string,
    disabled: PropTypes.bool,
    isInline: PropTypes.bool
};
