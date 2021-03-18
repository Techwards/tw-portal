import React from "react";

const InputField = (props) => {
  const { name, value, placeholder, inputHandler, type } = props;
  console.log(`${name} is rendering`);
  return (
    <input
      autoComplete={"off"}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={inputHandler}
      className="w-full	mr-3 sm:mt-3 sm:mb-3 rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
      type={type}
    />
  );
};

const MemoInputField = React.memo((props) => {
  const { name, value, placeholder, inputHandler, type } = props;

  // const [emailM, setEmailM] = React.useState("");

  // const inputHandlerM = (event) => {
  //   try {
  //     const { name, value } = event.target;
  //     setEmailM(value);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  console.log(`${name} is rendering -> memo`);
  return (
    <input
      autoComplete={"off"}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={inputHandler}
      className="w-full	mr-3 sm:mt-3 sm:mb-3 rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
      type={type}
    />
    //  <input
    // autoComplete={"off"}
    //   name={"emailM"}
    //   value={emailM}
    //   placeholder={"email address"}
    //   onChange={inputHandlerM}
    // />
  );
});

export { InputField, MemoInputField };
