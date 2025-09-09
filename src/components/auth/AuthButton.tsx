import Image from "next/image";
import { Button } from "../ui/button";

interface AuthButtonProps {
  authIconSrc: string;
  authButtonAlt: string;
  authLabel: string;
}

const AuthButton = ({
  authIconSrc,
  authButtonAlt,
  authLabel,
}: AuthButtonProps) => {
  return (
    <div>
      <Button className="w-[300px] h-12 px-5 py-[6px] flex justify-baseline items-center rounded-[50px] body-r bg-white modal-button-shadow cursor-pointer">
        <Image src={authIconSrc} width={36} height={36} alt={authButtonAlt} />
        <p className="text-gray-70">{authLabel}</p>
      </Button>
    </div>
  );
};

export default AuthButton;
