import React from 'react';
import './Profile.css';
import boostsozial from '../images/boostsozial.png';
import mediafollowers from '../images/mediafollowers.png';
import t4fmedia from '../images/t4fmedia.png';

const Profile = () => {
  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="profile-container">
      <h2>Media Followers</h2>
      <div className="card-container">
        <div className="card" onClick={() => handleCardClick('https://www.instagram.com/boostsoziall.jkt?igsh=MXM4YjN2ZDZyZWllbw==')}>
          <img src={boostsozial} alt="Boost Sozial" />
        </div>
        <div className="card logo-card" onClick={() => handleCardClick('https://www.instagram.com/media.follwrssid?igsh=eDBibXNkbDVnb2Nl')}>
          <img src={mediafollowers} alt="Media Followers" />
        </div>
        <div className="card" onClick={() => handleCardClick('https://www.instagram.com/t4fmedia.id?igsh=MXgwNWd3bnYydWdzOA==')}>
          <img src={t4fmedia} alt="T4F Media" />
        </div>
      </div>
      <div className="description">
        <h3>Tentang Usaha Kami</h3>
        <p>
          Hallo! Ini adalah usaha kami yang sudah ada sejak 22 Oktober 2021. Kami bergerak di bidang jual beli followers, likes, dan views di tiga platform utama yaitu Instagram, TikTok, dan Facebook. Kami berkomitmen untuk memberikan layanan terbaik dan membantu Anda meningkatkan engagement di media sosial Anda. Dengan berbagai pilihan paket yang tersedia, kami siap membantu Anda mencapai tujuan media sosial Anda. Terima kasih telah mempercayai kami!
        </p>
      </div>
    </div>
  );
};

export default Profile;
