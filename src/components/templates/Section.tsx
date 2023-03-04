import Base_box, { Likes_box } from "../molecules/base_box";
import Search_Box from "../molecules/search_box";
import { Profile_box, Comments_box } from "../molecules/base_box";

export default function Section() {
    return (
        <>
            <div className="Section_wrapper" style={{backgroundColor:'',paddingLeft:"40px",borderStyle:""}}>
                
                
                {/* 헤더 부분 */}
                <Search_Box/>

                {/* 콘텐츠 부분 */}
                <div className="section main" style={{backgroundColor:'lightyellow',height:"100%"}}>
                    <div className="container" style={{padding:"20px"}}>
                        <div className="container" style={{display:'grid',gridGap:'20px',padding:'8px'}}>
                            <div style={{gridColumn:'1/3'}}><Profile_box/></div>
                            <div style={{gridColumn:'3/5',gridRow:'1/3'}}><Base_box/></div>
                            <div style={{gridColumn:'1/2'}}><Likes_box/></div>
                            <div style={{gridColumn:'2/3'}}><Comments_box/></div>
                            <div style={{gridColumn:'1/3',gridRow:'3/5'}}><Base_box/></div>
                            <div style={{gridColumn:'3/5'}}><Base_box/></div>
                            <div style={{gridColumn:'3/5'}}><Base_box/></div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}