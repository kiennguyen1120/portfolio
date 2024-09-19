import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 px-4 md:px-6 lg:px-8 border-t mt-12">
      <div className="container mx-auto text-center text-muted-foreground">
        © {new Date().getFullYear()} Nguyen Trung Kien. All rights reserved.
      </div>
    </footer>
  )
}