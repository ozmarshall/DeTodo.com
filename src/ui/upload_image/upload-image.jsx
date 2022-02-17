import { useState } from "react";
import iconos_styles from "../../ui/iconos/iconos_styles";
import "./upload-image.scss";

export function Uploadimage(props) {
  const { type = "", className = "", onChange = () => {} } = props;
  const [refUrlImage, setRefUrlImage] = useState(iconos_styles.img5);

  return (
    <label
      type={type}
      className={`${className}`}
      onChange={(event) => {
        if (event.target.files.length > 0) {
          const src = URL.createObjectURL(event.target.files[0]);
          setRefUrlImage(src);
        }
        onChange(event);
      }}
    >
      <input type="file" />
      <img className="w-full h-full object-cover" src={refUrlImage} alt="" />
    </label>
  );
}
