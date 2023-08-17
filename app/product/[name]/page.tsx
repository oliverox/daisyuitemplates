import Link from 'next/link';

export default function Product(props: { params: { name: string } }) {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col gap-4 p-10">
        <span className="text-2xl font-semibold capitalize">
          {props.params.name.split('-').join(' ')}
        </span>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="min-w-[300px] min-h-[500px] w-full max-w-7xl h-full bg-white rounded-md drop-shadow-md">
            <div className="flex flex-row gap-8 items-center justify-between">
              <span className="btn btn-secondary btn-xl">Buy for $25</span>
              <Link href="/" className="btn btn-ghost flex items-center gap-1">
                <span>Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="max-w-xl">
            <p className="m-2">
              Are you ready to revolutionize your tech startup's image? Look no
              further! The TechLaunch Pro design template is here to empower
              your brand with a cutting-edge visual identity that reflects your
              innovation, professionalism, and ambition.
            </p>
            <p className="m-2">
              🚀 Elevate Your Brand: Craft an unforgettable first impression
              with sleek, modern designs that capture the essence of your tech
              startup's unique identity. Our template offers a seamless blend of
              minimalism and vibrancy, ensuring your brand stands out in a
              crowded digital landscape.
            </p>
            <p className="m-2">
              🌐 Versatile and Comprehensive: From pitch decks to landing pages,
              social media graphics to investor presentations, TechLaunch Pro
              has you covered. This comprehensive template encompasses a range
              of design assets tailored to various platforms, guaranteeing
              consistency across all touchpoints.
            </p>
            <p className="m-2">
              💡 Intuitive Customization: No design experience? No problem! Our
              user-friendly interface empowers you to effortlessly customize
              each element – fonts, colors, imagery, and more – allowing you to
              make it truly yours. It's as simple as drag, drop, and create!
            </p>
            <p className="m-2">
              🎯 Strategic Visual Storytelling: Every aspect of the TechLaunch
              Pro template has been meticulously crafted to tell your startup's
              story visually. Engage your audience with captivating layouts that
              highlight your product's features, team strengths, and market
              differentiators.
            </p>
            <p className="m-2">
              📈 Designed for Growth: Whether you're seeking investors,
              customers, or partnerships, TechLaunch Pro equips you with designs
              that exude professionalism and potential. Garner trust and
              confidence as you present your tech startup's vision for a better
              future.{' '}
            </p>
            <p className="m-2">
              🔒 High-Resolution Quality: Impress even the most discerning eyes
              with high-resolution graphics that maintain their sharpness across
              all devices. Your tech startup's innovation deserves nothing less
              than top-notch quality.
            </p>
            <p className="m-2">
              🤝 Collaboration Ready: Teamwork makes the dream work. TechLaunch
              Pro facilitates seamless collaboration among your team members.
              Effortlessly share, edit, and refine your designs, ensuring
              everyone is on the same page as you work towards your goals. Don't
              miss the chance to ignite your tech startup's journey with an
              unmatched design template. Choose TechLaunch Pro today and venture
              into a world where creativity meets technology, and success is
              visually defined. Let's design the future, together.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
