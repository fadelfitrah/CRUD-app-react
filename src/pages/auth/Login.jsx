import { useForm } from "react-hook-form";
import { login } from "../../services/auth/authService";
import { useNavigate, Link } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthLayout>
      <Card>
        <Logo />

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="Masukkan email"
            error={errors.email}
            {...register("email", {
              required: "Email wajib diisi",
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Masukkan password"
            error={errors.password}
            {...register("password", {
              required: "Password wajib diisi",
            })}
          />

          <Button type="submit">{isSubmitting ? "Loading..." : "Login"}</Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Belum punya akun?{" "}
            <Link
              to="/register"
              className="font-semibold text-sky-500 hover:text-sky-600 transition"
            >
              Daftar di sini
            </Link>
          </p>
        </div>
      </Card>
    </AuthLayout>
  );
}
