self.onmessage = function (event) {
    try {
      // Code that may throw an error
    } catch (error) {
      throw new Error('Something went wrong in the Web Worker');
    }
  };