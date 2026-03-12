import profile from '../../data/profile.json';
import '../../styles/Profile.css';

export default function Profile() {
  return (
    <section className="profile section">
      <div className="container">
        <h2 className="section-title">Profile</h2>

        <div className="profile-grid">
          <div className="profile-card">
            <h3>Basic Information</h3>
            <p>
              <strong>Doğum tarihi:</strong> {profile.birthDate}
            </p>
            <p>
              <strong>İkamet Şehri:</strong> {profile.city}
            </p>
            <p>
              <strong>Eğitim Durumu:</strong> {profile.education}
            </p>
            <p>
              <strong>Tercih Ettiği Rol:</strong> {profile.role}
            </p>
          </div>

          <div className="profile-text">
            <h3>About me</h3>
            <p>{profile.about1}</p>
            <p>{profile.about2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}