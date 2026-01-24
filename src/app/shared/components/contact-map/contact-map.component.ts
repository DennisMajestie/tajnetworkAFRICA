import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="contact-map">
      <div class="container--wide">
        <div class="map-card">
          <iframe 
            class="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.536294747!2d7.3683955!3d8.995006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7127163f9d51%3A0x6e8a4a5840d4f9b!2sLugbe%2C%20Abuja!5e0!3m2!1sen!2sng!4v1705161453253!5m2!1sen!2sng"
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          
          <a href="https://www.google.com/maps/dir/?api=1&destination=Block+1+Flat+2+Philcruz+Estate+Lugbe+Airport+Road+Abuja" 
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
              <p class="location-addr">Block 1, Flat 2, Philcruz Estate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-map {
      padding: 100px;
      background: linear-gradient(180deg, #f8faff 0%, #eef2ff 100%);

      @media (max-width: 768px) {
        padding: 0 0 60px;
      }
    }

    // .container--wide {
    //   max-width: 2000px;
    // }

    .map-card {
      width: 100%;
      height: 600px;
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
      bottom: 40px;
      right: 40px;
      background: #0066ff;
      color: #fff;
      padding: 14px 30px;
      border-radius: 100px;
      font-weight: 800;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      box-shadow: 0 15px 30px rgba(0, 102, 255, 0.3);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 10;
      transition: all 0.3s ease;

      &:hover {
        background: #004a78;
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 20px 40px rgba(0, 74, 120, 0.4);
        color: #fff;
      }

      @media (max-width: 768px) {
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        font-size: 0.7rem;
      }
      
      &::before {
        content: "\\f3c5";
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
      }
    }

    /* Dark Mode Overrides */
    :host-context(.theme-dark) .contact-map {
      background: #020c18;
      padding: 100px;
    }

    :host-context(.theme-dark) .map-card {
      box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2);
      border-color: rgba(255, 255, 255, 0.05);
    }

    :host-context(.theme-dark) .map-iframe {
      filter: grayscale(0.8) invert(0.9) contrast(1.2);
      opacity: 0.8;
      
      &:hover {
        opacity: 1;
      }
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

    :host-context(.theme-dark) .location-card {
      background: #1a1f2e;
      border-color: rgba(255, 255, 255, 0.1);
      
      .location-name { color: #fff; }
      .location-addr { color: #94a3b8; }
    }
  `]
})
export class ContactMapComponent { }
