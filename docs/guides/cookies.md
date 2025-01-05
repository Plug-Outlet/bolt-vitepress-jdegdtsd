<!-- Main cookie guide page -->
<script setup>
import CookieAnatomy from '../../components/cookies/CookieAnatomy.vue'
import CookieTypes from '../../components/cookies/CookieTypes.vue'
import SecurityAttributes from '../../components/cookies/SecurityAttributes.vue'
import ResourceCard from '../../components/cookies/ResourceCard.vue'
</script>

<div class="guide-container">
  <div class="cyber-grid"></div>
  <div class="guide-header">
    <div class="neon-text">COOKIE ANALYSIS</div>
    <div class="cyber-line"></div>
  </div>

  <div class="cookie-sections">
    <AccordionItem type="cyber" title="Cookie Structure" icon="🔍" status="GUIDE">
      <CookieAnatomy />
    </AccordionItem>
    <AccordionItem type="neon" title="Common Cookie Types" icon="🍪" status="INFO">
      <CookieTypes />
    </AccordionItem>
    <AccordionItem type="hologram" title="Security Attributes" icon="🔒" status="CRITICAL">
      <SecurityAttributes />
    </AccordionItem>
  </div>

  <AccordionItem type="cyber" title="Analysis Resources" icon="🔧" status="TOOLS">
    <div class="resources-grid">
      <ResourceCard
        title="Cookie-Editor"
        description="Browser extension for viewing, editing and creating cookies"
        url="https://cookie-editor.cgagnier.ca/"
        icon="🔍"
      />
      <ResourceCard
        title="EditThisCookie"
        description="Premium cookie manager with advanced features"
        url="https://www.editthiscookie.com/"
        icon="✏️"
      />
      <ResourceCard
        title="Cookie Quick Manager"
        description="Firefox add-on for cookie management and analysis"
        url="https://addons.mozilla.org/en-US/firefox/addon/cookie-quick-manager/"
        icon="🦊"
      />
      <ResourceCard
        title="CookieServe"
        description="Online cookie parser and analyzer"
        url="https://cookieserve.com/"
        icon="🌐"
      />
      <ResourceCard
        title="Cookie Converter"
        description="Convert between Netscape and JSON cookie formats"
        url="https://github.com/dandv/convert-chrome-cookies"
        icon="🔄"
      />
      <ResourceCard
        title="Cookie Analyzer"
        description="Advanced cookie security and compliance analysis"
        url="https://cookiemetrix.com/"
        icon="🔒"
      />
    </div>
  </AccordionItem>
</div>

<style>
.guide-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000, #1a1a1a);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridScroll 20s linear infinite;
}

.guide-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.neon-text {
  font-size: 3rem;
  color: #00ff00;
  text-shadow: 
    0 0 5px #00ff00,
    0 0 10px #00ff00,
    0 0 20px #00ff00;
  margin: 0;
}

.cyber-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  margin: 2rem auto;
  width: 200px;
}

.cookie-sections {
  display: grid;
  gap: 2rem;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>