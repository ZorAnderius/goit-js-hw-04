const profile = {
  username: 'Jacob',
  playTime: 300,

  /**change user name
   *
   * @param {string} newName
   */
  changeUsername(newName) {
    this.username = newName;
  },

  /**add new hours for general play time
   *
   * @param {number} hours
   */
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  /**show info about user(username and value of play time)
   *
   * @returns {string}
   */
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log('------------------------------------------');
console.log('Task 3');
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
