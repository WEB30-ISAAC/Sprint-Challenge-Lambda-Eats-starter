import React from "react";

function User({ details }) {
    if(!details) {
        return <h3>Working to Fetch your User&apos;s details</h3>
    }
    return (
        <div className='user'>
            <h2>Congrats!! Your order has been placed!</h2>
            <h3>Customer Name: {details.first_name}</h3>
            <p>Pizza Size: {details.medium ? 'Medium' : 'Large'}</p>
            <p>Pizza Sauce: {details.tomatobased ? 'Tomato Based Sauce' : 'Buffalo Chicken Sauce'}</p>
            <p>Special Instructions: {details.instructions}</p>


            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {
                        details.toppings.map((like, idx) => <li key={idx}>{like}</li>)
                        }
                    </ul>
                </div>
            }
        </div>
    )
};

export default User;