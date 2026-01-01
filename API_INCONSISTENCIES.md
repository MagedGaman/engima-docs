# API Response Inconsistencies

This document lists inconsistencies found across the documentation regarding API response formats.

## Critical Inconsistencies

### 1. **Usage Object Structure - Inconsistent Field Names**

**Issue:** Token fields have inconsistent naming across different files.

**api-reference/response-formats.mdx (Line 138-144):**
```json
"usage": {
  "inputTokens": 12450,
  "outputTokens": 3200,
  "computeTime": 5,
  "cost": 0.0124
}
```

**getting-started/quickstart.mdx (Lines 44-51):**
```json
"data": {
  "message": "Successfully searched for Anthropic on Google",
  "completion_time": 23.5,
  "total_tokens": 15650
},
"usage": { "cost": 0.0124 }
```

**api-reference/endpoints.mdx (Lines 118-120):**
```json
"data": {
  "message": "Found 50 laptop results",
  "prompt_tokens": 8500,
  "completion_tokens": 2300,
  "total_tokens": 10800
}
```

**Inconsistency:**
- Response-formats uses: `inputTokens`, `outputTokens` in `usage` object
- Endpoints uses: `prompt_tokens`, `completion_tokens`, `total_tokens` in `data` object
- Quickstart uses: `total_tokens` in `data` object, minimal `usage` object

**Resolution Needed:** Standardize to ONE format across all documentation.

---

### 2. **Task Completed Response - Nested Structure Differs**

**Issue:** `task_completed` response has tokens in different locations.

**api-reference/response-formats.mdx (Lines 131-145):**
```json
{
  "success": true,
  "type": "task_completed",
  "data": {
    "message": "Task finished successfully",
    "prompt_tokens": 12450,
    "completion_tokens": 3200,
    "total_tokens": 15650,
    "completion_time": 23.5
  },
  "usage": {
    "inputTokens": 12450,
    "outputTokens": 3200,
    "computeTime": 5,
    "cost": 0.0124
  }
}
```

**concepts/pricing.mdx (Lines 64-81):**
```json
{
  "type": "task_completed",
  "data": {
    "message": "Task completed successfully",
    "prompt_tokens": 12450,
    "completion_tokens": 3200,
    "total_tokens": 15650,
    "completion_time": 23.5
  },
  "usage": {
    "inputTokens": 12450,
    "outputTokens": 3200,
    "computeTime": 5,
    "cost": 0.0124
  }
}
```

**Inconsistency:**
- Token counts appear in BOTH `data` object AND `usage` object
- This is redundant - should be in ONE place only
- Field names don't match: `prompt_tokens` vs `inputTokens`

**Resolution Needed:** Decide if tokens belong in `data` or `usage`, and use consistent field names.

---

### 3. **Inline vs Polling Response Structure**

**Issue:** Inline completion response wraps result differently than polling response.

**api-reference/introduction.mdx (Lines 73-87) - Inline Response:**
```json
{
  "success": true,
  "sessionId": "a1b2c3",
  "taskId": "x9y8z7",
  "status": "complete",
  "result": {
    "type": "task_completed",
    "data": {
      "message": "Successfully searched for Anthropic on Google",
      "completion_time": 23.5,
      "total_tokens": 15650
    },
    "usage": { "cost": 0.0124 }
  }
}
```

**api-reference/introduction.mdx (Lines 210-225) - Polling Response:**
```json
{
  "success": true,
  "type": "task_completed",
  "data": {
    "message": "Task finished successfully",
    "total_tokens": 15650,
    "completion_time": 23.5
  },
  "usage": {
    "inputTokens": 12450,
    "outputTokens": 3200,
    "cost": 0.0124
  }
}
```

**Inconsistency:**
- Inline response wraps in `result.type` and `result.data`
- Polling response has `type` and `data` at top level
- Different nesting structure for the same task completion

**Resolution Needed:** Clarify if inline and polling responses have different structures, or standardize both.

---

### 4. **Missing `usage` Object in Inline Responses**

**Issue:** Some inline responses show minimal usage, others show complete usage.

**getting-started/quickstart.mdx (Line 51):**
```json
"usage": { "cost": 0.0124 }
```

**api-reference/response-formats.mdx (Lines 138-143):**
```json
"usage": {
  "inputTokens": 12450,
  "outputTokens": 3200,
  "computeTime": 5,
  "cost": 0.0124
}
```

**Inconsistency:**
- Quickstart shows only `cost` in usage object
- Response-formats shows full usage object with all fields
- Users won't know which fields are actually returned

**Resolution Needed:** Document exactly which fields appear in inline vs polling responses.

---

### 5. **Session Creation Response - Missing Fields**

**Issue:** Session creation response has different fields in different files.

