/**
 * CINESYNC - DISCORD INSPIRED WATCH PARTY PLATFORM
 * Host Authority Master-Key Synchronization Engine
 */

const DEFAULT_EPISODES = [
  {
    "epNum": 1,
    "title": "Tập 1: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/306229b5-0438-4619-81dd-866dbb10026e/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 2,
    "title": "Tập 2: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/41068125-3a82-472a-ac25-d09c92265d18/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 3,
    "title": "Tập 3: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/10a44651-37f0-4e8b-9ae2-94b71181fb9b/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 4,
    "title": "Tập 4: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/02ab4cf2-6c46-453c-9136-99fc89dbdfa3/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 5,
    "title": "Tập 5: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/a75f80ee-19a2-4eef-9ae4-53d7f1147ca1/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 6,
    "title": "Tập 6: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/b402c002-e814-448b-9a40-5b585dc73461/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 7,
    "title": "Tập 7: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/1e73f964-85fb-4e42-909c-4a11133f80b7/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 8,
    "title": "Tập 8: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/29365016-f405-4555-b01a-fba427427624/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 9,
    "title": "Tập 9: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/ff1b0947-86db-48b3-9ec1-74b7307c435d/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 10,
    "title": "Tập 10: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/3073e0c7-24ac-4373-9ad4-77e03ce094ea/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 11,
    "title": "Tập 11: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/c9bb44d6-d32a-4bab-9f4e-779e32cbeca4/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 12,
    "title": "Tập 12: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/e04f3211-2c15-4041-baa0-b72dcdcd5097/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 13,
    "title": "Tập 13: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/87f4d89c-f02b-45df-b8cb-9134c09bbeba/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 14,
    "title": "Tập 14: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/07ec0a1c-b0fb-4eb3-967f-0a6dda244f36/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 15,
    "title": "Tập 15: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/b76bf236-5396-4855-a427-0e153f68e6cd/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 16,
    "title": "Tập 16: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/eb2a0110-08a7-4b9f-b528-42b937176318/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 17,
    "title": "Tập 17: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/d44a3d4b-fd64-41c3-a9a5-09942d47acb5/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 18,
    "title": "Tập 18: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/f02619b6-b065-4108-8db1-644b27391c3a/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 19,
    "title": "Tập 19: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/02c8143f-d2d0-4924-a139-a8e063643ee6/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 20,
    "title": "Tập 20: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/7a935553-b680-4dd5-87b3-4e33311fd89a/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 21,
    "title": "Tập 21: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/0c35da46-ba78-4ff9-8512-961725dbfd4b/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 22,
    "title": "Tập 22: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/20920a0d-b6e2-4558-acfd-1aa42726648b/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 23,
    "title": "Tập 23: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/1263aff5-12d3-48b5-a8d3-29703867a086/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 24,
    "title": "Tập 24: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/ce5d14b0-82dd-42fc-a289-f22873874424/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 25,
    "title": "Tập 25: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/cf6a24db-2c60-4528-9ae3-bdf42d8218c7/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 26,
    "title": "Tập 26: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/948fe8e2-6d31-4f6f-9c86-b00dc2349928/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 27,
    "title": "Tập 27: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/36070ecd-ee9a-4947-abc8-852c298c0c2f/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 28,
    "title": "Tập 28: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/3d5e0f69-da9f-4193-a0a5-027401e28180/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 29,
    "title": "Tập 29: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/655309d4-630f-4350-90c4-c1f58b2c5c56/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 30,
    "title": "Tập 30: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/718fe231-e761-498c-ad3c-be2b6ae1e7be/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 31,
    "title": "Tập 31: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/a170dc8d-9ca0-4787-baba-f6051b4b3439/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 32,
    "title": "Tập 32: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/2389afea-a6a4-443c-86fe-69ee304bd7e4/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 33,
    "title": "Tập 33: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/42979fcf-4718-4f39-952e-94b34d5c57f7/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 34,
    "title": "Tập 34: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/abb595fe-abc4-4cb6-a6d2-f090b8da1d59/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 35,
    "title": "Tập 35: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/c8d67a34-c3bb-4bee-85a2-58247acf3c00/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 36,
    "title": "Tập 36: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/58bfe49a-401e-4c34-828e-6d6307b9ef23/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 37,
    "title": "Tập 37: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/7dd9315a-3b5f-4fc3-b0af-796125c86b50/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 38,
    "title": "Tập 38: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/856a81ee-61e3-445f-9713-f2de9bfbbc56/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 39,
    "title": "Tập 39: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/1920f457-f966-47e6-a0b1-4abbca5aac0e/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 40,
    "title": "Tập 40: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/991b09e3-156d-440f-81b5-4f6244ab30ce/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 41,
    "title": "Tập 41: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/bc993c87-0665-4c4b-8bfb-a95c82eabd30/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 42,
    "title": "Tập 42: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/b3a60df1-f79e-451c-ad10-98a82d937469/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 43,
    "title": "Tập 43: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/d2faca59-c0ac-48f3-9b0a-9d8b2ce7e93d/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 44,
    "title": "Tập 44: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/c70591eb-79a9-417f-88a4-c41729a58353/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 45,
    "title": "Tập 45: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/4c2afe02-02f8-4de9-9a3e-fb2955bf435e/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 46,
    "title": "Tập 46: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/13d0252f-09a8-4f25-94ba-e362ba0cc09c/playlist.m3u8",
    "quality": "Full HD 1080p"
  },
  {
    "epNum": 47,
    "title": "Tập 47: Lan Hương Như Cố",
    "url": "https://vz-ef324221-9e9.b-cdn.net/44565e12-74dc-4c61-8e1e-30382897afb6/playlist.m3u8",
    "quality": "Full HD 1080p"
  }
];

