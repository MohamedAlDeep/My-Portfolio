import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { get_projects_number } from '@/lib/airtable'

export async function Projects(){
    const projects = await get_projects_number(3)
    return (
        <section id='projects' className='py-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6'>
                        Featured Projects
                    </h2>
                    <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                        Explore some of my latest work in Science and technology, showcasing the innovative solutions and cutting edge implementations.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {
                        projects && projects.length > 0 ? projects.map((project: any, index: number) => (
                            <Card
                            key={project.id || index}
                            className='group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                            >
                                <div className='relative overflow-hidden'>
                                    {project.image && (
                                        <Image 
                                        src={String(project.image)}
                                        alt={String(project.title || 'Project')}
                                        width={500}
                                        height={300}
                                        className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                                        />
                                    )}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                </div>
                                <CardHeader>
                                    <CardTitle className='font-heading font-bold text-xl group-hover:text-blue-600 transition-colors'>
                                        {String(project.title || 'Untitled Project')}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className='space-y-4'>
                                    <p className='text-muted-foreground leading-relaxed'>
                                        {String(project.description || 'No description available')}
                                    </p>
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            project.tags && Array.isArray(project.tags) ? project.tags.map((tag: any, tagIndex: number) => (
                                                <Badge 
                                                key={tagIndex}
                                                variant='secondary'
                                                className='text-xs'
                                                >
                                                    {String(tag)}
                                                </Badge>
                                            )) : null
                                        }
                                    </div>
                                    <div className='flex gap-3 pt-2'>
                                        {project.repo && (
                                            <Button 
                                            size='sm' 
                                            variant='outline'
                                            className='flex-1 bg-transparent'
                                            asChild
                                            >
                                                <a 
                                                href={String(project.repo)} 
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                >
                                                    <Github className='h-4 w-4 mr-2'/>
                                                    Code
                                                </a>
                                            </Button>
                                        )}
                                        {project.demo && (
                                            <Button size='sm' className='flex-1 bg-blue-600 hover:bg-blue-700'
                                            asChild
                                            >
                                                <a href={String(project.demo)} target='_blank' rel='noopener noreferrer'>
                                                    <ExternalLink className='h-4 w-4 mr-2'/>
                                                    Demo
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )) : (
                            <div className='col-span-full text-center py-12'>
                                <p className='text-muted-foreground'>No projects available at the moment.</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )

}