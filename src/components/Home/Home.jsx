import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import UpcomingLaunches from "./UpcomingLaunches";

function Home() {
    const comingQuery = gql`{
        launchNext {
          launch_site {
            site_name
          }
          mission_name
          launch_date_local
        }
      }`

    const { loading, error, data } = useQuery(comingQuery);

    return (
        <div className='home'>
            <div className="bg-gray-50">
                {loading ? (<div>
                    <h3>loading data ...</h3>
                    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    </svg>
                </div>) :
                    (
                        <div>
                            {data && data.launchNext &&
                                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        <span className="block">{data.launchNext.mission_name}</span>
                                        <hr className='hr-line' />
                                        <small><span className='span-font midnight-green'>Launch Date</span><span className="block text-indigo-600 queen-blue">{moment(data.launchNext.launch_date_local).format('MMMM Do YYYY, h:mm:ss a')}</span></small>
                                        <small><span className='span-font midnight-green'>Site Name</span><span className="block text-600">{data.launchNext.launch_site.site_name}</span></small>
                                    </h2>
                                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                        <div className="inline-flex rounded-md shadow">
                                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 wine-back"> Attend Launch</a>
                                        </div>
                                        <div className="ml-3 inline-flex rounded-md shadow">
                                            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> Learn more </a>
                                        </div>
                                    </div>
                                </div>
                            }


                        </div>
                    )
                }
            </div>

            <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4x midnight-green hr-line'>UPCOMING LAUNCHES</h1>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                <UpcomingLaunches launchesPast={data} />
            </div>

        </div>
    )
}

export default Home;