// Auto-purge old demo cache so the 47 episodes load immediately
if (localStorage.getItem('cine_version') !== 'discord_host_v3') {
  localStorage.removeItem('cine_episodes');
  localStorage.setItem('cine_version', 'discord_host_v3');
}

// App State
const state = {
  episodes: JSON.parse(localStorage.getItem('cine_episodes') || 'null') || DEFAULT_EPISODES,
  currentEpisodeIndex: parseInt(localStorage.getItem('cine_current_ep') || '0', 10),
  selfName: localStorage.getItem('cine_self_name') || 'Người xem ' + Math.floor(100 + Math.random() * 900),
  partnerName: 'Thành viên',
  
  // Host Authority Role
  isHost: true, // Will be set to false if joining as guest
  hostName: 'Bạn',
  lastKnownHostTime: 0,
  lastKnownHostPaused: true,
  isApplyingRemote: false,

  // WebRTC
  peer: null,
  peerId: null,
  conn: null,
  call: null,
  localStream: null,
  isMicMuted: true,
  partnerMicMuted: true,

  // Audio Visualizer
  audioCtx: null,
  localAnalyser: null,
  remoteAnalyser: null,

  lastHeartbeatTime: 0
};

// DOM Elements
const video = document.getElementById('videoPlayer');
const playerContainer = document.getElementById('playerContainer');
const videoControls = document.getElementById('videoControls');
const guestSyncBanner = document.getElementById('guestSyncBanner');
const btnCatchup = document.getElementById('btnCatchup');
const actionHud = document.getElementById('actionHud');
const actionHudIcon = document.getElementById('actionHudIcon');
const actionHudText = document.getElementById('actionHudText');

const btnPlayPause = document.getElementById('btnPlayPause');
const btnRewind = document.getElementById('btnRewind');
const btnForward = document.getElementById('btnForward');
const curTimeDisplay = document.getElementById('curTime');
const durTimeDisplay = document.getElementById('durTime');
const progressWrap = document.getElementById('progressWrap');
const progressBar = document.getElementById('progressBar');
const bufferedBar = document.getElementById('bufferedBar');
const progressTooltip = document.getElementById('progressTooltip');

const volSlider = document.getElementById('volSlider');
const btnVol = document.getElementById('btnVol');
const btnSpeed = document.getElementById('btnSpeed');
const speedMenu = document.getElementById('speedMenu');
const btnPip = document.getElementById('btnPip');
const btnFullscreen = document.getElementById('btnFullscreen');

const hostPill = document.getElementById('hostPill');
const hostNameDisplay = document.getElementById('hostNameDisplay');
const connDot = document.getElementById('connDot');
const connStatusText = document.getElementById('connStatusText');
const btnShareRoom = document.getElementById('btnShareRoom');

const userCount = document.getElementById('userCount');
const selfCard = document.getElementById('selfCard');
const selfAvatarBox = document.getElementById('selfAvatarBox');
const selfNameText = document.getElementById('selfNameText');
const selfRoleBadge = document.getElementById('selfRoleBadge');
const selfStatusText = document.getElementById('selfStatusText');
const selfMicBadge = document.getElementById('selfMicBadge');

const partnerCard = document.getElementById('partnerCard');
const partnerAvatarBox = document.getElementById('partnerAvatarBox');
const partnerNameText = document.getElementById('partnerNameText');
const partnerRoleBadge = document.getElementById('partnerRoleBadge');
const partnerStatusText = document.getElementById('partnerStatusText');
const partnerMicBadge = document.getElementById('partnerMicBadge');
const btnTransferHost = document.getElementById('btnTransferHost');
const btnClaimHost = document.getElementById('btnClaimHost');
const btnToggleMic = document.getElementById('btnToggleMic');
const remoteAudio = document.getElementById('remoteAudio');

