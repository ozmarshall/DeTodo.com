import iconos_styles from "../../ui/iconos/iconos_styles";
import "./upload-image.scss";

export function Uploadimage(props) {
    const {
      type = "",
      className = "",
      onChange = () => {},
    } = props;
  
    return (
      <label
        type={type}
        className={`${className}`}
        onChange={onChange}
      ><input type="file"/><img className="w-full h-full" src={iconos_styles.img5} alt="" /></label>
    );
  }
  


