<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar navbar-light" style="background-color: #e3f2fd;">
        <a class="navbar-brand" href="#">Ashlar-Global</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">

                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/aboutus" class="nav-link">About Us</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Our Team</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                </li>


            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>








</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>