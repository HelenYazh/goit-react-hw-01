import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.listItem}>
          <span>Followers </span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views </span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes </span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
