<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center bg-slate-200">
	<Header />
	<slot />
	<Footer />
</div>
