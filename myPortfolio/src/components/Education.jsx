function Education() {
  return (
    <section id="education" className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        Education
      </h2>

      <div className="space-y-8">

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold">
            Ph.D. in Information Engineering
          </h3>

          <p className="text-cyan-300">
            University of Pisa | Italy | 2022-2024
          </p>

          <p className="text-gray-400 mt-3">
            Research Topic: Design and evaluation of architecture
            for next-generation mobile systems.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold">
            Masters in Software Engineering
          </h3>

          <p className="text-cyan-300">
            Lobachevsky State University | Russia | 2020-2022
          </p>

          <p className="text-gray-400 mt-3">
            Thesis: Road Following and Collision Avoidance
            in Robotics using Deep Learning.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold">
            Bachelor in Fundamental Informatics & IT
          </h3>

          <p className="text-cyan-300">
            Lobachevsky State University | Russia | 2016-2020
          </p>

          <p className="text-gray-400 mt-3">
            Thesis: Using Django Framework in
            E-Commerce Website Development.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Education;