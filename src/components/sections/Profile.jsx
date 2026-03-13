import { useLanguage } from '../context/LanguageContext';
import profile from '../../data/profile.json';
import '../../styles/Profile.css';

export default function Profile() {
  const { t, language } = useLanguage();

  return (
    <section className="profile section">
      <div className="container">
        <h2 className="section-title">{t.profileTitle}</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <h3>{t.basicInfoTitle}</h3>
            <p><strong>Doğum tarihi:</strong> {profile.birthDate}</p>
            <p><strong>İkamet Şehri:</strong> {profile.city}</p>
            <p><strong>Eğitim Durumu:</strong> {profile.education}</p>
            <p><strong>Tercih Ettiği Rol:</strong> {profile.role}</p>
          </div>

          <div className="profile-text">
            <h3>{t.aboutMeTitle}</h3>
            <p>{language === 'tr' ? profile.aboutTr1 : profile.aboutEn1}</p>
            <p>{language === 'tr' ? profile.aboutTr2 : profile.aboutEn2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}