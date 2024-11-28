import { Form, FormGroup, validateBorderState } from "../Form/FormElement";
import { Input } from "@/components/ui/input";
import { Btn, Spinner } from "@/utils/utils";
import { useForm } from "react-hook-form";
import UseIconsPack from "@/utils/UseIconsPack";
import { account } from "@/lib/appwrite";
import { useNavigate } from "react-router-dom";
import { toaster } from "@/utils/Toast";
import useGetUser from "@/hooks/useGetUser";
import useLocalStorage from "../../hooks/UseLocalStorage";
const SignInForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const { User, Lock } = UseIconsPack();
  const { setUser } = useGetUser();
  const [, setLocalStorageValue] = useLocalStorage("user", null);

  const handleFormSubmit = async (data) => {
    const { email, password } = data;
    try {
      await account.createEmailPasswordSession(email, password);
      const { name, $id } = await account.get();
      if (name != null && $id != null) {
        navigate("/finsight/dashboard", { replace: true });
        setUser({ $id, email, name });
        setLocalStorageValue({ $id, email, name });
      }
    } catch (error) {
      toaster({
        data: [{ msg: error.message }],
        state: "error",
        title: "Login Failed",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormGroup
        Icon={User}
        label={""}
        errfield={errors.email}
        value={getValues("email")}
      >
        <Input
          {...register("email", { required: "Email is Required!" })}
          className={`${validateBorderState(
            errors["email"],
            getValues("email")
          )} renderIconSpace`}
          placeholder="email"
        />
      </FormGroup>
      <FormGroup
        Icon={Lock}
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
        />
      </FormGroup>
      <Btn
        txt={!isSubmitting && "Login"}
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting && <Spinner />}
      </Btn>
    </Form>
  );
};

export default SignInForm;
