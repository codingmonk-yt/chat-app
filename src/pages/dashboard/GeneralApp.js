import React, { lazy, Suspense } from "react";

// Dynamic import
const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {

  return (
    <>
      <Suspense fallback="loading...">
        <Cat />
      </Suspense>
    </>
  );
};

export default GeneralApp;
