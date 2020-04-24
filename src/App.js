import React, {useState, useEffect} from "react";
import {Route, Switch} from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import './App.css';

import Form from './pizzaForm'
import User from './pizzaOrder'

// const App = () => {
//   return (
//     <>
//       <h1>Lambda Eats</h1>
//       <p>You can remove this code and create your own header</p>
//     </>
//   );
// };
// export default App;

const url = 'https://reqres.in/api/users'
console.log(url)

const initialFormValues = {
  first_name: '',
  pizza_size: '',
  pizza_sauce: '',
  instructions: '',

  toppings: {
    mushrooms: false,
    pepperoni: false,
    sausage: false,
  }

}

const initialFormErrors = {
  first_name: '',
  pizza_size: '',
  pizza_sauce: '',
}

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(2, 'First Name must be atleast 2 characters')
    .required('Name is required'),
  instructions: yup
    .string(),
  pizza_size: yup
    .string()
    .matches(/(medium|large)/, 'either medium or large')
    .required('Pizza size is required'),
  pizza_sauce: yup
    .string()
    .matches(/(tomatobased|buffalochicken)/, 'either Tomato based or Buffalo Chicken sauce')
    .required('Pizza sauce is required'),
})

export default function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formDisabled, setFormDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  // const getUsers = () => {
  //   axios.get(`${url}`)
  //     .then(res => {
  //       console.log(res.data.data)
  //       setUsers(res.data.data)
  //     })
  //     .catch(err => {
  //       debugger
  //     })
  // }

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const postUser = user => {
    axios.post(url, user)
      .then(res => {
        console.log(res)
      setUsers([...users, res.data])
      })
      .catch(err => {
        debugger
      })
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [formValues])

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      first_name: formValues.first_name,
      pizza_size: formValues.pizza_size === 'medium' ? false : true,
      pizza_sauce: formValues.pizza_sauce === 'tomatobased' ? false : true,
      instructions: formValues.instructions,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
    }

    setFormValues(initialFormValues)
    postUser(newUser)
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value


    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      });


    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Joey Faton's Pizza</h1>

        <Switch>
          <Route path='/'>
            <Form
              values={formValues}
              onInputChange={onInputChange}
              onCheckboxChange={onCheckboxChange}
              onSubmit={onSubmit}
              disabled={formDisabled}
              errors={formErrors}
            />
          </Route>


        <div className='user-container'>
        {
          users.map(user => {
            return(
              <User key={user.id} details={user}/>
            )
          })
        }
        </div>
        </Switch>


      </header>
    </div>
  );
}
