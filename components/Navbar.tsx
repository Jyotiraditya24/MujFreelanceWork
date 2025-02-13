import Link from "next/link";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Material", href: "/material" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Contact Sales", href: "/contact-sales" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 bg-white shadow-md py-2 px-10 flex justify-center gap-x-10 items-center rounded-2xl w-max z-50 border border-t border-black">
      <Link href={"/"} className="text-xl font-bold font-serif">MujTopper</Link>
      <div className="flex gap-x-6">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="text-gray-700 hover:text-black font-serif"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button className="bg-yellow-200 text-black px-4 py-2 rounded-2xl">Sign in</button>
    </nav>
  );
};

export default Navbar;