**api-reference/introduction.mdx (Lines 119-131):**
```json
{
  "success": true,
  "sessionId": "a1b2c3",
  "socketURL": "https://connect.webrun.ai",
  "streaming": {
    "webRTCURL": "https://74.235.190.31:8889/a1b2c3/whep",
    "webViewURL": "https://74.235.190.31:8889/a1b2c3"
  },
  "expiresIn": 300000,
  "balance": 12.50
}
```

**api-reference/endpoints.mdx (Lines 41-54):**
```json
{
  "success": true,
  "sessionId": "a1b2c3d4e5f6",
  "socketURL": "https://connect.webrun.ai",
  "streaming": {
    "webRTCURL": "https://74.235.190.31:8889/a1b2c3d4e5f6/whep",
    "webViewURL": "https://74.235.190.31:8889/a1b2c3d4e5f6",
    "dimensions": { "width": 1024, "height": 600 }
  },
  "initialPrompt": "Go to amazon.com",
  "expiresIn": 300000,
  "balance": 12.50,
  "message": "Connect to instance using sessionId in auth"
}
```

**Inconsistency:**
- Introduction missing: `streaming.dimensions`, `initialPrompt`, `message`
- Endpoints includes these fields

**Resolution Needed:** Determine which fields are actually returned and document consistently.

---

### 6. **WebSocket vs REST Task Completion Format**

**Issue:** WebSocket events have different structure than REST responses for same event type.

**api-reference/response-formats.mdx Lines 375-389 (WebSocket):**
```json
{
  "type": "task_completed",
  "taskId": "x9y8z7w6v5u4",
  "data": {
    "message": "Task completed successfully",
    "prompt_tokens": 15420,
    "completion_tokens": 8230,
    "total_tokens": 23650,
    "completion_time": 45.3,
    "usage": {
      "cost": 0.0234
    }
  }
}
```

**api-reference/response-formats.mdx Lines 128-145 (REST Polling):**
```json
{
  "success": true,
  "type": "task_completed",
  "data": {
    "message": "Task finished successfully",
    "prompt_tokens": 12450,
    "completion_tokens": 3200,
    "total_tokens": 15650,
    "completion_time": 23.5
  },
  "usage": {
    "inputTokens": 12450,
    "outputTokens": 3200,
    "computeTime": 5,
    "cost": 0.0124
  }
}
```

**Inconsistency:**
- WebSocket has tokens in `data` object, cost in nested `data.usage`
- REST has tokens in `data` object, full usage at top level
- WebSocket missing `success` field
- Different nesting for `usage.cost`

**Resolution Needed:** Clarify if WebSocket and REST intentionally have different formats.

---

## Minor Inconsistencies

### 7. **Token Field Name Convention**

**Issue:** Mixing `prompt_tokens` and `inputTokens`, `completion_tokens` and `outputTokens`.

**Found in:**
- Endpoints uses: `prompt_tokens`, `completion_tokens`
- Response-formats uses both: `prompt_tokens` in `data`, `inputTokens` in `usage`
- OpenAI-compatible uses: `prompt_tokens`, `completion_tokens` (matching OpenAI spec)

**Resolution Needed:** Standardize on one naming convention, or document when each is used.

---

### 8. **Status vs Type Fields**

**Issue:** Inconsistent use of `status` vs `type` to indicate response type.

**Inline responses use:**
```json
"status": "complete"
```

**Polling responses use:**
```json
"type": "task_completed"
```

**Inconsistency:**
- `status: "complete"` vs `type: "task_completed"` for same state
- `status: "pending"` exists but no `type: "task_pending"`

**Resolution Needed:** Clarify the difference between `status` and `type` fields.

---

## Recommended Actions

### Priority 1: Critical Fixes

1. **Standardize token field names**
   - Choose: `inputTokens`/`outputTokens` OR `prompt_tokens`/`completion_tokens`
   - Use consistently across all documentation

2. **Clarify token location**
   - Decide: Should tokens be in `data` or `usage` object?
   - Don't duplicate - put them in ONE place

3. **Document response structure differences**
   - Clearly explain inline vs polling response structure
   - Clearly explain REST vs WebSocket response structure

### Priority 2: Documentation Updates

4. **Update all code examples** to use standardized format

5. **Create response format reference** showing:
   - Inline completion response (< 50s)
   - Pending response (> 50s)
   - Polling completion response
   - WebSocket completion event
   - For each endpoint type

6. **Add explicit notes** about which fields appear in which scenarios

---

## Verification Checklist

After fixes, verify:

- [ ] All `task_completed` responses use same field names
- [ ] All `usage` objects have same structure
- [ ] Token counts appear in only ONE location (data OR usage, not both)
- [ ] Inline vs polling response structures are clearly documented as different (if they are)
- [ ] WebSocket vs REST formats are clearly documented as different (if they are)
- [ ] All code examples updated to match canonical format
- [ ] Response-formats.mdx is the source of truth
