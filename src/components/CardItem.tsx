import React from 'react';

interface Props {
  img: string;
  url: string;
  brand: string;
  service: string;
  social?: Array<any>;
}

function CardItem({ img, url, brand, service, social }: Props) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={img} alt="Avatar" />
        </div>
        <div className="card-back">
          <h1><b>{brand}</b></h1>
          <p><strong>Website:</strong> <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
          <p><strong>Social:</strong> {social?.map(({ link, name }, idx, social) => (
            <a key={name} href={link} target="_blank" rel="noopener noreferrer">
              {social.length + 1 !== idx && idx !== 0 ? `, ${name}` : name}
            </a>
          ))}
          </p>
          <p><strong>Services:</strong> {service}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;