import { NavUser } from "@/components/nav-user";

export default function Header({ user }: { user: { name: string; email: string; avatar: string } }) {
  return (
    <header className="flex items-center justify-between p-6 bg-black">
      <div className="text-xl font-bold">Logo</div>
      <NavUser user={user} />
    </header>
  );
}