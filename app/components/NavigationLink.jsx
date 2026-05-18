import Link from "next/link";

const NavigationLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-[#E57200]/10 hover:text-white sm:text-base"
    >
      {title}
    </Link>
  );
};

export default NavigationLink;
