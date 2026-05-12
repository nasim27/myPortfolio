import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-10">

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl">

        {/* LEFT SIDE */}
        <div>

          <p className="text-cyan-400 text-xl mb-3">
            Hello, I am
          </p>

          <h1 className="text-6xl font-bold mb-5">
            Shaikh Nasim Ali
          </h1>

          <h2 className="text-2xl text-gray-300 mb-6">
            AI • ML • Robotics • Software Engineer
          </h2>

          <p className="text-gray-400 leading-8 mb-8">
            Researcher and software engineer focused on
            Artificial Intelligence, Optimization,
            Robotics, Computer Vision, IoT,
            and Intelligent Systems.
          </p>

          <div className="flex gap-5">

            <a
              href="/cv.pdf"
              download
              className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 transition"
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 transition"
            >
              View Projects
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <img
            src={profile}
            alt="profile"
            className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;