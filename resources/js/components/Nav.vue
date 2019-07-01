<template>
    <nav class="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark">
        <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse" 
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <input type="checkbox" class="navbarCollapseToggler" />
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" class="navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">LoggedUser</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
    .navbarCollapseToggler {
        display: none;
    }

    /*
    TODO: CSS nav toggler;
    button.navbar-toggler > .navbarCollapseToggler*/
</style>

<script>
    export default {

    }
</script>
