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
            <h2>Order Pizza Here</h2>
            <div className='errors'>
                <p>{errors.first_name}</p>
                <p>{errors.pizza_size}</p>
                <p>{errors.pizza_sauce}</p>
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

            <label><input
                checked={values.toppings.mushrooms}
                onChange={onCheckboxChange}
                name='mushrooms'
                type="checkbox" /> Mushrooms
            </label>
            <label><input
                checked={values.toppings.pepperoni}
                onChange={onCheckboxChange}
                name='pepperoni'
                type="checkbox" /> Pepperoni
            </label>
            <label><input
                checked={values.toppings.sausage}
                onChange={onCheckboxChange}
                name='sausage'
                type="checkbox" /> Sausage
            </label>

            <label>Special Instructions:&nbsp;
                <input
                    value={values.instructions}
                    onChange={onInputChange}
                    name='instructions'
                    type='text'
                    >
                </input>
            </label>

            <button onClick={onSubmit} disabled={disabled}>submit</button>

        </form>

    )
};

export default Form;