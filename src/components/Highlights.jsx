


function Highlights() {
    return (
       <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design Revolucionário</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar uma experiência única e inesquecível.</p>
                </div>

                <div className="grid grid-cols-2 gap-7 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img src="/img/titanium-design.jpg" alt="titanium Image" className="w-full rounded-2xl mb-4"></img>
                        <h3 className="font-bold mb-2 text-3xl">Titanium Premium</h3>
                        <p className="text-gray-300">Estrutura robusta e design elegante. O smartphone que combina estilo e funcionalidade.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img src="/img/ios-features.jpg" alt="ultra thin Image" className="w-full rounded-2xl mb-4"></img>
                        <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
                        <p className="text-gray-300">Sistema operacional mais avançado até agora.</p>
                    </div>
                </div>


                <div className="bg-gray-900 rounded-2xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais potente da história do iPhone.</p>
                    <img src="/img/chip-a18-pro.jpg" alt="A18 chip" className="w-full rounded-2xl mb-4"></img>
                    <ul className="space-y-3 text-gray-300 ">
                        <li className="">CPU 20% mais rápido</li>
                        <li>GPU 20% mais rápido</li>
                        <li>Neural Engine 20% mais rápido</li>
                        <li>Ray tracing 20% mais rápido</li>
                    </ul>
                </div>


                <div className="text-center" id="camera">
                   <h3 className="text-4xl font-bold mb-10">Sitema de câmara Pro avançados</h3> 


                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-gray-900 rounded-2xl p-8">
                                <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                                <h4 className="text-xl font-semibold mb-2">Principal</h4>
                                <p className="text-gray-400">Sensor quad-pixel com foco automático</p>
                            </div>

                            <div className="bg-gray-900 rounded-2xl p-8">
                                <div className="text-4xl font-bold text-orange-500 mb-4">12MP</div>
                                <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                                <p className="text-gray-400">Campo de visão de 120 com modo noturno</p>
                            </div>

                            <div className="bg-gray-900 rounded-2xl p-8">
                                <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                                <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                                <p className="text-gray-400">Zoom ótico de 5x com estabilização</p>
                            </div>

                        </div>
                </div>

            </div>
       </section>
    )
}

export default Highlights