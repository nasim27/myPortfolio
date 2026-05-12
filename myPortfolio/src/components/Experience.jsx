function Experience() {
  return (
    <section id="experience" className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        Experience
      </h2>

      <div className="space-y-8">

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold">
            Software Engineer
          </h3>

          <p className="text-cyan-300">
            Multilab LLC | Russia | 2021-2022
          </p>

          <p className="text-gray-400 mt-3">
            Worked on MFC C++ applications for VSDC Video Editor
            and contributed to Bengali localization.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold">
            Nvidia Deep Learning Institute
          </h3>

          <p className="text-cyan-300">
            Workshop | 2022
          </p>

          <p className="text-gray-400 mt-3">
            Completed AI and Deepstream certifications
            using Nvidia Jetson Nano.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;