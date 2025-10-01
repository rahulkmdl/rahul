import data from '../data.json';

const Education = () => {
  const { education } = data;

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
              <h4 className="text-lg text-gray-400 mb-2">{edu.institution}</h4>
              <p className="text-sm text-gray-500 mb-1">{edu.location}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
