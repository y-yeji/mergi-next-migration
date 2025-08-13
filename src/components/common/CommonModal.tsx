import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

interface ModalProps {
  modalButton?: React.ReactNode;
  modalTitle: string;
  actionButtonText: string;
  disabled?: boolean;
}

const CommonModal = ({
  modalButton,
  modalTitle,
  actionButtonText,
  disabled,
}: ModalProps) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>{modalButton}</AlertDialogTrigger>
        <AlertDialogContent size="common">
          <AlertDialogHeader>
            <AlertDialogTitle className="h4-b text-gray-70 text-center">
              {modalTitle}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center items-center gap-4">
            <AlertDialogCancel className="w-[107px] h-10 p-[10px] text-gray-70 rounded-lg body-r hover:bg-transparent hover:shadow-none hover:text-black cursor-pointer">
              돌아가기
            </AlertDialogCancel>
            <AlertDialogAction className="w-[107px] h-10 p-[10px] bg-[#364861]/80 rounded-lg body-r hover:bg-[#364861] cursor-pointer">
              {actionButtonText}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CommonModal;
