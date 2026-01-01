# Documentation Humanization Plan

## WebRun Brand Voice (Official Guidelines)

**Primary:** **Bold Challenger** — "We're faster. Here's proof."
**Secondary:** **Thought Leader** — Industry insights with technical depth

### Words to Embrace
✅ Fast, real-time, instant, seamless, reliable
✅ Real browsers, real desktops
✅ Sees the page, understands
✅ Works for you

### Words to Avoid
❌ Slow, eventually, waiting
❌ Hacky, workaround, bot, script, robotic
❌ Complicated, complex, legacy, old-fashioned
❌ Hedging: maybe, might, could, possibly

### Core Messaging Principles
1. **Lead with benefit, not feature** — Show impact before technical details
2. **One idea per section** — Maintain clarity and focus
3. **Quantify claims** — Use concrete numbers (e.g., "sub-100ms response times")
4. **Prove assertions** — Back bold statements with evidence

### Writing Style
**Confident, direct language emphasizing tangible results.** Use plain language over jargon. Balance urgency with credibility—enthusiasm without desperation.

---

## Problem Analysis

Your friend is right—the documentation has several characteristics that make it feel AI-generated:

### 1. **Overly Formulaic Structure**
- Every page follows the exact same template
- Predictable section patterns ("What is...", "Use when:", "Best for:")
- Mechanical rhythm throughout

### 2. **Excessive Formatting**
- Too many callout boxes (Warning, Tip, Note) disrupting reading flow
- Tables used where prose would be more natural
- CodeGroup wrapping every code example
- Emoji patterns (✅, ❌) that feel automated

### 3. **Robotic Language Patterns**
- Repetitive phrases: "Use when:", "Best for:", "What This Means:"
- Overly formal tone lacking personality
- Bullet points dominating instead of paragraphs
- No conversational warmth

### 4. **Content Redundancy**
- Same information presented in 3 different formats
- Over-explanation of simple concepts
- Excessive example variations

### 5. **Generic Examples**
- Predictable scenarios (Amazon search, Google search)
- Lack of real-world context
- Missing the "why" behind features

---

## Page-by-Page Improvement Plan

### **Overview Page** (`getting-started/overview.mdx`)

**Current Issues:**
- Opens with a stiff definition instead of drawing readers in
- Too many card groups creating visual clutter
- "How It Works" section is overly technical for an overview
- ASCII diagrams feel impersonal

**Improvements:**
1. **Lead with the Problem**: Start with the pain point developers face, then position WebRun as the solution
   - Before: "WebRun is real-time browser automation infrastructure for AI agents..."
   - After: "Browser automation breaks when websites change. WebRun's AI agents adapt in real-time, executing tasks in plain English without brittle selectors."

2. **Consolidate Card Groups**: Reduce from 3 card groups to 1 strategic CTA section

3. **Add Technical Credibility**: Show the architecture advantage, don't just claim it
   - Include the sub-100ms claim with context: "Hybrid CNN-LLM architecture delivers sub-100ms response times—fast enough for production."

4. **Replace Comparison Table**: Use a problem-solution format instead of feature comparison
   - Show what breaks with traditional automation, then how WebRun's AI solves it

5. **Concrete Examples First**: Lead "What Can WebRun Do?" with specific, real scenarios
   - "Extract engineering manager profiles from LinkedIn, filtered by location and seniority"
   - Not: "Research & Data Extraction: Gather information from multiple sources"

---

### **Quickstart** (`getting-started/quickstart.mdx`)

**Current Issues:**
- Too many code examples creating cognitive overload
- Mechanical step-by-step without explanation
- Missing context for why you'd choose different approaches
- Tip/Warning boxes interrupt flow

**Improvements:**
1. **Add Context**: Start with "You want to automate a browser task. Here's the fastest way..."

2. **Reduce Code Examples**: Show one complete example instead of 3 variations
   - Fold polling logic into a collapsible section
   - Remove redundant examples

3. **Use Inline Tips**: Convert boxed Tips/Warnings into natural sentence flow
   - Before: `<Tip>Poll every 2-3 seconds...</Tip>`
   - After: "A good rule of thumb: poll every 2-3 seconds..."

4. **Add Personality**:
   - "That's it! You just automated a browser."
   - "If the task takes longer than 50 seconds (which is rare), you'll need to poll..."

5. **Remove WebSocket Section**: Too much for a quickstart. Link to separate guide instead.

---

### **Pricing Page** (`concepts/pricing.mdx`)

