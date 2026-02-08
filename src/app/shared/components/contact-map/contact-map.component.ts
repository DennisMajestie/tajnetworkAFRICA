import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-map">
      <div class="container--wide">
        <!-- Map Section -->
        <div class="map-stack">
          <!-- Labels Row (Removed as it is now in ContactInfoComponent) -->

          <!-- Bottom: Map Section -->
          <div class="map-container-main">
            <div class="map-card">
              <iframe 
                class="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.275882464102!2d7.351144174800965!3d8.9635590900103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7316f9669515%3A0x4af43b25a6397811!2sPhilkruz%20Estate%2C%20Lugbe!5e1!3m2!1sen!2sng!4v1770568810719!5m2!1sen!2sng"
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
              
              <a href="https://www.google.com/maps/dir/?api=1&destination=Philkruz+Estate,+Lugbe,+X973%2BCFH,+Lugbe+900107" 
                 target="_blank" 
                 class="map-tag">
                <i class="fas fa-location-arrow"></i>
                <span>Get Directions</span>
              </a>

              <!-- Real-time Location Pin -->
              <div class="location-pin-container">
                <div class="location-pin">
                  <div class="pin-pulse"></div>
                  <div class="pin-dot"></div>
                </div>
                <div class="location-card">
                  <h4 class="location-name">Taj Network Africa</h4>
                  <p class="location-addr">Block 1, Philcruz Estate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-map {
      padding: 0 0 120px;
      background: #020c18;

      @media (max-width: 991px) {
        padding: 0 0 60px;
      }
    }

    :host-context(.theme-light) .contact-map { background: #f8faff; }

    .container--wide {
      // max-width: 2000px;
      // margin: 0 auto;
      // padding: 0 20px;
      max-width: 1600px;
      margin: 0 auto;
      padding: 20px 20px;
    }

    .map-stack {
      display: flex;
      flex-direction: column;
      gap: 60px;
    }

    .contact-labels-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      @media (max-width: 991px) {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }

    .contact-card-v3 {
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 30px;
      background: #fff;
      border-radius: 24px;
      border: 1px solid rgba(0, 102, 255, 0.08);
      box-shadow: 0 10px 30px rgba(0, 74, 120, 0.05);
      transition: all 0.4s ease;
      height: 100%;

      &:hover {
        transform: translateY(-5px);
        border-color: rgba(0, 102, 255, 0.2);
        box-shadow: 0 20px 40px rgba(0, 74, 120, 0.1);

        .card-icon {
          background: #0066ff;
          color: #fff;
        }
      }
    }

    .card-icon {
      width: 54px;
      height: 54px;
      background: rgba(0, 102, 255, 0.08);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: #0066ff;
      transition: all 0.4s ease;
      flex-shrink: 0;
    }

    .card-label {
      font-size: 1.1rem;
      font-weight: 800;
      color: #0c152a;
      margin-bottom: 5px;
    }

    .card-detail {
      font-size: 0.95rem;
      color: #64748b;
      margin: 0;
      line-height: 1.5;
    }

    .map-container-main {
      position: relative;
    }

    .map-card {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: 32px;
      overflow: hidden;
      box-shadow: 0 40px 100px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(0, 102, 255, 0.05);
      
      @media (max-width: 768px) {
        height: 400px;
        border-radius: 20px;
      }
    }

    .map-iframe {
      width: 100%;
      height: 100%;
      filter: grayscale(0.2) contrast(1.1);
      transition: all 0.5s ease;
    }

    .map-tag {
      position: absolute;
      bottom: 30px;
      right: 30px;
      background: #0066ff;
      color: #fff;
      padding: 12px 24px;
      border-radius: 100px;
      font-weight: 800;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      box-shadow: 0 10px 20px rgba(0, 102, 255, 0.2);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 10;
      transition: all 0.3s ease;

      &:hover {
        background: linear-gradient(135deg, #004a78 0%, #003355 100%); /* Changed to gradient */
        transform: translateY(-3px);
        box-shadow: 0 15px 30px rgba(0, 74, 120, 0.3);
      }

      @media (max-width: 768px) {
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
      }
    }

    :host-context(.theme-dark) {
      .contact-map { background: #020c18; }
      .contact-card-v3 { background: rgba(255, 255, 255, 0.03); border-color: rgba(255, 255, 255, 0.05); }
      .card-label { color: #fff; }
      .card-detail { color: #94a3b8; }
      .map-card { border-color: rgba(255, 255, 255, 0.05); box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2); }
      .map-iframe { filter: grayscale(0.8) invert(0.9) contrast(1.2); opacity: 0.8; }
      .location-card { background: #1a1f2e; border-color: rgba(255, 255, 255, 0.1); .location-name { color: #fff; } }
    }

    /* Floating Real-time Pin */
    .location-pin-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .location-pin {
      position: relative;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .pin-dot {
      width: 14px;
      height: 14px;
      background: #0066ff;
      border: 3px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(0, 102, 255, 0.6);
      z-index: 2;
    }

    .pin-pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 102, 255, 0.4);
      border-radius: 50%;
      animation: locationPulse 2s ease-out infinite;
    }

    @keyframes locationPulse {
      0% { transform: scale(0.6); opacity: 1; }
      100% { transform: scale(2.5); opacity: 0; }
    }

    .location-card {
      background: #ffffff;
      padding: 12px 20px;
      border-radius: 16px;
      margin-top: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      text-align: center;
      min-width: 180px;
      border: 1px solid rgba(0, 102, 255, 0.1);
      animation: slideFloat 3s ease-in-out infinite alternate;
    }

    @keyframes slideFloat {
      from { transform: translateY(0); }
      to { transform: translateY(-8px); }
    }

    .location-name {
      font-size: 0.95rem;
      font-weight: 800;
      color: #0c152a;
      margin: 0 0 4px;
    }

    .location-addr {
      font-size: 0.8rem;
      color: #64748b;
      margin: 0;
      white-space: nowrap;
    }
  `]
})
export class ContactMapComponent {
  contactItems = [
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      detail: '+234 802 982 4786'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      detail: 'info@tajnetworkafrica.com'
    },
    {
      icon: 'fas fa-location-arrow',
      label: 'Location',
      detail: 'Block 1, Philcruz Estate,<br>Lugbe Airport Road, Abuja'
    }
  ];
}
