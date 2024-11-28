import { Dialog, DialogContent } from "@/components/ui/dialog";
const DialogModal = ({ children, handleOpenChange, isOpen }) => {
  return (
    <>
      <div className="flex">
        <Dialog onOpenChange={handleOpenChange} open={isOpen}>
          <div className=" space-x-4 flex"></div>
          <DialogContent className=" w-fit">{children}</DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default DialogModal;
