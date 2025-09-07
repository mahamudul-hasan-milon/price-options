import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu, IoClose } from "react-icons/io5";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <IoClose></IoClose> : <IoMenu></IoMenu>}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000
      ${open ? "top-16" : "-top-60"} bg-yellow-300 px-6`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
