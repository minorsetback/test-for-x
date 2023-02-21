import Image from "next/image";
import styles from "./Profile.module.scss";
const Profile = ({ show }: { show: boolean }) => {
  return (
    <div className={!show ? styles.profile : styles.profile__hidden}>
      <div className={styles.profile__settings}>
        <div className={styles.profile__photo}>
          <Image src="icons/camera.svg" width={28} height={26} alt="item" />
        </div>
        <p className={styles.profile__name}>
          @mystore
          <Image
            src="icons/edit.svg"
            width={12}
            height={12}
            alt="item"
            style={{ cursor: "pointer" }}
          />
        </p>
        <div className={styles.profile__buttons}>
          <div className={styles.profile__edit}>Edit profile</div>
          <div className={styles.profile__color}>
            <Image src="icons/color.svg" width={20} height={20} alt="item" />
          </div>
        </div>
      </div>
      <div className={styles.profile__product}>
        <div className={styles.profile__addProduct}>
          <Image src="icons/upload.svg" width={30} height={30} alt="item" />
          <p>Add new product</p>
          <div>
            <Image
              src="icons/white_plus.svg"
              width={13}
              height={13}
              alt="item"
            />
            Upload
          </div>
        </div>
        <div className={styles.profile__productNameWrapper}>
          <div>
            <div className={styles.profile__productName}>
              <Image src="icons/plus.svg" width={22} height={22} alt="item" />
            </div>
            <p>Product Name</p>
          </div>
          <div>
            <div className={styles.profile__productName}>
              <Image src="icons/plus.svg" width={22} height={22} alt="item" />
            </div>
            <p>Product Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
