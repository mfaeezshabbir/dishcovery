import { FaCompass, FaThumbsUp, FaWifi, FaComment } from 'react-icons/fa';

const Features = () => {
    const featuresList = [
        { title: 'Discover New Restaurants', description: 'Find new and exciting places to eat near you.', icon: <FaCompass className="feature-icon" /> },
        { title: 'Personalized Recommendations', description: 'Get restaurant recommendations based on your preferences.', icon: <FaThumbsUp className="feature-icon" /> },
        { title: 'Offline Access', description: 'Use our website even without an internet connection.', icon: <FaWifi className="feature-icon" /> },
        { title: 'User Reviews', description: 'Read reviews from other users and leave your own.', icon: <FaComment className="feature-icon" /> },
    ];

    return (
        <section className="features py-12 lg:py-24">
            <div className="container mx-auto">
                <h2 className="features-title text-3xl lg:text-5xl font-bold mb-10 text-center">Features</h2>
                <div className="flex flex-wrap justify-center">
                    {featuresList.map((feature, index) => (
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8" key={index}>
                            <div className="feature-item bg-white shadow-lg rounded-lg p-6 text-center h-52 flex items-center flex-col">
                                <div className=" ">

                                    {feature.icon}
                                </div>
                                <h3 className="feature-title text-lg font-bold mt-4 mb-2">{feature.title}</h3>
                                <p className="feature-description text-gray-700">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
