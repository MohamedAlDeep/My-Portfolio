import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { title } from 'process'
import { profileEnd } from 'console'

export function Projects(){
    const projects = [
        {
            title: 'Mockup Project Title',
            description: 'An AI-powered platform that transforms complex datasets into actionable insights using advanced machine learning algorithms.',
            image: '/ai-data.png',
            tags: ['Python', 'Tensorflow', 'React'],
            github: '#',
            demo: '#'
        },
        {
            title: "Building Tomorrow's Tech Today",
            description: 'A comprehensive IoT ecosystem that connects smart devices and provides real-time monitoring and control capabilities',
            image: '/placeholder.png',
            tags: ['IoT', 'Node.js', 'SupaBase'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Neural Network Optimization',
            description: 'Advanced optimization techniques for deep learning models, achieving 40% faster training times with improved accuracy.',
            image: '/neural-network.png',
            tags: ['PyTorch', 'CUDA', 'Docker'],
            github: '#',
            demo: '#'
        }
    ]

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
                        projects.map((project, index) => (
                            <Card
                            key={index}
                            className='group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                            >
                                <div className='relative overflow-hidden'>
                                    <Image 
                                    src={project.image || ''}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                </div>
                                <CardHeader>
                                    <CardTitle className='font-heading font-bold text-xl group-hover:text-blue-600 transition-colors'>
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className='space-y-4'>
                                    <p className='text-muted-foreground leading-relaxed'>
                                        {project.description}
                                    </p>
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            project.tags.map((tag, tagIndex) => (
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
                                            href={project.github} 
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
                                            <a href={project.demo} target='_blank' rel='noopener noreferrer'>
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
    )

}