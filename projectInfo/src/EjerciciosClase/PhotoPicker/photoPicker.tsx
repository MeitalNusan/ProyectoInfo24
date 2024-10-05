import React from "react";
import { useState } from "react";
import { product_item } from "./Items/productItems";
import { range } from "../../components/Range/range";
 

export const PhotoPicker = ({ photos }: { photos: Array<string> }) => {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = React.useState(0)


return(
    <div>
    <div>
      <img alt="" src={photos[selectedPhotoIndex]} width={500} height={500} />
      <div style={{ display: 'flex' }}>
        {photos.map((photoSrc, index) => {
          const isSelected = selectedPhotoIndex === index;

          return (
            <button
              key={photoSrc}
              onClick={() => setSelectedPhotoIndex(index)}
            >
              <img alt="" src={photoSrc} width={50} height={50} />
              <span
                style={{
                  opacity: isSelected ? 1 : 0,
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  </div>
)
}


type Props = {
    product: {
        id:string,
        title:string,
        description: string,
        price: string,
        rating: number,
        photos: Array<string>
    }
}

export const ProductDetail = ({product} : Props) => { 
        return (
            <article>
              <PhotoPicker photos={product.photos} />
              <div>
                <h1>{product.title}</h1>
                <Rating rating={product.rating} />
                <p>{product.description}</p>
              </div>
            </article>
          );
}


 
  

export const Rating = ({ rating }: { rating: number }) => {
    return (
        <div>
          {range(5).map((num) => {
            return rating > num ? '❤️' : '🤍';
          })}
        </div>
      );
}

export const App5 = () => {
    return <ProductDetail product={product_item} />;
}