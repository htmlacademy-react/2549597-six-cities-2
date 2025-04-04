import { memo } from 'react';
import OfferOption from './offer-option';

type OfferOptionListProps = {
  goods: string[];
}

function OfferOptionList ({goods}: OfferOptionListProps) {
  return(
    <ul className="offer__inside-list">
      {goods && goods.map((option) => <OfferOption key={option} option={option}/>)}
    </ul>
  );
}

export const OfferOptionListMemo = memo(OfferOptionList, (prevProps, nextProps) => prevProps.goods === nextProps.goods);
