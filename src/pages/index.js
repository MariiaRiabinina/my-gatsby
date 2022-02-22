import * as React from 'react';
import { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const IndexPage = () => {
  /*  const [data, setData] = useState();
  
    useEffect(async () => {
      const result = await fetch(`${process.env.GATSBY_API_URL}/users`).then(res => res.json());
      setData(result.data);
    });*/

  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      {/*<ul>
        {data.map(user => (
          <li key={user.id}>
            <a href={user.url}>{user.name}</a>
          </li>
        ))}
      </ul>*/}
      <StaticImage
        alt="morning-tea"
        src="https://i.ibb.co/7tx3rDZ/kelsey-curtis-1570052-unsplash.jpg"
      />
      <StaticImage alt="photo" src="../images/photo.jpg" />
    </Layout>
  );
};

export default IndexPage;
