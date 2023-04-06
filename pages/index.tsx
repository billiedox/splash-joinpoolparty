import React, { Suspense } from "react";
import dynamic from "next/dynamic";
const DynamicMain = dynamic(() => import('../src/Main'), {
  suspense: true,
  ssr: false
})

const IndexPage = ({}) => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicMain />
    </Suspense>
  );
};

export default IndexPage;
