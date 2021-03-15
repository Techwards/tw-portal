import React, { Component } from "react";
import { Formik } from "formik";

class FormikOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailF: "",
      passwordF: "",
    };
  }

  inputHandler = (event) => {
    try {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { email, password, emailF, passwordF } = this.state;
    return (
      <div className="container mx-auto">
        <p className="font-sans text-xl font-bold text-center">
          Formik Overview
        </p>
        <div class="grid md:grid-cols-4 md:gap-4 pt-4">
          <div className="col-start-2 col-end-4 shadow-lg rounded p-4">
            <div className="p-2">
              <p className="text-sm">Generic React Form Handling</p>
              <div className="flex justify-start">
                <InputField
                  name="email"
                  value={email}
                  placeholder={"Enter email address"}
                  inputHandler={this.inputHandler}
                />
                <InputField
                  name="password"
                  value={password}
                  placeholder={"Enter password"}
                  inputHandler={this.inputHandler}
                />
              </div>
            </div>
            <div className="p-2">
              <p className="text-sm">React Memo Form Handling</p>
              <div className="flex justify-start">
                <MemoInputField
                  name="emailF"
                  value={emailF}
                  placeholder={"Enter email memo address"}
                  inputHandler={this.inputHandler}
                />
                <MemoInputField
                  name="passwordF"
                  value={passwordF}
                  placeholder={"Enter password memo"}
                  inputHandler={this.inputHandler}
                />
              </div>
            </div>
            <div className="p-2">
              <p className="text-sm">Formik Form</p>
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.{1}[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (values.password.length <= 4) {
                    errors.password = "Length should be more than 4";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  setFieldValue,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => {
                  console.log("formik form re-render");
                  return (
                    <form onSubmit={handleSubmit} className="grid grid-cols-6 ">
                      <div>
                        <input
                          type="email"
                          name="email"
                          onChange={(event) => {
                            const { name, value } = event.target;
                            setFieldValue(name, value);
                          }}
                          placeholder="Enter email formik"
                          className="rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <p className="text-red-900">
                          {errors.email && touched.email && errors.email}
                        </p>
                      </div>
                      <div>
                        <input
                          type="password"
                          name="password"
                          onChange={(event) => {
                            const { name, value } = event.target;
                            setFieldValue(name, value);
                          }}
                          placeholder="Enter password formik"
                          className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <p className="text-red-900">
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </p>
                      </div>
                      {/* <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button> */}
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormikOverview;

const InputField = (props) => {
  const { name, value, placeholder, inputHandler } = props;
  console.log(`${name} is rendering`);
  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={inputHandler}
      className="w-full	mr-3 mt-3 mb-3 rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      type="text"
    />
  );
};

const MemoInputField = React.memo((props) => {
  const { name, value, placeholder, inputHandler } = props;

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
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={inputHandler}
      className="w-full	mr-3 mt-3 mb-3 rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      type="text"
    />
    //  <input
    //   name={"emailM"}
    //   value={emailM}
    //   placeholder={"email address"}
    //   onChange={inputHandlerM}
    // />
  );
});
