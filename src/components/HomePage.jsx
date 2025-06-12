import HomePhoto from "../assets/HomePhoto.svg";

function HomePage() {
  return (
    <div className="w-full h-screen text-black">
      <div className="w-full h-1/5">
        <div className="w-full h-1/5 bg-black"></div>
        <div className="w-full h-4/5 pt-20 px-20 bg-white font-bold flex flex-col lg:flex-row justify-between items-center ">
          <a
            href="#"
            className="text-6xl cursor-pointer no-underline hover:no-underline text-black hover:text-black"
            style={{ color: 'black', textDecoration: 'none' }}
          >
            EA
          </a>
          <a href="#workflow" className="text-2xl text-black cursor-pointer">
            Workflow and Experience
          </a>
          <a href="#experience" className="text-2xl text-black cursor-pointer">
            Case Studies
          </a>
          <a
            href="https://github.com/Erik-Ang"
            className="text-3xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="w-full h-4/5 flex flex-row">
        <div className="flex flex-col w-full lg:w-1/2 2xl:w-2/3 h-auto text-left font-black pr-10 lg:pr-0 lg:pl-16 justify-center">
          <div className="flex flex-row p-7">
            <p className="text-9xl">👋</p>
            <p className="text-7xl">
              {" "}
              Hey!
              <br />
              I'm Erik{" "}
            </p>
          </div>
          <hr className="border-t-4 border-black ml-32 mr-16 p-4" />
          <p className="text-2xl ml-32">
            {" "}
            &emsp;I’m originally from Toronto but I’m currently studying
            computer science at the University of Ottawa. I really enjoy 3D
            printing, soldering, home automation and a lot more! I also enjoy
            helping out at school with stuff such as the Computer Science
            Student Association as there Vice President of Finance.{" "}
          </p>
        </div>
        <div className="h-full w-0 opacity-0 md:opacity-100 lg:w-1/2 2xl:w-1/3 flex items-end bottom-0 justify-end overflow-hidden">
          <img
            src={HomePhoto}
            alt="Placeholder"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
