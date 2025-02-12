import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ServerProtectedComponents = ({ children }) => {
  // Membaca cookies
  const cookiesStore = cookies();

  // Mengambil token dari cookies
  const token = cookiesStore.get("access_token");

  // Mengecek apabila token tidak ada, maka redirect ke halaman login
  if (!token || token.value.length <= 0) {
    redirect("/login");
  }

  // Di sini kita hanya akan mengembalikan children
  return <>{children}</>;
};

export default ServerProtectedComponents;
