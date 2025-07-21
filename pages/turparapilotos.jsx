import React, { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import "./turparapilotos.css";
import tour1 from "../assets/img/tourppilotos1.png";   
import tour2 from "../assets/img/tourppilotos2.png";
import tour3 from "../assets/img/tourppilotos3.png";
import cadastur from "../assets/img/cadastur.png";
import banner1 from "../assets/img/banner1.png";

const tours = [
    {
        img: tour1,
        alt: "Praia e Sertão",
        title: "Praia e Sertão",
        date: "(24/03 a 31/03)",
        desc: "Pronto para voar em alguns dos melhores picos do Brasil? Estamos com esse novo roteiro para pilotos iniciantes no esporte.",
        small: "Março 2024",
    },
    {
        img: tour2,
        alt: "Quixadá Verde",
        title: "Quixadá Verde",
        date: "(21/06 a 30/06)",
        desc: "O maior encontro de pilotos da temporada verde do Sertão! Encontro de amigos apaixonados pelo voo durante a época mais serena do ano.",
        small: "Junho 2024",
        invert: true,
    },
    {
        img: tour3,
        alt: "XC Sertão 2025",
        title: "XC Sertão 2025",
        date: "(21/06 a 30/06)",
        desc: (
            <>
                Onde os recordes são quebrados<br />
                Outubro e novembro de 2024
            </>
        ),
        strong: "CAICÓ - ASSU - QUIXADÁ",
        small: "Outubro e Novembro",
    },
];

function TourParaPilotos() {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navbar");
            if (navbar) {
                navbar.classList.toggle("scrolled", window.scrollY > 800);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
            <Navbar />
    <section class="hero">
      <div class="hero-content">
        <h1>Tour Para Pilotos</h1>
      </div>
    </section>
    <div class="grade" >
      <section class="conteudo">
        <img src="/public/images/tourppilotos1.png" alt="Praia e Sertão" />
        <div class="texto">
          <h2>Praia e Sertão</h2>
          <span>(24/03 a 31/03)</span>
          <p>
            Pronto para voar em alguns dos melhores picos do Brasil? Estamos com esse novo roteiro para pilotos iniciantes no esporte.
          </p>
          <small>Março 2024</small><br />
          <a href="#" class="botao">Entre em Contato</a>
        </div>
      </section>
  
      <section class="conteudo invertido">
        <img src="/public/images/tourppilotos2.png" alt="Quixadá Verde" />
        <div class="texto">
          <h2>Quixadá Verde</h2>
          <span>(21/06 a 30/06)</span>
          <p>
            O maior encontro de pilotos da temporada verde do Sertão! Encontro de amigos apaixonados pelo voo durante a época mais serena do ano.
          </p>
          <small>Junho 2024</small><br />
          <a href="#" class="botao">Entre em Contato</a>
        </div>
      </section>
  
      <section class="conteudo">
        <img src="/public/images/tourppilotos3.png" alt="XC Sertão 2025" />
        <div class="texto">
          <h2>XC Sertão 2025</h2>
          <span>(21/06 a 30/06)</span>
          <p>
            Onde os recordes são quebrados<br />
            Outubro e novembro de 2024
          </p>
          <strong>CAICÓ - ASSU - QUIXADÁ</strong>
          <small>Outubro e Novembro</small><br />
          <a href="#" class="botao">Entre em Contato</a>
        </div>
      </section>
    </div>
  </>
                ))}
            </div>
            <Footer cadasturLogo={cadastur} />
        </>
    );
}

export default TourParaPilotos;
  