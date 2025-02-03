import Image from "next/image";
import Lupa from "../../../public/lupa.svg";
import Local from "../../../public/local.svg";
import Bed from "../../../public/bed.svg";
import "../globals.css";
export default function Banner() {
  return (
    <div className="banner-principal flex flex-col justify-center items-center">
      <p className="text-2xl mb-4 ">Vende. Aluga. Conecta.</p>
      <div className="bg-[#fff] items-center justify-between flex w-[50%] rounded-full ">
        <div className="py-2 px-3 w-[45%] hover:bg-[#EDF1F4] hover:rounded-full hover:w-[55%]">
          <div className="flex">
            <Image src={Local} alt="Local" />
            <p className="text-[#393b3d]">Localização</p>
          </div>
          <input
            className="outline-none bg-transparent text-[#393b3d]"
            placeholder="Qual a localização?"
            type="text"
          />
        </div>
        <div className="py-2 px-2 w-[45%] hover:bg-[#EDF1F4] hover:rounded-full hover:w-[55%]">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex">
                <Image src={Bed} alt="Bed" />
                <p className="text-[#393b3d]">Nº de Quartos</p>
              </div>
              <input
                className="outline-none bg-transparent text-[#393b3d]"
                placeholder="Quantos quartos?"
                type="text"
              />
            </div>
            <button className=" text-white mr-2 w-[58px] h-[58px]">
              <Image
                className=" bg-purple w-[48px] h-[48px] px-3 py-3 rounded-full"
                src={Lupa}
                alt="Lupa"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
