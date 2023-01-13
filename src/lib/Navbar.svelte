<script lang="ts">
	let showBurgerMenu = false;
</script>

<nav class="navbar is-dark">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://altalunaband.com">
            <img src="/img/Logowit.png" alt="Alta Luna logo" width="40" height="40">
        </a>
        <div
					class="navbar-burger burger" class:is-active="{showBurgerMenu}"
					on:click="{() => showBurgerMenu = !showBurgerMenu}">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    <div
			class="navbar-menu" class:is-active="{showBurgerMenu}"
			on:click="{() => showBurgerMenu = !showBurgerMenu}">
        <div class="navbar-start">
            <a class="navbar-item plume" href="#about">
                About
            </a>
            <a class="navbar-item plume" href="#music">
                Music
            </a>
            <a class="navbar-item plume" href="#tour">
                Tour
            </a>
            <a class="navbar-item plume" href="#contact">
                Contact
            </a>
        </div>
    </div>
  </nav>
