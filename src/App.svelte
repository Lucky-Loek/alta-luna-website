<script lang="ts">
	import musicDb from "./db/music.json";
	import tourDb from "./db/tour.json";
	import Fa from "svelte-fa/src/fa.svelte";
	import {
		faInstagram,
		faFacebookSquare,
		faYoutube,
	} from "@fortawesome/free-brands-svg-icons";
	import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
	import MusicCard from "./lib/MusicCard.svelte";
	import Navbar from "./lib/Navbar.svelte";
	import Tour from "./lib/Tour.svelte";

	let showPastTours = false;

	let upcomingTours = tourDb.filter((tour) => {
		return new Date(tour.date) >= new Date();
	});
	upcomingTours.sort((a, b) => {
		return new Date(a.date) - new Date(b.date); // old to new
	});

	let pastTours = tourDb.filter((tour) => {
		return new Date(tour.date) < new Date();
	});
	pastTours.sort((a, b) => {
		return new Date(b.date) - new Date(a.date); // new to old
	});

	let currentYear = new Date().getFullYear();

	let amountOfColumns = musicDb.length;
</script>

<Navbar />

<section class="hero">
	<figure class="image">
		<img src="/img/ALTA LUNA Press photo.jpg" alt="Band members of Alta Luna posing for statue" />
	</figure>
</section>

<section class="section is-medium has-background-dark has-text-white" id="about">
	<div class="container has-text-centered">
		<h2 class="title has-text-white">About us</h2>
		<p>
			Alta Luna is a five-member indie rock band with a distinctive blend of honest lyrics, powerful drums, and
			 catchy melodies. Alta Luna's influences are clearly felt in their music, drawing inspiration from icons
			 such as The National, The War on Drugs, and Interpol. Last year, Alta Luna performed at events including
			 Concert at Sea, Vestrock, and Bevrijdingsfestival Zeeland. On April 12th, Alta Luna will release the EP
			 'Shorter Days, Longer Nights'. The EP features five penetrating tracks about the tumultuous course of a
			 toxic relationship, losing oneself, and rediscovering oneself. An emotional rollercoaster that begins with
			 the spark of attraction at the first encounter and ends with the bitter aftertaste of a hateful breakup.
			 The EP 'Shorter Days, Longer Nights' is co-produced by Marien Dorleijn (Moss). To celebrate the EP, Alta
			 Luna will tour Dutch venues.
		</p>
	</div>
</section>
<section class="section is-medium has-background-dark has-text-white" id="press">
	<div class="container has-text-centered">
		<h2 class="title has-text-white">What people say about us</h2>
		<p>And although it's clear where Alta Luna gets its inspiration, the band still has something of their own,
		so we have the 'follow' checkbox checked from today on the aforementioned streaming service. Mission
		accomplished: Alta Luna nicely catches our attention at Vestrock.
		<br><small>muziscene.nl</small>
		</p>
	</div>
</section>

<section class="section is-medium has-background-dark has-text-white" id="music">
	<div class="container has-text-centered">
		<h2 class="title has-text-white">Music</h2>
		<div class="columns">

			{#each musicDb as release}
				<MusicCard
					title={release.title}
					imageUrl={release.image.url}
					imageAlt={release.image.alt}
					youtube={release.youtube}
					spotify={release.spotify}
					hyperfollow={release.hyperfollow}
					photographerName={release.photographer.name}
					photographerUrl={release.photographer.url}
					acousticYoutubeUrl={release.acoustic_youtube_url}
					amountOfColumns={amountOfColumns}
				/>
			{/each}
		</div>
	</div>
</section>

<section class="section is-medium has-background-dark has-text-white" id="tour">
	<div class="container has-text-centered">
		<h2 class="title has-text-white">Tour Dates</h2>
		<table class="table is-fullwidth mx-auto has-background-dark has-text-white">
			<thead>
				<tr>
					<th class="has-text-centered has-text-white">Date</th>
					<th class="has-text-centered has-text-white">Location</th>
					<th class="has-text-centered has-text-white">Website / Tickets</th>
				</tr>
			</thead>
			<tbody>
				{#if upcomingTours.length === 0}
					<tr>
						<td>Have a date?</td>
						<td>And a location?</td>
						<td><a href="mailto:info@altalunaband.com">Get in touch!</a></td>
					</tr>
				{/if}
				{#each upcomingTours as tour}
					<Tour date={tour.date} location={tour.location} url={tour.url} />
				{/each}
			</tbody>
		</table>

		<a on:click="{e => showPastTours = !showPastTours}">
			See past tour dates and setlists
			{#if !showPastTours}
				<Fa icon={faChevronRight} />
			{:else}
				<Fa icon={faChevronDown} />
			{/if}
		</a>
		{#if showPastTours}
		<table class="table is-fullwidth mx-auto has-background-dark has-text-white">
			<thead>
				<tr>
					<th class="has-text-centered has-text-white">Date</th>
					<th class="has-text-centered has-text-white">Location</th>
					<th class="has-text-centered has-text-white">Setlist</th>
				</tr>
			</thead>
			<tbody>
				{#each pastTours as tour}
					<Tour date={tour.date} location={tour.location} url={tour.url} />
				{/each}
			</tbody>
		</table>
		{/if}
	</div>
</section>

<section class="section is-medium has-background-dark has-text-white" id="contact">
	<div class="container has-text-centered">
		<h2 class="title has-text-white">Contact</h2>
		<p>Visit our socials:</p>
		<div class="content has-text-centered">
			<p>
				<a href="https://www.facebook.com/AltaLunaMusic" target="_blank" rel="noreferrer">
					<Fa icon={faFacebookSquare} size="2x" />
				</a>
				<a href="https://www.instagram.com/altalunaband/" target="_blank" rel="noreferrer">
					<Fa icon={faInstagram} size="2x" />
				</a>
				<a href="https://www.youtube.com/@altalunaband/" target="_blank" rel="noreferrer">
					<Fa icon={faYoutube} size="2x" />
				</a>
			</p>
		</div>
		<p>Or send us an email for booking requests or other information:</p>
		<a href="mailto:info@altalunaband.com">info@altalunaband.com</a>
		<p><strong class="has-text-white">Presskit: </strong><a href="presskit/Presskit.zip">find it here</a></p>
	</div>
</section>

<footer class="footer">
	<div class="container has-text-centered">
		&copy; 2021 - {currentYear} Alta Luna. All rights reserved. If you would like
		to use our creative work, please contact us at
		<a href="mailto:info@altalunaband.com">info@altalunaband.com</a>. Cover
		photo by
		<a href="https://joydroogsma.nl/" target="_blank" rel="noreferrer"
			>Joy Droogsma</a>.
	</div>
</footer>
