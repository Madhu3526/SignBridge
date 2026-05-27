export const TAMIL_A = (ref) => {

    let animations = []

    // =========================================
    // RIGHT HAND (Closed Fist)
    // =========================================

    // Index Finger
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/1.8, "+"]);

    // Middle Finger
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.7, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.7, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.7, "+"]);

    // Ring Finger
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);

    // Pinky Finger
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.5, "+"]);



    // =========================================
    // RIGHT THUMB (MORE NATURAL CLOSED FIST)
    // =========================================

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "x",
        Math.PI/2.8,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "y",
        Math.PI/2.5,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb2",
        "rotation",
        "y",
        -Math.PI/2,
        "-"
    ]);

    animations.push([
        "mixamorigRightHandThumb3",
        "rotation",
        "y",
        -Math.PI/2.2,
        "-"
    ]);



    // =========================================
    // RIGHT WRIST + ARM
    // =========================================

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "z",
        -Math.PI/10,
        "-"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        Math.PI/10,
        "+"
    ]);

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        Math.PI/8,
        "+"
    ]);

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "x",
        Math.PI/18,
        "+"
    ]);

    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
        -Math.PI/8,
        "-"
    ]);



    // =========================================
    // LEFT HAND (INDEX FINGER UP)
    // =========================================

    // Index stays mostly straight
    animations.push([
        "mixamorigLeftHandIndex1",
        "rotation",
        "z",
        -Math.PI/10,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandIndex2",
        "rotation",
        "z",
        -Math.PI/12,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandIndex3",
        "rotation",
        "z",
        -Math.PI/14,
        "-"
    ]);


    // Middle Finger Fold
    animations.push([
        "mixamorigLeftHandMiddle1",
        "rotation",
        "z",
        -Math.PI/1.6,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandMiddle2",
        "rotation",
        "z",
        -Math.PI/1.6,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandMiddle3",
        "rotation",
        "z",
        -Math.PI/1.6,
        "-"
    ]);


    // Ring Finger Fold
    animations.push([
        "mixamorigLeftHandRing1",
        "rotation",
        "z",
        -Math.PI/1.7,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandRing2",
        "rotation",
        "z",
        -Math.PI/1.7,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandRing3",
        "rotation",
        "z",
        -Math.PI/1.7,
        "-"
    ]);


    // Pinky Finger Fold
    animations.push([
        "mixamorigLeftHandPinky1",
        "rotation",
        "z",
        -Math.PI/1.8,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandPinky2",
        "rotation",
        "z",
        -Math.PI/1.8,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandPinky3",
        "rotation",
        "z",
        -Math.PI/1.8,
        "-"
    ]);



    // =========================================
    // LEFT THUMB SUPPORT
    // =========================================

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "x",
        -Math.PI/3,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandThumb2",
        "rotation",
        "y",
        Math.PI/2,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandThumb3",
        "rotation",
        "y",
        Math.PI/2.2,
        "+"
    ]);



    // =========================================
    // LEFT WRIST + ARM
    // =========================================

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "z",
        Math.PI/12,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "y",
        -Math.PI/12,
        "-"
    ]);

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "z",
        -Math.PI/10,
        "-"
    ]);

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "x",
        Math.PI/20,
        "+"
    ]);

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "x",
        -Math.PI/10,
        "-"
    ]);



    // =========================================
    // PUSH MAIN POSE
    // =========================================

    ref.animations.push(animations)



    // =========================================
    // RESET ANIMATION
    // =========================================

    animations = []



    // RIGHT HAND RESET
    const rightFingers = [
        "Index",
        "Middle",
        "Ring",
        "Pinky"
    ]

    rightFingers.forEach(finger => {

        animations.push([
            `mixamorigRightHand${finger}1`,
            "rotation",
            "z",
            0,
            "-"
        ])

        animations.push([
            `mixamorigRightHand${finger}2`,
            "rotation",
            "z",
            0,
            "-"
        ])

        animations.push([
            `mixamorigRightHand${finger}3`,
            "rotation",
            "z",
            0,
            "-"
        ])
    })



    // LEFT HAND RESET
    const leftFingers = [
        "Index",
        "Middle",
        "Ring",
        "Pinky"
    ]

    leftFingers.forEach(finger => {

        animations.push([
            `mixamorigLeftHand${finger}1`,
            "rotation",
            "z",
            0,
            "+"
        ])

        animations.push([
            `mixamorigLeftHand${finger}2`,
            "rotation",
            "z",
            0,
            "+"
        ])

        animations.push([
            `mixamorigLeftHand${finger}3`,
            "rotation",
            "z",
            0,
            "+"
        ])
    })



    // THUMB RESET
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", 0, "-"]);



    // WRIST RESET
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);



    // FOREARM RESET
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);



    // ARM RESET
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);



    // =========================================
    // PUSH RESET
    // =========================================

    ref.animations.push(animations)



    // =========================================
    // PLAY ANIMATION
    // =========================================

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}