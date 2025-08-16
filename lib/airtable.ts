import Airtable from "airtable";
import { marked } from "marked";
import { error } from "console";

const base = new Airtable({ apiKey: process.env.AIRTABLE_SECRET }).base(process.env.AIRTABLE_BASE_ID || '');


export async function get_projects_number(num: number){
   let count: number = 0
   const data: any = [] 
   await base('Projects').select({})
   .eachPage((records, next) =>{
      records.forEach((record ) => data.push(
         {
            title: record.fields.Title,
            description: record.fields.Description,
            image:  record.fields.Image,
            tags:  record.fields.Tags,
            repo:  record.fields.Github_Repo,
            demo:  record.fields.Demo_Link
         }
      )) 
      count++
      if(count == num){
         return data
      }
      next()
    }).catch((error) => console.log(error))
    
    return data
}

export async function get_blogs_number(num: number){
   let count: number = 0
   const data: any = []
   await base('Blogs').select({})
   .eachPage((records, next) =>{
      records.forEach((record) => data.push(
         {
            title: record.fields.title,
            excerpt: record.fields.excerpt,
            image: record.fields.image,
            category: record.fields.category,
            date: record.fields.date,
            readTime: record.fields.readTime,
            slug: record.fields.slug,
            content: record.fields.content,
         }
      )) 
      count++
      if(count == num){
         return data
      }
      next()
    }).catch((error) => console.log(error))

    return data
}


export async function single_blog(slug: string) {
  
   const records = await base('Blogs').select({
      filterByFormula: `{slug} = '${slug.replace(/'/g, "\\'")}'`
   })
   .firstPage()
   if(records.length > 0){

      return records[0].fields      
   }else{
      return null
   }
}

export async function get_blogs(){
   const data: any = []
   await base('Blogs').select({})
   .eachPage((records, next) =>{
      records.forEach((record) => data.push(
         {
            title: record.fields.title,
            excerpt: record.fields.excerpt,
            image: record.fields.image,
            category: record.fields.category,
            date: record.fields.date,
            readTime: record.fields.readTime,
            slug: record.fields.slug,
            content: record.fields.content,
         }
      )) 
      next()
    }).catch((error) => console.log(error))

    return data
}

export async function get_projects(){
   const data: any = [] 
   await base('Projects').select({})
   .eachPage((records, next) =>{
      records.forEach((record ) => data.push(
         {
            title: record.fields.Title,
            description: record.fields.Description,
            image:  record.fields.Image,
            tags:  record.fields.Tags,
            repo:  record.fields.Github_Repo,
            demo:  record.fields.Demo_Link
         }
      )) 
      next()
    }).catch((error) => console.log(error))
    
    return data
}



export async function convertMarkdown(raw_link: string) {
   const data = await fetch(raw_link)

   const final = await data.text()
   const conv = marked.parse(final)
   return conv
}