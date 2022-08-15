import Image from 'next/image'
import Logo from '../assets/logo.svg';
function Navbar() {
  return (
    <header className="px-6 py-3 text-xs">
      <div className="container mx-auto text-blue-custom">
        <div className="flex gap-2">
        <Image src={Logo} alt="Logo Lab" width={40}
      height={40}/>
      <div>
        <h3 className="text-sm sm:text-lg font-bold">Microgrid Digital Twin</h3>
        <p className="text-2xs sm:text-sm">
        Lab. Energy Management, Engineering Physics, ITB
        </p>
      </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
