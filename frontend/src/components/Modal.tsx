import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export const Modal = ({
  children,
  title,
  trigger,
  open,
  setOpen,
  showCloseButton = false,
  contentClassName,
}: {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  trigger?: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  showCloseButton?: boolean;
  contentClassName?: string;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent
        showCloseButton={showCloseButton}
        className={cn("border-none shadow-custom-2 p-6", contentClassName)}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
