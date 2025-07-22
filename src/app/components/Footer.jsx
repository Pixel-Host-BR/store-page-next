export default function Footer() {
  return (
    <footer className="bg-[#161723] text-white pt-0">
      {/* Faixa do Discord */}
      <div className="bg-[#367cf7] py-3 text-center font-medium text-[1.07rem]">
        Junte-se ao nosso servidor no Discord para novidades e sorteios!
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
      <div className="flex flex-wrap justify-between px-[7vw] py-10">
        {/* Área 1 - Branding e Social */}
        <div className="min-w-[180px]">
          <div className="font-bold text-lg mb-2 text-purple-300">PixelHost</div>
          <p className="mt-1 mb-2 text-[15px]">
            PixelHost é{' '}
            <a href="#" className="text-blue-300 underline">
              de código aberto.
            </a>
          </p>
          <p className="text-[14px] text-gray-400 mb-1">© 2025 PixelHost, Inc.</p>
          {/* Ícones sociais */}
          <div className="mt-6 flex gap-4">
            <a href="SEU_FACEBOOK" target="_blank" rel="noopener" aria-label="Facebook">
              <i className="fab fa-facebook-f text-[1.3em] hover:text-[#4267B2] transition-colors"></i>
            </a>
            <a href="SEU_INSTAGRAM" target="_blank" rel="noopener" aria-label="Instagram">
              <i className="fab fa-instagram text-[1.3em] hover:text-[#e1306c] transition-colors"></i>
            </a>
            <a href="SEU_TWITTER" target="_blank" rel="noopener" aria-label="Twitter">
              <i className="fab fa-x-twitter text-[1.3em] hover:text-[#00acee] transition-colors"></i>
            </a>
            <a href="SEU_TIKTOK" target="_blank" rel="noopener" aria-label="TikTok">
              <i className="fab fa-tiktok text-[1.3em] hover:text-gray-200 transition-colors"></i>
            </a>
            <a href="SEU_YOUTUBE" target="_blank" rel="noopener" aria-label="YouTube">
              <i className="fab fa-youtube text-[1.3em] hover:text-[#ff0000] transition-colors"></i>
            </a>
            <a href="SEU_TWITCH" target="_blank" rel="noopener" aria-label="Twitch">
              <i className="fab fa-twitch text-[1.3em] hover:text-[#9147ff] transition-colors"></i>
            </a>
            <a href="SEU_LINK_DO_DISCORD" target="_blank" rel="noopener" aria-label="Discord">
              <i className="fab fa-discord text-[1.3em] hover:text-[#5865f2] transition-colors"></i>
            </a>
          </div>
        </div>

        {/* Outras colunas, adapte conforme sua estrutura */}
        <div className="mt-8 sm:mt-0">
          <div className="font-semibold">Sobre</div>
          <ul className="text-[15px] mt-1 space-y-1">
            <li>
              <a href="#" className="hover:underline">Notícias</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Registro de alterações</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Status</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Carreiras</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Programa de Recompensas</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 sm:mt-0">
          <div className="font-semibold">Produtos</div>
          <ul className="text-[15px] mt-1 space-y-1">
            <li>
              <a href="#" className="hover:underline">PixelHost+</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Aplicativo PixelHost</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Servidores PixelHost</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 sm:mt-0">
          <div className="font-semibold">Recursos</div>
          <ul className="text-[15px] mt-1 space-y-1">
            <li>
              <a href="#" className="hover:underline">Central de Ajuda</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Traduzir</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Relatar problemas</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Documentação da API</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 sm:mt-0">
          <div className="font-semibold">Jurídico</div>
          <ul className="text-[15px] mt-1 space-y-1">
            <li>
              <a href="#" className="hover:underline">Regras de conteúdo</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Termos de Uso</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Política de Privacidade</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Aviso de segurança</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra legal/aviso */}
      <div className="bg-[#191a2b] text-center text-xs text-gray-400 py-3">
        NÃO É UM SERVIÇO OFICIAL DO MINECRAFT. NÃO É APROVADO OU ASSOCIADO À MOJANG OU MICROSOFT.
      </div>
    </footer>
  );
}
