import PropTypes from "prop-types";
import UseIconsPack from "@/utils/UseIconsPack";
import { useForm } from "react-hook-form";
import { Form, FormGroup, validateBorderState } from "../Form/FormElement";
import { Btn, Spinner } from "@/utils/utils";
import { Input } from "@/components/ui/input";
import { DualColumns } from "@/layout/Columns";
import { account, ID } from "@/lib/appwrite";
import { useNavigate } from "react-router-dom";
import { toaster } from "@/utils/Toast";
import useLocalStorage from "../../hooks/UseLocalStorage";
import useGetUser from "@/hooks/useGetUser";
const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const { User, Lock, Mail } = UseIconsPack();
  const [, setLocalStorageValue] = useLocalStorage("user", null);
  const { setUser } = useGetUser();
  /* Handle Submit Form */
  const handleFormSubmit = async (data) => {
    const { email, password, name } = data;
    try {
      const res = await account.create(ID.unique(), email, password, name);
      res && login(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  /* Handle Login */
  const login = async (_email, password) => {
    try {
      await account.createEmailPasswordSession(_email, password);
      const res = await account.get();
      const { $id, email, name } = res;
      setUser({ $id, email, name });
      setLocalStorageValue({ $id, email, name });
      navigate("/finsight/dashboard", { replace: true });
    } catch (error) {
      toaster({
        data: [{ msg: error.message }],
        state: "error",
        title: "Login Failed",
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)} className="">
      <DualColumns className={"mixin/m"}>
        <FormGroup
          Icon={User}
          className="mixin/my"
          label={""}
          errfield={errors.name}
          value={getValues("name")}
        >
          <Input
            {...register("name", {
              required: "Name is Required!",
              minLength: {
                value: 5,
                message: "Minimum character is 5",
              },
            })}
            className={`${validateBorderState(
              errors["name"],
              getValues("name")
            )} renderIconSpace`}
            placeholder="Full Name"
          />
        </FormGroup>
        <FormGroup
          Icon={Mail}
          className="mixin/my"
          label={""}
          errfield={errors.email}
          value={getValues("email")}
        >
          <Input
            {...register("email", {
              required: "Email is Required!",
              pattern: {
                value: /^[a-z0-9._-]+@[a-z]+\.[a-z]{2,}$/,
                message: "Invalid Email",
              },
            })}
            className={`${validateBorderState(
              errors["email"],
              getValues("email")
            )} renderIconSpace`}
            placeholder="Email"
          />
        </FormGroup>
      </DualColumns>
      <DualColumns className={"mixin/m"}>
        <FormGroup
          Icon={Lock}
          className="mixin/my"
          label={""}
          errfield={errors.password}
          value={getValues("password")}
        >
          <Input
            {...register("password", { required: "password is Required!" })}
            className={`${validateBorderState(
              errors["password"],
              getValues("password")
            )} renderIconSpace`}
            placeholder="password"
            type="password"
          />
        </FormGroup>
        <FormGroup
          Icon={Lock}
          className="mixin/my"
          label={""}
          errfield={errors.confirmPassword}
          value={getValues("confirmPassword")}
        >
          <Input
            {...register("confirmPassword", {
              required: "Confirm Password is Required!",
              minLength: {
                value: 5,
                message: "Minimum character is 5",
              },
              validate: (value) => {
                return (
                  getValues("password") === value || "Password Don't Match"
                );
              },
            })}
            className={`${validateBorderState(
              errors["confirmPassword"],
              getValues("confirmPassword")
            )} renderIconSpace`}
            placeholder="Confirm Password"
            type="password"
          />
        </FormGroup>
      </DualColumns>
      <Btn txt={!isSubmitting && "SignUp"} className="w-full mt-1">
        {isSubmitting && <Spinner />}
      </Btn>
    </Form>
  );
};

SignUpForm.propTypes = {
  className: PropTypes.string,
};
export default SignUpForm;
