<div slot="hero-image" class="hide">
	<span>VPS</span>
	<img src="/sveltepress.svg" alt="Logo" />
</div>

<div class="container">
	<p>
		Lightweight and flexible open-source password store written in bash!<br>
		Securely store your passwords! GnuPG encrypted and chattr locked.
	</p>
	<div>
		<img
			src="/vps-unlocked.png"
			alt="Unlocked password store"
			title="Unlocked"
		/>
	</div>
	<div>
		<img src="/vps-locked.png" alt="Locked password store" title="Locked" />
	</div>
</div>

<style>
	.hide {
		display: none;
	}
	.container {
		max-width: 1500px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		gap: 1%;

		& > p {
			width: 100%;
		}

		& > div {
			width: 49.5%;
			aspect-ratio: 16/9;
			border-radius: 4px;
			box-shadow: 0 3px 6px rgba(0, 0, 0, 0.24);
			overflow: hidden;

			& > img {
				width: 200%;
			}
		}
	}
</style>
