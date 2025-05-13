import RevealOnScroll from "../revealOnScroll";

const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "React",
        "TypeScript",
        "TailwindCSS", 
    ];

    const backendSkills = [
        "Node.js",
        "Express.js",
        "Python",
        "MongoDB", 
        "MySQL",
        "PostgreSQL",
    ];
    
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="rounded-b-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    passionate software engineer with a knack for creating innovative solutions.
                    I specialize in full-stack development, and I'm always eager to learn and grow in the tech world.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                    key={key} 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">

                                             {tech}    
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key) => (
                            <span
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">

                                            {tech}    
                            </span>
                        ))}
                    </div>
                </div>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.S in Information Technology </strong> - University of Kigali 2026
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Web Development, Cloud computing...
                        </li>
                    </ul>

                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                   <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">Software Engineer at ABc Corp (2020-present)</h4>
                        <p>
                            Developed and maintained web applications using React and Node.js.
                            Collaborated with cross-functional teams to deliver high-quality software solutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold">Intern at at DEf Corp (2019-2020)</h4>
                        <p>
                            Developed and maintained web applications using React and Node.js.
                            Collaborated with cross-functional teams to deliver high-quality software solutions.
                        </p>
                    </div>

                   </div>

                </div>

            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About