import '../../styles/Profile.css';

export default function Profile() {
  return (
    <section className="profile">
      <h2 className="section-title">Profile</h2>

      <div className="profile-content">
        <div className="profile-card">
          <h3>Basic Information</h3>
          <p><strong>Doğum tarihi:</strong> 24.03.1996</p>
          <p><strong>İkamet Şehri:</strong> Ankara</p>
          <p><strong>Eğitim Durumu:</strong> Hacettepe Üniv.</p>
          <p><strong>Tercih Ettiği Rol:</strong> Frontend, UI</p>
        </div>

        <div className="profile-text">
          <h3>About me</h3>
          <p>
            Modern, kullanıcı dostu ve ölçeklenebilir arayüzler geliştirmeyi
            seviyorum.
          </p>
          <p>
            React, tasarım sistemleri ve temiz component yapıları ile çalışmayı
            seviyorum.
          </p>
        </div>
      </div>
    </section>
  );
}