import AuthModal from "@/components/auth/AuthModal";
import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-100 flex justify-center items-center">
      <AuthModal open={isOpen} onOpenChange={setIsOpen}/>
    </div>
  );
};

export default Page;
