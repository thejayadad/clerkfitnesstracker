'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FiHome, FiSettings } from 'react-icons/fi';


const links = [
    { name: 'Home', href: '/account', icon: FiHome },
    {
      name: 'Settings',
      href: '/account/invoices',
      icon: FiSettings,
    },
  ];

const NavLinks = () => {
    const pathname = usePathname();

  return (
    <div>
    {links.map((link) => {
      const LinkIcon = link.icon;
      return (
        <Link
        key={link._id}

        href={link.href}
        className={clsx(
          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
          {
            'bg-sky-100 text-primary': pathname === link.href,
          },
        )}
      >
        <LinkIcon className="w-6" />
        <p className="hidden md:block">{link.name}</p>
      </Link>
      );
    })}
  </div>
  )
}

export default NavLinks