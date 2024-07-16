import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <h1 className="text-4xl mb-4">Something Is Wrong</h1>
        <div className="w-fit mx-auto">
          <Link to={-1}>
            <button className="btn btn-outline mx-auto">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
