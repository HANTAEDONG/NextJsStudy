import Navigation from "../components/Navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        &copy; Next Js is Great!
      </body>
    </html>
  )
}
