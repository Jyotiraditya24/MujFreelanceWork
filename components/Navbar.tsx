import Link from "next/link";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Material", href: "/material" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Pricing", href: "/pricing" },
  { label: "Order", href: "/order" },
  { label: "Contact Sales", href: "/contact-sales" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 bg-white shadow-md py-2 px-10 flex justify-center gap-x-10 items-center rounded-2xl w-max z-50 border border-t border-black">
      <Link
        href={"/"}
        className="text-md font-bold font-serif nunito-className"
      >
        MUJTOPPER
      </Link>
      <div className="flex gap-x-6">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={`text-gray-700 hover:text-black nunito-className`}
          >
            {item.label}
          </Link>
        ))}
      </div>
   
    </nav>
  );
};

export default Navbar;
