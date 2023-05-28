'use client'
import Link from "next/link";
import {usePathname} from "next/navigation"

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  const route = usePathname();
  console.log(route);
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav className="[&_a]:mr-3 [&_a]:p-2">
            <Link href="/">home</Link>
            <Link href="/dashboard/profile">prifile</Link>
            <Link href="/dashboard/profile-details">profile details</Link>
        </nav>
   
        {children}
      </section>
    );
  }