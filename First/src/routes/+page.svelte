<script lang="ts">
	import { onMount } from 'svelte';
	import type { UserProp } from '../app';
	import ChatScreen from '../components/ChatScreen.svelte';

	let userData: UserProp[] = [];
	let hideList = false;
	export let userToChatWith: UserProp;

	export const loadUserData = async () => {
		try {
			const res = await fetch('http://localhost:4000/users');
			userData = await res.json();
			console.log(userData);
		} catch (err) {
			console.log('### ERROR ###', err);
		}
	};
	onMount(loadUserData);

	const nameClicked = (item: UserProp) => {
		console.log(item.id + ': ' + item.name);
		userToChatWith = item;
		hideList = true;
	};
</script>

<main class="w-screen h-full items-center justify-between overflow-y-scroll">
	{#if hideList}
		<ChatScreen userData={userToChatWith} backClicked={() => (hideList = false)} />
	{:else}
		<div class="p-4">
			<!-- {#await userData}
			<p>Loading</p>
		{:then users} -->
			{#each userData as item, index}
				<button
					on:click={(event) => nameClicked(item)}
					class="flex flex-row items-center w-1/4 bg-red-300 p-4 m-[0.01] rounded-lg hover:bg-red-600"
				>
					<img src={item.avatar} alt="user avatar" class="w-12 aspect-square" />
					<h1 class="font-semibold tracking-wider flex-1 self-center text-xl">
						{item.name}
					</h1>
				</button><br />
			{/each}
			<!-- {:catch err}
			<p>{err}</p>
		{/await} -->
		</div>
	{/if}
</main>
