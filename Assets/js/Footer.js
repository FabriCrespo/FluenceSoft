document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('footer-container').innerHTML = `
      <footer class="footer">
        <div class="row" id="footer-content">
          <div class="col" id="socialRedes">
            <div class="line"></div>
            <div class="socialI">
              <a href="mailto:fluencesoftempr@gmail.com" class="socialWG">
                <i class="fas fa-envelope"></i>
              </a>
              <a href="tel:+59170799627" class="socialWG">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="row" id="footer-content">
          <div class="col" id="socialRedes">
            <div class="copyright">
              <img class="iconofoderS" src="../Assets/img/Logo/Logo.png" alt="LogoCompleto">
              <p class="copyright-text">Copyright © 2025 FluenceSoft, Inc.</p>
            </div>
          </div>
        </div>
      </footer>
    `;
  });
  