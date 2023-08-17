'use client';

declare global {
  interface Window {
    cta_modal: { showModal: () => {} };
  }
}

export default function Home() {
  const handleCtaClick = () => {
    window.cta_modal.showModal();
  };
  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center gap-10 p-10 sm:p-24">
        <div className="text-center">
          <span className="text-5xl leading-[1.2] font-semibold">
            High Quality Templates
            <br />
            <span className="font-light italic text-4xl">for</span> DaisyUI
            lovers
          </span>
        </div>
        <div>
          <p className="text-lg text-center max-w-md">
            Looking for{' '}
            <span className="text-accent">
              professional
            </span>
            ,{' '}
            <span className="text-accent">
              ready-made templates
            </span>{' '}
            powered by{' '}
            <span className="text-accent">DaisyUI</span>?
            Try DaisyUI Templates now.
          </p>
        </div>
        <div>
          <button
            className="btn btn-accent btn-lg leading-[1.2]"
            onClick={handleCtaClick}
          >
            Try Now
          </button>
        </div>
        <dialog id="cta_modal" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">
              DaisyUI Templates is coming soon...
            </h3>
            <p className="py-4">Thanks for your patience.</p>
            <div className="modal-action">
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </main>
      <div
        className="w-full inline-flex flex-nowrap overflow-hidden mb-8
                    [mask-image:_linear-gradient(to_right,transparent_0,_black_38px,_black_calc(100%-38px),transparent_100%)]"
      >
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-3 
                      [&_img]:max-w-none animate-infinite-scroll py-4"
        >
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-3 
                    [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
          <li>
            <div className="w-[300px] h-[300px] border-0 drop-shadow-lg rounded-md bg-white border-spacing-1 border-gray-300"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
