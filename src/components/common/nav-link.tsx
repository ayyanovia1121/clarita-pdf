import Link from "next/link"

const NavLink = ({
    href,
    children
}: {
    href: string,
    children: React.ReactNode
}) => {
  return <Link href={href} className="transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500">{children}</Link>
}

export default NavLink