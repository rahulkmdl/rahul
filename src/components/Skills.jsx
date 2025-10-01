import data from '../data.json';

const Skills = () => {
  const { skills } = data;

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-center mb-6">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.technical.map((skill, index) => (
                <span key={index} className="bg-gray-700 text-white px-4 py-2 rounded-full text-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center mb-6">Professional Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.soft.map((skill, index) => (
                <span key={index} className="bg-gray-700 text-white px-4 py-2 rounded-full text-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
