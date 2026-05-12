const skills = [
  "React",
  "Python",
  "C++",
  "Machine Learning",
  "OpenCV",
  "PyTorch",
  "OMNeT++",
  "IoT",
  "Deep Learning",
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800 px-5 py-3 rounded-xl"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;