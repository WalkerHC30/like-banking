import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const logginIn = {
    firstName: 'David',
    lastName: 'Chen'
  }

  return (
    <main className="flex h-screen w-full font-inter ">
      <SideBar user={logginIn} />
      {children}
    </main>
  );
}
