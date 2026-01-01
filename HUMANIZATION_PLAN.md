# Documentation Humanization Plan

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
1. **Rewrite Opening**: Start with a problem/solution narrative instead of a clinical definition
   - Before: "WebRun is real-time browser automation infrastructure for AI agents..."
   - After: "Ever wish you could tell a browser what to do in plain English? That's WebRun..."

2. **Consolidate Card Groups**: Reduce from 3 card groups to 1 strategic CTA section

3. **Add Voice**: Include a casual "Why we built this" or "The problem" section

4. **Replace Comparison Table**: Turn the "WebRun vs Traditional Automation" table into a narrative paragraph explaining the key difference

5. **Simplify "How It Works"**: Use plain language instead of technical terms upfront

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
1. **Reframe Opening**: Address the elephant in the room
   - "Let's talk about costs. You're probably wondering how much this will run you..."

2. **Merge Tables**: Combine token pricing and compute pricing into one section with prose explanation

3. **Real Cost Examples**: Instead of "typical costs" table, use narratives:
   - "We ran 1,000 product searches last month and spent $12."
   - "A typical form-fill costs about 3 cents."

4. **Move Optimization**: Optimize tips should be their own guide, not buried here

5. **Add Transparency**: "We built this pricing to be predictable. Here's how..."

6. **Remove Comparison Tables**: The "vs Manual Labor" table feels like marketing. Cut it.

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
1. **Reorganize by Frustration**:
   - "I'm getting charged too much"
   - "My tasks keep failing"
   - "I can't log into sites"

2. **Conversational Answers**:
   - Before: "WebRun uses Chrome Desktop running in cloud-based instances..."
   - After: "We use Chrome. Latest version, always. Can't change it to Firefox or Safari right now."

3. **Cut Redundant Questions**:
   - Half these questions are answered in other docs
   - Link instead of repeating

4. **Add Honest Limitations**:
   - "Can't do mobile emulation yet. Working on it."
   - "CAPTCHAs are annoying for us too. Here's the workaround..."

5. **Remove Example Code**: FAQs should answer questions, not teach. Link to guides.

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

### **Voice & Tone**
- **Write like you're helping a friend** over coffee, not filing a technical report
- **Use contractions**: "you'll" not "you will", "it's" not "it is"
- **Show personality**: Opinions, honest limitations, real experiences
- **Vary sentence length**: Short. Medium sentences work well too. And sometimes you need a longer sentence to explain something complex, which is fine as long as you don't do it everywhere.

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
❌ "Use when: ..."
❌ "Best for: ..."
❌ "What This Means:"
❌ Starting every sentence with a verb (Do this, Set that, Use this)
❌ Excessive bullet points
❌ Three different formats for the same info
❌ Generic error format: "Status | Meaning" tables

### **Patterns to Embrace**
✅ Questions as headers: "Why would I use this?"
✅ Honest admissions: "This is a bit tricky..."
✅ Real scenarios: "Last week, a user needed to..."
✅ Opinions: "We recommend X because..."
✅ Casual explanations: "Think of it like..."

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

For each rewritten page, ask:

- [ ] Could this have been written by a human with opinions?
- [ ] Does it flow naturally when read aloud?
- [ ] Would I send this to a friend, or does it sound corporate?
- [ ] Are there varied sentence structures and paragraph lengths?
- [ ] Is formatting used strategically, not automatically?
- [ ] Do examples feel real, not generic?
- [ ] Is there personality and voice?
- [ ] Have I removed redundant content?
- [ ] Does it answer "why" not just "what"?
- [ ] Would I actually want to read this?

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

### After (Humanized)
```markdown
## Sessions: Your Private Browser Instance

When you start a session, you're basically renting a browser. It's yours to use however long you need it (up to 5 minutes), then you give it back.

Each session gets a unique ID and runs completely isolated from others. You can run multiple tasks in sequence within the same session—like navigating to Amazon, searching for a product, then adding it to cart. When you're done, terminate it. (Seriously, don't forget to terminate, or you'll pay for the full 5 minutes even if you only used 30 seconds.)
```

**Key Differences:**
- Removed bullet point list for prose
- Added parenthetical aside (personality)
- Casual language ("basically", "Seriously")
- Removed redundant metaphor
- Honest warning instead of formal note

---

## Next Steps

1. Review this plan and prioritize which pages to tackle first
2. Start with Overview, Quickstart, and FAQ
3. Use the quality checklist for each rewrite
4. Get fresh eyes on rewrites (does it still sound AI-generated?)
5. Iterate based on feedback
