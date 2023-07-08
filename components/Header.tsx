import { Aperture } from "lucide-react";

function Header() {
  return (
    <header className="w-full p-2 flex items-center text-brand text-2xl">
      <Aperture className="mr-2" size={30} />
      PixPulse
    </header>
  );
}

export default Header;