**Current Issues:**
- Starts with dry model information instead of addressing user concerns
- Too many tables creating a spreadsheet feel
- Cost optimization tips feel tacked on
- Missing the human angle (anxiety about costs)

**Improvements:**
1. **Lead with Transparency**: Start with the pricing model directly
   - "WebRun charges for two things: token usage and compute time. Here's exactly how it works."

2. **Show Real Numbers First**: Open with concrete examples before diving into rates
   - "Simple search: $0.01. Form automation: $0.03. Multi-step workflow: $0.15."
   - Then explain why with the pricing model

3. **Table for Rates, Prose for Context**: Keep the pricing table (it's useful reference), but add explanation
   - "Input tokens are cheaper because the model processes them in parallel. Output generation is sequential, so it costs more."

4. **Cost Optimization Gets Its Own Section**: Move optimization tips to a dedicated guide

5. **Include Benchmarks**: Compare against actual alternatives with numbers
   - "At scale, WebRun costs 60% less than traditional automation when you factor in maintenance."
   - Not generic "98% savings" claims

6. **Remove Fluffy Sections**: Cut "Free Tier / Credits" unless there's something specific to announce

---

### **API Reference** (`api-reference/introduction.mdx`)

**Current Issues:**
- Walls of JSON examples without breathing room
- Every endpoint documented identically
- Missing practical guidance on which endpoint to use
- Too formal for developers who want to ship

**Improvements:**
1. **Add Decision Tree**: Replace the technical endpoint list with a conversational flow:
   - "Most people start with `/start/run-task`. It's simple..."
   - "Need to chain tasks? Use `/start/start-session`..."

2. **Reduce JSON Examples**: Show request/response once, then reference it

3. **Add Common Mistakes**:
   - "Forgot to terminate? You'll keep getting charged..."
   - "Session ID not found? Check if it timed out..."

4. **Conversational Errors**:
   - Before: "401 - Unauthorized (invalid API key)"
   - After: "Got a 401? Your API key is probably wrong. Double-check it."

5. **Practical Tips Over Specs**:
   - Less: Parameter tables with every field
   - More: "Here's what you actually need to set..."

---

### **Manual Interaction** (`usage-guides/manual-interaction.mdx`)

**Current Issues:**
- Coordinate system explanation is overly technical
- Too many code examples for simple concepts
- "Common Patterns" section is repetitive
- Missing the "when would I actually use this" narrative

**Improvements:**
1. **Reframe Opening**:
   - "Sometimes the AI gets stuck or you need to handle sensitive info yourself. Here's how to take over..."

2. **Simplify Coordinates**:
   - Remove the ASCII diagram
   - Use a simple sentence: "The browser viewport is 1024×600. Just remember to add 155px to your Y coordinate for browser chrome."

3. **Cut Redundant Examples**:
   - Remove doubleClick (obvious extension of click)
   - Combine manual login and CAPTCHA patterns (they're the same concept)

4. **Add Real Story**:
   - "We once had a user automate their HR system but had to manually enter their 2FA code..."

5. **Remove "Best Practices"**: These are obvious. Trust your readers.

---

### **Sessions** (`concepts/sessions.mdx`)

**Current Issues:**
- State diagram feels corporate
- Too much table formatting
- "Think of a session as..." metaphor then immediately gets technical
- Missing practical implications

**Improvements:**
1. **Open With Analogy**:
   - "A session is like renting a browser. You create one, use it for as long as you need, then give it back."

2. **Simplify States**:
   - Remove the state diagram
   - Explain in prose: "Sessions start pending, go active when running, and end when completed or terminated."

3. **Cut Parameter Table**: Too much. Show one example with inline comments:
   ```javascript
   {
     taskDetails: "What to do",
     maxDuration: 60000, // 1 minute - keeps costs low
     terminateOnCompletion: true // Don't forget this!
   }
   ```

4. **Add Gotcha Section**:
   - "Forgot to terminate? Yeah, you'll pay for the full 5 minutes..."

---

### **FAQ** (`troubleshooting/faqs.mdx`)

**Current Issues:**
- Reads like a legal document
- Too comprehensive (trying to answer everything)
- No personality in responses
- Doesn't anticipate actual user frustrations

**Improvements:**
1. **Reorganize by Category**: Group by technical area, not emotion
   - "Sessions & Performance"
   - "Authentication & Security"
   - "Pricing & Billing"
   - "Integration & Compatibility"

2. **Direct, Technical Answers**:
   - Before: "WebRun uses Chrome Desktop running in cloud-based instances..."
   - After: "Chrome only. Latest stable version. We don't support Firefox, Safari, or custom versions yet."

3. **Cut Redundant Questions**: If it's covered in depth elsewhere, link instead of duplicating

4. **State Limitations Clearly**: No hedging
   - "Mobile emulation isn't supported yet."
   - "CAPTCHAs require manual intervention. Use the manual takeover feature."

5. **Remove Example Code**: FAQs answer questions. Link to implementation guides for code.

---

### **Cost Optimization** (`usage-guides/cost-optimization.mdx`)

**Current Issues:**
- Feels like a 3,000-word tutorial when it should be tips
- Excessive code examples
- Monitoring section is overkill
- Missing quick wins

**Improvements:**
1. **Start With Quick Wins**:
   - "Want to cut costs by 50%? Set `terminateOnCompletion: true`."
   - "Write shorter task descriptions. Seriously."

2. **Cut the Classes**:
   - Remove CostMonitor, UsageReporter, and CostOptimizedWorkflow classes
   - This isn't a software engineering course

3. **Simple Bullets**:
   - "✅ Terminate sessions when done"
   - "✅ Use `/run-task` for one-offs"
   - "✅ Keep task descriptions short"

4. **One Example**: Show a before/after comparison instead of 10 patterns

5. **Link to Dashboard**: "The easiest way to monitor costs is the dashboard at app.webrun.ai"

---

### **AI Tools Pages** (`ai-tools/*.mdx`)

**Current Issues:**
- claude-code.mdx reads like a template
- Very brief, feels incomplete
- Missing personality

**Improvements:**
1. **Add Real Setup Story**:
   - "Setting up Claude Code with WebRun takes 2 minutes. Here's how we do it..."

2. **Include Screenshot**: Show what it looks like in action

3. **Add Tips**:
   - "Pro tip: Add this to your CLAUDE.md file to get better results..."

---

## General Writing Guidelines

### **Voice & Tone** (Official Brand Guidelines + Blog Analysis)

WebRun's brand is a **Bold Challenger** with **Thought Leader** depth. The voice is confident, direct, and results-focused.

#### Apply These Principles:

**1. Lead with Benefit, Not Feature**
- ❌ "WebRun has a hybrid CNN-LLM architecture"
- ✅ "Get sub-100ms response times with WebRun's hybrid architecture"

**2. Quantify Every Claim**
- ❌ "WebRun is fast"
- ✅ "WebRun delivers sub-100ms response times"
- ❌ "Costs less than alternatives"
- ✅ "60% lower cost than traditional automation at scale"

**3. Prove Assertions with Evidence**
- Include benchmarks, metrics, real examples
- "Three years building production browsers taught us where they break"
- Show, don't just tell

**4. State Facts Directly (No Hedging)**
- ❌ "WebRun might help with..." / "could possibly..."
- ✅ "WebRun handles..." / "solves..."
- ❌ "This may work for most cases"
- ✅ "Works for production environments"

**5. Use Brand-Aligned Language**
- Embrace: Fast, real-time, instant, seamless, reliable, real browsers
- Avoid: Slow, eventually, waiting, hacky, workaround, bot, complicated, complex

**6. Problem-Solution Narrative**
- Lead with the pain point developers face
- Show how WebRun solves it with concrete results

**7. Plain Language, Technical Depth**
- Use industry terms, but explain them clearly
- Don't dumb down—assume developer intelligence
- Balance accessibility with credibility

**8. Enthusiasm with Credibility**
- Bold and confident, not desperate or salesy
- Back claims with evidence
- One clear idea per section

### **Structure**
- **Don't template everything**: Each page should have its own natural structure
- **Use headings sparingly**: Not every paragraph needs an H3
- **Integrate examples**: Don't separate code from explanation
- **Natural transitions**: "Now that you know X, let's..." vs. "---"

### **Formatting**
- **Callout boxes**: Only for critical warnings/tips (reduce by 80%)
- **Tables**: Use only for actual tabular data comparisons
- **Code examples**: One good example > three variations
- **Emphasis**: Use **bold** and *italic* for natural emphasis, not structure

### **Content**
- **Assume intelligence**: Don't over-explain simple concepts
- **Real examples**: "When we tested this with..." vs. generic scenarios
- **Acknowledge problems**: "This is annoying, but here's why..."
- **Cut redundancy**: Say it once, well

### **Specific Patterns to Avoid**
❌ "Use when: ..." / "Best for: ..." / "What This Means:" templates
❌ Hedging language: "might", "could", "possibly", "maybe"
❌ Apologetic tone: "sorry for the inconvenience"
❌ Words to avoid per brand guidelines: slow, eventually, waiting, hacky, workaround, bot, script, complicated, complex, legacy
❌ Starting every sentence with a verb (Do this, Set that, Use this)
❌ Excessive bullet points replacing prose
❌ Three different formats for the same info
❌ Generic error format: "Status | Meaning" tables without context

### **Patterns to Embrace**
✅ **Lead with benefit**: "Get results in under 100ms" not "WebRun has a fast response time"
✅ **Quantify claims**: "Sub-100ms response times" not "fast performance"
✅ **Prove assertions**: Include benchmarks, metrics, concrete examples
✅ **Direct statements**: "WebRun handles this" not "WebRun can help with this"
✅ **Real scenarios**: "Extract LinkedIn profiles filtered by location" not "automate research tasks"
✅ **Plain language**: Explain technical concepts clearly, don't dumb down
✅ **Confident tone**: State facts assertively. Bold challenger voice.

---

## Implementation Priority

### **Phase 1: High-Impact Pages** (Do First)
1. Overview - First impression matters
2. Quickstart - Where people get started
3. FAQ - Most visible issues

### **Phase 2: Core Concepts**
4. Sessions
5. Pricing
6. API Reference Introduction

### **Phase 3: Usage Guides**
7. Cost Optimization
8. Manual Interaction
9. Multi-task Workflows

### **Phase 4: Polish**
10. AI Tools pages
11. Troubleshooting pages
12. Remaining concept pages

---

## Quality Checklist

For each rewritten page, verify:

### Brand Voice Alignment
- [ ] **Bold Challenger tone?** Direct, confident statements without hedging
- [ ] **Benefits before features?** Impact shown before technical details
- [ ] **Quantified claims?** Numbers and metrics, not vague assertions
- [ ] **Proven with evidence?** Benchmarks, examples, concrete proof
- [ ] **Brand language?** Uses "fast, real-time, instant, seamless" not "slow, eventually, complicated"
- [ ] **No hedging?** Eliminated "might, could, possibly, maybe"

### Human Writing Quality
- [ ] Flows naturally when read aloud?
- [ ] Varied sentence structures and paragraph lengths?
- [ ] Formatting used strategically, not automatically?
- [ ] Examples feel real and specific, not generic?
- [ ] Removed AI-generated patterns ("Use when:", "Best for:", excessive bullets)?
- [ ] Removed redundant content?

### Technical Credibility
- [ ] One clear idea per section?
- [ ] Technical terms explained clearly without dumbing down?
- [ ] Assumes developer intelligence?
- [ ] Balances urgency with credibility?

---

## Example: Before & After

### Before (AI-Generated Feel)
```markdown
## What is a Session?

A **session** is an isolated browser instance controlled by an AI agent. When you create a session, WebRun provisions a dedicated browser environment and returns connection details.

Think of a session as a private browsing window that persists for the duration of your automation workflow. Each session:
- Has a unique `sessionId` for tracking
- Runs in complete isolation from other sessions
- Can execute multiple tasks sequentially
- Persists until terminated or timed out
```

### After (WebRun Brand Voice)
```markdown
## Sessions

A session is an isolated browser instance running your automation tasks. You get a dedicated environment with a unique `sessionId` that persists until you terminate it or it times out (5 minute maximum).

Sessions run completely isolated—no shared cookies, no shared state. This lets you run multiple concurrent sessions without interference. Run tasks sequentially within the same session: navigate to a site, authenticate, then execute your workflow. Just remember to terminate when done, or you'll pay for the full timeout window.

**Common pattern:** Create session → Run task sequence → Terminate explicitly.
```

**Key Differences:**
- Lead with what it is, not a metaphor
- Direct, assertive statements
- Technical precision ("no shared cookies, no shared state")
- Clear consequences ("you'll pay for the full timeout")
- Shows common usage pattern
- No bullet lists for simple sequences
- Removed the overly friendly "basically renting" metaphor

---

## Next Steps

1. Review this plan and prioritize which pages to tackle first
2. Start with Overview, Quickstart, and FAQ
3. Use the quality checklist for each rewrite
4. Get fresh eyes on rewrites (does it still sound AI-generated?)
5. Iterate based on feedback
