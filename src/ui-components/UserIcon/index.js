import Image from "next/image";
import styles from "./UserIcon.module.css";


const UserIcon = ({
    onClick = () => {}
}) => {
    return (
        <div onClick={onClick} className={styles.container}>
            <Image 
                src={`/user-pic.jpeg`}
                width={'40'}
                height={'40'}
                alt="descrption of the image"
            />
        </div>
    );
}

export default UserIcon;