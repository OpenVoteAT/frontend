<script>

// Dynamic Array with Candidates that have already been chosen 
import { ausgewaehlt } from '../db/ausgewahlt'

// Dynamic Array with Candidates that were not chosen yet
import { candidates } from '../db/candidates';

// Gloabl Boolean for Debug Mode
import { debug } from '../db/debug';

// Object Mutation library lodash
import { _ } from 'lodash'

// Initial Value for <Select>
export let value = "Auswahelen";

// Local buffer variables for internal arrayshifting
let lastValue = null;
let newValue;

// Event Handler for a change of the Selector
function newValueSelected(event){

	// Copy Value from the event handler into local buffer
	newValue = event.target.value

	if(debug){
		console.log('event', event)
		console.log('Last Value: ', lastValue, '  |  New Value: ', newValue)
	}

	// check if there was already a candidate chosen 
	if(!!lastValue){
		// move the deselected canidate from the "selected"-Array into the "avalible"-Array
		$candidates[lastValue] = $ausgewaehlt[lastValue]
		$ausgewaehlt = removeValueKeyFromObject($ausgewaehlt , lastValue)
	}

	// overwrite the old Buffer with the new value
	lastValue = newValue

	// 
	$ausgewaehlt[newValue] = $candidates[newValue]
	$candidates = removeValueKeyFromObject($candidates , newValue)

	if(debug){
		console.log('candidates: ', $candidates)
		console.log('ausgewahlt: ', $ausgewaehlt)
	}
	
}

// Object Key (non Mutable) Wrapper function for lodash
function removeValueKeyFromObject(object, key){
	return _.omit(object, key)
}


</script>

<select bind:value={value} on:change={(e) => newValueSelected(e)}>
	{#if $candidates}
		{#each Object.keys($candidates) as candidate}
			{#if typeof($candidates[candidate]) != undefined}
				<option value={candidate}>{$candidates[candidate]}</option>
			{/if}
		{/each}
	{/if}
	{#if $ausgewaehlt}     
		{#each Object.keys($ausgewaehlt) as auswahl}
			{#if typeof($ausgewaehlt[auswahl]) != undefined}
				<option value={auswahl} disabled>{$ausgewaehlt[auswahl]}</option>
			{/if}
		{/each} 
	{/if}    
</select>