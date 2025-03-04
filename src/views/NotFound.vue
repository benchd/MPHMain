<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <router-link to="/" class="home-button">Go to Homepage</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.not-found-content {
  max-width: 600px;
}

h1 {
  font-size: 6rem;
  margin: 0;
  color: #2c3e50;
}

h2 {
  font-size: 2rem;
  margin: 1rem 0;
  color: #2c3e50;
}

p {
  color: #666;
  margin-bottom: 2rem;
}

.home-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #3aa876;
}
</style> 