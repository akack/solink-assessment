import React, { Component } from 'react'
import { gql, useQuery } from '@apollo/client';
import moment from 'moment'

function PastLaunches(props) {
    const dataQuery = gql`{
        launchesPast(limit: 10) {
          mission_name
          launch_date_local
          launch_site {
            site_name
          }
        }
      }`;

    const { loading, error, data } = useQuery(dataQuery);

    return (
        <div>
            {loading ? (<div>
                <h3>loading launches ...</h3>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
            </div>) : (
                <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4x midnight-green hr-line'>PAST LAUNCHES</h1>
                    <hr className='hr-line' />
                    <div className="flex flex-col mt-8">
                        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div className='upcoming inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg'>
                                <table className="shadow-lg bg-white border-collapse min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="bg-blue-100 px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Mission Name</th>
                                            <th className="bg-blue-100 px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Launch Date</th>
                                            <th className="bg-blue-100 px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Site Name</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {data && data.launchesPast && data.launchesPast.map((launch, i) => {
                                            return <tr key={i}>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{launch.mission_name}</td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{moment(launch.launch_date_local).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{launch.launch_site.site_name}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PastLaunches;