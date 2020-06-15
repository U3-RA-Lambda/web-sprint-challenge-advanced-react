// // write your custom hook here to control your checkout form
// #### Checkout Form

// The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

// - [ ] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic

// _Note: You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step._

// -------------------------------------------------------


// import { useLocalStorage } from "./useLocalStorage";

// export const useForm = (key, initialValues, cb) => {
  // inputs - handleChange, state (dynamically manage any number of inputs)
//   const [setValues, values] = useLocalStorage(key, initialValues);

//   const handleChanges = e => {
//     console.log(e.target.name);
//     setValues({
//       ...values,
//       [e.target.name]: e.target.value
//     });
//   };

//   // form/buttons - submit, clear
//   const handleSubmit = e => {
//     if (e) e.preventDefault();
//     cb();
//   };

//   const clearForm = e => {
//     e.preventDefault();
//     setValues(initialValues);
//   };

//   return [values, clearForm, handleSubmit, handleChanges];
// };

// // Protip:
/*

this function can control multiple inputs in a class component:

  const handleChanges = e => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

*/
