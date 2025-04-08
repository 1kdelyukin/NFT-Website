import { LoginForm } from "@/components/login-form";
import { GalleryVerticalEnd } from "lucide-react";
import SplineBackground from "@/components/spline-background";

export default function Login() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <SplineBackground />
      </div>
      <div className="relative z-10 pointer-events-none flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10 ">
        <div className="flex w-full max-w-sm flex-col gap-6 pointer-events-auto">
          <a
            href="#"
            className="flex items-center gap-2 self-center font-medium"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
