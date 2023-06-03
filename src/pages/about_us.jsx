import TeamMember from '../components/TeamMember';
import { membersData } from '../Data/data'

const AboutUs = () => {

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-center text-gray-700 mb-16">
          At Dishcovery, we&apos;re passionate about helping people discover new and exciting restaurants.
          <br /> Our team of experts is dedicated to providing the best possible dining experience for our customers
        </p>
        <h3 className="text-center text-black mb-8">Meet Our Team</h3>
        <div className="flex flex-wrap justify-center items-start">
          {membersData.map((member) => (
            <TeamMember key={Math.random().toString()} name={member.name} role={member.role} image={member.image} socialMedia={member.socialMedia} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
