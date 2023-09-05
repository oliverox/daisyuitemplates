'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { useSession } from 'next-auth/react';
import { getInitialsFromName } from '@/app/lib/getInitialsFromName';

function NavbarMenu() {
  const { data: session, status } = useSession();
  return (
    <>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <hr className="my-1" />
      {status === 'authenticated' && session.user ? (
        <li className="md:hidden">
          <Link href="/api/auth/signout">Sign out</Link>
        </li>
      ) : (
        <li className="md:hidden">
          <Link href="/api/auth/signin">Sign in</Link>
        </li>
      )}

      <li className="hidden md:block">
        <details>
          {status === 'authenticated' && session.user ? (
            <summary>
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-6">
                  <span className="text-xs">
                    {session.user.name
                      ? getInitialsFromName(session.user.name)
                      : 'UA'}
                  </span>
                </div>
              </div>
            </summary>
          ) : (
            <summary>Account</summary>
          )}
          <ul className="p-2 bg-base-100">
            {status === 'authenticated' && session.user ? (
              <li>
                <Link href="/api/auth/signout">Sign out</Link>
              </li>
            ) : (
              <li>
                <Link href="/api/auth/signin">Sign in</Link>
              </li>
            )}
          </ul>
        </details>
      </li>
      <li>
        <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 stroke-accent stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      </li>
    </>
  );
}

export default function Navbar() {
  useEffect(() => {
    themeChange(false);
  }, []);

  const { data: session, status } = useSession();

  return (
    <div className="navbar">
      <div className="flex-1 gap-2">
        <div className="w-8 h-8">
          <Link href="/">
            <svg viewBox="0 0 77 72" className="fill-accent">
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M49.7.136c-2.13.271-4.978 1.573-7.406 3.377-1.804 1.343-4.517 3.962-5.969 5.766-1.913 2.374-3.663 5.222-4.72 7.65l-.49 1.14.462 1.302a32.082 32.082 0 011.79 8.452c.055.936.15 1.777.204 1.858.068.095.556.15 1.289.15 1.37 0 2.794-.326 4.327-.977l1.031-.448.027-.95c.082-2.604 1.832-4.612 5.305-6.104 1.003-.434 2.51-.882 3.594-1.072.57-.108 1.1-.705 2.483-2.862 5.426-8.41 5.453-16.414.054-17.296A15.687 15.687 0 0050.677 0c-.068.014-.515.068-.976.136zM15.814 4.897c-1.6.597-2.808 2.238-3.486 4.734-.285 1.031-.312 1.438-.312 4.057 0 2.468.054 3.147.312 4.422.882 4.409 2.252 8.017 4.354 11.558 1.425 2.387 2.28 3.459 2.863 3.567 3.784.76 6.714 1.682 9.156 2.903l1.723.841.53-.8c.827-1.302 1.301-2.822 1.546-4.938l.095-.84-.638-.313c-.773-.393-1.696-1.356-2.157-2.279-.624-1.207-.8-2.292-.705-4.354.068-1.818.176-2.401.76-4.368l.298-1.031-.61-1.37c-1.357-3.012-3.189-5.847-5.183-7.977-1.424-1.533-2.604-2.442-4.246-3.27-1.22-.61-1.33-.623-2.577-.664-.733-.014-1.492.027-1.723.122zM51.464 20.796l-1.248.15-.868 1.016c-1.954 2.28-4.545 4.586-6.77 6.024-.759.488-1.193.868-1.193 1.017 0 .34.895 1.763 1.655 2.645.353.407 1.14 1.113 1.736 1.56l1.1.828.501-.34c.787-.515 1.641-.773 2.672-.773 2.429-.027 4.762 1.167 7.367 3.772l1.383 1.397 1.506.163c1.953.203 6.58.081 8.166-.204 1.94-.366 3.473-.855 4.979-1.6 1.79-.869 3.174-2.171 3.649-3.42 1.424-3.825-2.78-8.193-10.283-10.662-4.53-1.492-10.052-2.102-14.352-1.573zM11.337 33.764C5.79 34.24 1.665 36.152.404 38.838c-1.967 4.165 3.432 9.252 12.304 11.558 3.445.895 7.65 1.288 10.974 1.03 1.153-.094 2.184-.203 2.293-.244.108-.04.786-.732 1.492-1.546 1.967-2.238 4.476-4.382 6.728-5.779.448-.271.814-.57.814-.665 0-.081-.19-.542-.42-1.003-.489-.977-2.225-2.822-3.351-3.568l-.719-.488-.963.501c-.936.475-1.004.489-2.469.489-1.424 0-1.56-.027-2.605-.489-1.614-.705-2.943-1.655-4.503-3.215l-1.411-1.397-.963-.108c-1.574-.204-4.802-.272-6.268-.15zM45.577 35.69c-.855 1.154-1.492 3.107-1.682 5.101l-.095.91.624.325c.773.407 1.709 1.397 2.17 2.292 1.018 2.022 1.018 5.006-.013 8.479l-.353 1.18.393.977c.217.529.8 1.736 1.303 2.659 2.604 4.761 5.846 8.139 9.088 9.414 1.058.434 3.053.434 3.92 0 1.398-.692 2.538-2.347 3.12-4.572.408-1.533.503-4.842.204-7.054-.529-4.042-1.994-8.37-4.096-12.168-.747-1.33-1.425-2.374-2.686-4.083-.122-.15-.557-.299-1.248-.434-3.229-.57-6.091-1.506-8.737-2.849l-1.492-.746-.42.57zM40.368 42.31c-.923.136-2.117.489-3.27.977l-.976.407-.055 1.167c-.04.922-.135 1.33-.407 1.872-1.275 2.455-4.205 4.26-8.261 5.073-.746.15-.773.177-1.506 1.194-5.806 8.14-6.959 16.428-2.59 18.571.623.299 1.003.38 1.993.42 3.595.164 7.95-2.129 12.223-6.402 2.387-2.388 4.137-4.653 5.765-7.475.787-1.356 1.9-3.744 1.9-4.083 0-.122-.19-.746-.421-1.383-.963-2.714-1.6-5.874-1.818-8.994l-.095-1.316-.61-.082c-.706-.095-.923-.081-1.872.055z" />
              </g>
            </svg>
          </Link>
        </div>
        <Link href="/" className="text-xl hidden sm:block text-accent font-semibold">
          <span>DaisyUI Templates</span>
        </Link>
        <Link href="/" className="text-2xl sm:hidden text-accent font-semibold">
          DT
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-sm menu-horizontal px-1 font-semibold md:hidden z-10">
          <li>
            <details>
              <summary>
                {status === 'authenticated' && session.user ? (
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-6">
                      <span className="text-xs">
                        {session.user.name
                          ? getInitialsFromName(session.user.name)
                          : 'UA'}
                      </span>
                    </div>
                  </div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                )}
              </summary>
              <ul className="p-2 bg-base-100 !-ml-14">
                <NavbarMenu />
              </ul>
            </details>
          </li>
        </ul>
        <ul className="menu menu-sm menu-horizontal px-1 font-semibold hidden md:inline-flex">
          <NavbarMenu />
        </ul>
      </div>
    </div>
  );
}
