import { Form, Link, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successfull");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <FormRow type="text" name="name" defaultValue="udin" />
          <FormRow
            type="text"
            name="lastName"
            labelText="Last Name"
            defaultValue="awaludin"
          />
          <FormRow type="text" name="location" defaultValue="Malang" />
          <FormRow type="email" name="email" defaultValue="udin@gmail.com" />
          <FormRow type="password" name="password" defaultValue="secret123" />
        </div>
        <SubmitBtn formBtn />
        <p>
          Already a member?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
