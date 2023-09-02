export interface WindowSizeConfig {
  width: number;
  height: number;
}

const defaultConfig = {
  'window-size': {
    width: 1100,
    height: 550,
  },
  'window-maximized': false,
  'window-position': {
    x: -1,
    y: -1,
  },
  'url': 'https://music.youtube.com',
  'options': {
    tray: false,
    appVisible: true,
    autoUpdates: true,
    alwaysOnTop: false,
    hideMenu: false,
    hideMenuWarned: false,
    startAtLogin: false,
    disableHardwareAcceleration: false,
    removeUpgradeButton: false,
    restartOnConfigChanges: false,
    trayClickPlayPause: false,
    autoResetAppCache: false,
    resumeOnStart: true,
    likeButtons: '',
    proxy: '',
    startingPage: '',
    overrideUserAgent: false,
    themes: {} as string[],
  },
  'plugins': {
    // Enabled plugins
    'navigation': {
      enabled: true,
    },
    'adblocker': {
      enabled: true,
      cache: true,
      blocker: 'In player',
      additionalBlockLists: [], // Additional list of filters, e.g "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt"
      disableDefaultLists: [],
    },
    // Disabled plugins
    'shortcuts': {
      enabled: false,
      overrideMediaKeys: false,
    },
    'downloader': {
      enabled: false,
      ffmpegArgs: [], // E.g. ["-b:a", "192k"] for an audio bitrate of 192kb/s
      downloadFolder: undefined, // Custom download folder (absolute path)
      preset: 'mp3',
    },
    'last-fm': {
      enabled: false,
      api_root: 'http://ws.audioscrobbler.com/2.0/',
      api_key: '04d76faaac8726e60988e14c105d421a', // Api key registered by @semvis123
      secret: 'a5d2a36fdf64819290f6982481eaffa2',
    },
    'discord': {
      enabled: false,
      autoReconnect: true, // If enabled, will try to reconnect to discord every 5 seconds after disconnecting or failing to connect
      activityTimoutEnabled: true, // If enabled, the discord rich presence gets cleared when music paused after the time specified below
      activityTimoutTime: 10 * 60 * 1000, // 10 minutes
      listenAlong: true, // Add a "listen along" button to rich presence
      hideDurationLeft: false, // Hides the start and end time of the song to rich presence
    },
    'notifications': {
      enabled: false,
      unpauseNotification: false,
      urgency: 'normal', // Has effect only on Linux
      // the following has effect only on Windows
      interactive: true,
      toastStyle: 1, // See plugins/notifications/utils for more info
      refreshOnPlayPause: false,
      trayControls: true,
      hideButtonText: false,
    },
    'precise-volume': {
      enabled: false,
      steps: 1, // Percentage of volume to change
      arrowsShortcut: true, // Enable ArrowUp + ArrowDown local shortcuts
      globalShortcuts: {
        volumeUp: '',
        volumeDown: '',
      },
      savedVolume: undefined, // Plugin save volume between session here
    },
    'sponsorblock': {
      enabled: false,
      apiURL: 'https://sponsor.ajay.app',
      categories: [
        'sponsor',
        'intro',
        'outro',
        'interaction',
        'selfpromo',
        'music_offtopic',
      ],
    },
    'video-toggle': {
      enabled: false,
      mode: 'custom',
      forceHide: false,
    },
    'picture-in-picture': {
      'enabled': false,
      'alwaysOnTop': true,
      'savePosition': true,
      'saveSize': false,
      'hotkey': 'P',
      'pip-position': [10, 10],
      'pip-size': [450, 275],
      'isInPiP': false,
    },
    'captions-selector': {
      enabled: false,
      disableCaptions: false,
      autoload: false,
      lastCaptionsCode: '',
      disabledCaptions: false,
    },
    'skip-silences': {
      onlySkipBeginning: false,
    },
    'crossfade': {
      enabled: false,
      fadeInDuration: 1500, // Ms
      fadeOutDuration: 5000, // Ms
      secondsBeforeEnd: 10, // S
      fadeScaling: 'linear', // 'linear', 'logarithmic' or a positive number in dB
    },
    'visualizer': {
      enabled: false,
      type: 'butterchurn',
      // Config per visualizer
      butterchurn: {
        preset: 'martin [shadow harlequins shape code] - fata morgana',
        renderingFrequencyInMs: 500,
        blendTimeInSeconds: 2.7,
      },
      vudio: {
        effect: 'lighting',
        accuracy: 128,
        lighting: {
          maxHeight: 160,
          maxSize: 12,
          lineWidth: 1,
          color: '#49f3f7',
          shadowBlur: 2,
          shadowColor: 'rgba(244,244,244,.5)',
          fadeSide: true,
          prettify: false,
          horizontalAlign: 'center',
          verticalAlign: 'middle',
          dottify: true,
        },
      },
      wave: {
        animations: [
          {
            type: 'Cubes',
            config: {
              bottom: true,
              count: 30,
              cubeHeight: 5,
              fillColor: { gradient: ['#FAD961', '#F76B1C'] },
              lineColor: 'rgba(0,0,0,0)',
              radius: 20,
            },
          },
          {
            type: 'Cubes',
            config: {
              top: true,
              count: 12,
              cubeHeight: 5,
              fillColor: { gradient: ['#FAD961', '#F76B1C'] },
              lineColor: 'rgba(0,0,0,0)',
              radius: 10,
            },
          },
          {
            type: 'Circles',
            config: {
              lineColor: {
                gradient: ['#FAD961', '#FAD961', '#F76B1C'],
                rotate: 90,
              },
              lineWidth: 4,
              diameter: 20,
              count: 10,
              frequencyBand: 'base',
            },
          },
        ],
      },
    },
  },
};

export default defaultConfig;
