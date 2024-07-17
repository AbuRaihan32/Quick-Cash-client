import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, phone, pin } = data;

    if (!/^\d{5}$/.test(pin.toString())) {
      return setError("PIN Must be 5 Digit Number");
    }
    setError("");

    const userInfo = {
      name,
      email,
      phone,
      pin,
    };

    axiosPublic.post("/register", userInfo)
    .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Registered!",
          text: "You have been Registered Successfully.",
          icon: "success",
        });
        reset()
      } else{
        Swal.fire({
            title: "Error!",
            text: res.data.message,
            icon: "error",
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-body bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-5">
        <h1 className="text-3xl text-center">Register Account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600 font-medium pl-3">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600 font-medium pl-3">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="text"
              placeholder="Mobile Number"
              className="input input-bordered"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-600 font-medium pl-3">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">5-Digit PIN</span>
            </label>
            <input
              type="password"
              placeholder="PIN"
              className="input input-bordered"
              {...register("pin", { required: true })}
            />

            {errors.pin ? (
              <span className="text-red-600 font-medium pl-3">
                This field is required
              </span>
            ) : (
              <p className="text-red-600 font-medium text-[14px] ml-1">
                {error}
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register Account</button>
          </div>
        </form>

        {/* navigator */}
        <p className="text-[16] mt-2 text-center sm:px-6 ">
          Already have an account?
          <Link
            to={"/login"}
            rel="noopener noreferrer"
            href="#"
            className="underline text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
