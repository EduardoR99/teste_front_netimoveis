import Image from "next/image";
import Logo from "../../../public/netimoveisLogo.png";
export default function Header() {
  return (
    <header>
      <div className="bg-white flex justify-between items-center py-3 px-2 shadow-md">
        <Image src={Logo} alt="" width={169} height={42}/>
        <div className="text-[#555] flex justify-around items-center space-x-8">
            <p>Imobiliárias</p>
            <p>Quero me Associar</p>
            <p>Sobre</p>
            <p>Blog</p>
        </div>
        <div className="flex justify-between items-center space-x-4">
            <button className="text-purple border-[1px] border-purple px-2 rounded-full">Anunciar Imóvel</button>
            <button className="text-purple">Entrar</button>
        </div>
      </div>
    </header>
  );
}