"use client";

import Link from "next/link";
import { useUserContext } from "@/contexts/UserContext";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/profile", label: "Profile" },
];

const activeClass = "text-neon-cyan underline decoration-4 underline-offset-8";

export default function Header() {
  const { user, setUser } = useUserContext();
  const pathname = usePathname();
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogOut = () => {
    setIsMenuOpen(false)
    setUser(null)
  }

  return (
    <header className="border-b-4 border-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4">
        <h1>
          <Link href="/" 
          onClick={closeMenu}
          className="font-heading text-lg text-neon-pink hover:text-neon-yellow">
            BRI BAR
          </Link>
        </h1>

        <nav className="hidden items-center gap-6 text-2xl md:flex">
            {navLinks.map((link) => (
                <Link 
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? activeClass : "hover:text-neon-cyan"}
                >
                {link.label}
                </Link>             
            ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/profile" className="text-neon-cyan hover:text-neon-yellow">
            P1: {user?.username}
          </Link>
          <button
            onClick={handleLogOut}
            className="pixel-button bg-neon-pink text-night"
          >
            EXIT
          </button>
        </div>


        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          className="cursor-pointer border-2 border-black bg-neon-yellow p-2 text-night shadow-[3px_3px_0_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none md:hidden"
>
  {/* Pixel art hamburger icon: drawn on a tiny 8 × 7 grid, then scaled up */}
  <svg
    width="24"
    height="21"
    viewBox="0 0 8 7"
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    <rect x="0" y="0" width="8" height="1" fill="currentColor" />
    <rect x="0" y="3" width="8" height="1" fill="currentColor" />
    <rect x="0" y="6" width="8" height="1" fill="currentColor" />
  </svg>
</button>


         </div>

         {isMenuOpen &&(            
          <button
          onClick={closeMenu}
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          />
          )}
          <nav
          inert={!isMenuOpen}
          className={`fixed inset-y-0 right-0 z-50 flex w-64 flex-col gap-6 border-l-4 border-black bg-night p-6 text-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        >

        <button
        onClick={closeMenu}
        aria-label="Close menu"
        className="pixel-button w-fit self-end bg-neon-yellow text-night"
        >
            X
        </button>

        {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={isActive(link.href) ? activeClass : "hover:text-neon-cyan"}
            >
              {link.label}
            </Link>
          ))}


          <Link href="/profile" onClick={closeMenu} className="text-neon-cyan">
            P1: {user?.username}
          </Link>

          <button
            onClick={handleLogOut}
            className="pixel-button w-fit bg-neon-pink text-night"
          >
            EXIT
          </button>
        </nav>
    </header>
  );
}