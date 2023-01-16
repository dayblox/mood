import { A } from "solid-start"

export default function Header() {
	return (
		<div class="p-6 lg:px-8">
			<nav class="flex h-9 items-center justify-between" aria-label="Global">
				<div class="flex lg:min-w-0" aria-label="Global">
					<A href="/">
						<span class="sr-only">Mood Home</span>
						<img
							class="h-8 rounded-full"
							src="https://avatars.githubusercontent.com/u/17180392"
							alt=""
						/>
					</A>
				</div>
				<div class="flex lg:hidden">
					<button
						type="button"
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
				<div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
					<a href="#" class="font-semibold text-gray-900 hover:text-gray-900">
						Projects
					</a>
					<a href="#" class="font-semibold text-gray-900 hover:text-gray-900">
						About
					</a>
				</div>
			</nav>
		</div>
	)
}
