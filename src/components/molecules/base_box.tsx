// 실질적으로 내용이 들어갈 컴포넌트
export default function Base_box() {
    return (
        <>
            <div className="single status" style={{backgroundColor:"pink",borderRadius:"10px",height:'100%'}}>
                {/* 박스 상단 */}
                <div className='header' style={{display:'flex',justifyContent:"space-between"}}>
                    <div className='title' style={{padding:'10px', fontSize:'5px'}}>title</div>
                    <div className="icon" style={{padding:'10px', fontSize:'5px'}}>
                        <img src={'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220405_130%2F1649152021930PUnl9_JPEG%2F50287917627021077_182512650.jpg&type=sc960_832'} style={{width:'10px',height:'10px'}}/>
                    </div>
                </div>

                <div className="content" style={{padding:"20px"}}>
                    <div className="sub1" style={{textAlign:"center", padding:'5px', fontSize:'20px'}}>sub1</div>
                    <div className='sub2' style={{textAlign:"center", padding:'5px', fontSize:'3px'}}>sub2</div>
                </div>

                <div className='footer'></div>
            </div>
        </>
    )
}
export  function Profile_box() {
    return (
        <>
            <div className="single status" style={{backgroundColor:"pink",borderRadius:"10px",height:'100%'}}>
                {/* 박스 상단 */}
                <div className="container" style={{display:'flex',alignItems:'center'}}>
                    <div className='profile' style={{height:'100%',borderStyle:'solid'}}>
                        <img src={'https://demo.dashboardpack.com/hospital-html/img/client_img.png'}></img>
                    </div>
                    <div className='content' style={{borderStyle:'solid',width:'100%'}}>
                        <div className='header' style={{display:'flex',justifyContent:"space-between"}}>
                            <div className='title' style={{padding:'10px', fontSize:'5px'}}>title</div>
                            <div className="icon" style={{padding:'10px', fontSize:'5px'}}>
                                <img src={'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220405_130%2F1649152021930PUnl9_JPEG%2F50287917627021077_182512650.jpg&type=sc960_832'} style={{width:'10px',height:'10px'}}/>
                            </div>
                        </div>

                        <div className="content" style={{padding:"20px"}}>
                            <div className="sub1" style={{textAlign:"center", padding:'5px', fontSize:'20px'}}>sub1</div>
                            <div className='sub2' style={{textAlign:"center", padding:'5px', fontSize:'3px'}}>sub2</div>
                        </div>

                        <div className='footer'></div>
                    </div>
                </div>



            </div>
        </>
    )
}