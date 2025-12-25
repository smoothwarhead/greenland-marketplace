import { FaPencilAlt } from "react-icons/fa";
import { profileData } from "../../utils/data";
import { hasEmptyKey } from "../../utils/methods";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="commission-page">
      <div className="commission-page-inner">
        <div className="commission-header">
          <h2>Profile</h2>
        </div>

        <div className="profile-grid">
          {profileData.map((card, index) => (
            <div className="profile-card" key={index}>
              <div className="profile-title">
                <card.icon />

                <span>{card.title}</span>
              </div>

              {hasEmptyKey(card, "image") && (
                <div className="profile-img-con">
                  <div className="profile-img">
                    <img src={card.image} alt={card.title} />
                  </div>
                </div>
              )}

              <div className="profile-text-con">
                {card.elements.map((el, i) => (
                  <div className="profile-texts" key={i}>
                    <div className="txt-label">{el.label}:</div>
                    <div className="txt">{el.text}</div>
                  </div>
                ))}
              </div>

              <div className="profile-btns">

                <div className="profile-edit-btn">
                    <span>Edit</span>
                    <FaPencilAlt />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
