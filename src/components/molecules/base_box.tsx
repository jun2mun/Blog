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
    // 프로필 박스
    return (
        <>
            <div className="single status" style={{backgroundColor:"white",borderRadius:"10px",height:'100%',boxShadow:'5px 5px 5px 5px gray'}}>
                {/* 박스 상단 */}
                <div className="container" style={{display:'flex',alignItems:'center',position:'relative'}}>
                    
                    <div className='profile' style={{padding:'30px'}}>
                        <img src={'https://demo.dashboardpack.com/hospital-html/img/client_img.png'} style={{height:'150px'}}></img>
                    </div>

                    <div className='content' style={{position:'absolute',left:'30%',width:'70%',height:'100%'}}>

                        <div className='header' style={{display:'flex',justifyContent:"space-between"}}>
                            <div className='name' style={{padding:'10px', fontSize:'28px'}}>martinmelody</div>
                            <div className="icon" style={{padding:'10px'}}>
                                <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAB6CAMAAABurIoUAAAAY1BMVEX39/c4l/D////8+vf//PcnkvC10vT29vRWoe+bxPMdkfEzlfD//vcbj/Ds8fbL3fTd6PUAi/CHufLm7faTwPJKne9rrPGlyfN2svTr8/3S4vWv0Pjc6vz0+P6Pv/bB2PRcpvBj7tg1AAAEmUlEQVR4nO2baZOjIBCGgw2O0t7GxM1l/v+vXM1h8EABHVNby/tpyin1SdNAH7LbWVlZ/Yui3wYYU5aA5D+y678uqFL06djrgVY/m+M8FREkHOMBFtCYpNV3bBVkjNRiZd51LZqXDLH4iqkg4eQhRlz4mAXgiA0sO35jFoCH5KXQOwWvi0FVvFh5vv0A0mNIWiHbR41haFKP3OsaK7eHygkSQbyoAqA+YZ9LLN6aKigZ6Sot25F7ma/YGAoqTvpCht0L7LgtFRQ4gBqhjLakov7QUCPa1NchUbDTg+r3fB36Cg59L5cNoDe4F1bCrNye9opMtamy/r3uaRWqn4KzrhQH72Gr3q0s3K+y/fx46gwKtvMtlIWyUBbKQlkoC2Wh/iGoYAUmoKtC4WGFUhvNDxqBpgoVugvjdNgdiXJArip2yBcYC4K44Ova6SHk/o+psWhyUMo5DcSIWUZYjxyuPnKtkGcGYxhUXjj/7AVi6I4WceVqRm4FZ8KpZyBvC4Bq8leZc6yczu8Rb5EyEmThGnOOl851pmSUauTL0SpMN8eZoyo0Ro8el68FfO80ukxRcb0WwOL9LvSdpy5yt8K7lqPDaeF6wM7OWwmR2QpzHaaaqlzkVsxtmZw/MiiuG1pBvsBUmFYfpouMCXW8/KkFvo4k/jDFUouHBjW9yDMcQCQngUnqUKw0CEGhSs2Y+B+BSWpuJJpe/qKa9nUcfx8rBKazfGcIXaNAD/LpjcsdG1/0RCZ5yRbvJki1gqnSNK/G5jorrqKd5LenxpXrCTPhZWwFYgeB6TbhkywzTLRAbigkl+ca1A2YWCkyTQ6+YdsNEqn130yOU4leww8fJCebXny5YYv5Lt2yvI9B4k+AGt4EptmUIzRpMdOzfIkRLVK9qdqwoNZ1vqOEJm2361QYlAlUrwa3aKerSmpm0HabXjnDUqB6zHx+FpgKlQAfiS4UyPeH58/cd2yFXAxVVFq5zTN8Xaq53Tg8ijMtPesz1VR6LeZgvkcs+rVzEf6czPW6UFq+DolCn1EIeAWddPJFppM3KMXCGFZDJnlIN/qIQn0FBVctkuIDKlcz1+cavh5lam1ijJcx1TGZRqTXFMuUHpqITPI9QMpU6oSfUOcNSi4rzLu9JhOmd72qSxN3lgpjiKQNNPeaORkjrv43jgCVQiUPyStiuOkxYWhSyWuwdvt5z8VnAFxqjR2G3sm4QAyX+6yxWB1dXQefeE3fQs5Lvk6F3URG8n7FQY+pnnPRwqYDjWaXd1Tf7prfoD3nRo21bm+m1KwJj+u/aK1ZKAtloSyUhbJQFspC/SZUEfKe1BkGt+p0jbWUS7tAA6l305dKue3GzRowhlJru+Fhy9Mgii3mjY9jKZXV9CutC6GifvqJgzmpX5Neqr6vM+JWvfL59gfEui1mZFlOad4pAH7jKB2NW1/HsIgfmbhYAET2hUOHO8iwHbn354jvs5nNzDt/5ZBy/qhrIHaqXzR5NrDQ+9LpWp/Xc644BZ3XA61YjcXWOd1kII+TczB4OcB+rcNNBoK4HG/5QHLfbiMevFx6sv1rR9utrKwW6S8eY06bG8FRIgAAAABJRU5ErkJggg=='} style={{width:'30px',height:'30px'}}/>
                            </div>
                        </div>

                        <div className="status" style={{padding:'10px',display:'flex'}}>
                            <div style={{paddingRight:'30px'}}>
                                <div className="posts">5136</div>
                                <div className="posts">posts</div>
                            </div>
                            <div style={{paddingRight:'30px'}}>
                                <div className="Flollowers">1278</div>
                                <div className="Flollowers">Flollowers</div>
                            </div>
                            <div>
                                <div className="Following">566</div>
                                <div className="Following">Following</div>
                            </div>
                        </div>

                        <div className="sub1" style={{padding:'5px', fontSize:'20px'}}>
                            Musician in the singularity brand
                        </div>
                        <div className='sub2' style={{padding:'5px', fontSize:'3px'}}>
                            sprofessional vocalist and double bass player<br/>the author of own songs and melodies
                        </div>


                        <div className='footer'></div>
                    </div>
                </div>



            </div>
        </>
    )
}

