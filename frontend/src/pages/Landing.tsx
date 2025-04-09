import SplineBackground2 from '@/components/spline-background2';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <SplineBackground2 />
      </div>
      <div className="relative z-10 flex items-center pl-30 min-h-screen pointer-events-none">
        <div className="pointer-events-auto w-2/5">
          <h1 className="text-5xl font-semibold mb-4">Your Future of Digital Ownership Starts Here</h1>
          <h2 className="text-2xl mb-5"> Whether you're looking for rare art, game items, music, or collectibles — Company Name Inc. is your gateway to the decentralized world.</h2>
          <Button className='p-8 py-6 bg-[#4245ff] text-md' onClick={() => navigate('/register')}>
              <p className="text-lg">Get Started</p>
              <ChevronRight className="size-5" />
          </Button>
          <Button variant="outline" className="ml-4 p-8 py-6 bg-white text-md" onClick={() => navigate('/login')}>
              <p className="text-lg">Sign In</p>
              <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
