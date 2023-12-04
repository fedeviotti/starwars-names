import starWars from './index.ts';

describe('starwars-name', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      const allNames = starWars.all;
      const isArrayOfStrings = allNames.every((item) => {
        return typeof item === 'string';
      });
      expect(isArrayOfStrings).toBeTruthy();
    });

    it('should contain `Luke Skywalker`', () => {
      expect(starWars.all).toContain('Luke Skywalker');
    });
  });


  describe('random', () => {
    it('should return a random item from the starWars.all', () => {
      const randomItem = starWars.random();
      expect(starWars.all).toContain(randomItem);
    });

    it('should return an array of random items if passed a number', () => {
      const randomItems = starWars.random(3) as string[];
      expect(randomItems).toHaveLength(3);
      randomItems.forEach((item) => {
        expect(starWars.all).toContain(item);
      });
    });
  });
});
