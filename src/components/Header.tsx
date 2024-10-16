"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import { FaUser, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="h-12 w-12"
                src={logo}
                alt="Bookit"
                priority={true}
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Bloogs
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href="/login"
                className="mr-3 text-gray-800 hover:text-gray-600"
              >
                <div className="flex gap-1 items-center">
                  <FaSignInAlt /> <span>Login</span>
                </div>
              </Link>

              <Link
                href="/register"
                className="mr-3 text-gray-800 hover:text-gray-600"
              >
                <div className="flex gap-1 items-center">
                  <FaUser /> <span>Register</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
