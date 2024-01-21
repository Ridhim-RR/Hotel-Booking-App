'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


const Header = () => {
  const path = usePathname();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector((state) => state.auth);
  
  return (
    <div>
      <nav className="navbar sticky-top py-2">
        <div className="container">
          <div className="col-6 col-lg-3 p-0">
            <div className="navbar-brand">
              <Link href="/">
                {/* <img
                  style={{ cursor: "pointer" }}
                  src="/images/bookit_logo.png"
                  alt="BookIT"
                /> */}
                Booking
              </Link>
            </div>
          </div>

          <div className="col-6 col-lg-3 mt-3 mt-md-0 text-end">
            <div className="ml-4 dropdown d-line">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src="/images/default_avatar.jpg"
                    alt="Jo"
                    className="rounded-circle placeholder-glow"
                    height="50"
                    width="50"
                  />
                </figure>
                <span className="placeholder-glow ps-1"> Ridhim</span>
              </button>

              <div
                className="dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton1"
              >
                <Link href="/admin/dashboard" className="dropdown-item">
                  Dashboard
                </Link>
                <Link href="/bookings/me" className="dropdown-item">
                  My Bookings
                </Link>
                <Link href="/me/update" className="dropdown-item">
                  Profile
                </Link>
                <Link href="/" className="dropdown-item text-danger">
                  Logout
                </Link>
              </div>
            </div>
            
            {path.match("/") ? (
              <Link
                href="/signin"
                className="btn btn-danger px-4 text-white login-header-btn float-right"
              >
                Login
              </Link>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};
   

export default Header;
