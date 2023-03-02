import Content_box from "../molecules/content_box";
import Search_Box from "../molecules/search_box";

export default function Section() {
    return (
        <>
            <div className="Section_wrapper" style={{backgroundColor:'yellowgreen',paddingLeft:"36px",borderStyle:"solid"}}>
                
                <div className="section_header" style={{backgroundColor:'gray',height:'40px'}}>
                    <div className="wrapper" style={{display:"flex"}}>
                        <Search_Box/>

                        <div className="account" style={{borderStyle:"solid",alignContent:'center'}}>account</div>
                        
                        <div className="icon" style={{display:'',borderStyle:"solid",alignContent:'center'}}>
                            <a href="./">
                                <img src={'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg'} style={{height:'10px'}}/>
                            </a>
                        </div>

                    </div>
                </div>


                <div className="section main" style={{backgroundColor:'lightyellow',height:"100%"}}>
                    <div className="container" style={{padding:"20px"}}>
                        <div className="container" style={{display:'grid',gridGap:'20px',padding:'8px'}}>

                            <div style={{gridColumn:'1/3'}}><Content_box/></div>
                            <div style={{gridColumn:'3/5',gridRow:'1/3'}}><Content_box/></div>
                            <div style={{gridColumn:'1/2'}}><Content_box/></div>
                            <div style={{gridColumn:'2/3'}}><Content_box/></div>
                            <div style={{gridColumn:'1/3',gridRow:'3/5'}}><Content_box/></div>
                            <div style={{gridColumn:'3/5'}}><Content_box/></div>
                            <div style={{gridColumn:'3/5'}}><Content_box/></div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}