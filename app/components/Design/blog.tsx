import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

export function Blog(){
    const blogPosts = [
        {
            title: 'Moch Up title',
            excerpt: 'Exploring how quantum computing will revolutionize problem-solving in the next decade and its implications for various industries.',
            image: './testlink.png',
            category: 'Quantum ... ',
            date: '2024-01-14',
            readTime: '8 min read',
            slug: 'future-of-quantum-computing'
        },
        {
            title: 'Building scalable IoT Systems',
            excerpt: 'Best practices and architectural patterns for creating IoT systems that can handle millions of connected devices',
            image: './test2link.png',
            category: 'IoT',
            date: '2025-08-2',
            readTime: '10 min read',
            slug: 'building-scalable-iot-systems'
        },
        {
            title: 'AI Ethics in Modern Development',
            excerpt: 'A deep dive into the ethical considerations every developer should keep in mind when building AI-powered applications.',
            image: './ai-mochup-link.png',
            category: 'AI',
            date: '2025-08-14',
            readTime: '6 min read',
            slug: 'ai-ethics-modern-development'
        }
    ]

    return (
        <section id='blog' className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6'>
                        Latest Insights 
                    </h2>
                    <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                        Welcome to my thoughts on the latest in science and technology, where I share insights, tutorials, and explorations into the future of innovation.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                    {
                        blogPosts.map((post, index) => (
                            <Card 
                            key={index}
                            className='group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                            >
                                <div className='relative overflow-hidden'>
                                    <Image 
                                    src={''}
                                    alt={post.title}
                                    width={400}
                                    height={200}
                                    className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                                    />
                                    <Badge className='absolute top-4 left-4 bg-blue-600 hover:bg-blue-700' >{post.category}</Badge>
                                </div>
                                <CardHeader>
                                    <CardTitle className='font-heading font-bold text-lg group-hover:text-blue-600 transition-colors line-clamp-2'>
                                        {post.title}
                                    </CardTitle>
                                    <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                                        <div className='flex items-center gap-1'>
                                            <Calendar className='h-4 w-4' />
                                            {new Date(post.date).toLocaleDateString()}
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <Clock className='h-4 w-4' />
                                            {post.readTime}
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className='space-y-4'>
                                    <p className='text-muted-foreground leading-relaxed line-clamp-3'>
                                        {post.excerpt}
                                    </p>
                                    <Button
                                    variant='ghost'
                                    className='p-0 h-auto font-semibold text-blue-600 hover:text-sky-500'
                                    asChild
                                    >
                                        <Link href={`/blog/${post.slug}`}>
                                            Read More <ArrowRight className='ml-1 h-4 w-4'/>
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
                <div className='text-center'>
                    <Button
                    size='lg'
                    variant='outline'
                    className='border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 bg-transparent'
                    asChild
                    >
                        <Link href='/blog'>
                            View All Posts <ArrowRight className='ml-2 h-5 w-5'/>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )

}