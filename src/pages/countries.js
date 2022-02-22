import * as React from 'react';
import { useScrollRestoration } from 'gatsby';
import Layout from '../components/layout';
import countryList from '../utils/countries';

const CountriesList = () => {
  const ulScrollRestoration = useScrollRestoration('page-component-ul-list');

  return (
    <Layout pageTitle="Countries">
      <ul style={{ height: 500, overflow: 'auto' }} {...ulScrollRestoration}>
        {countryList.map(country => (
          <li>{country}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default CountriesList;
