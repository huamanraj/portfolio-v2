import { FaCode, FaBuilding, FaTools } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import Image from 'next/image';

const experiences = [
  {
    title: 'Software Development Intern',
    company: 'Automatically Enterprise',
    date: 'June - Aug 2024',
    description: 'Worked on the company\'s website with React, implementing AWS Lambda, Cognito in backend, and designing apps in FlutterFlow.',
    icon: <FaCode className="h-6 w-6 text-primary" />,
    logo: 'https://example.com/logo1.png', // Replace with actual logo image URL
  },
  {
    title: 'Open Source Mentor - Ranked 01',
    company: 'GirlScript Summer of Code',
    date: 'June 2024',
    description: 'Mentored and helped new open-source contributors contribute to GitHub repositories. Maintained repositories, reviewed pull requests, and worked collaboratively with contributors.',
    icon: <FaBuilding className="h-6 w-6 text-primary" />,
    logo: 'https://example.com/logo2.png', // Replace with actual logo image URL
  },
  {
    title: 'Full Stack Developer',
    company: 'SKIT Incubation Cell',
    date: '2023 - 2024',
    description: 'Developed and maintained multiple incubated startup websites, implemented responsive designs, and integrated third-party APIs and backend services.',
    icon: <FaTools className="h-6 w-6 text-primary" />,
    logo: 'https://example.com/logo3.png', // Replace with actual logo image URL
  },
  {
    title: 'B.Tech in CSE (IoT)',
    company: 'SKIT Jaipur',
    date: '2022 - 2026',
    description: 'Studied algorithms, data structures, software engineering principles, and completed a capstone project on distributed systems.',
    icon: <MdWork className="h-6 w-6 text-primary" />,
    logo: 'https://example.com/logo4.png', // Replace with actual logo image URL
  },
];

export default function Experience() {
  return (
    <div className="px-4 py-10 bg-background">
      <h1 className="text-3xl font-bold mb-8">Experience</h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-md hover:bg-muted transition-colors">
            <div className="flex-shrink-0">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                {experience.icon}
                <h2 className="text-xl font-semibold">{experience.title}</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-2">{experience.company} | {experience.date}</p>
              <p className="text-sm leading-relaxed">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
