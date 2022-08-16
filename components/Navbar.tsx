import Image from 'next/image'
import Logo from '../assets/logo.svg'
function Navbar() {
  return (
    <header className="px-6 py-3 text-xs">
      <div className="text-blue-custom container mx-auto 2xl:ml-10">
        <div className="flex gap-2">
          <Image src={Logo} alt="Logo Lab" width={40} height={40} />
          <div className="">
            <h3 className="text-sm font-bold sm:text-sm">
              Microgrid Digital Twin
            </h3>
            <p className="text-2xs sm:text-xs">
              Lab. Energy Management, Engineering Physics, ITB
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
