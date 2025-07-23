"use client";


import { useEffect, useRef } from "react";

export default function Footer() {
  const raRef = useRef(null);

  useEffect(() => {
    if (raRef.current && !document.getElementById("ra-embed-reputation")) {
      const script = document.createElement("script");
      script.id = "ra-embed-reputation";
      script.src = "https://s3.amazonaws.com/raichu-beta/selos/bundle.js";
      script.setAttribute("data-id", "MTcxMzgyODpwaXhlbGhvc3Q=");
      script.setAttribute("data-target", "reputation-ra");
      script.setAttribute("data-model", "2");
      script.type = "text/javascript";
      raRef.current.appendChild(script);
    }
  }, []);

  return (
    <footer className="bg-[#161723] text-white pt-0">
      {/* Faixa do Discord */}
      <div className="bg-[#367cf7] py-3 text-center font-medium text-[1.07rem]">
        Junte-se ao nosso servidor no Discord para novidades !
        <a
          href="SEU_LINK_DO_DISCORD"
          target="_blank"
          rel="noopener"
          className="inline-block ml-4 bg-white text-[#367cf7] px-5 py-1.5 rounded-md font-bold hover:bg-[#eaeaea] transition"
        >
          <i className="fab fa-discord mr-2"></i>
          Entrar no Discord
        </a>
      </div>

      {/* Corpo principal do footer */}
      <div className="flex flex-wrap justify-between px-[7vw] py-10 gap-10">
        {/* Branding + sociais */}
        <div className="min-w-[180px]">
          <div className="font-bold text-lg mb-2 text-purple-300">PixelHost</div>
          <p className="mt-1 mb-2 text-[15px]">
            PixelHost é{" "}
            <a href="#" className="text-blue-300 underline">
              de código aberto.
            </a>
          </p>
          <p className="text-[14px] text-gray-400 mb-1">© 2025 PixelHost, Inc.</p>

          {/* Social icons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="SEU_FACEBOOK" target="_blank" rel="noopener">
              <i className="fab fa-facebook-f text-[1.3em] hover:text-[#4267B2] transition-colors"></i>
            </a>
            <a href="SEU_INSTAGRAM" target="_blank" rel="noopener">
              <i className="fab fa-instagram text-[1.3em] hover:text-[#e1306c] transition-colors"></i>
            </a>
            <a href="SEU_TWITTER" target="_blank" rel="noopener">
              <i className="fab fa-x-twitter text-[1.3em] hover:text-[#00acee] transition-colors"></i>
            </a>
            <a href="SEU_TIKTOK" target="_blank" rel="noopener">
              <i className="fab fa-tiktok text-[1.3em] hover:text-gray-200 transition-colors"></i>
            </a>
            <a href="SEU_YOUTUBE" target="_blank" rel="noopener">
              <i className="fab fa-youtube text-[1.3em] hover:text-[#ff0000] transition-colors"></i>
            </a>
            <a href="SEU_TWITCH" target="_blank" rel="noopener">
              <i className="fab fa-twitch text-[1.3em] hover:text-[#9147ff] transition-colors"></i>
            </a>
            <a href="SEU_LINK_DO_DISCORD" target="_blank" rel="noopener">
              <i className="fab fa-discord text-[1.3em] hover:text-[#5865f2] transition-colors"></i>
            </a>
          </div>

          {/* Selo Reclame Aqui */}
          <div className="mt-6" ref={raRef} id="reputation-ra" />
        </div>

        {/* Coluna: Sobre */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-2">Sobre</h4>
          <ul className="text-[15px] space-y-1">
            <li><a href="#" className="hover:underline">Notícias</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>

        {/* Coluna: Produtos */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-2">Produtos</h4>
          <ul className="text-[15px] space-y-1">
            <li><a href="#" className="hover:underline">Hospedagem Minecraft</a></li>
            <li><a href="#" className="hover:underline">Hospedagem Ark</a></li>
            <li><a href="#" className="hover:underline">Hospedagem PalWorld</a></li>
            <li><a href="#" className="hover:underline">Hospedagem DayZ</a></li>
            <li><a href="#" className="hover:underline">Hospedagem Mta</a></li>
            <li><a href="#" className="hover:underline">Servidores customizados</a></li>
          </ul>
        </div>

        {/* Coluna: Recursos */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-2">Recursos</h4>
          <ul className="text-[15px] space-y-1">
            <li><a href="#" className="hover:underline">Central de Ajuda</a></li>
            <li><a href="#" className="hover:underline">Traduzir</a></li>
            <li><a href="#" className="hover:underline">Relatar problemas</a></li>
          </ul>
        </div>

        {/* Coluna: Jurídico */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-2">Jurídico</h4>
          <ul className="text-[15px] space-y-1">
            <li><a href="#" className="hover:underline">Termos de Uso</a></li>
            <li><a href="#" className="hover:underline">Privacidade</a></li>
            <li><a href="#" className="hover:underline">Política de conteúdo</a></li>
            <li><a href="#" className="hover:underline">Aviso legal</a></li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="bg-[#191a2b] text-center text-xs text-gray-400 py-3">
        NÃO É UM SERVIÇO OFICIAL DO MINECRAFT. NÃO É APROVADO OU ASSOCIADO À MOJANG OU MICROSOFT.
      </div>
    </footer>
  );
}
