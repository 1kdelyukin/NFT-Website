import { RegisterForm } from "@/components/register-form";
import background from "@/assets/background.jpg";


export default function Register() {
    return (
      <div className="relative min-h-screen" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8">
            <RegisterForm/>
          </div>
        </div>
      </div>
    );
  }