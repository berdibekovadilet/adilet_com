import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "/components/globalComponents/Button";
import styles from "/styles/PageNotFound.module.scss";

const PageNotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1>404</h1>
        <h2 className={styles.title}>Ой, такой страницы не существует</h2>
        <p className={styles.desc}>
          Вы автоматически будете переведны на главную страницу через 3 секунды.
        </p>
        <Link href="/">
          <Button>Перейти на главную самостоятельно</Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
