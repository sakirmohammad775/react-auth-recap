import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
        const {_id,title,rating,thumbnail_url,image_url,details}= news
    
        return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                    details.length>200 ?
                    <p>{details.slice(0,200)}<Link to={`/news/${_id}`} className="text-red-600"> Read more...</Link></p>:
                    <p>{details}</p>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;