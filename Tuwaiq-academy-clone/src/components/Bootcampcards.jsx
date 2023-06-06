
function Bootcampcards(props) {
    if(props.ifClosed){
        return (
            <div className="card closed">
                <div>
                    <h4 className="card-text-color closed">برنامج</h4>
                    <h4>{props.bootcampName}</h4>
                </div>
                <div>
                    <div className="card-info">
                        <p>{props.city}</p>
                        <p>{props.time}</p>
                    </div>
                    <div className="card-footer">
                        <p>يبدأ في {props.date}</p>
                        <button disabled className="card-btn">مغلق</button>
                    </div>
                </div>
            </div>
          )
    }else{
        return (
    
            <div className="card">
                <div>
                    <h4 className="card-text-color">برنامج</h4>
                    <h4>{props.bootcampName}</h4>
                </div>
                <div>
                    <div className="card-info">
                        <p>{props.city}</p>
                        <p>{props.time}</p>
                    </div>
                    <div className="card-footer">
                        <p>يبدأ في {props.date}</p>
                        <button className="card-btn">التفاصيل</button>
                    </div>
                </div>
            </div>
          )
    }
  
}

export default Bootcampcards