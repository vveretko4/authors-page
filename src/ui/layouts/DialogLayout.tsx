"use client";
/*
 * Documentation:
 * Dialog Layout — https://app.subframe.com/79a64d4ff271/library?component=Dialog+Layout_ff4920a8-df26-4012-934d-0a9edbf5e373
 * Dialog — https://app.subframe.com/79a64d4ff271/library?component=Dialog_ca59db17-43fb-4247-8094-3c55162e902d
 */

import React from "react";
import * as SubframeUtils from "../utils";
import { Dialog } from "../components/Dialog";

interface DialogLayoutRootProps extends React.ComponentProps<typeof Dialog> {
  children?: React.ReactNode;
  className?: string;
}

const DialogLayoutRoot = React.forwardRef<
  React.ElementRef<typeof Dialog>,
  DialogLayoutRootProps
>(function DialogLayoutRoot(
  { children, className, ...otherProps }: DialogLayoutRootProps,
  ref
) {
  return (
    <Dialog className={className} ref={ref} {...otherProps}>
      <Dialog.Content>
        {children ? (
          <div className="flex w-full grow shrink-0 basis-0 items-start gap-6">
            {children}
          </div>
        ) : null}
      </Dialog.Content>
    </Dialog>
  );
});

export const DialogLayout = DialogLayoutRoot;
