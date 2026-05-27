export const TAMIL_EE = (ref) => {

    let animations = []

    // =========================================
    // RIGHT HAND (Closed Fist)
    // =========================================

    // Index Fold
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/1.8, "+"]);

    // Middle Fold
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.7, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.7, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.7, "+"]);

    // Ring Fold
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);

    // Pinky Fold
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.5, "+"]);



    // =========================================
    // RIGHT THUMB (Closed Fist)
    // =========================================

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "x",
        Math.PI/2.5,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb1",
        "rotation",
        "y",
        Math.PI/2.2,
        "+"
    ]);

    animations.push([
        "mixamorigRightHandThumb2",
        "rotation",
        "y",
        -Math.PI/1.6,
        "-"
    ]);

    animations.push([
        "mixamorigRightHandThumb3",
        "rotation",
        "y",
        -Math.PI/1.5,
        "-"
    ]);



    // =========================================
    // RIGHT ARM
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
    // LEFT HAND
    // Thumb Straight
    // Index Straight
    // Middle Straight
    // Ring Straight
    // Pinky Straight
    // =========================================



    // =========================================
    // INDEX STRAIGHT
    // =========================================

    animations.push([
        "mixamorigLeftHandIndex1",
        "rotation",
        "z",
        -Math.PI/26,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandIndex2",
        "rotation",
        "z",
        -Math.PI/30,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandIndex3",
        "rotation",
        "z",
        -Math.PI/34,
        "-"
    ]);



    // =========================================
    // MIDDLE STRAIGHT
    // =========================================

    animations.push([
        "mixamorigLeftHandMiddle1",
        "rotation",
        "z",
        -Math.PI/24,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandMiddle2",
        "rotation",
        "z",
        -Math.PI/28,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandMiddle3",
        "rotation",
        "z",
        -Math.PI/32,
        "-"
    ]);



    // =========================================
    // RING STRAIGHT
    // =========================================

    animations.push([
        "mixamorigLeftHandRing1",
        "rotation",
        "z",
        -Math.PI/22,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandRing2",
        "rotation",
        "z",
        -Math.PI/26,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandRing3",
        "rotation",
        "z",
        -Math.PI/30,
        "-"
    ]);



    // =========================================
    // PINKY STRAIGHT
    // =========================================

    animations.push([
        "mixamorigLeftHandPinky1",
        "rotation",
        "z",
        -Math.PI/20,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandPinky2",
        "rotation",
        "z",
        -Math.PI/24,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandPinky3",
        "rotation",
        "z",
        -Math.PI/28,
        "-"
    ]);



    // =========================================
    // THUMB STRAIGHT
    // =========================================

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "x",
        Math.PI/14,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "y",
        -Math.PI/2,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandThumb2",
        "rotation",
        "y",
        Math.PI/20,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandThumb3",
        "rotation",
        "y",
        Math.PI/24,
        "+"
    ]);



    // =========================================
    // WIDE FINGER SPREAD
    // =========================================

    animations.push([
        "mixamorigLeftHandIndex1",
        "rotation",
        "y",
        -Math.PI/18,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandMiddle1",
        "rotation",
        "y",
        -Math.PI/36,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandRing1",
        "rotation",
        "y",
        Math.PI/36,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandPinky1",
        "rotation",
        "y",
        Math.PI/18,
        "+"
    ]);



    // =========================================
    // LEFT WRIST
    // =========================================

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "z",
        Math.PI/20,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "y",
        -Math.PI/28,
        "-"
    ]);



    // =========================================
    // LEFT FOREARM
    // =========================================

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "z",
        -Math.PI/22,
        "-"
    ]);

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "x",
        Math.PI/34,
        "+"
    ]);



    // =========================================
    // LEFT ARM
    // =========================================

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "x",
        -Math.PI/16,
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



    // RESET SPREAD
    animations.push([
        "mixamorigLeftHandIndex1",
        "rotation",
        "y",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandMiddle1",
        "rotation",
        "y",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandRing1",
        "rotation",
        "y",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandPinky1",
        "rotation",
        "y",
        0,
        "-"
    ]);



    // RESET THUMBS
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



    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "x",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandThumb1",
        "rotation",
        "y",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftHandThumb2",
        "rotation",
        "y",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHandThumb3",
        "rotation",
        "y",
        0,
        "-"
    ]);



    // RESET WRISTS
    animations.push([
        "mixamorigRightHand",
        "rotation",
        "z",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigRightHand",
        "rotation",
        "y",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "z",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftHand",
        "rotation",
        "y",
        0,
        "+"
    ]);



    // RESET FOREARMS
    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "z",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigRightForeArm",
        "rotation",
        "x",
        0,
        "-"
    ]);

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "z",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftForeArm",
        "rotation",
        "x",
        0,
        "-"
    ]);



    // RESET ARMS
    animations.push([
        "mixamorigRightArm",
        "rotation",
        "x",
        0,
        "+"
    ]);

    animations.push([
        "mixamorigLeftArm",
        "rotation",
        "x",
        0,
        "+"
    ]);



    // =========================================
    // PUSH RESET
    // =========================================

    ref.animations.push(animations)



    // =========================================
    // PLAY
    // =========================================

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}