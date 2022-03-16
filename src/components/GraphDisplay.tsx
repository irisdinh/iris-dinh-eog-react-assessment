import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  ApolloClient,
  ApolloProvider,
  useQuery,
  gql,
  InMemoryCache,
} from '@apollo/client';

const SearchBar = () => {
  const searchItem = useSelector((state: any) => state.searchItem);

  type WeatherData = {
    temperatureinCelsius: number;
    description: string;
    locationName: string;
  };
  type WeatherDataResponse = {
    getWeatherForLocation: WeatherData;
  };

  const client = new ApolloClient({
    uri: 'https://react-assessment.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });

  const query = gql`
    query ($latLong: WeatherQuery!) {
      getWeatherForLocation(latLong: $latLong) {
        description
        locationName
        temperatureinCelsius
      }
    }
  `;

  useEffect(() => {
    // const { loading, error, data } = useQuery<WeatherDataResponse>(query, {
    //     variables: {
    //     },
    // });
  }, [searchItem]);

  return (
    <ApolloProvider client={client}>
    </ApolloProvider>
  );
};

export default SearchBar;
