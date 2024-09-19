import React from 'react'
import { Button } from "@/components/ui/button"
import project1Image from '../assets/launching-your-ecommerce-business.png'
import project2Image from '../assets/social_media_apps.png'
import project3Image from '../assets/cocktail.jpg'

export default function Projects() {
  const projects = [
    
    { id: 1, title: "Ecommmerce website", description: "The project uses spring boot, spring security, mysql database, react js and deploys with docker", link: "https://komfy.teeai.net/",image: project1Image },
    
    { id: 2, title: "Instagram Clone", description: "social app uses react js and firebase", link: "https://justasocialapp.vercel.app/",image: project2Image },
    
    { id: 3, title: "Cocktail Mix", description: "The project uses react js and unqlash api", link: "https://inquisitive-begonia-993757.netlify.app/",image: project3Image },
    
  ]

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Button variant="outline" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}