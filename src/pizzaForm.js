import React from "react";

function Form(props) {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <form className='container'>
            <h2>User Form</h2>
            <div className='errors'>
                <p>{errors.first_name}</p>
                {/* <p>{errors.last_name}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p> */}
                <p>{errors.tos}</p>
            </div>

            <label>Name:&nbsp;
                <input
                    data-cy_firstname_input='firstname_input'
                    value={values.first_name}
                    onChange={onInputChange}
                    name='first_name'
                    type='text'
                />
            </label>

            <label>Pizza Size:&nbsp;
                <select
                    value={values.pizza_size}
                    onChange={onInputChange}
                    name='pizza_size'
                    >
                    <option defaultValue=''>Please choose</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>

            <label>Pizza Sauce:&nbsp;
                <select
                    value={values.pizza_sauce}
                    onChange={onInputChange}
                    name='pizza_sauce'
                    >
                    <option defaultValue=''>Please choose</option>
                    <option value='tomatobased'>Tomato Based Sauce</option>
                    <option value='buffalochicken'>Buffalo Chicken Sauce</option>
                </select>
            </label>

            <label>Password:&nbsp;
                <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                />
            </label>

            <label>
                <input
                    checked={values.tos}
                    onChange={onCheckboxChange}
                    name='tos'
                    type="checkbox" 
                /> Accept Terms of Service     
            </label>

            <button onClick={onSubmit} disabled={disabled}>submit</button>

        </form>

    )
};

export default Form;