import { Link } from 'react-router-dom';
import registerImage from '../../assets/images/register_banner.webp';

export default function Register() {
  return (
    <main className="flex">
      <section className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-[520px]">
          <h2 className="font-nunito text-4xl text-center font-bold">
            Get Started with easily register{' '}
          </h2>
          <p className="font-nunito text-center mt-2.5 font-regular text-xl">
            Free register and you can enjoy it
          </p>
          <form>
            <div className="relative">
              <label
                className="absolute top-6 left-8 bg-white px-2.5"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                name="email"
                className="border border-solid border-black w-full rounded-lg px-14 py-6 mt-9"
                type="email"
                id="email"
              />
            </div>

            <div className="relative">
              <label
                className="absolute top-6 left-8 bg-white px-2.5"
                htmlFor="email"
              >
                Full Name
              </label>
              <input
                className="border border-solid border-black w-full rounded-lg px-14 py-6 mt-9"
                type="text"
              />
            </div>
            <div className="relative">
              <label
                className="absolute top-6 left-8 bg-white px-2.5"
                htmlFor="email"
              >
                Password
              </label>
              <input
                type="password"
                className="border border-solid border-black w-full rounded-lg px-14 py-6 mt-9"
              />
            </div>
            <button
              className="w-full text-center bg-primary text-white rounded-[86px] py-5 font-nunito font-semibold text-xl mt-12"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="font-nunito font-regular text-xs mt-9 text-center">
            Already have an account?{' '}
            <Link className="font-bold text-[#ea6c00]" to="/login">
              Sign In
            </Link>
          </p>
        </div>
      </section>
      <section className="w-1/2">
        <picture>
          <img
            className="h-screen w-full object-cover"
            loading="lazy"
            src={registerImage}
            alt="Registration Banner"
          />
        </picture>
      </section>
    </main>
  );
}
