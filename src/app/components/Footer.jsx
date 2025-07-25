"use client";


import { useEffect, useRef } from "react";

export default function Footer() {
  const raRef = useRef(null);
  const tpRef = useRef(null); // <-- isto aqui é crucial!

  useEffect(() => {
    if (raRef.current && !document.getElementById("ra-embed-reputation")) {
      const raScript = document.createElement("script");
      raScript.id = "ra-embed-reputation";
      raScript.src = "https://s3.amazonaws.com/raichu-beta/selos/bundle.js";
      raScript.setAttribute("data-id", "MTcxMzgyODpwaXhlbGhvc3Q=");
      raScript.setAttribute("data-target", "reputation-ra");
      raScript.setAttribute("data-model", "2");
      raScript.type = "text/javascript";
      raRef.current.appendChild(raScript);
    }

    if (
      tpRef.current &&
      !document.querySelector('script[src*="tp.widget.bootstrap.min.js"]')
    ) {
      const tpScript = document.createElement("script");
      tpScript.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      tpScript.async = true;
      tpRef.current.appendChild(tpScript);
    }
  }, []);

  return (
    <footer className="bg-[#161723] text-white pt-0">
      {/* Faixa do Discord */}
      <div className="bg-[#5e34e0] py-3 text-center font-medium text-[1.07rem]">
        Participe da nossa comunidade no Discord para novidades !
        <a
          href="https://discord.gg/BBAPJyKUw7"
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
          <div className="flex-shrink-0 flex justify-start ">
                        <div className="relative">
                          <img
                            src="https://i.imgur.com/Hl1hshd.png"
                            alt="Logo PixelHost"
                            className="h-6 w-auto md:h-8"
                          />
                        </div>
                    </div>
          
          <p className="text-[14px] text-gray-400 mb-1">© 2025 PixelHost, Inc.</p>

          {/* Social icons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://www.facebook.com/profile.php?id=61574219692149" target="_blank" rel="noopener">
              <i className="fab fa-facebook-f text-[1.3em] hover:text-[#4267B2] transition-colors"></i>
            </a>
            <a href="https://www.instagram.com/thepixelhost/" target="_blank" rel="noopener">
              <i className="fab fa-instagram text-[1.3em] hover:text-[#e1306c] transition-colors"></i>
            </a>
            <a href="https://x.com/pixelhost_" target="_blank" rel="noopener">
              <i className="fab fa-x-twitter text-[1.3em] hover:text-[#00acee] transition-colors"></i>
            </a>
            <a href="https://www.linkedin.com/company/pixelhostbr/?viewAsMember=true" target="_blank" rel="noopener">
              <i className="fab fa-linkedin text-[1.3em] hover:text-[#0a66c2] transition-colors"></i>
            </a>
            <a href="https://github.com/Pixel-Host-BR" target="_blank" rel="noopener">
              <i className="fab fa-github text-[1.3em] hover:text-[#0a66c2] transition-colors"></i>
            </a>
            <a href="https://discord.gg/BBAPJyKUw7" target="_blank" rel="noopener">
              <i className="fab fa-discord text-[1.3em] hover:text-[#5865f2] transition-colors"></i>
            </a>
          </div>

          {/* Selo Reclame Aqui */}
          <div className="mt-6" ref={raRef} id="reputation-ra" />
          <div
          className="trustpilot-widget mt-6"
          data-locale="pt-PT"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="68843cb907305e60a4582107"
          data-style-height="50px"
          data-style-width="100%"
          style={{marginLeft: "-60px", marginTop: "2px"}}
          ref={tpRef}
        />
        </div>
        

      {/* Coluna: Sobre */}
      <div className="min-w-[160px]">
          <h4 className="font-semibold mb-2">Sobre</h4>
          <ul className="text-[15px] space-y-1">
            <li><a href="https://pixelhostbr.com/financeiro/index.php?rp=/announcements" className="hover:underline hover:text-[#5e34e0]">Notícias</a></li>
            <li><a href="https://pixelhostbr.com/financeiro/serverstatus.php" className="hover:underline hover:text-[#5e34e0]">Status</a></li>
          </ul>
        </div>

        {/* Coluna: Produtos */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-2 ">Produtos</h4>
          <ul className="text-[15px] space-y-1">
            <li><a href="/games/minecraft" className="hover:underline hover:text-[#5e34e0]">Hospedagem Minecraft</a></li>
            <li><a href="/games/ark" className="hover:underline hover:text-[#5e34e0]">Hospedagem Ark</a></li>
            <li><a href="/games/palworld" className="hover:underline hover:text-[#5e34e0]">Hospedagem PalWorld</a></li>
            <li><a href="/games/dayz" className="hover:underline hover:text-[#5e34e0]">Hospedagem DayZ</a></li>
            <li><a href="/games/mta" className="hover:underline hover:text-[#5e34e0]">Hospedagem Mta</a></li>
            <li><a href="/games/project-zomboid" className="hover:underline hover:text-[#5e34e0]">Hospedagem Project Zomboid</a></li>
          </ul>
        </div>

        {/* Coluna: Recursos */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-2">Recursos</h4>
          <ul className="text-[15px] space-y-1">
            <li><a href="https://pixelohost.tawk.help/" className="hover:underline hover:text-[#5e34e0]">Central de Ajuda</a></li>
            <li><a href="https://tawk.to/chat/68221a806e1d72190c2992dd/1ir2jf20l" className="hover:underline hover:text-[#5e34e0]">Relatar problemas</a></li>
          </ul>
        </div>

        {/* Coluna: Jurídico */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-2">Jurídico</h4>
          <ul className="text-[15px] space-y-1">
            <li><a href="https://pixelohost.tawk.help/article/termos-de-uso-%E2%80%93-pixelhost" className="hover:underline hover:text-[#5e34e0]">Termos de Uso</a></li>
            <li><a href="https://pixelohost.tawk.help/category/pol%C3%ADticas-pixelhost" className="hover:underline hover:text-[#5e34e0]">Políticas da PixelHost</a></li>
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
