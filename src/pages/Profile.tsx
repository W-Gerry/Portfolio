import profileImage from "../assets/images/profile/profile.jpg";

import "./Profile.scss";

function Profile () {
    return (
        <>
            <h1>Profile</h1>
            <section className="container">
                <div className="profile-intro">
                <img className="profile-intro__image" src={profileImage} />
                    <div className="profile-intro__content">
                        <h2 className="profile-intro__content__about-me">
                            About Me
                        </h2>
                        <p className="profile-intro__content__text">
                            This is  the about me section
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Profile;