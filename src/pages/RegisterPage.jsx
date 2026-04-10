import { useState } from "react";

export default function RegisterPage({ setPage }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters with uppercase, lowercase, and number.";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid
    alert(`Registration successful for ${formData.firstName} ${formData.lastName}! (Demo - no backend)`);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });
    setErrors({});
  };
  return (
    <main
      className="min-h-[calc(100vh-48px)] bg-white px-5 py-16"
      aria-label="Register page"
    >
      <section className="max-w-[1120px] mx-auto rounded-[36px] border border-black/[0.06] bg-gradient-to-br from-white via-[#fbfbfd] to-[#eef4ff] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.08)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] bg-apple-dark p-8 text-blacK md:p-10">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70">
              Create account
            </span>

            <h1
              className="mt-6 font-bold tracking-tight"
              style={{ fontSize: "clamp(2.3rem, 5vw, 4.2rem)" }}
            >
              Register and make the experience yours.
            </h1>

            <p className="mt-5 max-w-[480px] text-[17px] leading-8 text-black/72">
              Save products, track orders, and keep your Apple-style shopping flow
              connected across every page in the clone.
            </p>

            <div className="mt-10 space-y-4 ">
              {[
                "Personalized recommendations and saved favorites.",
                "Faster checkout and profile-based order tracking.",
                "A clean registration flow ready for backend wiring later.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4 text-[15px] leading-7 text-black/84"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] bg-white/90 p-8 md:p-10">
            <div className="max-w-[520px]">
              <h2 className="text-[34px] font-semibold tracking-tight text-apple-dark">
                Register now
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-apple-gray">
                Create your account with a few quick details.
              </p>

              <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                {Object.keys(errors).length > 0 && (
                  <div className="sm:col-span-2 rounded-[16px] bg-red-50 border border-red-200 p-4 mb-4">
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
                    First name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Harsh"
                    className={`w-full rounded-2xl border bg-[#fafafa] px-4 py-3.5 text-[15px] text-apple-dark outline-none transition-colors duration-200 placeholder:text-apple-gray/70 focus:bg-white ${
                      errors.firstName ? "border-red-500 focus:border-red-500" : "border-apple-border focus:border-apple-blue"
                    }`}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[13px] font-medium text-apple-dark">
                    Last name
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Sharma"
                    className={`w-full rounded-2xl border bg-[#fafafa] px-4 py-3.5 text-[15px] text-apple-dark outline-none transition-colors duration-200 placeholder:text-apple-gray/70 focus:bg-white ${
                      errors.lastName ? "border-red-500 focus:border-red-500" : "border-apple-border focus:border-apple-blue"
                    }`}
                  />
                </label>

                <label className="block sm:col-span-2">
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
                    placeholder="Create password"
                    className={`w-full rounded-2xl border bg-[#fafafa] px-4 py-3.5 text-[15px] text-apple-dark outline-none transition-colors duration-200 placeholder:text-apple-gray/70 focus:bg-white ${
                      errors.password ? "border-red-500 focus:border-red-500" : "border-apple-border focus:border-apple-blue"
                    }`}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[13px] font-medium text-apple-dark">
                    Confirm password
                  </span>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className={`w-full rounded-2xl border bg-[#fafafa] px-4 py-3.5 text-[15px] text-apple-dark outline-none transition-colors duration-200 placeholder:text-apple-gray/70 focus:bg-white ${
                      errors.confirmPassword ? "border-red-500 focus:border-red-500" : "border-apple-border focus:border-apple-blue"
                    }`}
                  />
                </label>

                <label className="sm:col-span-2 flex items-start gap-3 rounded-[22px] border border-apple-border bg-[#fafafa] px-4 py-4 text-[14px] leading-6 text-apple-gray hover:bg-white transition-colors">
                  <input 
                    type="checkbox" 
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 shrink-0 accent-[#0071e3]"
                  />
                  <span>
                    I agree to receive updates, product news, and account-related
                    communications for this demo experience.
                  </span>
                </label>

                <div className="sm:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <button type="submit" className="btn-apple text-center  text-white py-3 px-4 rounded-[20px] bg-black">
                    Create Account
                  </button>

                  <p className="text-[15px] text-apple-gray">
                    Already have an account?{" "}
                    <button
                      onClick={() => setPage("login")}
                      className="font-medium text-apple-blue bg-transparent border-none cursor-pointer no-underline hover:underline"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
