const projects = [
  {
    title: "AI Robotics System",
    description:
      "Road following and collision avoidance using Nvidia Jetson Nano.",
  },

  {
    title: "5G Network Optimization",
    description:
      "Machine learning based handover prediction in 5G networks.",
  },

  {
    title: "IoT Monitoring System",
    description:
      "ESP32 cloud-based monitoring and control system.",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;