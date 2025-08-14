import { Button } from '@/components/ui/button'
import { ArrowRight, Microscope, Atom, FlaskConical } from 'lucide-react'
import Link from 'next/link'

export function HeroSection(){
    return (
        <section id='home' className='pt-32 pb-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
                <div className='text-center'>
                    <div className='flex justify-center space-x-12 mb-12'>
                        <div className='float-animation'>
                            <Microscope className='h-8 w-8 text-foreground/60' />
                        </div>
                        <div className='float-animation'>
                            <Atom className='h-8 w-8 text-foreground/60' />
                        </div>
                        <div className='float-animation'>
                            <FlaskConical className='h-8 w-8 text-forground/60' />
                        </div>
                    </div>
                    <h1 className='font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8 leading-tight'> 
                        Scientific Research & Innovation
                    </h1>
                    <p className='text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-tight'>
                        Advancing scientific knowledge through rigorous research, data-driven analysis, and innovative technological solutions in computational science and engineering.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Button
                        size='lg'
                        className='bg-foreground hover:bg-foreground/90 text-background font-medium px-8 py-3'
                        asChild
                        >
                            <Link href='/research'>
                                View Research <ArrowRight className='ml-2 h-4 w-4'/>
                            </Link>
                        </Button>
                        <Button
                        variant='outline'
                        size='lg'
                        className='border-foreground/20 text-foreground hover:bg-muted font-medium px-8 py-3 bg-transparent'
                        asChild
                        >
                            <Link href='/projects'>Projects</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}