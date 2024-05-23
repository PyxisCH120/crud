import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <form>
          <input type="text" placeholder="nome"></input>
          <input type="email" placeholder="email"></input>
          <input type="tel" placeholder="telefone"></input>
          <textarea placeholder="observações" className={styles.textarea}></textarea>
          <button type="submit" >salvar</button>
        </form>
        <div className={styles.caixacontatos}>
          <input type="text" placeholder="buscar"></input>
          <div className={styles.caixaindividual}>
            <div className={styles.boxtitulo}>
              <p className={styles.nometitulo}>carla gomes farias</p>


              <div>
                <a >editar</a>
                <a >excluir</a>
              </div>
            </div>
            <div className={styles.dados}>
            <p>carla@gmail.com</p>
            <p>859 0000-0000</p>
            <p>amigo</p>
            </div>


          </div>
        </div>
      </main >
    </>
  );
}
//voce parou n 16;14s, o cara tava mudando o botao de busca