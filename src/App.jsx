import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import { Navigation } from 'swiper/modules';


export default function App() {
  return (
    <div className="font-sans">
      {/* Banner Rotativo */}
      <section className="bg-[#1428A0] text-white text-center py-4 px-4 overflow-hidden relative">
        <div className="animate-slide w-full whitespace-nowrap">
          <span className="inline-block text-2xl md:text-3xl font-bold mx-8">Smart TVs com até 20% OFF</span>
          <span className="inline-block text-2xl md:text-3xl font-bold mx-8">Parcelamento em até 12x sem juros</span>
          <span className="inline-block text-2xl md:text-3xl font-bold mx-8">Instalação gratis para maquina de lavar e televisores</span>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#1428A0] text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tecnologia Samsung para Sua Casa Completa</h1>
        <p className="text-lg md:text-xl mb-6">Ofertas exclusivas em TVs, Smartphones, Ar-Condicionado, Linha Kitchen e muito mais.</p>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-lg inline-flex items-center gap-2"
        >
          <FaWhatsapp /> Falar com um Especialista Samsung
        </a>
      </section>

      {/* Produtos */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Categorias de Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProductCard
            images={["/public/tv.webp"]}
            name="Televisores Smart 4K"
            price=""
            whatsappMessage="Olá! Tenho interesse na Smart TV 55'' que vi no site."
          />
          <ProductCard
            images={["/public/celular.webp","/public/celular_2.webp"]}
            name="Smartphones"
            price=""
            whatsappMessage="Olá! Gostaria de saber mais sobre o Galaxy S23."
          />
          <ProductCard
            images={["/public/geladeira.webp"]}
            name="Refrigeradores"
            price=""
            whatsappMessage="Olá! Me interessei pelo Refrigerador Samsung 460L."
          />
          <ProductCard
            images={["/public/maquina.avif"]}
            name="Lava e Seca"
            price=""
            whatsappMessage="Olá! Quero informações sobre a Lava e Seca Samsung."
          />
          <ProductCard
            images={["/public/ar.avif"]}
            name="Ar-Condicionado"
            price="R$ 2.199,00"
            whatsappMessage="Olá! Gostaria de saber mais sobre o Ar-Condicionado WindFree."
          />
          <ProductCard
            images={["/public/lava-louca.jpg"]}
            name="Linha Kitchen Samsung (Coifa, Lava-louças, Cooktop, Forno)"
            price=""
            whatsappMessage="Olá! Quero saber sobre os produtos da Linha Kitchen Samsung."
          />
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">O que dizem nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Testimonial name="Ana Souza" comment="Comprei minha TV com eles e chegou super rápido. Atendimento top!" />
          <Testimonial name="Carlos Lima" comment="Tive dúvidas sobre o refrigerador e me ajudaram direto no WhatsApp. Show de bola!" />
          <Testimonial name="Juliana Mendes" comment="Produto original, bem embalado e ainda consegui desconto! Super indico." />
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 px-4 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Solicite seu Orçamento Personalizado</h2>
        <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          <input type="text" placeholder="Seu nome" className="border p-3 rounded" />
          <input type="tel" placeholder="WhatsApp" className="border p-3 rounded" />
          <textarea placeholder="Produto de Interesse" className="border p-3 rounded h-32"></textarea>
          <button type="submit" className="bg-[#1428A0] text-white py-3 rounded hover:bg-blue-900">Quero Receber Oferta</button>
        </form>
      </section>

      {/* Rodapé */}
      <footer className="bg-[#1428A0] text-white py-6 text-center">
        <p>&copy; 2025 Casa do Celular Store + - Especializada Samsung. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function ProductCard({ images, name, price, whatsappMessage }) {
  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition flex flex-col items-center">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-60 mb-4 rounded overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={name} className="object-cover w-full h-60" />
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-800 font-bold mb-4">{price}</p>
      <a
        href={`https://wa.me/5599999999999?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center gap-2"
      >
        <FaWhatsapp /> Falar no WhatsApp
      </a>
    </div>
  );
}

function Testimonial({ name, comment }) {
  return (
    <div className="bg-gray-100 p-6 rounded shadow text-left">
      <p className="italic text-gray-700">"{comment}"</p>
      <p className="mt-4 font-semibold text-blue-900">— {name}</p>
    </div>
  );
}
