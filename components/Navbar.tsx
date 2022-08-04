import Image from 'next/image'
import Logo from '../assets/logo.svg';
function Navbar() {
  return (
    <header className="px-6 py-3 text-sm">
      <div className="container mx-auto text-blue-custom">
        <div className="flex gap-2">
        <Image src={Logo} alt="Logo Lab" width={50}
      height={50}/>
      <div>
        <h1 className="text-xl font-bold">Microgrid Digital Twin</h1>
        Lab. Energy Management, Engineering Physics, ITB
      </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
