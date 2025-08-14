import Airtable from "airtable";
import { error } from "console";

const base = new Airtable({ apiKey: process.env.AIRTABLE_SECRET }).base(process.env.AIRTABLE_BASE_ID || '');

export async function get_blogs(){
   base('Blogs').select({})
   .eachPage((records, next) =>{
      records.forEach((record ) => console.log(record.fields)) 
      next()
    }).catch((error) => console.log(error))
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

