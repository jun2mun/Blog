export default function Search_Box(){
    return (
        <>
            <div className="search" style={{borderRadius:"10px",backgroundColor:'pink'}}>
                <a href="./">
                    <img src={'https://demo.dashboardpack.com/hospital-html/img/icon/icon_search.svg'} style={{height:'15px'}}/>
                </a>
                <input type="text" style={{border:'none',borderRadius:'10px',backgroundColor:'lightgray'}}/>
            </div>
        </>
    )
}