import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { register as registerUser } from "../../services/auth/authService";

import AuthLayout from "../../components/layout/AuthLayout";
import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthLayout>
      <Card>
        <Logo />

        <h2 className="mt-6 text-center text-xl font-bold text-slate-800">
          Buat Akun Baru
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Daftar untuk mulai menggunakan aplikasi
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="Masukkan email"
            error={errors.email}
            {...register("email", {
              required: "Email wajib diisi",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Format email tidak valid",
              },
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Masukkan password (minimal 6 karakter)"
            error={errors.password}
            {...register("password", {
              required: "Password wajib diisi",
              minLength: {
                value: 6,
                message: "Password minimal 6 karakter",
              },
            })}
          />

          <Input
            label="Konfirmasi Password"
            type="password"
            placeholder="Ulangi password"
            error={errors.confirmPassword}
            {...register("confirmPassword", {
              required: "Konfirmasi password wajib diisi",
              validate: (value) => value === password || "Password tidak cocok",
            })}
          />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Daftar"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Sudah punya akun?{" "}
            <Link
              to="/login"
              className="font-semibold text-sky-500 hover:text-sky-600 transition"
            >
              Login di sini
            </Link>
          </p>
        </div>
      </Card>
    </AuthLayout>
  );
}
