import React from 'react';
import Head from 'next/head'
import LayoutView from '../components/layout'
require('../styles/variables.less');

export default function Home() {
  return (
      <div>
        <Head>
          <title>Interview Test</title>
        </Head>
        <LayoutView />
      </div>
  )
}
