import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import styles from "./Header.module.scss";
const Header = ({
  setShow,
}: {
  setShow?: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Image src="icons/logo.svg" width={70} height={12} alt="item" />
      </div>
      <div className={styles.header__burger}>
        <Image src="icons/burger.svg" width={21} height={16} alt="item" />
      </div>
      <div className={styles.header__username}>
        <div>
          <p>Editor</p>
          <span>
            Username
            <Image
              src="icons/arrow.svg"
              width={10}
              height={6}
              alt="item"
              style={{ margin: "0 0 0 5px" }}
            />
          </span>
        </div>
      </div>
      <div
        className={styles.header__preview}
        onClick={() => {
          setShow && setShow((prev) => !prev);
        }}
      >
        Preview
      </div>
      <div className={styles.header__storeLink}>
        <div>
          <p>
            Store link:<span>storez.me/mystore</span>
            <button>
              <Image src="icons/copy.svg" width={10} height={10} alt="item" />
              Copy
            </button>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
