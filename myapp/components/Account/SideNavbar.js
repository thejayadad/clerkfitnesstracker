'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FiHome, FiSettings, FiDatabase } from 'react-icons/fi';


const links = [
  { name: 'Home', href: '/account', icon: FiHome },
  { name: 'Stats', href: '/account/stats', icon: FiDatabase },
  {
    name: 'Settings',
    href: '/account/update',
    icon: FiSettings,
  },
];

const SideNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-4">
        <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md border border:bg-gray-700 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40">
          LOGO
        </div>
       </Link>  
       <div className="flex grow flex-row  space-x-2 md:flex-col md:space-x-0 md:space-y-2">
       {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md dark:bg-gray-700 p-3 text-sm font-medium dark:hover:bg-secondary hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-gray-200 text-primary': pathname === link.href,
            },
          )}
        >
          <LinkIcon className="w-6" />
          <p className="hidden md:block">{link.name}</p>
        </Link>
        );
      })}
      </div>    
    </div>
  )
}

export default SideNavbar