const btnTogglePlaylist = document.getElementById('btnTogglePlaylist');
const episodesDrawer = document.getElementById('episodesDrawer');
const btnCloseDrawer = document.getElementById('btnCloseDrawer');
const episodesList = document.getElementById('episodesList');

const btnSettings = document.getElementById('btnSettings');
const settingsModal = document.getElementById('settingsModal');
const btnCloseSettings = document.getElementById('btnCloseSettings');
const btnSaveSettings = document.getElementById('btnSaveSettings');
const btnResetSettings = document.getElementById('btnResetSettings');
const inputSelfName = document.getElementById('inputSelfName');
const inputVideoSources = document.getElementById('inputVideoSources');

let hlsInstance = null;

// ==========================================
// 1. INITIALIZATION & VIDEO SETUP
// ==========================================
function init() {
  updateUserUI();
  renderEpisodes();
  loadEpisode(state.currentEpisodeIndex, false);
  setupWebRTC();
  setupVideoEvents();
  setupEventListeners();
  setupAudioVisualizerLoop();
}

function updateUserUI() {
  selfNameText.textContent = state.selfName;
  inputSelfName.value = state.selfName;

  if (state.isHost) {
    hostNameDisplay.textContent = state.selfName;
    selfRoleBadge.textContent = 'CHỦ PHÒNG';
    selfRoleBadge.className = 'role-badge host-role';
    guestSyncBanner.classList.remove('active');
    btnTransferHost.style.display = state.conn ? 'inline-block' : 'none';
  } else {
    hostNameDisplay.textContent = state.hostName || 'Chủ phòng';
    selfRoleBadge.textContent = 'THÀNH VIÊN';
    selfRoleBadge.className = 'role-badge member-role';
    guestSyncBanner.classList.add('active');
    btnTransferHost.style.display = 'none';
  }
}

function loadEpisode(index, autoPlay = true) {
  if (index < 0 || index >= state.episodes.length) return;
  state.currentEpisodeIndex = index;
  localStorage.setItem('cine_current_ep', index);

  const ep = state.episodes[index];
  document.getElementById('movieTitle').textContent = ep.title;
  document.getElementById('streamQuality').textContent = '1080p FHD';

  // Highlight active channel in drawer
  document.querySelectorAll('.episode-channel').forEach((el, idx) => {
    el.classList.toggle('active', idx === index);
  });

  const url = ep.url;
  if (url.includes('.m3u8')) {
    if (Hls.isSupported()) {
      if (hlsInstance) hlsInstance.destroy();
      hlsInstance = new Hls({ enableWorker: true, lowLatencyMode: true });
      hlsInstance.loadSource(url);
      hlsInstance.attachMedia(video);

      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        // Automatically select highest resolution (1080p)
        if (hlsInstance.levels && hlsInstance.levels.length > 0) {
          let bestLevel = 0;
          let maxHeight = 0;
          hlsInstance.levels.forEach((lvl, i) => {
            if (lvl.height >= maxHeight) {
              maxHeight = lvl.height;
              bestLevel = i;
            }
          });
          hlsInstance.currentLevel = bestLevel;
          console.log('[HLS] Locked to level:', maxHeight + 'p');
        }
        if (autoPlay) video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
      if (autoPlay) video.play().catch(() => {});
    }
  } else {
    if (hlsInstance) {
      hlsInstance.destroy();
      hlsInstance = null;
    }
    video.src = url;
    if (autoPlay) video.play().catch(() => {});
  }

  showToast('📺 ' + ep.title);
}

