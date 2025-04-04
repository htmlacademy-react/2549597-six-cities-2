import { memo } from 'react';
import OfferImage from './offer-image';

type OfferImageListProps = {
  images: string[];
}


function OfferImageList ({images}: OfferImageListProps) {
  return (
    <div className="offer__gallery">
      {images && images.map((image) => <OfferImage key={image} image={image}/>)}
    </div>
  );
}

export const OfferImageListMemo = memo(OfferImageList, (prevProps, nextProps) => prevProps.images === nextProps.images);
