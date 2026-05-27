const cloneQueue = (queue = []) => queue.map((step) => [...step]);

const captureMainPose = (animation) => {
  const capturedRef = {
    animations: [],
    characters: [],
    pending: true,
    animate: () => {}
  };

  animation(capturedRef);

  return cloneQueue(capturedRef.animations[0] || []);
};

const isLeftHandStep = ([boneName]) => boneName.includes('Left');
const isRightHandStep = ([boneName]) => boneName.includes('Right');

export const pushLeftHandPose = (sourceAnimation, animations) => {
  captureMainPose(sourceAnimation)
    .filter(isLeftHandStep)
    .forEach((step) => animations.push(step));
};

export const pushRightHandPose = (sourceAnimation, animations) => {
  captureMainPose(sourceAnimation)
    .filter(isRightHandStep)
    .forEach((step) => animations.push(step));
};

