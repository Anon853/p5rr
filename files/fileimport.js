let errorSound;
let bgmSound;
let chimeSound;
let slider;
let playerSprite;
let obstacleSprite;
let itemSprite;
let backgroundSprite;
let bluescreenSprite;
let blissSprite;
let winSound;
let speakeronSprite;
let speakeroffSprite;
let volumeSprite;
let volumeSprite2;
let startUpSound;
let colors;
let hiscoreButtonSprite;
let hiscoreButtonSprite2;
let hiscore;


function preload(){
    errorSound = loadSound(`Sound/Windows_XP_Error_Sound_Effect.mp3`);
    bgmSound = loadSound(`Sound/Windows_XP_Installation_Music.mp3`);
    chimeSound = loadSound(`Sound/Windows_XP_Sound_Chimes.mp3`);
    winSound = loadSound(`Sound/Windows_XP_Tada_Sound_Effect.mp3`);
    startUpSound = loadSound(`Sound/Windows_XP_Startup_Sound.mp3`);

    playerSprite = loadImage(`Sprites/windows_logo.png`);
    obstacleSprite = loadImage(`Sprites/IE_logo.png`);
    itemSprite = loadImage(`Sprites/star_logo3.png`);
    backgroundSprite = loadImage(`Sprites/xp_logon2.png`);
    bluescreenSprite = loadImage(`Sprites/bluescreen4.png`);
    blissSprite = loadImage(`Sprites/bliss.png`);
    speakeronSprite = loadImage(`Sprites/speaker_on2.png`);
    speakeroffSprite = loadImage(`Sprites/speaker_off.png`);
    volumeSprite = loadImage(`Sprites/volumePlusGreen.png`);
    volumeSprite2 = loadImage(`Sprites/volumeMinusRed.png`);
    hiscoreButtonSprite = loadImage(`Sprites/hiscoreButton5.png`);
    hiscoreButtonSprite2 = loadImage(`Sprites/hiscoreButton3.png`);

    colors = loadJSON('files/colors.json');
    hiscore = loadJSON('files/highscore.json');
    }