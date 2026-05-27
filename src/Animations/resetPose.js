export const resetPose = (animations) => {
  const fingers = ['Index', 'Middle', 'Ring', 'Pinky'];

  fingers.forEach((finger) => {
    for (let i = 1; i <= 3; i++) {
      animations.push([`mixamorigRightHand${finger}${i}`, 'rotation', 'z', 0, '-']);
      animations.push([`mixamorigLeftHand${finger}${i}`, 'rotation', 'z', 0, '+']);
    }
  });

  animations.push(['mixamorigRightHandThumb1', 'rotation', 'x', 0, '-']);
  animations.push(['mixamorigRightHandThumb1', 'rotation', 'y', 0, '-']);
  animations.push(['mixamorigRightHandThumb1', 'rotation', 'z', 0, '+']);
  animations.push(['mixamorigRightHandThumb2', 'rotation', 'y', 0, '+']);
  animations.push(['mixamorigRightHandThumb3', 'rotation', 'y', 0, '+']);

  animations.push(['mixamorigLeftHandThumb1', 'rotation', 'x', 0, '+']);
  animations.push(['mixamorigLeftHandThumb1', 'rotation', 'y', 0, '+']);
  animations.push(['mixamorigLeftHandThumb1', 'rotation', 'z', 0, '-']);
  animations.push(['mixamorigLeftHandThumb2', 'rotation', 'y', 0, '-']);
  animations.push(['mixamorigLeftHandThumb3', 'rotation', 'y', 0, '-']);

  animations.push(['mixamorigRightHand', 'rotation', 'x', 0, '-']);
  animations.push(['mixamorigRightHand', 'rotation', 'y', 0, '-']);
  animations.push(['mixamorigRightHand', 'rotation', 'z', 0, '+']);
  animations.push(['mixamorigLeftHand', 'rotation', 'x', 0, '-']);
  animations.push(['mixamorigLeftHand', 'rotation', 'y', 0, '+']);
  animations.push(['mixamorigLeftHand', 'rotation', 'z', 0, '-']);

  animations.push(['mixamorigRightForeArm', 'rotation', 'x', 0, '-']);
  animations.push(['mixamorigRightForeArm', 'rotation', 'y', Math.PI / 1.5, '+']);
  animations.push(['mixamorigRightForeArm', 'rotation', 'z', 0, '-']);
  animations.push(['mixamorigLeftForeArm', 'rotation', 'x', 0, '-']);
  animations.push(['mixamorigLeftForeArm', 'rotation', 'y', -Math.PI / 1.5, '-']);
  animations.push(['mixamorigLeftForeArm', 'rotation', 'z', 0, '+']);

  animations.push(['mixamorigRightArm', 'rotation', 'x', 0, '+']);
  animations.push(['mixamorigRightArm', 'rotation', 'y', 0, '-']);
  animations.push(['mixamorigRightArm', 'rotation', 'z', Math.PI / 3, '+']);
  animations.push(['mixamorigLeftArm', 'rotation', 'x', 0, '+']);
  animations.push(['mixamorigLeftArm', 'rotation', 'y', 0, '+']);
  animations.push(['mixamorigLeftArm', 'rotation', 'z', -Math.PI / 3, '-']);
};
