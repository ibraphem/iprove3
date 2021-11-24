import React from 'react';




const ServiceBreak = ({data}) => {
    return (
        <div className="col-lg-8 mb-30">
        <div className="ttr-media mb-30">
            <h2 >{data.title}</h2><hr style={{ color: "black" }} />
            <img src={data.image} className="rounded" alt="" />
        </div>
        <div className="clearfix">
            <div className="head-text mb-30">
                <h2 className="title mb-15">{data.subtitle}</h2>
                <p className="mb-0">{data.content}</p>
            </div>
        
        </div>
    
    </div>
    );
};

export default ServiceBreak;