import { NavLink, useMatch } from "react-router-dom";
import { useState, Fragment, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    if (scrollYProgress > 0.1) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  }, [scrollYProgress]);

  const links = [
    { id: 0, to: "/", text: "Home" },
    { id: 1, to: "about", text: "About" },
    { id: 2, to: "register", text: "Register" },
    { id: 3, to: "contact", text: "Contact" },
  ];
  const NavLinkComponent = (props) => {
    const match = useMatch(props.to);
    const handleClick = () => {
      if (window.innerWidth <= 1023) {
        toggleNav();
      }
    };
    return (
      <li className="px-3">
        <NavLink
          onClick={handleClick}
          to={props.to}
          className={`px-2 py-1 hover:underline hover:transition-all hover:underline-offset-8 decoration-teal-400 ${
            match ? "bg-red-900" : ""
          } transition-all duration-300 ease-in-out`}
        >
          {props.text}
        </NavLink>
      </li>
    );
  };

  function Maplinks() {
    return links.map((link) => (
      <Fragment key={link.id}>
        <NavLinkComponent to={link.to} text={link.text} />
      </Fragment>
    ));
  }
  return (
    <motion.header
      variants={{ isVisible: { y: 0 }, isHidden: { y: -100 } }}
      initial={{ y: -100 }}
      animate={
        ({ y: 0, isHidden: { y: -100 } }, isHidden ? "isHidden" : "isVisible")
      }
      transition={{ duration: 0.3 }}
      className="fixed top-0 navbar h-12 flex flex-row justify-between flex justify-around h-8 text-slate-50 w-full bg-gray-950 z-50"
    >
      <button
        onClick={toggleNav}
        className="lg:hidden xl:hidden flex-initial w-10  grid place-items-center "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <button className="flex-initial w-36">
        <img src="../assets/images/sora.svg" alt="Sora" />
      </button>
      <nav
        className={`z-50 lg:z-0 flex-1 lg:flex h-full w-full lg:h-auto backdrop-blur lg:backdrop-blur-none left-0 top:-1 lg:grid lg:place-items-center ${
          isNavVisible ? "fixed" : "hidden"
        }`}
      >
        <ul className="transition-all duration-300 lg:min-w-full lg:flex-1 flex justify-center text-center flex-col lg:flex-row gap-y-5 min-h-screen lg:min-h-0 w-full md:w-1/2 bg-gray-950 lg:bg-transparent relative ">
          <button
            onClick={toggleNav}
            className="lg:hidden xl:hidden absolute right-5 top-5 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Maplinks />
        </ul>
      </nav>
      <section className="flex-1 flex justify-end ">
        <button className="mx-2 grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <button className="mx-2 ">
          <NavLink to="/login">Login</NavLink>
        </button>
      </section>
    </motion.header>
  );
}

export { Navbar };
