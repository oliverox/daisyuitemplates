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
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div className="text-center">
        <span className="text-5xl leading-[1.2] font-semibold">
          High Quality Templates
          <br />
          <span className="font-light italic text-4xl">for</span> DaisyUI lovers
        </span>
      </div>
      <div>
        <p className="text-gray-500 text-lg text-center max-w-md">
          Looking for <span className="text-secondary">professional</span>,{' '}
          <span className="text-secondary">ready-made templates</span> powered
          by <span className="text-secondary">DaisyUI</span>? Try DaisyUI
          Templates now.
        </p>
      </div>
      <div>
        <button
          className="btn btn-accent btn-lg leading-[1.2]"
          onClick={handleCtaClick}
        >
          Try DaisyUI Templates ➔
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
  );
}
