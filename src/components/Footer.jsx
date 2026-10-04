function Footer(){

const sections = [
  {
    title: 'Comprar e Saber Mais',
    links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comparar modelos', 'Acessórios']
  },
  {
    title: 'Especificações',
    links: ['Características técnicas', 'Câmera', 'Bateria', 'Display']
  },
  {
    title: 'Suporte',
    links: ['Suporte ao iPhone', 'AppleCare+', 'iOS 19', 'Contato']
  },
  {
    title: 'Apple',
    links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras']
  }
];

const buttonLinks = ['Políticas de Privacidade','Termos de uso','Vendas']

    return(
        <footer className="bg-gray-900 border-t-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="hover:text-white cursor-default">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500">Copyright © 2025 Apple Inc. Todos os direitos reservados.</p>
                        <div className="flex gap-6 text-sm text-gray-400">
                            {buttonLinks.map((buttonLink, buttonLinksIndex)=>(
                                <a href="#" key={buttonLinksIndex} className="hover:text-white">{buttonLink}</a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Container flex para alinhar o texto e o ícone na mesma linha */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-6">
                        <p>Site Criado para Fins educacionais - Clone Apple</p>
                        <svg 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-3.5 w-3.5 fill-current"
                        >
                            <g id="SVGRepo_iconCarrier"> 
                                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path> 
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
