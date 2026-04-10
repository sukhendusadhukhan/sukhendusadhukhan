import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Dr. Sukhendu Sadhukhan – Post-Doctoral Researcher' },
      { name: 'description', content: 'Portfolio of Dr. Sukhendu Sadhukhan, Post-Doctoral Researcher at SATIE, ENS Paris Saclay. Expert in multiferroics, nanomaterials, and thermomagnetic energy generators.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-16 text-sm">
          <p>© {new Date().getFullYear()} Dr. Sukhendu Sadhukhan. All rights reserved.</p>
          <p className="mt-1">Post-Doctoral Researcher · SATIE, ENS Paris Saclay, University Paris Saclay, France</p>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
