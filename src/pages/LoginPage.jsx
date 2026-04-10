import { useState } from "react";

export default function LoginPage({ setPage }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid
    alert("Login successful! (Demo - no backend)");
    setFormData({ email: "", password: "" });
    setErrors({});
  };
  return (
    <main
      className="min-h-[calc(100vh-48px)] bg-apple-light px-5 py-16"
      aria-label="Login page"
    >
      <section className="max-w-[1100px] mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="rounded-[32px] overflow-hidden bg-gradient-to-br from-[#f9fafc] via-white to-[#e8eef8] border border-white/70 shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-8 md:p-12">
          <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-apple-gray">
            Apple ID
          </span>

          <h1
            className="mt-6 font-bold tracking-tight text-apple-dark"
            style={{ fontSize: "clamp(2.6rem, 6vw, 4.8rem)" }}
          >
            Sign in with a calm, familiar flow.
          </h1>

          <p className="mt-5 max-w-[540px] text-[18px] leading-8 text-apple-gray">
            Access orders, saved devices, and your personalized experience with a
            simple Apple-inspired login screen built for this clone.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] bg-white/80 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-apple-gray">
                Fast access
              </p>
              <p className="mt-2 text-[15px] leading-7 text-apple-dark">
                Jump back into your account with a focused, low-distraction layout.
              </p>
            </div>

            <div className="rounded-[24px] bg-white/80 p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-apple-gray">
                Secure design
              </p>
              <p className="mt-2 text-[15px] leading-7 text-apple-dark">
                Clear inputs, strong contrast, and room for authentication flows later.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] bg-white border border-black/[0.06] p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
          <div className="mx-auto max-w-[420px]">
            <h2 className="text-[34px] font-semibold tracking-tight text-apple-dark">
              Login
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-apple-gray">
              Enter your details to continue to the Apple storefront experience.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              {Object.keys(errors).length > 0 && (
                <div className="rounded-[16px] bg-red-50 border border-red-200 p-4 mb-6">
                  <p className="text-[13px] font-semibold text-red-700 mb-2">Please fix the following errors:</p>
                  <ul className="space-y-1">
                    {Object.entries(errors).map(([field, message]) => (
                      <li key={field} className="text-[13px] text-red-600 flex items-start gap-2">
                        <span className="text-red-700 mt-0.5">•</span>
                        <span>{message}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <label className="block">
                <span className="mb-2 block text-[13px] font-medium text-apple-dark">
                  Email address
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full rounded-2xl border bg-[#fafafa] px-4 py-3.5 text-[15px] text-apple-dark outline-none transition-colors duration-200 placeholder:text-apple-gray/70 focus:bg-white ${
                    errors.email ? "border-red-500 focus:border-red-500" : "border-apple-border focus:border-apple-blue"
                  }`}
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[13px] font-medium text-apple-dark">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full rounded-2xl border bg-[#fafafa] px-4 py-3.5 text-[15px] text-apple-dark outline-none transition-colors duration-200 placeholder:text-apple-gray/70 focus:bg-white ${
                    errors.password ? "border-red-500 focus:border-red-500" : "border-apple-border focus:border-apple-blue"
                  }`}
                />
              </label>

              <div className="flex items-center justify-between gap-4 text-[14px] text-apple-gray">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 accent-[#0071e3]" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-apple-blue no-underline hover:underline">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="w-full  text-white py-3 rounded-[20px] bg-black btn-apple text-center">
                Sign In
              </button>
            </form>

            <p className="mt-6 text-[15px] text-apple-gray">
              New user?{" "}
              <button
                onClick={() => setPage("signup")}
                className="font-medium text-apple-blue bg-transparent border-none cursor-pointer no-underline hover:underline"
              >
                Register now
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
