<script>


export let curP;
</script>

<style>

	.main {
		@apply px-3;
		@apply py-2;
		@apply rounded-md;
		@apply text-sm;
		@apply font-medium;	
	}

	.current {
		@apply bg-openblue;
		@apply text-gray-50;
	}

	.others {
		@apply text-gray-300;
	}

	.others:hover {
		@apply bg-gray-700;
		@apply text-white;
	}



</style>

<nav class="bg-graphite">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<img class="h-8 w-auto" src="https://raw.githubusercontent.com/OpenVoteAT/design/master/_Export/1x/OPENVOTELogo%2BClaim.png" alt="Workflow">
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						{#if curP == "1"}
							<span class="main current" aria-current="page">Keyeingabe</span>
						{:else}
							<span class="main others">Keyeingabe</span>
						{/if}
						{#if curP == "2"}
							<span class="main current" aria-current="page">Vergabe der Wahlpunkte</span>
						{:else}
							<span class="main others">Vergabe der Wahlpunkte</span>
						{/if}
						{#if curP == "3"}
							<span class="main current" aria-current="page">Überprüfen und Absenden</span>
						{:else}
							<span class="main others">Überprüfen und Absenden</span>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="md:hidden" id="mobile-menu">
		<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
			{#if curP == "1"}
				<span class="block main current" aria-current="page">Keyeingabe</span>
			{:else}
				<span class="block main others">Keyeingabe</span>
			{/if}
			{#if curP == "2"}
				<span class="block main current" aria-current="page">Vergabe der Wahlpunkte</span>
			{:else}
				<span class="block main others">Vergabe der Wahlpunkte</span>
			{/if}
			{#if curP == "3"}
				<span class="block main current" aria-current="page">Überprüfen und Absenden</span>
			{:else}
				<span class="block main others">Überprüfen und Absenden</span>
			{/if}
		</div> 
	</div>
</nav>