import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login_banner.webp';

function Login() {
  return (
    <main className="flex">
      <section className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-[520px]">
          <h2 className="font-nunito text-4xl text-left font-bold">
            Login to your account
          </h2>
          <p className="font-nunito text-left mt-2.5 font-regular text-xl">
            Free register and you can enjoy it
          </p>
          <form>
            <div className="relative">
              <label
                className="absolute top-6 left-0 bg-white px-2.5"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                name="email"
                className="border-b border-solid border-black w-full  px-4 py-6 mt-9 outline-none"
                type="email"
                id="email"
              />
            </div>

            <div className="relative">
              <label
                className="absolute top-6 left-0 bg-white px-2.5"
                htmlFor="email"
              >
                Password
              </label>
              <input
                type="password"
                className="border-b border-solid border-black w-full  px-4 py-6 mt-9 outline-none"
              />
            </div>
            <button
              className="w-full text-center bg-primary text-white rounded-lg py-5 font-nunito font-semibold text-xl mt-12"
              type="submit"
            >
              Login to Continue
            </button>
          </form>
          <p className="font-nunito font-regular text-xs mt-9 text-left">
            Don&apos;t have an account?{' '}
            <Link className="font-bold text-[#ea6c00]" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
      <section className="w-1/2">
        <picture>
          <img
            className="h-screen w-full object-cover"
            loading="lazy"
            src={loginImage}
            alt="Login Banner"
          />
        </picture>
      </section>
    </main>
  );
}

export default Login;
