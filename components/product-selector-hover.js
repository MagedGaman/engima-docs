// Product Selector Hover Functionality
(function() {
  'use strict';

  let hoverTimeout = null;
  let isDropdownOpen = false;

  function initProductSelectorHover() {
    const productSelector = document.querySelector('.fern-product-selector');

    if (!productSelector) {
      return;
    }

    // Function to open the dropdown
    function openDropdown() {
      const button = productSelector;
      const currentState = button.getAttribute('data-state');

      if (currentState !== 'open') {
        // Radix UI needs proper pointer and mouse events with all properties
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const eventOptions = {
          view: window,
          bubbles: true,
          cancelable: true,
          clientX: x,
          clientY: y,
          screenX: x,
          screenY: y,
          button: 0,
          buttons: 1,
          composed: true,
          detail: 1
        };

        // Dispatch full event sequence
        button.dispatchEvent(new PointerEvent('pointerdown', eventOptions));
        button.dispatchEvent(new MouseEvent('mousedown', eventOptions));
        button.dispatchEvent(new PointerEvent('pointerup', eventOptions));
        button.dispatchEvent(new MouseEvent('mouseup', eventOptions));
        button.dispatchEvent(new MouseEvent('click', eventOptions));

        isDropdownOpen = true;
      }
    }

    // Function to close the dropdown
    function closeDropdown() {
      const button = productSelector;
      const currentState = button.getAttribute('data-state');

      if (currentState === 'open') {
        // Use the same event dispatch approach as opening
        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const eventOptions = {
          view: window,
          bubbles: true,
          cancelable: true,
          clientX: x,
          clientY: y,
          screenX: x,
          screenY: y,
          button: 0,
          buttons: 1,
          composed: true,
          detail: 1
        };

        // Dispatch full event sequence
        button.dispatchEvent(new PointerEvent('pointerdown', eventOptions));
        button.dispatchEvent(new MouseEvent('mousedown', eventOptions));
        button.dispatchEvent(new PointerEvent('pointerup', eventOptions));
        button.dispatchEvent(new MouseEvent('mouseup', eventOptions));
        button.dispatchEvent(new MouseEvent('click', eventOptions));

        isDropdownOpen = false;
      }
    }

    // Check if mouse is over button or dropdown
    function isMouseOverHoverArea(element) {
      if (!element) return false;

      const dropdown = document.querySelector('[data-testid="product-dropdown-content"]');
      const button = productSelector;

      // Check if element is within button or dropdown
      return button.contains(element) || (dropdown && dropdown.contains(element));
    }

    // Sync our state with the actual button state
    function syncDropdownState() {
      const currentState = productSelector.getAttribute('data-state');
      isDropdownOpen = currentState === 'open';
      return isDropdownOpen;
    }

    // Global mousemove handler to detect when leaving the entire hover area
    function handleMouseMove(e) {
      if (window.innerWidth < 1024) return;

      // Always sync with actual state
      syncDropdownState();
      if (!isDropdownOpen) {
        document.removeEventListener('mousemove', handleMouseMove);
        return;
      }

      const dropdown = document.querySelector('[data-testid="product-dropdown-content"]');
      const button = productSelector;

      // Check if mouse is over button or dropdown
      const overButton = button.contains(e.target);
      const overDropdown = dropdown && dropdown.contains(e.target);

      if (!overButton && !overDropdown) {
        // Mouse has left both button and dropdown - schedule close
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(closeDropdown, 50);
      } else {
        // Mouse is over button or dropdown - cancel any pending close
        clearTimeout(hoverTimeout);
      }
    }

    // Open dropdown on hover (desktop only - min-width: 1024px)
    productSelector.addEventListener('mouseenter', function() {
      if (window.innerWidth >= 1024) {
        // Sync state first
        syncDropdownState();

        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(function() {
          openDropdown();
          // Start listening for mouse movement
          setTimeout(function() {
            if (syncDropdownState()) {
              document.addEventListener('mousemove', handleMouseMove);
            }
          }, 100);
        }, 50);
      }
    });

    productSelector.addEventListener('mouseleave', function(e) {
      if (window.innerWidth >= 1024) {
        // Check if mouse is moving to the dropdown content
        const dropdown = document.querySelector('[data-testid="product-dropdown-content"]');
        if (dropdown && dropdown.contains(e.relatedTarget)) {
          return; // Don't close if moving to dropdown
        }

        // If not moving to dropdown and dropdown isn't open yet, cancel opening
        if (!isDropdownOpen) {
          clearTimeout(hoverTimeout);
        }
      }
    });

    // Clean up mousemove listener when dropdown closes
    const originalCloseDropdown = closeDropdown;
    closeDropdown = function() {
      document.removeEventListener('mousemove', handleMouseMove);
      originalCloseDropdown();
    };

    // Clean up on mobile resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        if (window.innerWidth < 1024 && isDropdownOpen) {
          closeDropdown();
        }
      }, 250);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductSelectorHover);
  } else {
    initProductSelectorHover();
  }

  // Re-initialize on navigation (for SPAs)
  let hasInitialized = false;

  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        const productSelector = document.querySelector('.fern-product-selector');
        if (productSelector && !hasInitialized) {
          hasInitialized = true;
          initProductSelectorHover();
        }
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();