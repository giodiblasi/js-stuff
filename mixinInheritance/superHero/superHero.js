const withFlyingPower = (normalMan) => {
  let onAir = false;
  return Object.assign({}, normalMan, {
    fly() {
      onAir = true;
      return this;
    },
    isFlying() {
      return onAir;
    },
  });
};

const withLaserEyes = (normalMan) => {
  let laser = false;
  return Object.assign({}, normalMan, {
    turnLaserOn() {
      laser = true;
      return this;
    },
    isLaserOn() {
      return laser;
    },
  });
};

module.exports = { withFlyingPower, withLaserEyes };

