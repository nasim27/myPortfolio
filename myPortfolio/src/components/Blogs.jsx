const blogs = [
  {
    title: "Understanding Convex Optimization",
    description:
      "Basic intuition behind convex optimization and ML.",
  },

  {
    title: "AI in Autonomous Systems",
    description:
      "How machine learning is used in robotics and vehicles.",
  },
];

function Blogs() {
  return (
    <section id="blogs" className="py-20 px-10">
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        Blogs
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              {blog.title}
            </h3>

            <p className="text-gray-400">
              {blog.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Blogs;