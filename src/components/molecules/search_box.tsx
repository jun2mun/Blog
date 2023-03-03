export default function Search_Box(){
    return (
        <>
                {/* 헤더 부분 */}
                <div className="header__border" style={{backgroundColor:''}}>
                    <div className="header__container" style={{display:"flex",padding:'30px',justifyContent:'space-between',borderStyle:"",alignItems:'center'}}>

                        {/*검색창 부분 */}
                        <div className="searchBox__border" style={{position:'relative'}}>
                            <div className="searchBox__container" style={{width:'440px'}}>
                                <form>
                                    <div className="searchBox__field">
                                        <input type="text" style={{border:'none',outline:'none',width:'100%', height:'50px',paddingLeft:'82px',paddingRight:'10px',borderRadius:'30px',backgroundColor:'lightgray'}} placeholder='Search here...'/>
                                    </div>

                                    <button type="submit" style={{position:'absolute',top:'0',height:'100%',background:'0 0',border:'0',cursor:'pointer',paddingLeft:'40px'}}>
                                        <img src={'https://demo.dashboardpack.com/hospital-html/img/icon/icon_search.svg'} style={{justifyContent:'center'}}/>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/*검색창 부분 */}
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div className="header__right" style={{display:'flex',alignItems:'center'}}>
                                <li style={{listStyle:'none'}}>
                                    <a style={{marginRight:'25px'}}>
                                        <img src={'https://demo.dashboardpack.com/hospital-html/img/icon/bell.svg'} style={{width:'20px',height:'20px'}}></img>
                                    </a>
                                    <a style={{marginRight:'25px'}}>
                                        <img src={'https://demo.dashboardpack.com/hospital-html/img/icon/msg.svg'} style={{width:'20px',height:'20px'}}></img>
                                    </a>
                                </li>
                            </div>

                            <div className="profile_info" style={{}}>
                                <img src={'https://demo.dashboardpack.com/hospital-html/img/client_img.png'} style={{width:'40px',height:'40px'}}/>
                            </div>
                        </div>

                    </div>
                </div>   
        </>
    )
}