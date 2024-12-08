<template>
    <div>
  
      <header>
        <Navbar />
      </header>
  
    
      <main>
        <slot />
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue"; 
  
  export default {
    name: "PageLayout",
    components: {
      Navbar,
    },
  };
  </script>