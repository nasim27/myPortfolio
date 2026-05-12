function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-950 sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-cyan-400">
        Nasim
      </h1>

      <ul className="flex gap-6 text-gray-300">
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;