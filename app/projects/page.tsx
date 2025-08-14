import { Navbar } from "../components/Design/Navbar"
import { Footer } from "../components/Design/Footer"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { get_projects } from "@/lib/airtable"
import { stringify } from "querystring"

export default async function Projects(){
    const projects = await get_projects()
    // projectsS.map((project: any) => {
    //     console.log(project.title)
    //     // project.title
    //     // project.description
    //     // project.tags
    //     // project.image
    //     // project.demo.value
    // })
    console.log(projects)
    return (
        <div>
            <Navbar/>
            <section id='projects' className='py-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6'>
                        Projects
                    </h2>
                    <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                        Explore some of my latest work in Science and technology, showcasing the innovative solutions and cutting edge implementations.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {
                        projects.map((project:any, index:any) => (
                            <Card
                            key={index}
                            className='group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                            >
                                <div className='relative overflow-hidden'>
                                    <Image 
                                    
                                    src={project.image}
                                    alt={project.title || ""}
                                    width={500}
                                    height={300}
                                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                </div>
                                <CardHeader>
                                    <CardTitle className='font-heading font-bold text-xl group-hover:text-blue-600 transition-colors'>
                                        {project.title || ''}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className='space-y-4'>
                                    <p className='text-muted-foreground leading-relaxed'>
                                        {project.description || ''}
                                    </p>
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            project.tags.map((tag: any, tagIndex: any) => (
                                                <Badge 
                                                key={tagIndex}
                                                variant='secondary'
                                                className='text-xs'
                                                >
                                                    {tag}
                                                </Badge>
                                            ))
                                        }
                                    </div>
                                    <div className='flex gap-3 pt-2'>
                                        <Button 
                                        size='sm' 
                                        variant='outline'
                                        className='flex-1 bg-transparent'
                                        asChild
                                        >
                                            <a 
                                            href={project.repo || ''} 
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            >
                                                <Github className='h-4 w-4 mr-2'/>
                                                Code
                                            </a>
                                        </Button>
                                        <Button size='sm' className='flex-1 bg-blue-600 hover:bg-blue-700'
                                        asChild
                                        >
                                            <a href={project.demo.value || ''} target='_blank' rel='noopener noreferrer'>
                                                <ExternalLink className='h-4 w-4 mr-2'/>
                                                Demo
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
            <Footer/>
        </div>
    )
}