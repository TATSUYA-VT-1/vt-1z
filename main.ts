function Vo設定 () {
    Vo1 = 600
    Vo2 = 0
    Vo3 = 0
    Vo4 = 0
    Vo5 = 700
    Vo6 = 800
    Vo7 = 800
    Vo8 = 800
    Vo9 = 800
    Vo10 = 800
    Vo11 = 800
    Vo12 = 800
    Vo13 = 800
    Vo14 = 600
    Vo15 = 600
    Vo16 = 0
    Vo17 = 0
    Vo18 = 0
    Vo19 = 0
    Vo20 = 800
    Vo21 = 800
    Vo22 = 800
    Vo23 = 800
    Vo24 = 700
    Vo25 = 700
    Vo26 = 700
    Vo27 = 600
    Vo28 = 600
    Vo29 = 0
    Vo30 = 0
    Vo31 = 0
    Vo32 = 0
    Vo33 = 0
    Vo34 = 0
    Vo35 = 800
    Vo36 = 800
    Vo37 = 800
    Vo38 = 800
    Vo39 = 800
    Vo40 = 800
    Vo41 = 800
    Vo42 = 800
    Vo43 = 600
    Vo44 = 600
    Vo45 = 0
    Vo46 = 0
    Vo47 = 0
    Vo48 = 0
}
input.onButtonPressed(Button.A, function () {
    datalogger.setColumnTitles(
    "Z",
    "R",
    "P",
    "Vi"
    )
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
    Vi初期設定値()
    Log = true
    on_off = true
    Ro = 0
    R = 0
    music.play(music.createSoundExpression(WaveShape.Sawtooth, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showArrow(ArrowNames.South)
    basic.clearScreen()
})
function Vi初期設定値 () {
    Vi1 = 0
    Vi2 = 700
    Vi3 = 700
    Vi4 = 700
    Vi5 = 800
    Vi6 = 800
    Vi7 = 800
    Vi8 = 800
    Vi9 = 511
    Vi10 = 511
    Vi11 = 700
    Vi12 = 700
    Vi13 = 511
    Vi14 = 511
    Vi15 = 511
    Vi16 = 511
    Vi17 = 0
    Vi18 = 0
    Vi19 = 0
    Vi20 = 0
    Vi21 = 511
    Vi22 = 800
    Vi23 = 800
    Vi24 = 800
    Vi25 = 800
    Vi26 = 800
    Vi27 = 800
    Vi28 = 800
    Vi29 = 511
    Vi30 = 511
    Vi31 = 0
    Vi32 = 0
    Vi33 = 0
    Vi34 = 0
    Vi35 = 0
    Vi36 = 0
    Vi37 = 500
    Vi38 = 500
    Vi39 = 500
    Vi40 = 500
    Vi41 = 500
    Vi42 = 500
    Vi43 = 500
    Vi44 = 500
    Vi45 = 500
    Vi46 = 0
    Vi47 = 0
    Vi48 = 0
}
function 加速度補正 () {
    Z = Zi + Zo
    Zi = 0.95 * Z
    Zo = 0.05 * input.acceleration(Dimension.Z)
    Z = Math.round(Z)
}
function Vi論理 () {
    if (0 <= R && R < 6.7) {
        VZ1 = Math.min(0, Z + 400)
        Vi1 = Math.min(-0.7 * VZ1, 1023)
        Vi = Vi1
    }
    if (6.7 <= R && R < 13.4) {
        VZ2 = Math.min(0, Z + 400)
        Vi2 = Math.min(-0.7 * VZ2, 1023)
        Vi = Vi2
    }
    if (13.4 <= R && R < 20.3) {
        VZ3 = Math.min(0, Z + 400)
        Vi3 = Math.min(-0.7 * VZ3, 1023)
        Vi = Vi3
    }
    if (20.3 <= R && R < 27.2) {
        VZ4 = Math.min(0, Z + 400)
        Vi4 = Math.min(-0.7 * VZ4, 1023)
        Vi = Vi4
    }
    if (27.2 <= R && R < 33.6) {
        VZ5 = Math.min(0, Z + 400)
        Vi5 = Math.min(-0.7 * VZ5, 1023)
        Vi = Vi5
    }
    if (33.6 <= R && R < 40) {
        VZ6 = Math.min(0, Z + 400)
        Vi6 = Math.min(-0.7 * VZ6, 1023)
        Vi = Vi6
    }
    if (40 <= R && R < 46.4) {
        VZ7 = Math.min(0, Z + 400)
        Vi7 = Math.min(-0.7 * VZ7, 1023)
        Vi = Vi7
    }
    if (46.4 <= R && R < 52.8) {
        VZ8 = Math.min(0, Z + 400)
        Vi8 = Math.min(-0.7 * VZ8, 1023)
        Vi = Vi8
    }
    if (52.8 <= R && R < 59.4) {
        VZ9 = Math.min(0, Z + 400)
        Vi9 = Math.min(-0.7 * VZ9, 1023)
        Vi = Vi9
    }
    if (59.4 <= R && R < 64.2) {
        VZ10 = Math.min(0, Z + 400)
        Vi10 = Math.min(-0.7 * VZ10, 1023)
        Vi = Vi10
    }
    if (64.2 <= R && R < 75.3) {
        VZ11 = Math.min(0, Z + 400)
        Vi11 = Math.min(-0.7 * VZ11, 1023)
        Vi = Vi11
    }
    if (75.3 <= R && R < 80.1) {
        VZ12 = Math.min(0, Z + 400)
        Vi12 = Math.min(-0.7 * VZ12, 1023)
        Vi = Vi12
    }
    if (80.1 <= R && R < 84.2) {
        VZ13 = Math.min(0, Z + 400)
        Vi13 = Math.min(-0.7 * VZ13, 1023)
        Vi = Vi13
    }
    if (84.2 <= R && R < 88.3) {
        VZ14 = Math.min(0, Z + 400)
        Vi14 = Math.min(-0.7 * VZ14, 1023)
        Vi = Vi14
    }
    if (88.3 <= R && R < 92.4) {
        VZ15 = Math.min(0, Z + 400)
        Vi15 = Math.min(-0.7 * VZ15, 1023)
        Vi = Vi15
    }
    if (92.4 <= R && R < 96.5) {
        VZ16 = Math.min(0, Z + 400)
        Vi16 = Math.min(-0.7 * VZ16, 1023)
        Vi = Vi16
    }
    if (96.5 <= R && R < 103.2) {
        VZ17 = Math.min(0, Z + 400)
        Vi17 = Math.min(-0.7 * VZ17, 1023)
        Vi = Vi17
    }
    if (103.2 <= R && R < 109.9) {
        VZ18 = Math.min(0, Z + 400)
        Vi18 = Math.min(-0.7 * VZ18, 1023)
        Vi = Vi18
    }
    if (109.9 <= R && R < 116.8) {
        VZ19 = Math.min(0, Z + 400)
        Vi19 = Math.min(-0.7 * VZ19, 1023)
        Vi = Vi19
    }
    if (116.8 <= R && R < 123.7) {
        VZ20 = Math.min(0, Z + 400)
        Vi20 = Math.min(-0.7 * VZ20, 1023)
        Vi = Vi20
    }
    if (123.7 <= R && R < 127.8) {
        VZ21 = Math.min(0, Z + 400)
        Vi21 = Math.min(-0.7 * VZ21, 1023)
        Vi = Vi21
    }
    if (127.8 <= R && R < 131.9) {
        VZ22 = Math.min(0, Z + 400)
        Vi22 = Math.min(-0.7 * VZ22, 1023)
        Vi = Vi22
    }
    if (131.9 <= R && R < 136) {
        VZ23 = Math.min(0, Z + 400)
        Vi23 = Math.min(-0.7 * VZ23, 1023)
        Vi = Vi23
    }
    if (136 <= R && R < 140.1) {
        VZ24 = Math.min(0, Z + 400)
        Vi24 = Math.min(-0.7 * VZ24, 1023)
        Vi1 = Vi24
    }
    if (140.1 <= R && R < 146.7) {
        VZ25 = Math.min(0, Z + 400)
        Vi25 = Math.min(-0.7 * VZ25, 1023)
        Vi = Vi25
    }
    if (146.7 <= R && R < 153.4) {
        VZ26 = Math.min(0, Z + 400)
        Vi26 = Math.min(-0.7 * VZ26, 1023)
        Vi = Vi26
    }
    if (153.4 <= R && R < 160.3) {
        VZ27 = Math.min(0, Z + 400)
        Vi27 = Math.min(-0.7 * VZ27, 1023)
        Vi = Vi27
    }
    if (160.3 <= R && R < 167) {
        VZ28 = Math.min(0, Z + 400)
        Vi28 = Math.min(-0.7 * VZ28, 1023)
        Vi = Vi28
    }
    if (167 <= R && R < 172.1) {
        VZ29 = Math.min(0, Z + 400)
        Vi29 = Math.min(-0.7 * VZ29, 1023)
        Vi = Vi29
    }
    if (172.1 <= R && R < 177.2) {
        VZ30 = Math.min(0, Z + 400)
        Vi30 = Math.min(-0.7 * VZ30, 1023)
        Vi = Vi30
    }
    if (177.2 <= R && R < 182.3) {
        VZ31 = Math.min(0, Z + 400)
        Vi31 = Math.min(-0.7 * VZ31, 1023)
        Vi = Vi31
    }
    if (182.3 <= R && R < 187.4) {
        VZ32 = Math.min(0, Z + 400)
        Vi32 = Math.min(-0.7 * VZ32, 1023)
        Vi = Vi32
    }
    if (187.4 <= R && R < 194.1) {
        VZ33 = Math.min(0, Z + 400)
        Vi33 = Math.min(-0.7 * VZ33, 1023)
        Vi = Vi33
    }
    if (194.1 <= R && R < 200.8) {
        VZ34 = Math.min(0, Z + 400)
        Vi34 = Math.min(-0.7 * VZ34, 1023)
        Vi = Vi34
    }
    if (200.8 <= R && R < 207.7) {
        VZ35 = Math.min(0, Z + 400)
        Vi35 = Math.min(-0.7 * VZ35, 1023)
        Vi = Vi35
    }
    if (207.7 <= R && R < 214.6) {
        VZ36 = Math.min(0, Z + 400)
        Vi36 = Math.min(-0.7 * VZ36, 1023)
        Vi = Vi36
    }
    if (214.6 <= R && R < 219.7) {
        VZ37 = Math.min(0, Z + 400)
        Vi37 = Math.min(-0.7 * VZ37, 1023)
        Vi = Vi37
    }
    if (219.7 <= R && R < 224.8) {
        VZ38 = Math.min(0, Z + 400)
        Vi38 = Math.min(-0.7 * VZ38, 1023)
        Vi = Vi38
    }
    if (224.8 <= R && R < 229.9) {
        VZ39 = Math.min(0, Z + 400)
        Vi39 = Math.min(-0.7 * VZ39, 1023)
        Vi = Vi39
    }
    if (229.9 <= R && R < 235) {
        VZ40 = Math.min(0, Z + 400)
        Vi40 = Math.min(-0.7 * VZ40, 1023)
        Vi = Vi40
    }
    if (235 <= R && R < 241.6) {
        VZ41 = Math.min(0, Z + 400)
        Vi41 = Math.min(-0.7 * VZ41, 1023)
        Vi = Vi41
    }
    if (241.6 <= R && R < 248.3) {
        VZ42 = Math.min(0, Z + 400)
        Vi42 = Math.min(-0.7 * VZ42, 1023)
        Vi = Vi42
    }
    if (248.3 <= R && R < 255.2) {
        VZ43 = Math.min(0, Z + 400)
        Vi43 = Math.min(-0.7 * VZ43, 1023)
        Vi = Vi43
    }
    if (255.2 <= R && R < 261.9) {
        VZ44 = Math.min(0, Z + 400)
        Vi44 = Math.min(-0.7 * VZ44, 1023)
        Vi = Vi44
    }
    if (261.9 <= R && R < 268.3) {
        VZ45 = Math.min(0, Z + 400)
        Vi45 = Math.min(-0.7 * VZ45, 1023)
        Vi = Vi45
    }
    if (268.3 <= R && R < 274.7) {
        VZ46 = Math.min(0, Z + 400)
        Vi46 = Math.min(-0.7 * VZ46, 1023)
        Vi = Vi46
    }
    if (274.7 <= R && R < 281.1) {
        VZ47 = Math.min(0, Z + 400)
        Vi47 = Math.min(-0.7 * VZ47, 1023)
        Vi = Vi47
    }
    if (281.1 <= R && R < 288) {
        VZ48 = Math.min(0, Z + 400)
        Vi48 = Math.min(-0.7 * VZ48, 1023)
        Vi = Vi48
    }
}
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    on_off = false
    Log = false
    music.play(music.createSoundExpression(WaveShape.Noise, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    basic.clearScreen()
})
function VoVi制御 () {
    pins.analogWritePin(AnalogPin.P0, Math.constrain(P, 0, 1023))
    if (0 <= R && R < 6.7) {
        P = 0.5 * Vo1 + 0.5 * Vi2
    }
    if (6.7 <= R && R < 13.4) {
        P = 0.5 * Vo2 + 0.5 * Vi3
    }
    if (13.4 <= R && R < 20.3) {
        P = 0.5 * Vo3 + 0.5 * Vi4
    }
    if (20.3 <= R && R < 27.2) {
        P = 0.5 * Vo4 + 0.5 * Vi5
    }
    if (27.2 <= R && R < 33.6) {
        P = 0.5 * Vo5 + 0.5 * Vi6
    }
    if (33.6 <= R && R < 40) {
        P = 0.5 * Vo6 + 0.5 * Vi7
    }
    if (40 <= R && R < 46.4) {
        P = 0.5 * Vo7 + 0.5 * Vi8
    }
    if (46.4 <= R && R < 52.8) {
        P = 0.5 * Vo8 + 0.5 * Vi9
    }
    if (52.8 <= R && R < 59.4) {
        P = 0.5 * Vo9 + 0.5 * Vi10
    }
    if (59.4 <= R && R < 64.2) {
        P = 0.5 * Vo10 + 0.5 * Vi11
    }
    if (64.2 <= R && R < 75.3) {
        P = 0.5 * Vo11 + 0.5 * Vi12
    }
    if (75.3 <= R && R < 80.1) {
        P = 0.5 * Vo12 + 0.5 * Vi13
    }
    if (80.1 <= R && R < 84.2) {
        P = 0.5 * Vo13 + 0.5 * Vi14
    }
    if (84.2 <= R && R < 88.3) {
        P = 0.5 * Vo14 + 0.5 * Vi15
    }
    if (88.3 <= R && R < 92.4) {
        P = 0.5 * Vo15 + 0.5 * Vi16
    }
    if (92.4 <= R && R < 96.5) {
        P = 0.5 * Vo16 + 0.5 * Vi17
    }
    if (96.5 <= R && R < 103.2) {
        P = 0.5 * Vo17 + 0.5 * Vi18
    }
    if (103.2 <= R && R < 109.9) {
        P = 0.5 * Vo18 + 0.5 * Vi19
    }
    if (109.9 <= R && R < 116.8) {
        P = 0.5 * Vo19 + 0.5 * Vi20
    }
    if (116.8 <= R && R < 123.7) {
        P = 0.5 * Vo20 + 0.5 * Vi21
    }
    if (123.7 <= R && R < 127.8) {
        P = 0.5 * Vo21 + 0.5 * Vi22
    }
    if (127.8 <= R && R < 131.9) {
        P = 0.5 * Vo22 + 0.5 * Vi23
    }
    if (131.9 <= R && R < 136) {
        P = 0.5 * Vo23 + 0.5 * Vi24
    }
    if (136 <= R && R < 140.1) {
        P = 0.5 * Vo24 + 0.5 * Vi25
    }
    if (140.1 <= R && R < 146.7) {
        P = 0.5 * Vo25 + 0.5 * Vi26
    }
    if (146.7 <= R && R < 153.4) {
        P = 0.5 * Vo26 + 0.5 * Vi27
    }
    if (153.4 <= R && R < 160.3) {
        P = 0.5 * Vo27 + 0.5 * Vi28
    }
    if (160.3 <= R && R < 167) {
        P = 0.5 * Vo28 + 0.5 * Vi29
    }
    if (167 <= R && R < 172.1) {
        P = 0.5 * Vo29 + 0.5 * Vi30
    }
    if (172.1 <= R && R < 177.2) {
        P = 0.5 * Vo30 + 0.5 * Vi31
    }
    if (177.2 <= R && R < 182.3) {
        P = 0.5 * Vo31 + 0.5 * Vi32
    }
    if (182.3 <= R && R < 187.4) {
        P = 0.5 * Vo32 + 0.5 * Vi33
    }
    if (187.4 <= R && R < 194.1) {
        P = 0.5 * Vo33 + 0.5 * Vi34
    }
    if (194.1 <= R && R < 200.8) {
        P = 0.5 * Vo34 + 0.5 * Vi35
    }
    if (200.8 <= R && R < 207.7) {
        P = 0.5 * Vo35 + 0.5 * Vi36
    }
    if (207.7 <= R && R < 214.6) {
        P = 0.5 * Vo36 + 0.5 * Vi37
    }
    if (214.6 <= R && R < 219.7) {
        P = 0.5 * Vo37 + 0.5 * Vi38
    }
    if (219.7 <= R && R < 224.8) {
        P = 0.5 * Vo38 + 0.5 * Vi39
    }
    if (224.8 <= R && R < 229.9) {
        P = 0.5 * Vo39 + 0.5 * Vi40
    }
    if (229.9 <= R && R < 235) {
        P = 0.5 * Vo40 + 0.5 * Vi41
    }
    if (235 <= R && R < 241.6) {
        P = 0.5 * Vo41 + 0.5 * Vi42
    }
    if (241.6 <= R && R < 248.3) {
        P = 0.5 * Vo42 + 0.5 * Vi43
    }
    if (248.3 <= R && R < 255.2) {
        P = 0.5 * Vo43 + 0.5 * Vi44
    }
    if (255.2 <= R && R < 261.9) {
        P = 0.5 * Vo44 + 0.5 * Vi45
    }
    if (261.9 <= R && R < 268.3) {
        P = 0.5 * Vo45 + 0.5 * Vi46
    }
    if (268.3 <= R && R < 274.7) {
        P = 0.5 * Vo46 + 0.5 * Vi47
    }
    if (274.7 <= R && R < 281.1) {
        P = 0.5 * Vo47 + 0.5 * Vi48
    }
    if (281.1 <= R && R < 288) {
        P = 0.5 * Vo48 + 0.5 * Vi1
    }
    if (R >= 288) {
        R = 0
    }
}
let P = 0
let VZ48 = 0
let VZ47 = 0
let VZ46 = 0
let VZ45 = 0
let VZ44 = 0
let VZ43 = 0
let VZ42 = 0
let VZ41 = 0
let VZ40 = 0
let VZ39 = 0
let VZ38 = 0
let VZ37 = 0
let VZ36 = 0
let VZ35 = 0
let VZ34 = 0
let VZ33 = 0
let VZ32 = 0
let VZ31 = 0
let VZ30 = 0
let VZ29 = 0
let VZ28 = 0
let VZ27 = 0
let VZ26 = 0
let VZ25 = 0
let VZ24 = 0
let VZ23 = 0
let VZ22 = 0
let VZ21 = 0
let VZ20 = 0
let VZ19 = 0
let VZ18 = 0
let VZ17 = 0
let VZ16 = 0
let VZ15 = 0
let VZ14 = 0
let VZ13 = 0
let VZ12 = 0
let VZ11 = 0
let VZ10 = 0
let VZ9 = 0
let VZ8 = 0
let VZ7 = 0
let VZ6 = 0
let VZ5 = 0
let VZ4 = 0
let VZ3 = 0
let VZ2 = 0
let Vi = 0
let VZ1 = 0
let Zo = 0
let Zi = 0
let Z = 0
let Vi48 = 0
let Vi47 = 0
let Vi46 = 0
let Vi45 = 0
let Vi44 = 0
let Vi43 = 0
let Vi42 = 0
let Vi41 = 0
let Vi40 = 0
let Vi39 = 0
let Vi38 = 0
let Vi37 = 0
let Vi36 = 0
let Vi35 = 0
let Vi34 = 0
let Vi33 = 0
let Vi32 = 0
let Vi31 = 0
let Vi30 = 0
let Vi29 = 0
let Vi28 = 0
let Vi27 = 0
let Vi26 = 0
let Vi25 = 0
let Vi24 = 0
let Vi23 = 0
let Vi22 = 0
let Vi21 = 0
let Vi20 = 0
let Vi19 = 0
let Vi18 = 0
let Vi17 = 0
let Vi16 = 0
let Vi15 = 0
let Vi14 = 0
let Vi13 = 0
let Vi12 = 0
let Vi11 = 0
let Vi10 = 0
let Vi9 = 0
let Vi8 = 0
let Vi7 = 0
let Vi6 = 0
let Vi5 = 0
let Vi4 = 0
let Vi3 = 0
let Vi2 = 0
let Vi1 = 0
let Vo48 = 0
let Vo47 = 0
let Vo46 = 0
let Vo45 = 0
let Vo44 = 0
let Vo43 = 0
let Vo42 = 0
let Vo41 = 0
let Vo40 = 0
let Vo39 = 0
let Vo38 = 0
let Vo37 = 0
let Vo36 = 0
let Vo35 = 0
let Vo34 = 0
let Vo33 = 0
let Vo32 = 0
let Vo31 = 0
let Vo30 = 0
let Vo29 = 0
let Vo28 = 0
let Vo27 = 0
let Vo26 = 0
let Vo25 = 0
let Vo24 = 0
let Vo23 = 0
let Vo22 = 0
let Vo21 = 0
let Vo20 = 0
let Vo19 = 0
let Vo18 = 0
let Vo17 = 0
let Vo16 = 0
let Vo15 = 0
let Vo14 = 0
let Vo13 = 0
let Vo12 = 0
let Vo11 = 0
let Vo10 = 0
let Vo9 = 0
let Vo8 = 0
let Vo7 = 0
let Vo6 = 0
let Vo5 = 0
let Vo4 = 0
let Vo3 = 0
let Vo2 = 0
let Vo1 = 0
let R = 0
let Ro = 0
let on_off = false
let Log = false
input.setAccelerometerRange(AcceleratorRange.EightG)
Log = false
on_off = false
Ro = 0
R = 0
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Target)
basic.showIcon(IconNames.SmallDiamond)
basic.clearScreen()
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 500) {
        R += 1
        Ro += 1
    }
    加速度補正()
    Vo設定()
    Vi論理()
    if (Log == true) {
        datalogger.log(
        datalogger.createCV("Z", Z),
        datalogger.createCV("R", R),
        datalogger.createCV("P", P),
        datalogger.createCV("Vi", Vi)
        )
    }
    if (on_off == true) {
        VoVi制御()
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
