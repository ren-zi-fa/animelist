import React from 'react'

export const Footer = () => {
	return (
		<div className=" bg-violet-500 dark:bg-gray-900  lg:mx-10 px-4 pt-10 lg:px-14 ">
			<div className="mx-auto w-full max-w-screen-xl">
				<div className="grid grid-cols-2  gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 justify-center">
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase ">
							Follow
						</h2>
						<ul className="text-white dark:text-gray-400 font-medium">
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Discord Server
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Twitter
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Facebook
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase ">
							Legal
						</h2>
						<ul className="text-white dark:text-gray-400 font-medium">
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Privacy Policy
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Licensing
								</a>
							</li>
							<li className="mb-4">
								<a href="#" className="hover:underline">
									Terms &amp; Conditions
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
