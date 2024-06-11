import { Dialog } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { Suspense } from "react";

export default function Login({ login }: { login: boolean }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dialog
        open={login}
        onClose={() => {
          router.push(pathname);
        }}
      ></Dialog>
    </Suspense>
  );
}
