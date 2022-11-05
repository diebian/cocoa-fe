<template>
  <footer class="footer md-hl-footer">
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://cipca.org.bo/" target="_blank">Cipca</a>
          </li>
          <li>
            <a href="https://www.facebook.com/CIPCA_Bolivia-114876261976070/" target="_blank"> Facebook </a>
          </li>
          <li>
            <a href="https://twitter.com/CIPCA_Bolivia" target="_blank"> Twitter </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCvLSpDPnQChS6xULUPtC7yA" target="_blank"> Youtube </a>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        <a href="https://ayudaenaccion.org/" target="_blank"
          > Ayuda en Acción </a
        >&copy; {{ new Date().getFullYear() }}
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
  .md-hl-footer{
    height: 85px;
    /* border: 1px solid red; */
    background-color: #c4ccd0;
  }
</style>
