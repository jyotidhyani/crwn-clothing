import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, ImageContainer, CollectionFooterContainer, NameContainer, CustomButtonContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return <CollectionItemContainer>
    <ImageContainer
      className='image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <span>{price}</span>
    </CollectionFooterContainer>
    <CustomButtonContainer inverted onClick={() => addItem(item)}>ADD TO CART</CustomButtonContainer>
  </CollectionItemContainer>
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);