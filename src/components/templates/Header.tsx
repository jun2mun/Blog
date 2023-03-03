import Search_Box from "../molecules/search_box";

export default function Header(){
    return (
        <>
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
        </>
    )
}