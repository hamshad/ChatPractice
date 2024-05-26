<script lang="ts">
	import { send } from 'vite';
	import type { UserProp } from '../app';

	export let userData: UserProp;
	export let backClicked: () => void;

	let chat = '';

	const sendChat = () => {
		// if (chat.trim() !== '') {
		// 	console.log('empty');
		// 	return;
		// }
		// alert(chat);
		// chat = '';
	};
</script>

<div class="flex flex-col h-full justify-between">
	<div class="flex flex-row gap-3 items-center p-4">
		<button on:click={() => backClicked()} class="hover:bg-slate-300 p-2 rounded-full">
			<i class="fa-solid fa-arrow-left fa-xl"></i>
		</button>
		<img src={userData.avatar} alt="user avatar" class="w-14 aspect-square" />
		<h1 class="font-bold mx-3 text-3xl">{userData.name}</h1>
	</div>
	<div class="align-bottom">
		<div class="flex flex-row items-center bg-slate-300">
			<input
				bind:value={chat}
				class="bg-red-100 m-4 py-2 px-4 rounded-xl w-[90%] items-center text-lg font-medium"
				placeholder="Send a message"
			/>
			<button
				on:click={() => sendChat()}
				class="flex-1 justify-center mr-4 bg-slate-400/30 hover:bg-slate-400/50 active:bg-slate-200 py-2.5 rounded-xl"
			>
				<i class="fa-regular fa-paper-plane fa-xl"></i>
			</button>
		</div>
	</div>
</div>
