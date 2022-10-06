import { Link } from 'react-router-dom';
import registerImage from '../../assets/images/register_banner.webp';

export default function Register() {
  return (
    <main className="flex px-2.5 sml:px-0">
      <section className=" sml:w-1/2 flex flex-col grow justify-center items-center min-h-screen">
        <div className="w-full  xl:w-[520px]">
          <h2 className="font-nunito text-4xl sml:text-[22px] text-center font-bold md:text-3xl lg:!text-4xl">
            Get Started
          </h2>
          <p className="font-nunito text-center mt-2.5 sml:mt-0 font-regular text-xl sml:text-sm md:!text-xl">
            Free register and you can enjoy it
          </p>
          <form className="px-4">
            <div className="relative">
              <label
                className="absolute top-6 left-8 bg-white px-2.5"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                name="email"
                className="border border-solid border-black w-full rounded-lg px-14 py-6 sml:p-4 mt-9"
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
                className="border border-solid border-black w-full rounded-lg px-14 py-6 sml:p-4 mt-9"
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
                className="border border-solid border-black w-full rounded-lg px-14 py-6 sml:p-4 mt-9  md:sml:mt-9"
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
      <section className="w-1/2 hidden sml:block">
        <picture>
          <img
            className="h-screen sml:h-auto md:!h-screen w-full object-cover"
            loading="lazy"
            src={registerImage}
            alt="Registration Banner"
          />
        </picture>
      </section>
    </main>
  );
}
