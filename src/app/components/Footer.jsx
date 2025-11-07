"use client";

import { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const raRef = useRef(null);
  const tpRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
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

  const socialLinks = [
    { 
      href: "https://www.facebook.com/profile.php?id=61574219692149", 
      icon: Facebook, 
      label: "Facebook",
      color: "hover:text-[#4267B2]"
    },
    { 
      href: "https://www.instagram.com/thepixelhost/", 
      icon: Instagram, 
      label: "Instagram",
      color: "hover:text-[#e1306c]"
    },
    { 
      href: "https://x.com/pixelhost_", 
      icon: null, 
      label: "Twitter",
      color: "hover:text-[#00acee]",
      useFA: true,
      faIcon: "fab fa-x-twitter"
    },
    { 
      href: "https://www.linkedin.com/company/pixelhostbr/?viewAsMember=true", 
      icon: Linkedin, 
      label: "LinkedIn",
      color: "hover:text-[#0a66c2]"
    },
    { 
      href: "https://github.com/Pixel-Host-BR", 
      icon: Github, 
      label: "GitHub",
      color: "hover:text-[#333]"
    },
    { 
      href: "https://discord.gg/BBAPJyKUw7", 
      icon: null, 
      label: "Discord",
      color: "hover:text-[#5865f2]",
      useFA: true,
      faIcon: "fab fa-discord"
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#161723] to-[#0f1019] text-white pt-0 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      {/* Faixa do Discord */}
      <div className="relative bg-gradient-to-r from-[#5e34e0] to-[#7c5cf0] py-4 text-center font-medium text-base sm:text-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/90 mb-3 sm:mb-0 sm:inline">
            Participe da nossa comunidade no Discord para novidades!
          </p>
          <a
            href="https://discord.gg/BBAPJyKUw7"
            target="_blank"
            rel="noopener"
            className="inline-block sm:ml-4 mt-3 sm:mt-0 bg-white text-[#367cf7] px-6 py-2.5 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <i className="fab fa-discord text-lg"></i>
            <span>Entrar no Discord</span>
          </a>
        </div>
      </div>

      {/* Corpo principal do footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Branding + sociais */}
          <div className="lg:col-span-2 space-y-6">
            <div 
              className={`transition-all duration-1000 delay-100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex-shrink-0 flex justify-start">
                <div className="relative group">
                  <img
                    src="https://i.imgur.com/JbKkw2N.png"
                    alt="Logo PixelHost"
                    className="h-8 w-auto md:h-10 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            <p 
              className={`text-sm text-gray-400 transition-all duration-1000 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              © 2025 PixelHost, Inc. Todos os direitos reservados.
            </p>

            {/* Social icons */}
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener"
                    className={`group relative flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700/50 hover:scale-110 hover:border-blue-500/50 hover:shadow-lg`}
                    aria-label={social.label}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {social.useFA ? (
                      <i className={`${social.faIcon} text-lg transition-transform duration-300 group-hover:scale-110`} />
                    ) : (
                      Icon && <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Badges alinhados lado a lado */}
            <div 
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 transition-all duration-1000 delay-400 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Selo Reclame Aqui */}
              <div ref={raRef} id="reputation-ra" />
              
              {/* Trustpilot Widget */}
              <div
                className="trustpilot-widget"
                data-locale="pt-PT"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="68843cb907305e60a4582107"
                data-style-height="50px"
                data-style-width="200px"
                ref={tpRef}
              />
            </div>
          </div>

          {/* Coluna: Sobre */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h4 className="font-bold text-lg mb-4 text-white">Sobre</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://pixelhostbr.com/financeiro/index.php?rp=/announcements" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Notícias
                </a>
              </li>
              <li>
                <a 
                  href="https://pixelhostbr.com/financeiro/serverstatus.php" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna: Produtos */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h4 className="font-bold text-lg mb-4 text-white">Produtos</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/games/minecraft" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Hospedagem Minecraft
                </a>
              </li>
              <li>
                <a 
                  href="/games/ark" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Hospedagem Ark
                </a>
              </li>
              <li>
                <a 
                  href="/games/palworld" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Hospedagem PalWorld
                </a>
              </li>
              <li>
                <a 
                  href="/games/dayz" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Hospedagem DayZ
                </a>
              </li>
              <li>
                <a 
                  href="/games/mta" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Hospedagem Mta
                </a>
              </li>
              <li>
                <a 
                  href="/games/project-zomboid" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Hospedagem Project Zomboid
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna: Recursos */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h4 className="font-bold text-lg mb-4 text-white">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://pixelohost.tawk.help/" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a 
                  href="https://tawk.to/chat/68221a806e1d72190c2992dd/1ir2jf20l" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Relatar problemas
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna: Jurídico */}
          <div 
            className={`transition-all duration-1000 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h4 className="font-bold text-lg mb-4 text-white">Jurídico</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://pixelohost.tawk.help/article/termos-de-uso-%E2%80%93-pixelhost" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a 
                  href="https://pixelohost.tawk.help/category/pol%C3%ADticas-pixelhost" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Políticas da PixelHost
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div 
        className={`relative bg-[#191a2b] text-center text-xs text-gray-400 py-4 border-t border-gray-800/50 transition-all duration-1000 delay-600 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          NÃO É UM SERVIÇO OFICIAL DO MINECRAFT. NÃO É APROVADO OU ASSOCIADO À MOJANG OU MICROSOFT.
        </div>
      </div>
    </footer>
  );
}
