import { describe, it, expect } from 'vitest';
import {
  NAV_LINKS,
  TYPING_TEXTS,
  TECH_STACK,
  STATS,
  ABOUT_QUICK_INFO,
  SKILLS,
  PROJECTS,
  EXPERIENCES,
  SOCIAL_LINKS,
  CONTACT_EMAIL,
} from '../constants/content';

describe('content constants', () => {
  describe('NAV_LINKS', () => {
    it('is an array with at least 4 items', () => {
      expect(Array.isArray(NAV_LINKS)).toBe(true);
      expect(NAV_LINKS.length).toBeGreaterThanOrEqual(4);
    });

    it('each item has label and href', () => {
      NAV_LINKS.forEach((link) => {
        expect(link).toHaveProperty('label');
        expect(link).toHaveProperty('href');
        expect(link.href).toMatch(/^#/);
      });
    });

    it('contains a Home link', () => {
      expect(NAV_LINKS.some((l) => l.label === 'Home')).toBe(true);
    });
  });

  describe('TYPING_TEXTS', () => {
    it('is a non-empty array of strings', () => {
      expect(Array.isArray(TYPING_TEXTS)).toBe(true);
      expect(TYPING_TEXTS.length).toBeGreaterThan(0);
      TYPING_TEXTS.forEach((t) => expect(typeof t).toBe('string'));
    });
  });

  describe('TECH_STACK', () => {
    it('is a non-empty array of strings', () => {
      expect(Array.isArray(TECH_STACK)).toBe(true);
      expect(TECH_STACK.length).toBeGreaterThan(0);
    });

    it('contains expected technologies', () => {
      expect(TECH_STACK).toContain('Node.js');
      expect(TECH_STACK).toContain('AWS');
    });
  });

  describe('STATS', () => {
    it('has 4 stat items', () => {
      expect(STATS.length).toBe(4);
    });

    it('each stat has value, suffix, label, description', () => {
      STATS.forEach((s) => {
        expect(s).toHaveProperty('value');
        expect(s).toHaveProperty('suffix');
        expect(s).toHaveProperty('label');
        expect(s).toHaveProperty('description');
        expect(typeof s.value).toBe('number');
      });
    });
  });

  describe('ABOUT_QUICK_INFO', () => {
    it('has 4 quick info items', () => {
      expect(ABOUT_QUICK_INFO.length).toBe(4);
    });

    it('each item has icon, label, value', () => {
      ABOUT_QUICK_INFO.forEach((i) => {
        expect(i).toHaveProperty('icon');
        expect(i).toHaveProperty('label');
        expect(i).toHaveProperty('value');
      });
    });
  });

  describe('SKILLS', () => {
    it('has 4 skill categories', () => {
      expect(SKILLS.length).toBe(4);
    });

    it('each skill has category and items array', () => {
      SKILLS.forEach((s) => {
        expect(s).toHaveProperty('category');
        expect(Array.isArray(s.items)).toBe(true);
        expect(s.items.length).toBeGreaterThan(0);
      });
    });
  });

  describe('PROJECTS', () => {
    it('has 4 projects', () => {
      expect(PROJECTS.length).toBe(4);
    });

    it('each project has required fields', () => {
      PROJECTS.forEach((p) => {
        expect(p).toHaveProperty('title');
        expect(p).toHaveProperty('description');
        expect(p).toHaveProperty('problem');
        expect(p).toHaveProperty('solution');
        expect(p).toHaveProperty('impact');
        expect(p).toHaveProperty('tags');
        expect(p).toHaveProperty('featured');
        expect(Array.isArray(p.tags)).toBe(true);
      });
    });

    it('has exactly 2 featured projects', () => {
      expect(PROJECTS.filter((p) => p.featured).length).toBe(2);
    });
  });

  describe('EXPERIENCES', () => {
    it('has 4 experience entries', () => {
      expect(EXPERIENCES.length).toBe(4);
    });

    it('each experience has required fields', () => {
      EXPERIENCES.forEach((e) => {
        expect(e).toHaveProperty('company');
        expect(e).toHaveProperty('role');
        expect(e).toHaveProperty('period');
        expect(e).toHaveProperty('type');
        expect(e).toHaveProperty('achievements');
        expect(e).toHaveProperty('stack');
        expect(Array.isArray(e.achievements)).toBe(true);
        expect(Array.isArray(e.stack)).toBe(true);
      });
    });
  });

  describe('SOCIAL_LINKS', () => {
    it('has 3 social links', () => {
      expect(SOCIAL_LINKS.length).toBe(3);
    });

    it('each link has label, href, hoverClass', () => {
      SOCIAL_LINKS.forEach((l) => {
        expect(l).toHaveProperty('label');
        expect(l).toHaveProperty('href');
        expect(l).toHaveProperty('hoverClass');
      });
    });
  });

  describe('CONTACT_EMAIL', () => {
    it('is a valid email string', () => {
      expect(typeof CONTACT_EMAIL).toBe('string');
      expect(CONTACT_EMAIL).toMatch(/@/);
    });
  });
});
