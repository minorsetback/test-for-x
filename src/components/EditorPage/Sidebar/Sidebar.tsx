import Image from "next/image";
import styles from "./Sidebar.module.scss";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__listItem}>
          <Image src="icons/dashboards.svg" width={14} height={14} alt="item" />
          <span>Dashboard</span>
        </li>
        <li className={styles.sidebar__listItemActive}>
          <Image src="icons/editor.svg" width={14} height={14} alt="item" />
          <span>Editor</span>
        </li>
        <li className={styles.sidebar__listItem}>
          <Image src="icons/list.svg" width={14} height={14} alt="item" />
          <span>My stores</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
