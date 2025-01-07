<div class="admin-container">
  <div class="cyber-grid"></div>
  <div class="admin-header">
    <h1 class="neon-text">METHODS & GUIDES</h1>
    <div class="cyber-line"></div>
  </div>

  <div class="methods-grid">
    <AccordionItem type="cyber" title="Financial Methods" icon="💳" status="ACTIVE">
      <div class="method-list">
        <div class="method-card">
          <div class="method-header">
            <span class="method-icon">🏦</span>
            <h3>Bank Methods</h3>
            <span class="method-status">LIVE</span>
          </div>
          <ul>
            <li>ACH Transfers</li>
            <li>Wire Processing</li>
            <li>Bank Logins</li>
          </ul>
        </div>
        <div class="method-card">
          <div class="method-header">
            <span class="method-icon">💳</span>
            <h3>Card Methods</h3>
            <span class="method-status">ACTIVE</span>
          </div>
          <ul>
            <li>Card Processing</li>
            <li>Virtual Cards</li>
            <li>Card Validation</li>
          </ul>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem type="neon" title="E-commerce Methods" icon="🛍️" status="UPDATED">
      <div class="method-list">
        <div class="method-card">
          <div class="method-header">
            <span class="method-icon">🎁</span>
            <h3>Gift Cards</h3>
            <span class="method-status">NEW</span>
          </div>
          <ul>
            <li>Digital Gift Cards</li>
            <li>Store Credits</li>
            <li>Reward Points</li>
          </ul>
        </div>
        <div class="method-card">
          <div class="method-header">
            <span class="method-icon">🏪</span>
            <h3>Store Methods</h3>
            <span class="method-status">LIVE</span>
          </div>
          <ul>
            <li>Online Shopping</li>
            <li>Digital Downloads</li>
            <li>Subscription Services</li>
          </ul>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem type="hologram" title="Account Methods" icon="🔑" status="VERIFIED">
      <div class="method-list">
        <div class="method-card">
          <div class="method-header">
            <span class="method-icon">📧</span>
            <h3>Email Access</h3>
            <span class="method-status">WORKING</span>
          </div>
          <ul>
            <li>Email Verification</li>
            <li>Account Recovery</li>
            <li>Mail Access</li>
          </ul>
        </div>
        <div class="method-card">
          <div class="method-header">
            <span class="method-icon">🔒</span>
            <h3>Account Security</h3>
            <span class="method-status">STABLE</span>
          </div>
          <ul>
            <li>2FA Bypass</li>
            <li>Security Questions</li>
            <li>Phone Verification</li>
          </ul>
        </div>
      </div>
    </AccordionItem>
  </div>
</div>

<style>
.admin-container {
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

.admin-header {
  text-align: center;
  margin-bottom: 3rem;
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

.methods-grid {
  display: grid;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.method-list {
  display: grid;
  gap: 1.5rem;
}

.method-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.method-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.method-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.method-icon {
  font-size: 1.5rem;
}

.method-status {
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #00ff00;
}

.method-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.method-card li {
  padding: 0.5rem 0;
  color: #a8b2c3;
  border-bottom: 1px solid rgba(0, 255, 0, 0.1);
}

.method-card li:last-child {
  border-bottom: none;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>