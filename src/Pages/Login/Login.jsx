import { useState } from "react";
import { Link } from "react-router-dom";
import { isEmailOrNumber } from "../../Components/utils/CheckType";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const axiosPublic = useAxiosPublic();


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailOrNumber = form.emailOrNumber.value;
    const pin = form.pin.value;
  
    if (!/^\d{5}$/.test(pin.toString())) {
      return setError("PIN Must be 5 Digit Number");
    }
  
    const type = isEmailOrNumber(emailOrNumber);
  
    if (type === "email") {
      axiosPublic.patch(`/login?email=${encodeURIComponent(emailOrNumber)}&pin=${encodeURIComponent(pin)}`)
        .then(res => {
          if(res.data.message === 'Login successful'){
              Swal.fire({
                title: res.data.message,
                text: "You have been logged in Successfully.",
                icon: "success",
              });
          } else{
            Swal.fire({
                title: res.data.message,
                text: "Failed to login.",
                icon: "error",
              });
          }
        })
    } else if (type === "phone") {
      axiosPublic.patch(`/login?phone=${encodeURIComponent(emailOrNumber)}&pin=${encodeURIComponent(pin)}`)
      .then(res => {
        if(res.data.message === 'Login successful'){
            Swal.fire({
              title: res.data.message,
              text: "You have been logged in Successfully.",
              icon: "success",
            });
        } else{
          Swal.fire({
              title: res.data.message,
              text: "Failed to login.",
              icon: "error",
            });
        }
      })
    } else {
      console.log("The value is neither a valid email address nor a phone number.");
    }
  
    setError("");
  };

  return (
    <div>
      <div className="card card-body bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-5">
        <h1 className="text-3xl text-center">Log In Your Account</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobile Number / Email</span>
            </label>
            <input
              type="text"
              name="emailOrNumber"
              placeholder="Number / Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PIN</span>
            </label>
            <input
              type="password"
              name="pin"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <p className="text-red-600 font-medium text-[14px] ml-1">{error}</p>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Log In</button>
          </div>
        </form>

        {/* navigator */}
        <p className="text-[16] mt-2 text-center sm:px-6 ">
          Do Not have an account?
          <Link
            to={"/register"}
            rel="noopener noreferrer"
            href="#"
            className="underline text-blue-600"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