// ==========================================
// 2. VIDEO PLAYER EVENTS & HOST BROADCAST
// ==========================================
function setupVideoEvents() {
  video.addEventListener('play', () => {
    btnPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    showActionHud('fa-play', 'Phát');

    // ONLY Host broadcasts play commands to guests!
    if (state.isHost && !state.isApplyingRemote) {
      sendData({
        type: 'HOST_ACTION',
        action: 'PLAY',
        time: video.currentTime,
        episodeIndex: state.currentEpisodeIndex
      });
    }
  });

  video.addEventListener('pause', () => {
    btnPlayPause.innerHTML = '<i class="fa-solid fa-play"></i>';
    showActionHud('fa-pause', 'Tạm dừng');

    // ONLY Host broadcasts pause commands to guests!
    if (state.isHost && !state.isApplyingRemote) {
      sendData({
        type: 'HOST_ACTION',
        action: 'PAUSE',
        time: video.currentTime,
        episodeIndex: state.currentEpisodeIndex
      });
    }
  });

  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const current = video.currentTime;
    const duration = video.duration;
    curTimeDisplay.textContent = formatTime(current);
    durTimeDisplay.textContent = formatTime(duration);

    const percent = (current / duration) * 100;
    progressBar.style.width = percent + '%';

    // Host periodic heartbeat (every 1.5s) to keep guests strictly aligned
    const now = Date.now();
    if (state.isHost && (now - state.lastHeartbeatTime > 1500) && !video.paused) {
      sendData({
        type: 'HOST_HEARTBEAT',
        time: current,
        isPaused: video.paused,
        episodeIndex: state.currentEpisodeIndex
      });
      state.lastHeartbeatTime = now;
    }
  });

  video.addEventListener('progress', () => {
    if (video.buffered.length > 0 && video.duration) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      const percent = (bufferedEnd / video.duration) * 100;
      bufferedBar.style.width = percent + '%';
    }
  });

  video.addEventListener('ended', () => {
    if (state.isHost) {
      if (state.currentEpisodeIndex + 1 < state.episodes.length) {
        const nextIdx = state.currentEpisodeIndex + 1;
        loadEpisode(nextIdx, true);
        sendData({
          type: 'HOST_ACTION',
          action: 'EPISODE',
          episodeIndex: nextIdx,
          time: 0
        });
      }
    }
  });
}

function showActionHud(iconClass, text) {
  actionHudIcon.className = 'fa-solid ' + iconClass;
  actionHudText.textContent = text;
  actionHud.classList.add('show');
  clearTimeout(actionHud.hudTimeout);
  actionHud.hudTimeout = setTimeout(() => {
    actionHud.classList.remove('show');
  }, 500);
}

function formatTime(sec) {
  if (isNaN(sec)) return "00:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

// ==========================================
// 3. HOST AUTHORITY SYNC & WEBRTC ENGINE
// ==========================================
function setupWebRTC() {
  const urlParams = new URLSearchParams(window.location.search);
  const targetRoom = urlParams.get('room');

  state.peer = new Peer({
    debug: 1,
    config: {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:global.stun.twilio.com:3478' }
      ]
    }
  });

  state.peer.on('open', (id) => {
    state.peerId = id;
    console.log('[WebRTC] Peer ID:', id);

    if (targetRoom) {
      // Guest joins Room created by Host
      state.isHost = false;
      state.hostName = 'Chủ phòng';
      connStatusText.textContent = 'Đang vào phòng...';
      updateUserUI();
      connectToPeer(targetRoom);
    } else {
      // Host creates new session
      state.isHost = true;
      state.hostName = state.selfName;
      connStatusText.textContent = 'Sẵn sàng mời bạn';
      window.history.replaceState({}, '', '?room=' + id);
      updateUserUI();
    }
  });

  state.peer.on('connection', (connection) => {
    state.conn = connection;
    setupDataConnection();
  });

  state.peer.on('call', (incomingCall) => {
    state.call = incomingCall;
    const streamToAnswer = state.localStream || createSilentAudioStream();
    incomingCall.answer(streamToAnswer);

    incomingCall.on('stream', (remoteStream) => {
      console.log('[Voice] Received remote voice stream');
      remoteAudio.srcObject = remoteStream;
      setupRemoteAudioAnalyser(remoteStream);
    });
  });

  state.peer.on('error', (err) => {
    console.warn('[WebRTC] Error:', err);
    connStatusText.textContent = 'Mất kết nối';
    connDot.classList.remove('online');
  });
}

function connectToPeer(remoteId) {
  const connection = state.peer.connect(remoteId, { reliable: true });
  state.conn = connection;
  setupDataConnection();

  if (state.localStream) {
    callMember(remoteId);
  }
}

