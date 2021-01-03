/**
 * @name AudioMgr.ts
 * @description 音乐音效管理
 * @author Created by jun on 2018.4.7
 */

export default class AudioMgr {
    private static _instance: AudioMgr;

    private constructor() {
        this.init();
    }

    public static getInstance(): AudioMgr {
        if (!AudioMgr._instance) {
            AudioMgr._instance = new AudioMgr();
        }
        return AudioMgr._instance;
    }

    /** 音乐大小 */
    private _musicVolume: number = 1.0;
    /** 音效大小 */
    private _soundVolume: number = 1.0;
    /** 当前播放音乐ID */
    private _currMusicID: number = -1;
    private _currMusicPath: string = "";
    private _currMusicClip: cc.AudioClip = null;
    /** 当前播放音效ID */
    private _currSoundID: number = -1;
    private _currSoundPath: string = "";
    private _currSoundClip: cc.AudioClip = null;

    /**
     * 初始化音乐音效
     */
    public init() {
        
    }

    /**
     * 播放音乐，循环播放，比如背景音乐
     * @param bundleName AssetBundle名称
     * @param assetPath 音乐资源地址
     */
    public playMusic(bundleName: string, assetPath: string) {
        console.log("from [" + bundleName + "AB] load music [" + assetPath + "] succ");
        assetPath = "audio/" + assetPath;

        if (this._currMusicPath == assetPath && cc.audioEngine.getState(this._currMusicID) > 0) {
            return;
        }
        this.stopMusic();

        if (this._currMusicClip && bundleName != "common") {
            cc.assetManager.releaseAsset(this._currMusicClip);
        }

        let bundle = cc.assetManager.getBundle(bundleName);
        if (bundle) {
            bundle.load(assetPath, cc.AudioClip, (err, clip: cc.AudioClip) => {
                this._currMusicPath = assetPath;
                this._currMusicClip = clip
                this._currMusicID = cc.audioEngine.play(this._currMusicClip, true, this._musicVolume);
            });
        }
    }

    /**
     * 停止音乐播放
     */
    public stopMusic() {
        if (this._currMusicID >= 0) {
            cc.audioEngine.stop(this._currMusicID);
        }
    }

    /**
     * 播放音效，播放一次，比如按钮音效
     * @param bundleName AssetBundle名称
     * @param assetPath 音乐资源地址
     */
    public playSound(bundleName: string, assetPath: string) {
        if (assetPath != "effClick") {
            console.log("from [" + bundleName + "AB] load sound [" + assetPath + "] succ");
        }
        assetPath = "audio/" + assetPath;
        
        if (this._currSoundID >= 0 && cc.audioEngine.getState(this._currSoundID) > 0) {
            return
        }

        if (this._currSoundClip && bundleName != "common") {
            cc.assetManager.releaseAsset(this._currSoundClip);
        }

        let bundle = cc.assetManager.getBundle(bundleName);
        if (bundle) {
            bundle.load(assetPath, cc.AudioClip, (err, clip: cc.AudioClip) => {
                this._currSoundPath = assetPath;
                this._currSoundClip = clip
                this._currSoundID = cc.audioEngine.play(this._currSoundClip, false, this._soundVolume);
            });
        }
    }

    /**
     * 播放默认音效，播放一次，比如按钮音效
     * @param bundleName AssetBundle名称
     * @param assetPath 音乐资源地址
     */
    public defaultSound(bundleName?: string, assetPath?: string) {
        let tempBundleName: string = "Common";
        let tempAssetPath: string = "effClick";
        if (bundleName) {
            tempBundleName = bundleName;
        }
        if (assetPath) {
            tempAssetPath = assetPath;
        }
        this.playSound(tempBundleName, tempAssetPath);
    }

    /**
     * 停止音效播放
     */
    public stopSound() {
        if (this._currSoundID >= 0) {
            cc.audioEngine.stop(this._currSoundID);
        }
    }

    /**
     * 暂停所有音乐音效
     */
    public pauseAll() {
        cc.audioEngine.pauseAll();
    }

    /**
     * 恢复所有音乐音效
     */
    public resumeAll() {
        cc.audioEngine.resumeAll();
    }

    set musicVolume(value: number) {
        if (this._musicVolume != value) {
            this._musicVolume = value;

            if (this._currMusicID >= 0) {
                cc.audioEngine.setVolume(this._musicVolume, value);
            }
        }
    }

    get musicVolume(): number {
        return this._musicVolume;
    }

    set soundVolume(value: number) {
        if (this._soundVolume != value) {
            this._soundVolume = value;
        }
    }

    get soundVolume(): number {
        return this._soundVolume;
    }
}
