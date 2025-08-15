'use client'

import { Navbar } from "../components/Design/Navbar";
import { Footer } from "../components/Design/Footer";
import { get_blogs } from "@/lib/airtable";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

export default async function Blogs(){
    const blogPosts = await get_blogs()
    
    return (
        <div>
            <Navbar/>
            <section id='projects' className='py-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                    <h2 className='font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6'>
                        Blog Posts
                    </h2>
                    <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                        Welcome to my thoughts on the latest in science and technology, where I share insights, tutorials, and explorations into the future of innovation.
                    </p>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                    {
                        blogPosts.map((post: any, index: any) => (
                            <Card 
                            key={index}
                            className='group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                            >
                                <div className='relative overflow-hidden'>
                                    <Image 
                                    src={post.image}
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
                                            {new Date(post.date.value).toLocaleDateString()}
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
                                        <Link href={`/blogs/${post.slug}`}>
                                            Read More <ArrowRight className='ml-1 h-4 w-4'/>
                                        </Link>
                                    </Button>
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