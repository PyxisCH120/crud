import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";


import { database } from "@/services/firebase";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [nome,setnome] = useState('')
  const [email,setemail] = useState('')
  const [telefone,settelefone] = useState('')
  const [observações,setobservações] = useState('')

  console.log(nome ,email,telefone,observações)
  
  function gravar(){
    const ref=database.ref('contatos')

    const dados= {nome,email,telefone,observações} 

    ref.push()
  }

  return (
    <>
      <main className={styles.container}>
        <form>
          <input type="text" placeholder="nome" onChange={event => setnome(event.target.value)}></input>
          <input type="email" placeholder="email" onChange={event => setemail(event.target.value)}></input>
          <input type="tel" placeholder="telefone" onChange={event => settelefone(event.target.value)}></input>
          <textarea placeholder="observações" onChange={event => setobservações(event.target.value)} className={styles.textarea}></textarea>
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
