function findMatching (drivers, name) {
          const result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
          return result; 
      }


      function fuzzyMatch(drivers, firstLetters){
          const result = drivers.filter(driver => driver.startsWith(firstLetters));
          return result; 
      }

      function matchName(drivers, string){
          const result = drivers.filter(driver => string === driver.name);
            return result; 
      }


      