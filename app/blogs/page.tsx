import { Navbar } from "../components/Design/Navbar";
import { Footer } from "../components/Design/Footer";
import { get_blogs } from "@/lib/airtable";
export default async function Blogs(){
    await get_blogs()
    return (
        <div>
            <Navbar/>
            
            <Footer/>
        </div>
    )
}