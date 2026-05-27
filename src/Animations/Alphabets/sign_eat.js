export const SIGN_EAT = (ref) => {

    let animations = []

    // =========================================
    // FOOD HOLDING HAND SHAPE
    // =========================================

    // INDEX
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/5, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/6, "+"]);

    // MIDDLE
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/6, "+"]);

    // RING
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/5, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/6, "+"]);

    // PINKY
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/5, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/6, "+"]);



    // =========================================
    // THUMB PINCH
    // =========================================

    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/5, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/7, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/8, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"]);



    // =========================================
    // ARM POSITION
    // =========================================

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "z",
        Math.PI/8,
        "+"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "y",
        Math.PI/5,
        "+"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
        -Math.PI/18,
        "-"
    ]);



    // =========================================
    // ELBOW BEND
    // =========================================

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        Math.PI/2.9,
        "+"
    ]);



    // =========================================
    // WRIST ALIGNMENT
    // =========================================

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "x",
        Math.PI/18,
        "+"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        Math.PI/5,
        "+"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "z",
        -Math.PI/40,
        "-"
    ]);



    // =========================================
    // HEAD SLIGHTLY DOWN
    // =========================================

    animations.push([
        "mixamorigHead",
        "rotation",
        "x",
        Math.PI/60,
        "+"
    ]);



    // =========================================
    // MAIN POSE
    // =========================================

    ref.animations.push(animations);



    // =========================================
    // SMALL EATING MOTION
    // =========================================

    animations = []

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        Math.PI/14,
        "+"
    ]);

    animations.push([
        "mixamorigHead",
        "rotation",
        "x",
        Math.PI/90,
        "+"
    ]);

    ref.animations.push(animations);



    // =========================================
    // RETURN MOTION
    // =========================================

    animations = []

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        -Math.PI/14,
        "-"
    ]);

    animations.push([
        "mixamorigHead",
        "rotation",
        "x",
        -Math.PI/90,
        "-"
    ]);

    ref.animations.push(animations);



    // =========================================
    // RESET
    // =========================================

    animations = []

    const fingers = [
        "Index",
        "Middle",
        "Ring",
        "Pinky"
    ];



    // RESET FINGERS

    fingers.forEach(finger => {

        for(let i = 1; i <= 3; i++){

            animations.push([
                `mixamorigRightHand${finger}${i}`,
                "rotation",
                "z",
                0,
                "-"
            ]);
        }
    });



    // RESET THUMB

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "x",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "y",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightHandThumb2",
        "rotation",
        "y",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb3",
        "rotation",
        "y",
        0,
        "+"
    ]);



    // RESET ARM

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "z",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "y",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
        0,
        "+"
    ]);



    // RESET FOREARM

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        0,
        "-"
    ]);



    // RESET WRIST

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "x",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "z",
        0,
        "+"
    ]);



    // RESET HEAD

    animations.push([
        "mixamorigHead",
        "rotation",
        "x",
        0,
        "-"
    ]);



    ref.animations.push(animations);



    // =========================================
    // PLAY
    // =========================================

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }
}