import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export function Contact(){
    return (
        <section id='contact' className='py-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6'> 
                        Contact Info
                    </h2>
                    <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                        Ready to collaborate on the next big innovation? I'm always excited to discuss new projects and opportunities in science and tech.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <div>
                            <h3 className='font-heading font-bold text-2xl mb-6'>
                                Get in Touch
                            </h3>
                            <div className='space-y-4'>
                                <div className='flex items-center gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center'>
                                        <Mail className='h-6 w-6 text-blue-600' />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>
                                            Email
                                        </p>
                                        <p className='text-muted-foreground'>
                                            hello@email.com
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center'>
                                        <Phone className='h-6 w-6 text-blue-600' />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>
                                            Phone
                                        </p>
                                        <p className='text-muted-foreground'>
                                            +20 0122421551
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center'>
                                        <MapPin className='h-6 w-6 text-blue-600' />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>
                                            Location
                                        </p>
                                        <p className='text-muted-foreground'>
                                            Egypt
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}