function setupDataConnection() {
  state.conn.on('open', () => {
    console.log('[WebRTC] Connected with peer!');
    connDot.classList.add('online');
    connStatusText.textContent = 'Trực tuyến';
    userCount.textContent = '2 người';

    partnerCard.classList.remove('waiting');
    partnerNameText.textContent = state.isHost ? 'Thành viên mới' : 'Chủ phòng';
    partnerRoleBadge.style.display = 'inline-block';
    partnerRoleBadge.textContent = state.isHost ? 'THÀNH VIÊN' : 'CHỦ PHÒNG';
    partnerRoleBadge.className = 'role-badge ' + (state.isHost ? 'member-role' : 'host-role');
    partnerStatusText.textContent = 'Đang xem chung';

    if (state.isHost) {
      btnTransferHost.style.display = 'inline-block';
      // Host immediately sends full authoritative state to the newly joined guest
      sendData({
        type: 'HOST_FULL_SYNC',
        hostName: state.selfName,
        episodeIndex: state.currentEpisodeIndex,
        currentTime: video.currentTime,
        isPaused: video.paused
      });
      showToast('🟢 Thành viên đã tham gia phòng!');
    } else {
      // Guest announces presence and requests sync
      sendData({
        type: 'GUEST_JOIN',
        guestName: state.selfName,
        isMicMuted: state.isMicMuted
      });
      callMember(state.conn.peer);
      showToast('🟢 Đã vào phòng của Chủ phòng!');
    }
  });

  state.conn.on('data', (data) => {
    handleIncomingData(data);
  });

  state.conn.on('close', () => {
    connDot.classList.remove('online');
    connStatusText.textContent = '1 người';
    userCount.textContent = '1 người';
    partnerCard.classList.add('waiting');
    partnerNameText.textContent = 'Chờ thành viên...';
    partnerRoleBadge.style.display = 'none';
    partnerStatusText.textContent = 'Đã rời phòng';
    btnTransferHost.style.display = 'none';
    showToast('⚠️ Thành viên đã rời phòng.');
  });
}

function sendData(data) {
  if (state.conn && state.conn.open) {
    state.conn.send(data);
  }
}

// ----------------------------------------------------
// ROCK-SOLID HOST AUTHORITATIVE SYNC HANDLER
// ----------------------------------------------------
function handleIncomingData(data) {
  switch (data.type) {
    // Guest joins: Host learns guest's name
    case 'GUEST_JOIN':
      if (data.guestName) {
        partnerNameText.textContent = data.guestName;
        state.partnerName = data.guestName;
      }
      updatePartnerMicUI(data.isMicMuted);
      // Reply with current host state
      if (state.isHost) {
        sendData({
          type: 'HOST_FULL_SYNC',
          hostName: state.selfName,
          episodeIndex: state.currentEpisodeIndex,
          currentTime: video.currentTime,
          isPaused: video.paused
        });
      }
      break;

    // Full sync from Host when Guest enters
    case 'HOST_FULL_SYNC':
      if (data.hostName) {
        state.hostName = data.hostName;
        partnerNameText.textContent = data.hostName;
      }
      updateUserUI();

      state.isApplyingRemote = true;
      if (data.episodeIndex !== undefined && data.episodeIndex !== state.currentEpisodeIndex) {
        loadEpisode(data.episodeIndex, !data.isPaused);
      }
      if (data.currentTime !== undefined) {
        video.currentTime = data.currentTime;
        state.lastKnownHostTime = data.currentTime;
      }
      if (data.isPaused) {
        video.pause();
        state.lastKnownHostPaused = true;
      } else {
        video.play().catch(() => {});
        state.lastKnownHostPaused = false;
      }
      setTimeout(() => { state.isApplyingRemote = false; }, 300);
      showToast('⚡ Đã đồng bộ với Chủ phòng');
      break;

    // Direct playback commands from Host
    case 'HOST_ACTION':
      if (state.isHost) return; // Host ignores remote actions

      state.isApplyingRemote = true;
      state.lastKnownHostTime = data.time;

      if (data.action === 'EPISODE' && data.episodeIndex !== undefined) {
        loadEpisode(data.episodeIndex, true);
      } else if (data.action === 'PLAY') {
        if (Math.abs(video.currentTime - data.time) > 1.0) {
          video.currentTime = data.time;
        }
        video.play().catch(() => {});
        state.lastKnownHostPaused = false;
      } else if (data.action === 'PAUSE') {
        video.currentTime = data.time;
        video.pause();
        state.lastKnownHostPaused = true;
      } else if (data.action === 'SEEK') {
        video.currentTime = data.time;
      }
      setTimeout(() => { state.isApplyingRemote = false; }, 300);
      break;

    // Periodic heartbeat from Host
    case 'HOST_HEARTBEAT':
      if (state.isHost) return;

      state.lastKnownHostTime = data.time;
      state.lastKnownHostPaused = data.isPaused;

      // Check episode mismatch
      if (data.episodeIndex !== undefined && data.episodeIndex !== state.currentEpisodeIndex) {
        state.isApplyingRemote = true;
        loadEpisode(data.episodeIndex, !data.isPaused);
        setTimeout(() => { state.isApplyingRemote = false; }, 300);
        return;
      }

      // Check playback drift: If drift > 1.2s, snap to Host time
      const drift = Math.abs(video.currentTime - data.time);
      if (drift > 1.2) {
        state.isApplyingRemote = true;
        video.currentTime = data.time;
        setTimeout(() => { state.isApplyingRemote = false; }, 300);
      }

      // Check pause mismatch
      if (video.paused !== data.isPaused) {
        state.isApplyingRemote = true;
        if (data.isPaused) video.pause();
        else video.play().catch(() => {});
        setTimeout(() => { state.isApplyingRemote = false; }, 300);
      }
      break;

    // Host transfer
    case 'TRANSFER_HOST':
      state.isHost = true;
      state.hostName = state.selfName;
      updateUserUI();
      showToast('👑 Bạn đã được trao quyền Chủ phòng!');
      break;

    case 'CLAIM_HOST_REQUEST':
      if (state.isHost) {
        const accept = confirm(data.requesterName + ' muốn nhận quyền Chủ phòng. Bạn có đồng ý trao quyền?');
        if (accept) {
          state.isHost = false;
          state.hostName = data.requesterName;
          updateUserUI();
          sendData({ type: 'TRANSFER_HOST' });
          showToast('👑 Đã chuyển quyền Chủ phòng cho ' + data.requesterName);
        }
      }
      break;

    case 'MIC_STATUS':
      updatePartnerMicUI(data.isMuted);
      break;
  }
}

