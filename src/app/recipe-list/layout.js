import Link from "next/link";

export default function RecipesLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Recipe Explorer
          </Link>
          <Link
            href="/recipe-list"
            className="text-gray-600 hover:text-gray-800"
          >
            All Recipes
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
