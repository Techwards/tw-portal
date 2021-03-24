import React from "react";

const InputField = (props) => {
  const { name } = props;
  console.log(`${name} is rendering`);
  return (
    <input
      autoComplete={"off"}
      className="w-full	mr-3 sm:mt-3 sm:mb-3 rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
      {...props}
    />
  );
};

const MemoInputField = React.memo((props) => {
  const { name } = props;
  console.log(`${name} is rendering -> memo`);
  return (
    <input
      autoComplete={"off"}
      className="w-full	mr-3 sm:mt-3 sm:mb-3 rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
      {...props}
    />
  );
});

export { InputField, MemoInputField };
