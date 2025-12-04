// ClickHouse Custom Footer - Pixel Perfect Match
console.log('ClickHouse footer script loaded');

(function() {
  'use strict';
  
  const footerHTML = `
    <div class="clickhouse-custom-footer">
      <div style="max-width: 1400px; margin: 0 auto; padding: 0 40px;">
        <div style="display: flex; gap: 60px; justify-content: space-between; margin-bottom: 44px; flex-wrap: wrap;">
          
          <!-- Left side - Link columns -->
          <div style="display: flex; gap: 60px; flex: 1; flex-wrap: wrap;">
            
            <!-- Products Column -->
            <div style="min-width: 120px;">
              <h3>Products</h3>
              <ul>
                <li><a href="https://clickhouse.com/cloud" target="_blank">ClickHouse Cloud</a></li>
                <li><a href="https://clickhouse.com/clickhouse" target="_blank">ClickHouse</a></li>
                <li><a href="https://clickhouse.com/cloud/bring-your-own-cloud" target="_blank">Bring Your Own Cloud</a></li>
                <li><a href="https://clickhouse.com/government" target="_blank">ClickHouse Government</a></li>
                <li><a href="https://clickhouse.com/clickhouse/keeper" target="_blank">ClickHouse Keeper</a></li>
                <li><a href="https://clickhouse.com/use-cases/observability" target="_blank">ClickStack</a></li>
                <li><a href="https://clickhouse.com/cloud/clickpipes" target="_blank">ClickPipes</a></li>
                <li><a href="https://clickhouse.com/integrations" target="_blank">Integrations</a></li>
                <li><a href="https://clickhouse.com/chdb" target="_blank">chDB</a></li>
                <li><a href="https://trust.clickhouse.com" target="_blank">Trust center</a></li>
                <li><a href="https://clickhouse.com/pricing" target="_blank">Pricing</a></li>
              </ul>
            </div>
            
            <!-- Resources Column -->
            <div style="min-width: 120px;">
              <h3>Resources</h3>
              <ul>
                <li><a href="https://clickhouse.com/docs" target="_blank">Documentation</a></li>
                <li><a href="https://clickhouse.com/learn" target="_blank">Training</a></li>
                <li><a href="https://clickhouse.com/support/program" target="_blank">Support</a></li>
                <li><a href="https://benchmark.clickhouse.com" target="_blank">Benchmarks</a></li>
                <li><a href="https://clickhouse.com/use-cases" target="_blank">Use cases</a></li>
                <li><a href="https://clickhouse.com/videos" target="_blank">Videos</a></li>
                <li><a href="https://clickhouse.com/demos" target="_blank">Demos</a></li>
                <li><a href="https://clickhouse.com/real-time-data-warehouse" target="_blank">Real-time data warehouse</a></li>
                <li><a href="https://clickhouse.com/videos?category=open-house" target="_blank">Open House videos</a></li>
              </ul>
            </div>
            
            <!-- Company Column -->
            <div style="min-width: 120px;">
              <h3>Company</h3>
              <ul>
                <li><a href="https://clickhouse.com/blog" target="_blank">Blog</a></li>
                <li><a href="https://clickhouse.com/company/our-story" target="_blank">Our story</a></li>
                <li><a href="https://clickhouse.com/company/careers" target="_blank">Careers</a></li>
                <li><a href="https://clickhouse.com/company/contact?loc=footer" target="_blank">Contact us</a></li>
                <li><a href="https://clickhouse.com/company/events" target="_blank">Events</a></li>
                <li><a href="https://clickhouse.com/company/news" target="_blank">News</a></li>
                <li><a href="https://clickhouse.com/media" target="_blank">Media</a></li>
              </ul>
            </div>
            
            <!-- Community Column -->
            <div style="min-width: 120px;">
              <h3>Join our community</h3>
              <ul>
                <li><a href="https://github.com/ClickHouse/ClickHouse" target="_blank">GitHub</a></li>
                <li><a href="https://clickhouse.com/slack" target="_blank">Slack</a></li>
                <li><a href="https://www.linkedin.com/company/clickhouseinc" target="_blank">LinkedIn</a></li>
                <li><a href="https://x.com/ClickhouseDB" target="_blank">X</a></li>
                <li><a href="https://bsky.app/profile/clickhouse.com" target="_blank">Bluesky</a></li>
                <li><a href="https://telegram.me/clickhouse_en" target="_blank">Telegram</a></li>
                <li><a href="https://www.meetup.com/pro/clickhouse" target="_blank">Meetup</a></li>
              </ul>
            </div>
            
            <!-- Comparisons Column -->
            <div style="min-width: 120px;">
              <h3>Comparisons</h3>
              <ul>
                <li><a href="https://clickhouse.com/comparison/bigquery" target="_blank">BigQuery</a></li>
                <li><a href="https://clickhouse.com/comparison/postgresql" target="_blank">PostgreSQL</a></li>
                <li><a href="https://clickhouse.com/comparison/redshift" target="_blank">Redshift</a></li>
                <li><a href="https://clickhouse.com/comparison/snowflake" target="_blank">Snowflake</a></li>
                <li><a href="https://clickhouse.com/comparison/elastic-for-observability" target="_blank">Elastic</a></li>
              </ul>
              
              <h3 style="margin-top: 32px; padding-top: 17px;">Partners</h3>
              <ul>
                <li><a href="https://clickhouse.com/partners/aws" target="_blank">AWS</a></li>
                <li><a href="https://clickhouse.com/partners/azure" target="_blank">Azure</a></li>
              </ul>
            </div>
          </div>
          
          <!-- Right side - Logo and actions -->
          <div style="min-width: 300px; max-width: 320px;">
            <img 
              src="https://clickhouse.com/_next/static/media/logo-full.ac8102d5.svg" 
              alt="ClickHouse logo" 
              width="135" 
              height="40"
              style="margin-bottom: 16px; display: block;"
            />
            <p style="margin-bottom: 20px; font-size: 14px; color: #a3a3a3; line-height: 1.6;">
              Stay informed on feature releases, product roadmap, support, and cloud offerings!
            </p>
            
            <!-- Email signup (placeholder) -->
            <div style="display: flex; gap: 8px; margin-bottom: 24px;">
              <input 
                type="email" 
                placeholder="Email address"
                style="
                  flex: 1;
                  padding: 10px 14px;
                  background: #262626;
                  border: 1px solid #404040;
                  border-radius: 6px;
                  color: #f5f5f5;
                  font-size: 14px;
                  outline: none;
                "
              />
              <button style="
                padding: 10px 20px;
                background: #FFCC00;
                color: #000;
                border: none;
                border-radius: 6px;
                font-weight: 600;
                font-size: 14px;
                cursor: pointer;
                white-space: nowrap;
              " onmouseover="this.style.background='#FFD700'" onmouseout="this.style.background='#FFCC00'">
                Sign up
              </button>
            </div>
            
            <!-- GitHub button -->
            <a 
              href="https://github.com/ClickHouse/ClickHouse" 
              target="_blank" 
              rel="noopener"
              style="display: block; text-decoration: none; width: 100%;"
            >
              <button style="
                width: 100%;
                background: white;
                color: #171717;
                padding: 12px 24px;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 14px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
              " onmouseover="this.style.background='#e5e5e5'" onmouseout="this.style.background='white'">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.75C4.27062 1.75 1.25 4.77062 1.25 8.5C1.25 11.4869 3.18219 14.0097 5.86531 14.9041C6.20281 14.9631 6.32937 14.7606 6.32937 14.5834C6.32937 14.4231 6.32094 13.8916 6.32094 13.3263C4.625 13.6384 4.18625 12.9128 4.05125 12.5331C3.97531 12.3391 3.64625 11.74 3.35938 11.5797C3.12312 11.4531 2.78562 11.1409 3.35094 11.1325C3.8825 11.1241 4.26219 11.6219 4.38875 11.8244C4.99625 12.8453 5.96656 12.5584 6.35469 12.3813C6.41375 11.9425 6.59094 11.6472 6.785 11.4784C5.28312 11.3097 3.71375 10.7275 3.71375 8.14563C3.71375 7.41156 3.97531 6.80406 4.40563 6.33156C4.33812 6.16281 4.10187 5.47094 4.47312 4.54281C4.47312 4.54281 5.03844 4.36563 6.32937 5.23469C6.86937 5.08281 7.44313 5.00687 8.01688 5.00687C8.59063 5.00687 9.16438 5.08281 9.70438 5.23469C10.9953 4.35719 11.5606 4.54281 11.5606 4.54281C11.9319 5.47094 11.6956 6.16281 11.6281 6.33156C12.0584 6.80406 12.32 7.40312 12.32 8.14563C12.32 10.7359 10.7422 11.3097 9.24031 11.4784C9.485 11.6894 9.69594 12.0944 9.69594 12.7272C9.69594 13.63 9.6875 14.3556 9.6875 14.5834C9.6875 14.7606 9.81406 14.9716 10.1516 14.9041C12.8178 14.0097 14.75 11.4784 14.75 8.5C14.75 4.77062 11.7294 1.75 8 1.75Z" fill="currentColor"/>
                </svg>
                <span>Star us on Github</span>
              </button>
            </a>
          </div>
        </div>
        
        <!-- Divider -->
        <div style="border-top: 1px solid #404040; margin: 0 0 32px 0;"></div>
        
        <!-- Copyright -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; md:flex-direction: row; md:justify-content: space-between;">
          <div style="color: #a3a3a3; font-size: 14px;">
            © ${new Date().getFullYear()} ClickHouse, Inc. HQ in the Bay Area, CA and Amsterdam, NL.
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;">
            <a href="https://clickhouse.com/legal/trademark-policy" target="_blank">Trademark</a>
            <a href="https://clickhouse.com/legal/privacy-policy" target="_blank">Privacy</a>
            <a href="https://trust.clickhouse.com/" target="_blank">Security</a>
            <a href="https://clickhouse.com/legal" target="_blank">Legal</a>
            <a href="https://clickhouse.com/legal/cookie-policy" target="_blank">Cookie policy</a>
          </div>
        </div>
      </div>
    </div>
  `;
  
  function injectFooter() {
    const footer = document.getElementById('fern-footer');
    if (!footer) {
      return false;
    }
    
    console.log('Injecting ClickHouse footer');
    footer.innerHTML = footerHTML;
    console.log('Footer injected');
    return true;
  }
  
  // MutationObserver for SPA navigation
  const observer = new MutationObserver(() => {
    const footer = document.getElementById('fern-footer');
    if (footer && !footer.querySelector('.clickhouse-custom-footer')) {
      injectFooter();
    }
  });
  
  // Initialize
  function init() {
    if (!injectFooter()) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 100));
  } else {
    setTimeout(init, 100);
  }
  
})();
