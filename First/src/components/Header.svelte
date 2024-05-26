<header>
	<div class="flex flex-row justify-between items-center p-6 w-screen bg-slate-500">
		<button
			on:click={() => console.log('Menu')}
			class="hover:bg-slate-400 p-3 rounded-full active:bg-slate-300"
		>
			<i class="fa-solid fa-bars fa-2xl"></i>
		</button>
		<button
			class="text-xl bg-neutral-800 px-4 py-2 text-center font-medium text-white rounded-lg hover:bg-red-400 active:bg-red-500"
			on:click={() => console.log('STARTING NEW CHAT')}
		>
			Start New Chat
		</button>
	</div>
</header>
