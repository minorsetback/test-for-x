import styles from "./ProductItem.module.scss";
import Image from "next/image";

const ProductItem = () => {
  return (
    <div className={styles.preview__item}>
      <Image
        src="icons/document.svg"
        width={22}
        height={26}
        alt="item"
        style={{ margin: "30px auto" }}
      />
      <p>-</p>
      <p>-</p>
    </div>
  );
};

export default ProductItem;
