import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Database, BarChart3, Users } from 'lucide-react'

export function About(){
    const skills = [
        {
            icon: BookOpen,
            title: "Research & Development",
            description: "Conducting peer-reviewed research in computational science and publishing findings in academic journals"
        },
        {
            icon: Database,
            title: "Data Science & Analytics",
            description: "Advanced statistical analysis and machine learning applications for scientific discovery"
        },
        {
            icon: BarChart3,
            title: "Quantitative Analysis",
            description: ""
        },
        {
            icon: Users,
            title: "Academic Collaboration",
            description: "Interdisciplinary research partnerships with leading instituations and research laboratories."
        }
    ]

    return (
        <section id='about' className='py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6'>
                        Research Profile
                    </h2>
                    <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                        Dedicated researcher specializing in computational science and technology innovation.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        skills.map((skill, index) => (
                            <Card key={index} className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                                <CardContent className='p-6 text-center'>
                                    <div className='mb-4 flex justify-center'>
                                        <skill.icon className='h-12 w-12 text-blue-700 group-hover:text-slate-600 transition-colors' />
                                    </div>
                                    <h3 className='font-heading font-bold text-lg mb-3'>{skill.title}</h3>
                                    <p className='text-muted-foreground text-sm leading-relaxed'>{skill.description}</p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )

}