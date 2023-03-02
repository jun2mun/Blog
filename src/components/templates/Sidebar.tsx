export default function Sidebar(){
    return (
        <>
            <nav className="sidebar" style={{backgroundColor:'lightblue',position:"fixed", height:'100%'}}>
                
                <div className="logo" style={{display:"flex",margin:'0px',padding:'8px'}}>
                    <a href="./">
                        <img src={'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg'} style={{height:'20px'}}/>
                    </a>
                </div>


                <ul className="sidebar_menu" style={{listStyleType:"none",margin:'0px',padding:'8px'}} >
                    <li>
                        <div className="logo" style={{display:"flex"}}>
                            <a href="./">
                                <img src={'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg'} style={{height:'20px'}}/>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="logo" style={{display:"flex"}}>
                            <a href="./">
                                <img src={'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg'} style={{height:'20px'}}/>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="logo" style={{display:"flex"}}>
                            <a href="./">
                                <img src={'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg'} style={{height:'20px'}}/>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="logo" style={{display:"flex"}}>
                            <a href="./">
                                <img src={'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664__340.jpg'} style={{height:'20px'}}/>
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}