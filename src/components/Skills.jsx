import React from 'react'

export default function Skills() {
  const skills = ["Java","Spring Boot","Spring Data JPA","Spring Security","DSA","MySql","Firebase","HTML", "CSS", "JavaScript", "React", "Git", "Docker",]

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}