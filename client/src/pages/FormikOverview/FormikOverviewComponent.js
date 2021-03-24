import React from "react";
import { InputField, MemoInputField } from "./../../components/Input";
import { Formik } from "formik";

const FormikOverviewComponent = (props) => {
  const { email, password, emailF, passwordF, inputHandler } = props;
  return (
    <div className="container mx-auto ">
      <p className="font-sans text-xl font-bold text-center">Formik Overview</p>
      <div class="grid md:grid-cols-4 md:gap-4 pt-4 ml-2 mr-2 sm:ml-0 sm:mr-0 ">
        <div className="md:col-start-2 md:col-end-4 shadow-lg rounded p-4 bg-blue-50	">
          <div className="p-2">
            <p className="text-sm">Generic React Form Handling</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-2 sm:mt-0">
              <InputField
                name="email"
                value={email}
                placeholder={"Enter email address"}
                onChange={inputHandler}
                type="email"
              />
              <InputField
                name="password"
                value={password}
                placeholder={"Enter password"}
                onChange={inputHandler}
                type="password"
              />
            </div>
          </div>
          <div className="p-2">
            <p className="text-sm">React Memo Form Handling</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-2 sm:mt-0">
              <MemoInputField
                name="emailF"
                value={emailF}
                placeholder={"Enter email memo address"}
                onChange={inputHandler}
                type="email"
              />
              <MemoInputField
                name="passwordF"
                value={passwordF}
                placeholder={"Enter password memo"}
                onChange={inputHandler}
                type="password"
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
                  <form
                    onSubmit={handleSubmit}
                    className="grid sm:grid-cols-2 gap-3 mt-2 sm:mt-0"
                  >
                    <div className="w-full mr-3">
                      <InputField
                        autoComplete={"off"}
                        type="email"
                        name="email"
                        onChange={
                          //   (event) => {
                          //   const { name, value } = event.target;
                          //   setFieldValue(name, value);
                          // }
                          handleChange
                        }
                        placeholder="Enter email formik"
                        className="w-full	mr-3 sm:mt-3 sm:mb-3 rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <p className="text-xs text-red-600">
                        {errors.email && touched.email && errors.email}
                      </p>
                    </div>
                    <div className="w-full mr-3">
                      <InputField
                        autoComplete={"off"}
                        type="password"
                        name="password"
                        onChange={
                          //   (event) => {
                          //   const { name, value } = event.target;
                          //   setFieldValue(name, value);
                          // }
                          handleChange
                        }
                        placeholder="Enter password formik"
                        className="w-full	mr-3 sm:mt-3 sm:mb-3 rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <p className="text-xs text-red-600">
                        {errors.password && touched.password && errors.password}
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
          <div className="p-2">
            <p className="text-sm">Formik Form With React Memo</p>
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
                  <form
                    onSubmit={handleSubmit}
                    className="grid sm:grid-cols-2 gap-3 mt-2 sm:mt-0"
                  >
                    <div className="w-full mr-3">
                      <MemoInputField
                        autoComplete={"off"}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter email formik + memo"
                        className="w-full	mr-3 sm:mt-3 sm:mb-3 rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <p className="text-xs text-red-600">
                        {errors.email && touched.email && errors.email}
                      </p>
                    </div>
                    <div className="w-full mr-3">
                      <MemoInputField
                        autoComplete={"off"}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        placeholder="Enter password formik + memo"
                        className="w-full	mr-3 sm:mt-3 sm:mb-3 rounded shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <p className="text-xs text-red-600">
                        {errors.password && touched.password && errors.password}
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
};

export default FormikOverviewComponent;
