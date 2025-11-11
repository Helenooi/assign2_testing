import React, { useState } from 'react';
import '../css/EventSection.css';

const EventSection = () => {
  const events = [
    {
      id: 1,
      title: "Raja Durian Exhibition",
      image: "/event/RajaDurian.jpg",
      description: "Love DURIAN? Come and have a look!",
      date: "16 November 2024 - 9 February 2025",
      location: "https://www.google.com/maps/place/Blank+Canvas/@5.4201197,100.3349776,17z/data=!3m1!4b1!4m6!3m5!1s0x304ac3a972b372a3:0xf68b245543357c52!8m2!3d5.4201197!4d100.3375525!16s%2Fg%2F11t2b663_2?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      operatingDays: "Friday, Saturday & Sunday",
      operatingHours: "12:00 PM - 7:00PM"
    },
    {
      id: 2,
      title: "Kek Lok Si Temple Lights Up",
      image: "/event/ChineseNewYear.jpg",
      description: "The 130-year-old Kek Lok Si Temple with colourful neon and LED lights along with thousands of Chinese lanterns",
      date: "25 January - 23 February 2025",
      location: "https://www.google.com/maps/place/Kek+Lok+Si+Temple/@5.3996413,100.2710377,17z/data=!3m1!4b1!4m6!3m5!1s0x304ac2185dfc8665:0x2c9084ea7f433ec4!8m2!3d5.3996413!4d100.2736126!16zL20vMDVxMnBo?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      operatingDays: "Daily during festival period",
      operatingHours: "07:00 PM - 12:00 AM"
    },
    {
      id: 3,
      title: "OBS Chinese New Year Run 2025",
      image: "/event/OBSRun.jpg",
      description: "OBS CNY Run on 12 January 2025 at Beach Street, Penang.",
      date: "25 January 2025",
      location: "https://www.google.com/maps/place/Beach+St,+Georgetown,+George+Town,+Penang/@5.415099,100.339043,17z/data=!3m1!4b1!4m6!3m5!1s0x304ac38ef9ee59ff:0xed74ff1825f73521!8m2!3d5.415099!4d100.339043!16s%2Fm%2F0nd36qg?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      operatingDays: "-",
      operatingHours: "7:00 AM"
    },
    {
      id: 4,
      title: "Chinese New Year Festival",
      image: "/event/ChineseNewYear2.png",
      description: "Join us for a spectacular Chinese New Year celebration featuring traditional performances, lion dances, and delicious festive food.",
      date: "29 January - 30 January 2025",
      location: "-",
      operatingDays: "Daily during festival period",
      operatingHours: "-"
    },
    {
      id: 5,
      title: "Pai Thee Kong (槟城拜天公之 “蛇2来(Juá Jǐ Lái)”)",
      image: "/event/PaiTheeKong.jpg",
      description: "This event is held to celebrate Pai Tee Kong festival with our community with full of joy and unity. Various interesting activities will be held including lion dance performances, cultural shows, special feasts.",
      date: "5 February 2025",
      location: "https://www.google.com/maps/place/Pengkalan+Weld,+10300+George+Town,+Pulau+Pinang/@5.4121859,100.3381012,17z/data=!3m1!4b1!4m6!3m5!1s0x304ac38dede70369:0xdba533bf575753e2!8m2!3d5.4121859!4d100.3381012!16s%2Fg%2F11c6rh3pvr?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      operatingDays: "-",
      operatingHours: "4:00 PM - 12:00 AM"
    },
    {
      id: 6,
      title: "Thaipusam Celebration",
      image: "/event/Thaipusam.jpg",
      description: "Witness the vibrant Thaipusam festival with its spectacular kavadi procession and religious ceremonies.",
      date: "11 February 2025",
      location: "-",
      operatingDays: "Festival day and eve",
      operatingHours: "-"
    },
    {
      id: 7,
      title: "KBJ Bazaar Ramadan",
      image: "/event/KBJBazaarRamadan.jpg",
      description: "With over 100 stalls which is packed with many mouth-watering dishes, the Bazaar Ramadan sells everything from traditional kuih-muih, Malay and international cuisine, to trendy instaworthy ‘Raya’ fashion and accessories, house decorations and anything you need to make your “Hari Raya” festive a memorable one.",
      date: "2 March 2025 - 30 March 2025",
      location: "https://www.google.com/maps/place/Bukit+Jambul+Complex/@5.333558,100.2738233,14z/data=!3m1!5s0x304ac0437e1689af:0x45ac12243bcebbe4!4m10!1m2!2m1!1sMarket+Place,+Kompleks+Bukit+Jambul!3m6!1s0x304ac0447d568f63:0x925b623fc5de266d!8m2!3d5.333558!4d100.2913328!15sCiNNYXJrZXQgUGxhY2UsIEtvbXBsZWtzIEJ1a2l0IEphbWJ1bFokIiJtYXJrZXQgcGxhY2Uga29tcGxla3MgYnVraXQgamFtYnVskgEPc2hvcHBpbmdfY2VudGVy4AEA!16zL20vMDczZnBo?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      operatingDays: "Throughout the Ramadan month",
      operatingHours: "3:00 PM - 10:00 PM"
    },
    {
      id: 8,
      title: "Hari Raya Aidilfitri Festival",
      image: "/event/HariRaya.jpg",
      description: "Experience the joy of Hari Raya with traditional Malay cuisine, cultural performances, and festive activities.",
      date: "31 March 2025 - 1 April 2025",
      location: "-",
      operatingDays: "Throughout Syawal month",
      operatingHours: "-"
    },
    {
      id: 9,
      title: "Penang International Banknote & Stamp Fair",
      image: "/event/BankNote.jpg",
      description: "Specializing in Numismatic & Philatelic Trade Fairs, we organize and promote Numismatic & Philatelic Trade Fairs in large cities to small towns across Malaysia throughout the year.",
      date: "25 April 2025 - 27 April 2025",
      location: "https://www.google.com/maps/place/1st+Avenue+Mall/@5.4130454,100.3311692,17z/data=!3m2!4b1!5s0x304ac39442adb4b5:0xb9dac829a367e342!4m6!3m5!1s0x304ac3f1daae6d89:0xa3f1b96414fdb863!8m2!3d5.4130454!4d100.3311692!16s%2Fg%2F11b6x_q4r3?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      operatingDays: "25 April 2025 - 27 April 2025",
      operatingHours: "10:00 AM - 10:00 PM"
    },
    {
      id: 10,
      title: "Wesak Day",
      image: "/event/WesakDay.jpg",
      description: "Wesak Day on 12 May 2025",
      date: "12 May 2025",
      location: "-",
      operatingDays: "During festival",
      operatingHours: "-"
    },
    {
      id: 11,
      title: "Malaysia International Miniature Hobby Show & MALCOM 2025 (马来西亚国际微缩模型展及竞赛)",
      image: "/event/MIMHS-MALCOM-2025.jpg",
      description: "MALCOM 2025, held on June 14 - 15 at The Wembley St.Giles Hotel Penang, will showcase miniature hobby displays, competitions, and live workshops. Featuring global manufacturers and top professionals, it offers hobbyists a chance to learn, compete, and connect. Don't miss this premier event for model enthusiasts!",
      date: "14 June - 15 June 2025",
      location: "https://www.google.com/maps/place/St.+Giles+Wembley+Penang/@5.4131919,100.3299289,17z/data=!3m1!4b1!4m9!3m8!1s0x304ac395b1a57811:0x7ff4e0cf10a9ff50!5m2!4m1!1i2!8m2!3d5.4131919!4d100.3299289!16s%2Fg%2F11b7q3ndzh?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      operatingDays: "14 June - 15 June 2025",
      operatingHours: "10:00 AM - 5:30 PM"
    },
    {
      id: 12,
      title: "40th Penang Bridge Anniversary Exhibition",
      image: "/event/40thPenang.jpg",
      description: "Honor the historical significance of the Penang Bridge as a cornerstone of Penang’s development.",
      date: "01 August 2025 - 03 August 2025",
      location: "https://www.google.com/maps/place/1st+Avenue+Mall/@5.4130454,100.3311692,17z/data=!3m2!4b1!5s0x304ac39442adb4b5:0xb9dac829a367e342!4m6!3m5!1s0x304ac3f1daae6d89:0xa3f1b96414fdb863!8m2!3d5.4130454!4d100.3311692!16s%2Fg%2F11b6x_q4r3?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      operatingDays: "01 Aug 2025 - 03 Aug 2025",
      operatingHours: "10:00 AM - 10:00 PM"
    },
    {
      id: 13,
      title: "Merdeka Day",
      image: "/event/MerdekaDay.jpg",
      description: "The state-level National Day parade at the Esplanade in Georgetown, Penang was a vibrant celebration of Malaysia's 68th year of independence.",
      date: "31 August 2025",
      location: "https://www.google.com/maps/place/Esplanade,+Georgetown,+10200+George+Town,+Penang/@5.4191816,100.3439331,15z/data=!3m1!4b1!4m6!3m5!1s0x304ac38f4bb104a7:0x910ae0d92e7f117!8m2!3d5.4191817!4d100.3439331!16s%2Fg%2F11c5rp1htj?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      operatingDays: "31 August 2025",
      operatingHours: "07:00 AM - 12:00 PM"
    },
    {
      id: 14,
      title: "Malaysia Day",
      image: "/event/MalaysiaDay.webp",
      description: "The Malaysia Day Parade is one of the most anticipated events in Penang, Held in the heart of George Town.",
      date: "16 September 2025",
      location: "-",
      operatingDays: "16 September 2025",
      operatingHours: "-"
    },
    {
      id: 15,
      title: "Deepavali ",
      image: "/event/Deepavali.jpg",
      description: "Deepavali, also known as the Festival of Lights, is celebrated with vibrant decorations, oil lamps, and festive gatherings to symbolize the triumph of light over darkness.",
      date: "20 October 2025",
      location: "-",
      operatingDays: "20 Oct 2025",
      operatingHours: "-"
    },
    {
      id: 16,
      title: "Nine Emperor Gods Festival",
      image: "/event/NineEmperor.jpg",
      description: "Experience this nine-day Taoist celebration with vegetarian food festivals and cultural ceremonies.",
      date: "29 October 2025",
      location: "https://www.google.com/maps/place/U+Hotel+Penang/@5.3514169,100.2978422,17z/data=!3m1!4b1!4m9!3m8!1s0x304ac1ac8ab984df:0xedae6756180223bc!5m2!4m1!1i2!8m2!3d5.3514169!4d100.2978422!16s%2Fg%2F11b73r7tcn?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      operatingDays: "During festival",
      operatingHours: "Evening - Midnight"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const getVisibleSlides = () => {
    const slides = [];
    const length = events.length;
    
    // Left slide
    const leftIndex = (currentIndex - 1 + length) % length;
    slides.push({ ...events[leftIndex], position: 'left' });
    
    // Center slide
    slides.push({ ...events[currentIndex], position: 'center' });
    
    // Right slide
    const rightIndex = (currentIndex + 1) % length;
    slides.push({ ...events[rightIndex], position: 'right' });
    
    return slides;
  };

  const renderLocation = (location) => {
    if (location === "-" || !location) {
      return (
        <div className="location-not-available">
          <span className="disabled-text">Location Not Available</span>
        </div>
      );
    }
    return (
      <a 
        href={location} 
        target="_blank" 
        rel="noopener noreferrer"
        className="view-map-link"
      >
        View on Maps
      </a>
    );
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        {getVisibleSlides().map((event) => (
          <div
            key={event.id}
            className={`slide ${event.position}`}
            onClick={() => openModal(event)}
          >
            <img src={event.image} alt={event.title} />
            {event.position === 'center' && (
              <div className="slide-title">{event.title}</div>
            )}
          </div>
        ))}
        
        <button className="nav-button prev" onClick={prevSlide}>&lt;</button>
        <button className="nav-button next" onClick={nextSlide}>&gt;</button>
      </div>

      {showModal && selectedEvent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h2>{selectedEvent.title}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedEvent.image} alt={selectedEvent.title} />
              </div>
              <div className="modal-details">
                <p className="event-description">{selectedEvent.description}</p>
                <div className="event-info">
                  <p><strong>Date:</strong> {selectedEvent.date}</p>
                  <p><strong>Operating Days:</strong> {selectedEvent.operatingDays}</p>
                  <p><strong>Operating Hours:</strong> {selectedEvent.operatingHours}</p>
                  <p>
                    <strong>Location:</strong>{' '}
                    {renderLocation(selectedEvent.location)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSection;