// ==========================================
// 4. DISCORD VOICE CHAT (P2P WEBRTC)
// ==========================================
async function toggleMicrophone() {
  if (state.isMicMuted) {
    try {
      if (!state.localStream) {
        state.localStream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        });
        setupLocalAudioAnalyser(state.localStream);

        if (state.conn && state.conn.peer) {
          callMember(state.conn.peer);
        }
      } else {
        state.localStream.getAudioTracks().forEach(track => track.enabled = true);
      }

      state.isMicMuted = false;
      btnToggleMic.classList.remove('muted');
      btnToggleMic.innerHTML = '<i class="fa-solid fa-microphone"></i>';
      selfMicBadge.classList.remove('muted');
      selfMicBadge.innerHTML = '<i class="fa-solid fa-microphone"></i>';
      selfStatusText.textContent = 'Mic đang bật';
      sendData({ type: 'MIC_STATUS', isMuted: false });
      showToast('🎤 Đã bật Mic');
    } catch (err) {
      console.error('Microphone error:', err);
      alert('Vui lòng cho phép quyền truy cập Micro trên trình duyệt.');
    }
  } else {
    if (state.localStream) {
      state.localStream.getAudioTracks().forEach(track => track.enabled = false);
    }
    state.isMicMuted = true;
    btnToggleMic.classList.add('muted');
    btnToggleMic.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>';
    selfMicBadge.classList.add('muted');
    selfMicBadge.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>';
    selfAvatarBox.classList.remove('speaking');
    selfStatusText.textContent = 'Mic đã tắt';
    sendData({ type: 'MIC_STATUS', isMuted: true });
    showToast('🔇 Đã tắt Mic');
  }
}

function callMember(remotePeerId) {
  if (!state.peer) return;
  const outgoingCall = state.peer.call(remotePeerId, state.localStream || createSilentAudioStream());
  state.call = outgoingCall;

  outgoingCall.on('stream', (remoteStream) => {
    remoteAudio.srcObject = remoteStream;
    setupRemoteAudioAnalyser(remoteStream);
  });
}

function updatePartnerMicUI(isMuted) {
  state.partnerMicMuted = isMuted;
  if (!isMuted) {
    partnerMicBadge.classList.remove('muted');
    partnerMicBadge.innerHTML = '<i class="fa-solid fa-microphone"></i>';
    partnerStatusText.textContent = 'Mic đang bật';
  } else {
    partnerMicBadge.classList.add('muted');
    partnerMicBadge.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>';
    partnerAvatarBox.classList.remove('speaking');
    partnerStatusText.textContent = 'Mic đã tắt';
  }
}

function createSilentAudioStream() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const dst = osc.connect(ctx.createMediaStreamDestination());
  osc.start();
  const track = dst.stream.getAudioTracks()[0];
  track.enabled = false;
  return dst.stream;
}

// Discord Audio Visualizer: Green Speaking Pulse Ring!
function setupLocalAudioAnalyser(stream) {
  if (!state.audioCtx) state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const source = state.audioCtx.createMediaStreamSource(stream);
  state.localAnalyser = state.audioCtx.createAnalyser();
  state.localAnalyser.fftSize = 64;
  source.connect(state.localAnalyser);
}

function setupRemoteAudioAnalyser(stream) {
  if (!state.audioCtx) state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  try {
    const source = state.audioCtx.createMediaStreamSource(stream);
    state.remoteAnalyser = state.audioCtx.createAnalyser();
    state.remoteAnalyser.fftSize = 64;
    source.connect(state.remoteAnalyser);
  } catch (e) {
    console.warn('AudioContext error:', e);
  }
}

