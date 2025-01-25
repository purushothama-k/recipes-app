import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-green-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        😋 Welcome to Recipe Explorer 🍕
      </h1>
      <Link href="/recipe-list">
        <Button size="lg">Explore Recipes</Button>
      </Link>
    </div>
  );
}
