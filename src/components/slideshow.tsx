import { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/endurance.jpg',
    '/f1.jpg',
    '/lemans.jpg',
    '/monza.jpg',
    '/nurbur.jpg',
    '/track-day.jpg',
    '/Blockchain.webp',
    '/team.jpg',
    '/mission.jpg',
    '/team2.jpg',
    '/photo4.jpg',
    '/ZAHID.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img 
        src={slides[currentSlide]} 
        alt="Slideshow" 
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
