<script>

// Stores
import { candidates } from '../db/candidates'

// Components
import Navbar from '../comp/navbar.svelte'
import Select from '../comp/select.svelte'

// Transitions
import { fade } from 'svelte/transition';

// get Store Func
import { get } from 'svelte/store';

// import lodash bc js sucks
import { _ } from 'lodash'



// Current Page 1 - key; 2 - selection; 3 - check and send;
let curP = "1";

// copy o
let candiateCount = Object.keys(get(candidates)).length;
console.log('CandidateCount: ', candiateCount)
let canObj = {}

// Variables
let key = null;
let selectCount = Array(candiateCount);
let pointsObj = [];





function submit(){
	console.log("Test", key)
}

function debugLog(){
	console.log("pointsObj", pointsObj)
	console.log("$candidates", $candidates)
	console.log("canObj", canObj)
}





// Generate Array for the Results basend on the number of candidates
if(candiateCount < 6){
	selectCount = Array(candiateCount);
	for(let i = 6; i > candiateCount; i-= 1) pointsObj.push({points: i, id: null});
	for (let x in Object.keys(candiateCount))
		canObj[x] = null;
}

</script>
 
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> 
</svelte:head>

<style>

main{
	font-family: 'montserrat', sans-serif;
	font-weight: 500;
}


</style>

<main>
	<Navbar bind:curP={curP} />
	<content>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 lg:my-40">

			<!-- Landing Page -->
			{#if curP == "1"}
			<div class="grid">
				<div class="col-start-2 col-end-3 lg:col-start-1 lg:col-end-5 row-start-2 row-end-5 lg:row-end-5 lg:py-10 xl:py-16 flex -ml-8 pr-4 sm:ml-0 sm:pr-0">
					<div class="flex-none rounded-3xl transform shadow-lg bg-gradient-to-br from-cyan-400 to-blue-500 rotate-1" style="height: 300px; width: 800px">
						<h1 class="m-5 text-4xl text-white ml-12" style="font-family: 'montserrat', sans-serif; font-weight: 700;">Transparente Demokratie mit OpenVote!</h1>
					</div>
				</div>
				<div class="relative w-full col-start-1 lg:col-start-2 col-end-4 row-start-2 row-end-5 py-8 md:px-8 lg:p-0 mt-36">
					<div class="relative overflow-hidden md:rounded-xl shadow-2xl flex bg-gray-50">
						<section class="w-full px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
							<header class="flex items-center justify-between">
								<h2 class="text-lg leading-6 font-medium text-black">Los geht's!</h2>
							</header>
							<!-- Formularbereich -->
							<form class="relative" on:submit={submit}>
								<div>
									<svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
									</svg>
								</div>
								<input bind:value={key} type="text" placeholder="Dein persönlicher Wahlschlüssel" class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 focus:border-openblue focus:outline-none focus:ring-1 focus:ring-openblue">
								<button on:click={() => {curP = "2";}} class="rounded-lg bg-gradient-to-bl from-openblue-light to-openblue-dark text-white p-2 mt-5 hover:from-openblue-dark hover:to-openblue-light shadow-md">Ab geht's</button>
							</form>
						</section>
					</div>
				</div>
			</div>
			{/if}

			<!-- Select Candidate Page -->
			{#if curP == "2"}
			<header class="bg-white shadow">
				<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					  <h1 class="text-3xl font-bold text-gray-900">Vergieb deine Wahlpunkte</h1>
				</div>
			</header>
			<main>
				<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<form class="relative" on:submit={submit}>
						{#each Array(candiateCount) as item}
							<Select />
						{/each}
						<button on:click={() => {curP = "3";}} class="rounded-lg bg-gradient-to-bl from-openblue-light to-openblue-dark text-white p-2 mt-5 hover:from-openblue-dark hover:to-openblue-light shadow-md">Fast geschafft!</button>
					</form>
					<button on:click={() => debugLog()} class="rounded-lg bg-gradient-to-bl from-openblue-light to-openblue-dark text-white p-2 mt-5 hover:from-openblue-dark hover:to-openblue-light shadow-md">Debug</button>
				</div>
			</main>
			{/if}
			<!-- Check and Send Page -->
			{#if curP == "3"}
				Stage 3
			{/if}
		</div>
	</content>
</main>