export function Likes_box() {
    return (
        <>
            <div className="single status" style={{backgroundColor:"white",borderRadius:"10px",height:'100%',boxShadow:'5px 5px 5px 5px gray'}}>
                {/* 박스 상단 */}
                <div className='header' style={{display:'flex',justifyContent:"space-between",padding:'20px'}}>
                    <div className='title' style={{fontSize:'15px'}}>Total likes</div>
                    <div className="icon" style={{fontSize:'5px'}}>
                        <img src={'https://media.istockphoto.com/id/1183790559/ko/%EB%B2%A1%ED%84%B0/%EB%B0%B0%EA%B2%BD%EC%97%90-%EB%B2%A1%ED%84%B0-%EB%B9%A8%EA%B0%84%EC%83%89-%EC%8B%AC%EC%9E%A5-%EB%AA%A8%EC%96%91-%EC%9D%B4%EB%AA%A8%ED%8B%B0%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=zQ2eVR2HZxd6akuekp8SREArQbU5SHQwuXf4xPF0m5w='} style={{width:'30px',height:'30px'}}/>
                    </div>
                </div>

                <div className="content" style={{padding:"20px"}}>
                    <div className="sub1" style={{textAlign:"center", padding:'5px', fontSize:'30px'}}>236.5K</div>
                    <div className='sub2' style={{textAlign:"center", padding:'5px', fontSize:'3px'}}>863</div>
                </div>

                <div className='footer'></div>
            </div>
        </>
    )
}
export function Comments_box() {
    return (
        <>
            <div className="single status" style={{backgroundColor:"white",borderRadius:"10px",height:'100%',boxShadow:'5px 5px 5px 5px gray'}}>
                {/* 박스 상단 */}
                <div className='header' style={{display:'flex',justifyContent:"space-between",padding:'20px'}}>
                    <div className='title' style={{fontSize:'15px'}}>Total comments</div>
                    <div className="icon" style={{fontSize:'5px'}}>
                        <img src={'data:image/png;base64,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'} style={{width:'30px',height:'30px'}}/>
                    </div>
                </div>

                <div className="content" style={{padding:"20px"}}>
                    <div className="sub1" style={{textAlign:"center", padding:'5px', fontSize:'30px'}}>8650</div>
                    <div className='sub2' style={{textAlign:"center", padding:'5px', fontSize:'3px'}}>323</div>
                </div>

                <div className='footer'></div>
            </div>
        </>
    )
}