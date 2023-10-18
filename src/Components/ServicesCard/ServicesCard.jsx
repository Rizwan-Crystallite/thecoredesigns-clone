// Css
import styles from "./servicesCard.module.css";

const ServicesCard = ({ title, content, img }) => {
    return (
        <div className={`${img} ${styles.wrapper} min-h-[300px] sm:min-h-[400px] md:min-h-[450px] xl:min-h-[500px]`}>
            <div className={`${styles.content}`}>
                <h3 className={`text-[20px] xl:text-[17px] 2xl:text-[24px] leading-tight text-white mb-[40px]`}>
                    {title}
                </h3>
                <p className={`text-[15px] xl:text-[16px] 2xl:text-[18px] xl:leading-[26px] 2xl:leading-[28px] text-white font-light text-justify opacity-0`}>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default ServicesCard;