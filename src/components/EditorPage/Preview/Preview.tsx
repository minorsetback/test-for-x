import ProductItem from "@/components/global/ProductItem/ProductItem";
import Image from "next/image";
import styles from "./Preview.module.scss";
const Preview = ({ show }: { show: boolean }) => {
  return (
    <div className={show ? styles.preview : styles.preview__hidden}>
      <p>Preview</p>
      <div className={styles.preview__phone}>
        <Image
          src="icons/load.svg"
          width={20}
          height={20}
          alt="item"
          style={{ float: "right", margin: "19px 10px 0 0" }}
        />
        <div className={styles.preview__profile}>
          <div>M</div>
          <p className={styles.preview__name}>Store name</p>
          <p className={styles.preview__desc}>Description</p>
        </div>
        <div className={styles.preview__items}>
          <div className={styles.preview__itemsList}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <div className={styles.preview__footer}>
            <p>
              Powered by
              <Image src="icons/logo.svg" width={51} height={14} alt="item" />
            </p>
            <div>
              <span>Contact seller</span> | <span>Terms</span> |
              <span> Report</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
