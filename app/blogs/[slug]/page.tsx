
import { Navbar } from "@/app/components/Design/Navbar"
import { Footer } from "@/app/components/Design/Footer"
import { single_blog } from "@/lib/airtable"
import { redirect, RedirectType } from "next/navigation"
import { ArrowLeft, Link, Tag } from "lucide-react"
import { Calendar, Clock, User} from "lucide-react"
import { Button } from "@/components/ui/button"
import { convertMarkdown } from "@/lib/airtable"
import { marked } from "marked"

export default async function Page({ params }: { params: Promise<{ slug: string }> }){
    const { slug } = await params
    
    // Fetch data directly from the database function
    const data = await single_blog(slug)
    
    // If no blog found, redirect to blogs page
    if (!data) {
        return redirect("/blogs", RedirectType.replace)
    }
    
    const content = await convertMarkdown(String(data.content || ''))

    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-white">
                <header className="border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 py-6">
                        <Link href="/blogs">
                            <Button
                            variant='ghost'
                            className="mb-4 p-0 h-auto font-normal text-gray-600 hover:text-gray-900"
                            >
                               <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Blog
                            </Button>
                        </Link>
                    </div>
                </header>
                <article className="max-w-4xl mx-auto px-4 py-12">
                    <header className="mb-12">
                        <div className="flex items-center gap-2 mb-4">
                            <Tag className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                {String(data.category || '')}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-sans">
                            {String(data.title || '')}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {String(data.excerpt || '')}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>
                                    {String(data.date || '')}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{String(data.readTime || '')}</span>
                            </div>
                        </div>
                        {data.image && (
                            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-12">
                                <img 
                                src={String(data.image)}
                                alt={String(data.title || '')}
                                className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </header>
                    <div className="max-w-4xl mx-auto px-4">
                        <div 
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: content }} 
                        />
                    </div>
                </article>
            </div>    
            <Footer/>
        </div>
    )
}

// <section id='projects' className='py-20 px-4 sm:px-6 lg:px-8'>
//             <div className='max-w-7xl mx-auto'>
//                 <div className='text-center mb-16'>
//                     <h2 className='font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6'>
//                         {slug}
//                     </h2>
//                     <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
//                        {data.excerpt}
//                     </p>
//                 </div>
//             </div>
//             </section>