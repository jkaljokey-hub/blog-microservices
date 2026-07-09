import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-amber-800 py-4 px-6">
      <nav className="text-3xl flex gap-6">
        <Link href="/" className="text-amber-500 hover:underline">Home</Link>
        <Link href="/component/about" className="text-amber-500 hover:underline">About</Link>
        <Link href="/component/contact" className="text-amber-500 hover:underline">Contact</Link>
        <Link href="/component/Treands" className="text-amber-500 hover:underline">Trends</Link>
      </nav>
    </div>
  );
};

export default Navbar;
