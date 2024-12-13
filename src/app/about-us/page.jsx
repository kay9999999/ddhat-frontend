import Image from "next/image";
import "./about.css";

export async function generateMetadata() {
  return {
    title: "About Us",
  };
}

const About = () => {
  return (
    <div className="about-page bg-white text-gray-900">
      {/* Header Section */}
      <section className="header-section container mx-auto px-4 py-20 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
        <div className="header-image w-full md:w-1/2 relative">
          <div className="image-overlay rounded-lg overflow-hidden ">
            <Image
              src="/images/aboutimg.png" // replace with the correct path
              alt="Illustration of team working together"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="about-text md:w-1/2 text-justify">
          <h1 className="text-4xl font-semibold text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-lg leading-relaxed">
            <strong>DDHAT Technologies</strong> is a full-service website &
            software development company. Our services include Web application
            development, Website development, Application development, corporate
            profiles and presentations, E-commerce, maintenance, and software
            consultancy. Our main goal is to keep high-quality standards for our
            projects, in design, hosting, consulting services, and any other
            solution that solves our customer needs and specifications.
            <br />
            <br />
            Our programmers are highly skilled in the latest web design and
            application development technologies. We make 99% error-free
            applications that fulfill your purpose, and we deliver every project
            on time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section bg-gray-100 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="mission-card text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Image
                src="/images/vision.png"
                alt="Our Vision"
                width={60}
                height={60}
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-gray-700 mt-4">
              Our vision is to be a leading force in our industry, constantly
              pushing boundaries and redefining what is possible. We aspire to
              inspire and empower individuals and businesses alike through
              innovative solutions and cutting-edge technologies.
            </p>
          </div>

          <div className="mission-card text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Image
                src="/images/aim.png"
                alt="Our Aim"
                width={60}
                height={60}
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Aim</h2>
            <p className="text-gray-700 mt-4">
              We provide innovative and reliable software solutions that cater
              to the unique needs of our clients. Our goal is to empower
              businesses and individuals by developing software that enhances
              productivity, efficiency, and growth.
            </p>
          </div>

          <div className="mission-card text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Image
                src="/images/referral.png"
                alt="Referral Partner"
                width={60}
                height={60}
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Referral Partner
            </h2>
            <p className="text-gray-700 mt-4">
              DDHAT Technologies believes in forming strategic alliances with
              other technology organizations to grow together. We see
              partnerships as a mutually beneficial approach to expand,
              strengthen our reach, and bring more value to our customers.
            </p>
          </div>

          <div className="mission-card text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Image
                src="/images/events.png"
                alt="Our Events"
                width={60}
                height={60}
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Events</h2>
            <p className="text-gray-700 mt-4">
              Our company is committed to hosting engaging and impactful events
              that bring people together, foster connections, and promote shared
              experiences. We believe in the power of events to inspire,
              educate, and entertain.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Meet the Expert Team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            "NARENDRA SAMANT",
            "JYOTI PAWAR",
            "TANUJA KANYAL",
            "KAVITA BHATT",
            "SHIVAM SAMANT",
            "BIKRAM KANYAL",
            "POOJA KANYAL",
            "VIKRAM BHANDARI",
          ].map((name, index) => (
            <div key={index} className="team-member text-center">
              <div className="member-image">
                <Image
                  src="/images/unisex.jpg" // replace with each member's image path if available
                  alt={name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-800">{name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
