export default function ProjectsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="flex flex-col justify-center content-center mt-5">
      {children}
    </section>
  )
}
