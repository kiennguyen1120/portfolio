import React from 'react'
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Facebook } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Me</h2>
      <div className="flex flex-wrap gap-4">
        <Button variant="outline" asChild>
          <a href="mailto:kiennt111120@gmail.com">
            <Mail className="w-4 h-4 mr-2" />
            Email
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://www.linkedin.com/in/trung-ki%C3%AAn-nguy%E1%BB%85n-3069262a7/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://github.com/kiennguyen1120" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://www.facebook.com/profile.php?id=100007022103650" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-4 h-4 mr-2" />
            Facebook
          </a>
        </Button>
      </div>
    </section>
  )
}