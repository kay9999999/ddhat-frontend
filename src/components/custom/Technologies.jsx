import Image from "next/image";

const TechnologiesComponent = () => {
  const technologies = [
    {
      name: "Angular",
      url: "/images/tech/angularjs.png",
    },
    {
      name: "Next",
      url: "/images/tech/next.png",
    },
    {
      name: "Drupal",
      url: "/images/tech/drupal.png",
    },
    {
      name: "JavaScript",
      url: "/images/tech/javascript.png",
    },
    {
      name: "OpenCart",
      url: "/images/tech/opencart.png",
    },
    {
      name: "WordPress",
      url: "/images/tech/wordpress.png",
    },
    {
      name: "jQuery",
      url: "/images/tech/jquery.png",
    },
    {
      name: "React",
      url: "/images/tech/react.png",
    },
    {
      name: "Laravel",
      url: "/images/tech/laravel.png",
    },
    {
      name: "MongoDb",
      url: "/images/tech/mongodb.png",
    },
    {
      name: "Express",
      url: "/images/tech/express.png",
    },
    {
      name: "CSS3",
      url: "/images/tech/css3.png",
    },
    {
      name: "Magento",
      url: "/images/tech/magento.png",
    },
    {
      name: "PostgreSql",
      url: "/images/tech/postgresql.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Technologies We Work With</h2>
        <p className="text-center mb-12 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto transition-opacity duration-300 ease-out hover:opacity-80">
          We serve a wide range of technologies to cater to diverse client
          needs. Some of the key technologies we specialize in include:
          <span className="block mt-2 h-[3px] bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600 w-full"></span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <Image
                src={tech.url}
                alt={tech.name}
                width={70}
                height={60}
                priority={true}
                style={{ width: "70px", height: "60px" }}
                className="mx-auto object-contain"
              />
              <p className="mt-4 text-center text-gray-700 font-medium">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesComponent;
