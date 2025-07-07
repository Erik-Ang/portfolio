function Experience() {
  return (
    <div className="w-full h-auto text-black bg-white p-20">
      <h1 className="text-2xl font-bold pb-10">Test Cases</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div className="flex flex-col justify-between">
          <a
            href="https://erik-ang.github.io/Mock-Service-Site/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <iframe
              src="https://erik-ang.github.io/Mock-Service-Site/"
              title="Service Site"
              className="w-full aspect-[3/2] border-4 border-black rounded-lg pointer-events-none"
              loading="lazy"
            />
          </a>
          <p className="text-2xl text-left mt-4">Mock Service Site</p>
          <hr className="border-t-2 border-black mr-20" />
          <text className="text-xl">
            &emsp;This is a mock service site. This website was made for a
            school assignment for a UI/UX class and simulates a barber shop
            service site.
          </text>
        </div>
        <div className="flex flex-col justify-between">
          <a
            href="https://erik-ang.github.io/Memory-Game/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <iframe
              src="https://erik-ang.github.io/Memory-Game/"
              title="Memory Game"
              className="w-full aspect-[3/2] border-4 border-black rounded-lg pointer-events-none"
              loading="lazy"
            />
          </a>
          <p className="text-2xl text-left mt-4">Small Game</p>
          <hr className="border-t-2 border-black mr-20" />
          <text className="text-xl">
            &emsp;This is a basic memory game. It was made for a school
            assignment for a UI/UX class and is a simple game where you are
            shown marked squares and you have to remember where they are.
          </text>
        </div>
        <div className="flex flex-col justify-between">
          <a
            href="https://asure37.github.io/ecommerce2/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <iframe
              src="https://asure37.github.io/ecommerce2/"
              title="E-Commerce Site"
              className="w-full aspect-[3/2] border-4 border-black rounded-lg pointer-events-none"
              loading="lazy"
            />
          </a>
          <p className="text-2xl text-left mt-4">E-Commerce Site</p>
          <hr className="border-t-2 border-black mr-20" />
          <text className="text-xl">
            &emsp;This is a mock e-commerce site for the uOttawa Computer
            Science Student Association's merchandise.
          </text>
        </div>
        <div className="flex flex-col justify-between">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.dashthis.com%2Fmedia%2F5039%2F1-what-is-a-ga-dashboard-copy.jpg&f=1&nofb=1&ipt=31c76a671ffdfbf47c4ee6d092fe1ed9c4890deb1a19fbbfd49005194205796e"
            alt="Analytics Site"
            className="w-full aspect-3/2 object-cover border-4 border-black rounded-lg"
          />
          <p className="text-2xl text-left mt-4">Analytics Site</p>
          <hr className="border-t-2 border-black mr-20" />
          <text className="text-xl">
            &emsp;This is a placeholder for the analytics site. It will be
            replaced with actual content in the future.
          </text>
        </div>
      </div>
    </div>
  );
}

export default Experience;
