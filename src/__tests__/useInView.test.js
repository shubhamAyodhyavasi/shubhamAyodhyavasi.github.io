import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useInView from '../hooks/useInView';

describe('useInView', () => {
  it('returns false initially before intersection fires', () => {
    // Override IntersectionObserver to NOT trigger immediately
    const originalObserver = global.IntersectionObserver;
    global.IntersectionObserver = vi.fn(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));

    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useInView(ref));
    expect(result.current).toBe(false);

    global.IntersectionObserver = originalObserver;
  });

  it('returns true when element is intersecting', () => {
    let capturedCallback;
    global.IntersectionObserver = vi.fn((callback) => {
      capturedCallback = callback;
      return {
        observe: vi.fn((el) => {
          capturedCallback([{ isIntersecting: true, target: el }]);
        }),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });

    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useInView(ref, { once: true }));
    expect(result.current).toBe(true);
  });

  it('returns false when element is not intersecting (once=false)', () => {
    let capturedCallback;
    global.IntersectionObserver = vi.fn((callback) => {
      capturedCallback = callback;
      return {
        observe: vi.fn((el) => {
          capturedCallback([{ isIntersecting: false, target: el }]);
        }),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });

    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useInView(ref, { once: false }));
    expect(result.current).toBe(false);
  });

  it('does not observe if ref.current is null', () => {
    const observeFn = vi.fn();
    global.IntersectionObserver = vi.fn(() => ({
      observe: observeFn,
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));

    const ref = { current: null };
    renderHook(() => useInView(ref));
    expect(observeFn).not.toHaveBeenCalled();
  });

  it('unobserves on cleanup', () => {
    const unobserveFn = vi.fn();
    const disconnectFn = vi.fn();
    global.IntersectionObserver = vi.fn(() => ({
      observe: vi.fn(),
      unobserve: unobserveFn,
      disconnect: disconnectFn,
    }));

    const ref = { current: document.createElement('div') };
    const { unmount } = renderHook(() => useInView(ref));
    unmount();
    expect(unobserveFn).toHaveBeenCalled();
    expect(disconnectFn).toHaveBeenCalled();
  });
});
