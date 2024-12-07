
import { SearchResultAll } from '@/components/common'
import React from 'react'

const ResultSearch = ({ params }: { params: { keyword: string } }) => {
	const { keyword }= params
	return (
		<div className="bg-gradient-to-t from-violet-600 to-violet-300 ">
			<SearchResultAll keyword={keyword}/>
		</div>
	)
}

export default ResultSearch
