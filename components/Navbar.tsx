import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Material", href: "/material" },
  { label: "Order", href: "/order" },
  { label: "Exam Tip 69", href: "/examTip" },
  { label: "About Us", href: "/about" },
  { label: "After Exams", href: "/contact-sales" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 bg-white shadow-md py-2 px-10 flex justify-center gap-x-10 items-center rounded-2xl w-max z-50 border border-t border-black">
      <Link href={"/"} className="text-md font-bold">
        MUJTOPPER
      </Link>
      <div className="flex gap-x-6">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={`text-black font-bold  border border-black px-2 py-1 rounded-2xl hover:bg-black hover:text-white transition-all`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
