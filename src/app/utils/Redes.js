import Link from "next/link";
import { BsGithub, BsLinkedin, BsYoutube, BsTwitter } from "react-icons/bs";
import Styles from '../styles/Redes.module.css'

export const Redes = () => {
    return (
        <div>
            <div className="flex items-center flex-row justify-center text-3xl  dark:color-text-ligth " >
                <Link href="https://github.com/rafopm" passHref className={Styles.icon}>
                    <BsGithub className={`dark:color-text-ligth mr-4`} />
                </Link >
                <Link href="" passHref>
                    <BsYoutube className={`mr-4`}/>
                </Link>
                <Link href="" passHref>
                    <BsTwitter className={` mr-4`} />
                </Link>
                <Link href="https://www.linkedin.com/in/rafael-pampavilca/" passHref>
                    <BsLinkedin className={`mr-4`} />
                </Link>
            </div>
        </div>
    )
}
