function Header() {
  return (
    <div className="w-full bg-white text-black p-4 flex flex-row justify-between items-center">
      <h1 className="text-2xl">EA</h1>
      <div className="flex flex-row gap-4">
        <h2 className="text-xl">Workflow</h2>
        <h2 classname="text-xl">Experience</h2>
      </div>
      <text className="text-xl">GitHub</text>
    </div>
  );
}

export default Header;
