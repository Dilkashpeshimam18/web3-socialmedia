"use client"

// import { useState,useEffect } from "react";
import NavigationCard from "./Navigation/NavigationCard";
// import { urlClient, recommendedProfile } from '../_queries/queries'

export default function Layout({ children, hideNavigation }) {
  // const [profiles, setProfiles] = useState([])

  // const getRecommendedProfiles = async () => {
  //   try {
  //     const response = await urlClient
  //       .query(recommendedProfile)
  //       .toPromise();

  //       console.log(response)
  //     const profiles = response?.data.recommendedProfiles;
  //     console.log('Getting all recommend profile>>>', profiles)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(()=>{
  //   getRecommendedProfiles()
  // },[])


  let rightColumnClasses = '';
  if (hideNavigation) {
    rightColumnClasses += 'w-full';
  } else {
    rightColumnClasses += 'mx-4 md:mx-0 md:w-9/12';
  }
  return (
    <div className="md:flex mt-6 max-w-4xl mx-auto gap-6 mb-24 md:mb-0 bg-white">
      {!hideNavigation && (
        <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5">
          <NavigationCard/>
        </div>
      )}
      <div className={rightColumnClasses}>
        {children}
      </div>
    </div>
  );
}

