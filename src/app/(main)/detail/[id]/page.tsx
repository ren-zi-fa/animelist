'use client'

import { AnimeDetail } from '@/components/common'

import React from 'react'

const Detail = ({ params }: { params: { id: string } }) => {
	const { id } = params

	return (
        <>
            <div className="">
                 <AnimeDetail query={id}/>
            </div>
        </>
    )
}

export default Detail
