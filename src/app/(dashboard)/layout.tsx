'use client'

import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { SearchProvider } from '@/context/search-context'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div>
          <SidebarProvider>
            <SearchProvider>
              <AppSidebar />
              <div
                id='content'
                className={cn(
                  'max-w-full w-full ml-auto',
                  'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
                  'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
                  'transition-[width] ease-linear duration-200',
                  'h-svh flex flex-col',
                  'group-data-[scroll-locked=1]/body:h-full',
                  'group-data-[scroll-locked=1]/body:has-[main.fixed-main]:h-svh'
                )}
              >
                {children}
              </div>
            </SearchProvider>
          </SidebarProvider>
        </div>
      </ThemeProvider>
    </div>
  )
}
