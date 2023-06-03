/* eslint-disable react/prop-types */
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const TeamMember = ({ name, position, image, twitter, facebook, instagram }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 m-4">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-6" />
      <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
      <p className="text-gray-600 text-center mb-6">{position}</p>
      <div className="text-gray-700 text-center">{/* bio */}</div>
      <div className="flex justify-center mt-4">
        <FaTwitter className="text-gray-500 hover:text-gray-700 mx-2" size={30} onClick={() => window.open(twitter)} />
        <FaFacebook className="text-gray-500 hover:text-gray-700 mx-2" size={30} onClick={() => window.open(facebook)} />
        <FaInstagram className="text-gray-500 hover:text-gray-700 mx-2" size={30} onClick={() => window.open(instagram)} />
      </div>
    </div>
  );
};

export default TeamMember;