function setupAudioVisualizerLoop() {
  const localData = new Uint8Array(32);
  const remoteData = new Uint8Array(32);

  function checkVolume() {
    // Check self speaking
    if (state.localAnalyser && !state.isMicMuted) {
      state.localAnalyser.getByteFrequencyData(localData);
      const avg = localData.reduce((a, b) => a + b, 0) / localData.length;
      if (avg > 15) {
        selfAvatarBox.classList.add('speaking');
      } else {
        selfAvatarBox.classList.remove('speaking');
      }
    } else {
      selfAvatarBox.classList.remove('speaking');
    }

    // Check remote speaking
    if (state.remoteAnalyser && !state.partnerMicMuted) {
      state.remoteAnalyser.getByteFrequencyData(remoteData);
      const avg = remoteData.reduce((a, b) => a + b, 0) / remoteData.length;
      if (avg > 15) {
        partnerAvatarBox.classList.add('speaking');
      } else {
        partnerAvatarBox.classList.remove('speaking');
      }
    } else {
      partnerAvatarBox.classList.remove('speaking');
    }

    requestAnimationFrame(checkVolume);
  }

  requestAnimationFrame(checkVolume);
}

// ==========================================
// 5. PLAYLIST, SETTINGS & CONTROLS
// ==========================================
function renderEpisodes() {
  episodesList.innerHTML = '';
  state.episodes.forEach((ep, idx) => {
    const item = document.createElement('div');
    item.className = 'episode-channel ' + (idx === state.currentEpisodeIndex ? 'active' : '');
    item.innerHTML = `
      <div class="episode-channel-left">
        <i class="fa-solid fa-play episode-icon"></i>
        <span class="episode-label">${ep.title}</span>
      </div>
      <span class="episode-res">1080p</span>
    `;
    item.addEventListener('click', () => {
      if (!state.isHost) {
        showToast('⚠️ Chỉ Chủ phòng mới có quyền đổi tập phim!');
        return;
      }
      loadEpisode(idx, true);
      sendData({
        type: 'HOST_ACTION',
        action: 'EPISODE',
        episodeIndex: idx,
        time: 0
      });
      episodesDrawer.classList.remove('open');
    });
    episodesList.appendChild(item);
  });
}

