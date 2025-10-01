import data from '../data.json';

const Experience = () => {
  const { experience } = data;

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="relative">
          <div className="border-l-2 border-gray-700 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {experience.map((exp, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-20 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-5/12 bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <h4 className="text-lg text-gray-400 mb-2">{exp.company}</h4>
                <p className="text-sm text-gray-500 mb-4">{exp.location} | {exp.period}</p>
                <ul className="list-disc list-inside text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
