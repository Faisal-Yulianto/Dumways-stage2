import { useState } from "react";
export function useLoginForm() {
    interface LoginForm {
        email: string;
        password: string;
      }
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    console.log("data login", form);
  }

  return {
    handleChange,
    handleSubmit,
  };
}