function setupEventListeners() {
  // Play/Pause button
  btnPlayPause.addEventListener('click', () => {
    if (!state.isHost) {
      showToast('⚠️ Bạn đang ở chế độ xem theo Chủ phòng!');
      return;
    }
    if (video.paused) video.play();
    else video.pause();
  });

  video.addEventListener('click', () => {
    if (!state.isHost) {
      showToast('⚠️ Bạn đang ở chế độ xem theo Chủ phòng!');
      return;
    }
    if (video.paused) video.play();
    else video.pause();
  });

  // Rewind / Forward (Host only)
  btnRewind.addEventListener('click', () => {
    if (!state.isHost) {
      showToast('⚠️ Chỉ Chủ phòng mới có quyền tua phim!');
      return;
    }
    video.currentTime = Math.max(0, video.currentTime - 10);
    sendData({
      type: 'HOST_ACTION',
      action: 'SEEK',
      time: video.currentTime
    });
    showActionHud('fa-rotate-left', '-10s');
  });

  btnForward.addEventListener('click', () => {
    if (!state.isHost) {
      showToast('⚠️ Chỉ Chủ phòng mới có quyền tua phim!');
      return;
    }
    video.currentTime = Math.min(video.duration || 0, video.currentTime + 10);
    sendData({
      type: 'HOST_ACTION',
      action: 'SEEK',
      time: video.currentTime
    });
    showActionHud('fa-rotate-right', '+10s');
  });

  // Progress Bar Seek
  progressWrap.addEventListener('click', (e) => {
    if (!state.isHost) {
      showToast('⚠️ Chỉ Chủ phòng mới có quyền tua phim!');
      return;
    }
    const rect = progressWrap.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * (video.duration || 0);
    video.currentTime = seekTime;
    sendData({
      type: 'HOST_ACTION',
      action: 'SEEK',
      time: seekTime
    });
  });

  progressWrap.addEventListener('mousemove', (e) => {
    const rect = progressWrap.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const hoverTime = pos * (video.duration || 0);
    progressTooltip.style.display = 'block';
    progressTooltip.style.left = (e.clientX - rect.left) + 'px';
    progressTooltip.textContent = formatTime(hoverTime);
  });

  progressWrap.addEventListener('mouseleave', () => {
    progressTooltip.style.display = 'none';
  });

  // Catchup Button for Guests
  btnCatchup.addEventListener('click', () => {
    if (state.lastKnownHostTime !== undefined) {
      video.currentTime = state.lastKnownHostTime;
      if (state.lastKnownHostPaused) video.pause();
      else video.play().catch(() => {});
      showToast('⚡ Đã bắt kịp thời gian của Chủ phòng!');
    }
  });

  // Volume
  volSlider.addEventListener('input', (e) => {
    video.volume = e.target.value;
    updateVolIcon();
  });

  btnVol.addEventListener('click', () => {
    video.muted = !video.muted;
    updateVolIcon();
  });

  function updateVolIcon() {
    if (video.muted || video.volume === 0) {
      btnVol.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else if (video.volume < 0.5) {
      btnVol.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
    } else {
      btnVol.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
  }

  // Speed
  speedMenu.querySelectorAll('.speed-option').forEach(item => {
    item.addEventListener('click', () => {
      const speed = parseFloat(item.dataset.speed);
      video.playbackRate = speed;
      btnSpeed.textContent = speed + 'x';
      speedMenu.querySelectorAll('.speed-option').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Fullscreen & PiP
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      playerContainer.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  btnPip.addEventListener('click', async () => {
    try {
      if (video !== document.pictureInPictureElement) {
        await video.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (e) {}
  });

  // Mic Toggle
  btnToggleMic.addEventListener('click', toggleMicrophone);

  // Transfer Host Key button
  btnTransferHost.addEventListener('click', () => {
    if (state.isHost && state.conn) {
      const ok = confirm('Bạn có muốn chuyển quyền Chủ phòng cho thành viên?');
      if (ok) {
        state.isHost = false;
        state.hostName = state.partnerName;
        updateUserUI();
        sendData({ type: 'TRANSFER_HOST' });
        showToast('👑 Đã trao quyền Chủ phòng cho ' + state.partnerName);
      }
    }
  });

  // Claim Host Key (Key icon)
  btnClaimHost.addEventListener('click', () => {
    if (!state.isHost) {
      sendData({
        type: 'CLAIM_HOST_REQUEST',
        requesterName: state.selfName
      });
      showToast('📩 Đã gửi yêu cầu nhận quyền Chủ phòng...');
    } else {
      showToast('👑 Bạn đang là Chủ phòng!');
    }
  });

  // Share room URL
  btnShareRoom.addEventListener('click', () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      showToast('📋 Đã sao chép link mời phòng xem!');
    }).catch(() => {
      prompt('Link phòng:', url);
    });
  });

  // Drawer
  btnTogglePlaylist.addEventListener('click', () => {
    episodesDrawer.classList.toggle('open');
  });
  btnCloseDrawer.addEventListener('click', () => {
    episodesDrawer.classList.remove('open');
  });

  // Settings
  btnSettings.addEventListener('click', () => {
    inputSelfName.value = state.selfName;
    inputVideoSources.value = state.episodes.map(ep => ep.title + ' | ' + ep.url).join('\n');
    settingsModal.classList.add('open');
  });
  btnCloseSettings.addEventListener('click', () => settingsModal.classList.remove('open'));

  btnSaveSettings.addEventListener('click', () => {
    state.selfName = inputSelfName.value.trim() || 'Người xem';
    localStorage.setItem('cine_self_name', state.selfName);
    updateUserUI();

    const lines = inputVideoSources.value.split('\n').filter(l => l.trim().length > 0);
    const newEps = [];
    lines.forEach((line, i) => {
      const parts = line.split('|');
      if (parts.length >= 2) {
        newEps.push({
          title: parts[0].trim(),
          url: parts[1].trim(),
          quality: '1080p FHD'
        });
      }
    });

    if (newEps.length > 0) {
      state.episodes = newEps;
      localStorage.setItem('cine_episodes', JSON.stringify(newEps));
      renderEpisodes();
      loadEpisode(0, false);
    }

    settingsModal.classList.remove('open');
    showToast('💾 Đã lưu cài đặt phòng thành công!');
  });

  btnResetSettings.addEventListener('click', () => {
    localStorage.removeItem('cine_episodes');
    state.episodes = DEFAULT_EPISODES;
    renderEpisodes();
    loadEpisode(0, false);
    settingsModal.classList.remove('open');
    showToast('🔄 Đã khôi phục 47 tập mặc định');
  });

  // Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space') {
      e.preventDefault();
      btnPlayPause.click();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      btnRewind.click();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      btnForward.click();
    } else if (e.key.toLowerCase() === 'f') {
      e.preventDefault();
      btnFullscreen.click();
    } else if (e.key.toLowerCase() === 'm') {
      e.preventDefault();
      btnToggleMic.click();
    }
  });
}

function showToast(msg) {
  const toastStack = document.getElementById('toastStack');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<i class="fa-solid fa-bell"></i> <span>' + msg + '</span>';
  toastStack.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-8px)';
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

// Start
window.addEventListener('DOMContentLoaded', init);

