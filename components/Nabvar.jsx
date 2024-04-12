import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Nabvar = () => {
  return (
    <nav className="border-b bg-transparent h-[10vh] flex items-center">
			<div className="container flex items-center justify-between">
				<Link href="/">
					<h1 className="font-extrabold text-4xl">
						Form<span className="text-emerald-400 font-light">Savvy</span>
					</h1>
				</Link>
				{/* Theme Toogle Button */}
				<div className="flex items-center gap-x-5">
					
						<div className="flex items-center gap-x-5">
							
								
						
							
								<Button className="bg-emerald-400">Register Now!</Button>
							
						</div>
				
				</div>
			</div>
		</nav>

  )
}

export default Nabvar
