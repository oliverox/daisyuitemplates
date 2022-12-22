import { type NextPage } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Logo from "../components/Logo/Logo";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md -mt-16 sm:-mt-10">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Logo size="xl" spin={false} />
                <h1 className="text-center text-[4rem] font-extrabold leading-[50px] sm:text-[5rem] sm:leading-[62px]">
                  <span className="text-primary">daisyUI</span>
                  <br />
                  <span className="text-[48px] text-secondary sm:text-[59px]">
                    Templates
                  </span>
                </h1>
              </div>
              <p className="py-6 sm:py-8">
                Modern templates built with <br className="md:hidden" />
                DaisyUI, TailwindCSS & NextJS
              </p>
              <button className="btn-accent btn btn-lg">View Templates</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
