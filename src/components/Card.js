import React from 'react';


function Card(props) {
    return (
        <li className="cards-list__item">
            <div className="card">
                <img className="card__photo" src={props.item.imageUrl} alt="card" />
                <div className="card__info">
                    {/* <div className="card__info geo">
                    <span className="geo__country">{props.item.location}</span>
                    <a className="geo__link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div> */}
                    <h2 className="card__title">{props.item.title}</h2>
                    <h3 className="card__subtitle">{props.item.subtitle}</h3>
                    {/* <div className="card__dates">
                    <span className="card__dates-start">{props.item.startDate}</span> - <span className="card__dates-end">{props.item.endDate}</span>
                </div> */}
                    {/* <p className="card__text">
                        {props.item.description}
                    </p> */}
                    <div className="card__links links">
                        <a className="links__item" href={props.item.siteUrl} target="_blank" rel="noopener noreferrer">GET A LOOK</a>
                        <a className="links__item" href={props.item.gitUrl} target="_blank" rel="noopener noreferrer">REPOSITORY</a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Card

