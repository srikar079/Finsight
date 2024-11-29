import { Dialog, DialogContent } from "@/components/ui/dialog";
const DialogModal = ({ children, handleOpenChange, isOpen }) => {
  return (
    <>
      <div className="flex">
        <Dialog className="" onOpenChange={handleOpenChange} open={isOpen}>
          <DialogContent className="w-fit ">{children}</DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default DialogModal;
