import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionItem from './collection-item.component';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    AddItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = (props) => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {(AddItemToCart) => (
      <CollectionItem
        {...props}
        addItem={(item) => {
          AddItemToCart({ variables: { item } });
        }}
      />
    )}
  </Mutation>
);

export default CollectionItemContainer;
