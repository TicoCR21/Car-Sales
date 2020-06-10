import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = 
{
  additionalPrice: 0,
  
  car: 
  {
    price:     26395,
    name:     '2019 Ford Mustang',
    image:    'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },

  additionalFeatures: 
  [
    { id: 1, name: 'V-6 engine',            price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system',  price: 500 },
    { id: 4, name: 'Rear spoiler',          price: 250 }
  ]
};

export default ( state = initialState, action ) =>
{
  switch( action.type )
  {
    case ADD_FEATURE:
      let newFeature;
      const newAdditionalFeatures = state.additionalFeatures.filter( feature => 
      {
        if( feature.id === action.payload )
          newFeature = feature;
        else
          return feature;
      } );

      return {
        additionalPrice : state.additionalPrice + newFeature.price,
        car : { ...state.car, 
              features : 
              [ ...state.car.features, newFeature ] },
        additionalFeatures : newAdditionalFeatures
      }

    case REMOVE_FEATURE:
      let removeFeature;
      const features = state.car.features.filter( feature => 
        {
          if( feature.id === action.payload )
            removeFeature = feature;
          else
            return feature;
        } );

      return {
        additionalPrice : state.additionalPrice - removeFeature.price,
        car : { ...state.car, features : features  },
        additionalFeatures : [ ...state.additionalFeatures, removeFeature ]
      }

    default:
      return state;
  }
} 