/**
 * CINEMA TOGETHER - VIP PARTNER CO-WATCHING ENGINE
 * Pure JS + WebRTC (PeerJS) Voice Chat & Priority Sync
 */

// Default Demo Episodes (Can be configured in Settings for Bunny.net / Cloudflare links)
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

// App State
const state = {
  episodes: JSON.parse(localStorage.getItem('cine_episodes') || 'null') || DEFAULT_EPISODES,
  currentEpisodeIndex: parseInt(localStorage.getItem('cine_current_ep') || '0', 10),
  selfName: localStorage.getItem('cine_self_name') || 'Anh',
  partnerName: localStorage.getItem('cine_partner_name') || 'Em',
  priorityRole: localStorage.getItem('cine_priority_role') || 'partner', // 'partner' | 'self' | 'both'
  
  // WebRTC
  peer: null,
  peerId: null,
  conn: null, // Data channel
  call: null, // Media (voice) call
  localStream: null,
  isMicMuted: true,
  partnerMicMuted: true,
  
  // Voice visualizer
  audioCtx: null,
  localAnalyser: null,
  remoteAnalyser: null,

  // Sync state
  isHost: false,
  isRemoteBuffering: false,
  ignoreNextSyncEvent: false,
  lastBroadcastTime: 0
};

// DOM Elements
const video = document.getElementById('videoPlayer');
const videoWrapper = document.getElementById('videoWrapper');
const customControls = document.getElementById('customControls');
const syncOverlay = document.getElementById('syncOverlay');
const syncOverlayText = document.getElementById('syncOverlayText');
const actionHud = document.getElementById('actionHud');
const actionHudIcon = document.getElementById('actionHudIcon');
const actionHudText = document.getElementById('actionHudText');

const btnPlayPause = document.getElementById('btnPlayPause');
const btnRewind = document.getElementById('btnRewind');
const btnForward = document.getElementById('btnForward');
const curTimeDisplay = document.getElementById('curTime');
const durTimeDisplay = document.getElementById('durTime');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');
const bufferedBar = document.getElementById('bufferedBar');
const progressHover = document.getElementById('progressHover');

const volSlider = document.getElementById('volSlider');
const btnVol = document.getElementById('btnVol');
const btnSpeed = document.getElementById('btnSpeed');
const speedMenu = document.getElementById('speedMenu');
const btnPip = document.getElementById('btnPip');
const btnFullscreen = document.getElementById('btnFullscreen');

const connDot = document.getElementById('connDot');
const connStatus = document.getElementById('connStatus');
const btnShareRoom = document.getElementById('btnShareRoom');
const priorityBadge = document.getElementById('priorityBadge');
const priorityName = document.getElementById('priorityName');

const selfAvatar = document.getElementById('selfAvatar');
const selfRing = document.getElementById('selfRing');
const selfNameDisplay = document.getElementById('selfNameDisplay');
const selfMicBadge = document.getElementById('selfMicBadge');
const selfState = document.getElementById('selfState');
const btnToggleMic = document.getElementById('btnToggleMic');

const partnerAvatar = document.getElementById('partnerAvatar');
const partnerRing = document.getElementById('partnerRing');
const partnerNameDisplay = document.getElementById('partnerNameDisplay');
const partnerMicBadge = document.getElementById('partnerMicBadge');
const partnerState = document.getElementById('partnerState');
const remoteAudio = document.getElementById('remoteAudio');

const btnTogglePlaylist = document.getElementById('btnTogglePlaylist');
const playlistDrawer = document.getElementById('playlistDrawer');
const btnClosePlaylist = document.getElementById('btnClosePlaylist');
const playlistItems = document.getElementById('playlistItems');

const btnSettings = document.getElementById('btnSettings');
const settingsModal = document.getElementById('settingsModal');
const btnCloseSettings = document.getElementById('btnCloseSettings');
const btnSaveSettings = document.getElementById('btnSaveSettings');
const btnResetSettings = document.getElementById('btnResetSettings');
const inputSelfName = document.getElementById('inputSelfName');
const inputPartnerName = document.getElementById('inputPartnerName');
const selectPriorityRole = document.getElementById('selectPriorityRole');
const inputVideoSources = document.getElementById('inputVideoSources');

let hlsInstance = null;
let controlsTimeout = null;

// ==========================================
// 1. INITIALIZATION & VIDEO SETUP
// ==========================================
function init() {
  updateProfileUI();
  renderPlaylist();
  loadEpisode(state.currentEpisodeIndex, false);
  setupWebRTC();
  setupVideoEvents();
  setupEventListeners();
  setupAudioVisualizerLoop();
}

function updateProfileUI() {
  selfNameDisplay.textContent = state.selfName;
  partnerNameDisplay.textContent = state.conn ? state.partnerName : 'Chờ kết nối...';
  
  if (state.priorityRole === 'partner') {
    priorityName.textContent = state.partnerName;
  } else if (state.priorityRole === 'self') {
    priorityName.textContent = state.selfName;
  } else {
    priorityName.textContent = 'Bình đẳng';
  }
}

function loadEpisode(index, autoPlay = true) {
  if (index < 0 || index >= state.episodes.length) return;
  state.currentEpisodeIndex = index;
  localStorage.setItem('cine_current_ep', index);

  const ep = state.episodes[index];
  document.getElementById('movieTitle').textContent = ep.title;
  document.getElementById('streamQuality').textContent = ep.quality || 'Auto 1080p';

  // Highlight active playlist item
  document.querySelectorAll('.playlist-item').forEach((el, idx) => {
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
          document.getElementById('streamQuality').textContent = `${maxHeight}p Full HD`;
          console.log(`[HLS] Locked to resolution: ${maxHeight}p`);
        }
        if (autoPlay) video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native Safari
      video.src = url;
      if (autoPlay) video.play().catch(() => {});
    }
  } else {
    // Normal MP4 file
    if (hlsInstance) {
      hlsInstance.destroy();
      hlsInstance = null;
    }
    video.src = url;
    if (autoPlay) video.play().catch(() => {});
  }

  showToast(`Đang phát: ${ep.title}`);
}

// ==========================================
// 2. VIDEO PLAYER CONTROLS & BUFFERING SYNC
// ==========================================
function setupVideoEvents() {
  // Play / Pause
  video.addEventListener('play', () => {
    btnPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    showActionHud('fa-play', 'Phát');
    if (!state.ignoreNextSyncEvent) {
      sendData({ type: 'SYNC_PLAY', time: video.currentTime });
    }
    state.ignoreNextSyncEvent = false;
  });

  video.addEventListener('pause', () => {
    btnPlayPause.innerHTML = '<i class="fa-solid fa-play"></i>';
    showActionHud('fa-pause', 'Tạm dừng');
    if (!state.ignoreNextSyncEvent && !state.isRemoteBuffering) {
      sendData({ type: 'SYNC_PAUSE', time: video.currentTime });
    }
    state.ignoreNextSyncEvent = false;
  });

  // Time & Progress Update
  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const current = video.currentTime;
    const duration = video.duration;
    curTimeDisplay.textContent = formatTime(current);
    durTimeDisplay.textContent = formatTime(duration);

    const percent = (current / duration) * 100;
    progressBar.style.width = `${percent}%`;

    // Heartbeat sync every 2 seconds if Host or Partner
    const now = Date.now();
    if (now - state.lastBroadcastTime > 2000 && !video.paused) {
      sendData({ type: 'HEARTBEAT', time: current });
      state.lastBroadcastTime = now;
    }
  });

  // Buffer Progress
  video.addEventListener('progress', () => {
    if (video.buffered.length > 0 && video.duration) {
      const bufferedEnd = video.buffered.end(video.buffered.length - 1);
      const percent = (bufferedEnd / video.duration) * 100;
      bufferedBar.style.width = `${percent}%`;
    }
  });

  // ----------------------------------------------------
  // CRITICAL REQUIREMENT: PRIORITY BUFFERING HANDLING
  // ----------------------------------------------------
  video.addEventListener('waiting', () => {
    // Local device is experiencing network lag / buffering
    console.log('[Sync] Local video is waiting/buffering...');
    sendData({
      type: 'BUFFERING_STATE',
      isBuffering: true,
      time: video.currentTime
    });
  });

  video.addEventListener('playing', () => {
    // Local buffering resolved and playback resumed
    sendData({
      type: 'BUFFERING_STATE',
      isBuffering: false,
      time: video.currentTime
    });
  });

  // Auto next episode on ended
  video.addEventListener('ended', () => {
    if (state.currentEpisodeIndex + 1 < state.episodes.length) {
      const nextIdx = state.currentEpisodeIndex + 1;
      loadEpisode(nextIdx, true);
      sendData({ type: 'SYNC_EPISODE', index: nextIdx });
    }
  });
}

function showActionHud(iconClass, text) {
  actionHudIcon.className = `fa-solid ${iconClass}`;
  actionHudText.textContent = text;
  actionHud.classList.add('show');
  clearTimeout(actionHud.hudTimeout);
  actionHud.hudTimeout = setTimeout(() => {
    actionHud.classList.remove('show');
  }, 600);
}

function formatTime(sec) {
  if (isNaN(sec)) return "00:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

// ==========================================
// 3. WEBRTC P2P VOICE & SYNC DATA CHANNEL
// ==========================================
function setupWebRTC() {
  const urlParams = new URLSearchParams(window.location.search);
  const targetRoom = urlParams.get('room');

  // Initialize PeerJS with public cloud signaling
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
    console.log('[WebRTC] My Peer ID:', id);

    if (targetRoom) {
      // Guest joins Room created by Partner/Host
      state.isHost = false;
      connStatus.textContent = `Đang vào phòng...`;
      connectToPeer(targetRoom);
    } else {
      // Room Host creates new session
      state.isHost = true;
      connStatus.textContent = `Sẵn sàng mời bạn`;
      window.history.replaceState({}, '', `?room=${id}`);
    }
  });

  // Handle incoming data connection
  state.peer.on('connection', (connection) => {
    state.conn = connection;
    setupDataConnection();
  });

  // Handle incoming voice call
  state.peer.on('call', (incomingCall) => {
    state.call = incomingCall;
    
    // Answer with local mic stream if available or silence
    if (state.localStream) {
      incomingCall.answer(state.localStream);
    } else {
      // Create empty/silent audio track so WebRTC call connects immediately
      const silentStream = createSilentAudioStream();
      incomingCall.answer(silentStream);
    }

    incomingCall.on('stream', (remoteStream) => {
      console.log('[WebRTC Voice] Received remote voice stream');
      remoteAudio.srcObject = remoteStream;
      setupRemoteAudioAnalyser(remoteStream);
      partnerRing.classList.remove('speaking');
    });
  });

  state.peer.on('error', (err) => {
    console.warn('[WebRTC] Error:', err);
    connStatus.textContent = 'Mất kết nối';
    connDot.classList.remove('connected');
  });
}

function connectToPeer(remoteId) {
  const connection = state.peer.connect(remoteId, { reliable: true });
  state.conn = connection;
  setupDataConnection();

  // If local stream already active, place call
  if (state.localStream) {
    callPartner(remoteId);
  }
}

function setupDataConnection() {
  state.conn.on('open', () => {
    console.log('[WebRTC] Data channel connected!');
    connDot.classList.add('connected');
    connStatus.textContent = 'Đã kết nối';
    partnerNameDisplay.textContent = state.partnerName;
    partnerState.textContent = 'Đang xem chung';
    document.querySelector('.heartbeat-icon').classList.add('active');
    showToast(`🟢 ${state.partnerName} đã vào phòng!`);

    // Gửi thông tin ban đầu
    sendData({
      type: 'HANDSHAKE',
      name: state.selfName,
      isMicMuted: state.isMicMuted,
      episodeIndex: state.currentEpisodeIndex,
      currentTime: video.currentTime,
      isPaused: video.paused
    });

    // Initiate voice call if guest
    if (!state.isHost && state.conn.peer) {
      callPartner(state.conn.peer);
    }
  });

  state.conn.on('data', (data) => {
    handleIncomingData(data);
  });

  state.conn.on('close', () => {
    connDot.classList.remove('connected');
    connStatus.textContent = 'Người ấy đã rời';
    partnerState.textContent = 'Ngoại tuyến';
    document.querySelector('.heartbeat-icon').classList.remove('active');
    syncOverlay.classList.remove('active');
    showToast(`⚠️ ${state.partnerName} đã ngắt kết nối.`);
  });
}

function sendData(data) {
  if (state.conn && state.conn.open) {
    state.conn.send(data);
  }
}

// ----------------------------------------------------
// REALTIME DATA & PRIORITY SYNC HANDLER
// ----------------------------------------------------
function handleIncomingData(data) {
  switch (data.type) {
    case 'HANDSHAKE':
      if (data.name) {
        state.partnerName = data.name;
        partnerNameDisplay.textContent = data.name;
      }
      updatePartnerMicUI(data.isMicMuted);
      // Synchronize video if joining later
      if (!state.isHost && data.episodeIndex !== undefined) {
        if (state.currentEpisodeIndex !== data.episodeIndex) {
          loadEpisode(data.episodeIndex, false);
        }
        video.currentTime = data.currentTime || 0;
      }
      break;

    case 'SYNC_PLAY':
      state.ignoreNextSyncEvent = true;
      if (Math.abs(video.currentTime - data.time) > 1) {
        video.currentTime = data.time;
      }
      video.play().catch(() => {});
      break;

    case 'SYNC_PAUSE':
      state.ignoreNextSyncEvent = true;
      if (Math.abs(video.currentTime - data.time) > 1) {
        video.currentTime = data.time;
      }
      video.pause();
      break;

    case 'SYNC_SEEK':
      state.ignoreNextSyncEvent = true;
      video.currentTime = data.time;
      showToast(`Đồng bộ tua tới: ${formatTime(data.time)}`);
      break;

    case 'SYNC_EPISODE':
      loadEpisode(data.index, true);
      break;

    case 'MIC_STATUS':
      updatePartnerMicUI(data.isMuted);
      break;

    // ================================================
    // CORE FEATURE: VIP PARTNER BUFFERING LOGIC
    // ================================================
    case 'BUFFERING_STATE':
      if (state.priorityRole === 'partner' || state.priorityRole === 'both') {
        if (data.isBuffering) {
          // Partner's internet is slow/buffering -> FREEZE MY VIDEO TO WAIT!
          state.isRemoteBuffering = true;
          video.pause();
          syncOverlayText.textContent = `Đang đợi ${state.partnerName} tải xong video...`;
          syncOverlay.classList.add('active');
          console.log('[Priority Sync] Holding local playback to wait for partner');
        } else {
          // Partner finished buffering! Align time and resume together!
          state.isRemoteBuffering = false;
          syncOverlay.classList.remove('active');
          if (data.time) {
            video.currentTime = data.time;
          }
          video.play().catch(() => {});
          showToast(`⚡ ${state.partnerName} đã tải xong, tiếp tục xem!`);
        }
      }
      break;

    case 'HEARTBEAT':
      // Drift Correction (Smooth micro-adjustment)
      if (!video.paused && !state.isRemoteBuffering) {
        const drift = video.currentTime - data.time;
        // If my video is running ahead of Partner by > 1.2s in Partner Priority mode:
        if (state.priorityRole === 'partner' && drift > 1.2) {
          console.log('[Priority Sync] Self is running ahead by', drift.toFixed(2), 's. Slowing down...');
          video.currentTime = data.time;
        }
      }
      break;
  }
}

// ==========================================
// 4. VOICE CHAT & MICROPHONE HANDLING
// ==========================================
async function toggleMicrophone() {
  if (state.isMicMuted) {
    // Request mic access
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

        // Call or update partner with the new voice stream
        if (state.conn && state.conn.peer) {
          callPartner(state.conn.peer);
        }
      } else {
        state.localStream.getAudioTracks().forEach(track => track.enabled = true);
      }

      state.isMicMuted = false;
      btnToggleMic.classList.add('unmuted');
      btnToggleMic.innerHTML = '<i class="fa-solid fa-microphone"></i>';
      selfMicBadge.classList.add('mic-on');
      selfMicBadge.innerHTML = '<i class="fa-solid fa-microphone"></i>';
      selfState.textContent = 'Mic đang bật';
      sendData({ type: 'MIC_STATUS', isMuted: false });
      showToast('🎤 Đã bật Mic');
    } catch (err) {
      console.error('Microphone error:', err);
      alert('Không thể mở micro: Vui lòng cho phép quyền truy cập micro trong trình duyệt.');
    }
  } else {
    // Mute mic
    if (state.localStream) {
      state.localStream.getAudioTracks().forEach(track => track.enabled = false);
    }
    state.isMicMuted = true;
    btnToggleMic.classList.remove('unmuted');
    btnToggleMic.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>';
    selfMicBadge.classList.remove('mic-on');
    selfMicBadge.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>';
    selfRing.classList.remove('speaking');
    selfState.textContent = 'Mic đã tắt';
    sendData({ type: 'MIC_STATUS', isMuted: true });
    showToast('🔇 Đã tắt Mic');
  }
}

function callPartner(remotePeerId) {
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
    partnerMicBadge.classList.add('mic-on');
    partnerMicBadge.innerHTML = '<i class="fa-solid fa-microphone"></i>';
    partnerState.textContent = 'Mic đang bật';
  } else {
    partnerMicBadge.classList.remove('mic-on');
    partnerMicBadge.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>';
    partnerRing.classList.remove('speaking');
    partnerState.textContent = 'Mic đã tắt';
  }
}

// Create fallback silent audio stream so WebRTC voice connection can handshake
function createSilentAudioStream() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const dst = osc.connect(ctx.createMediaStreamDestination());
  osc.start();
  const track = dst.stream.getAudioTracks()[0];
  track.enabled = false;
  return dst.stream;
}

// Real-time Voice Volume Detection (Visualizer Pulse Wave)
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
    console.warn('AudioContext remote source error:', e);
  }
}

function setupAudioVisualizerLoop() {
  const localData = new Uint8Array(32);
  const remoteData = new Uint8Array(32);

  function checkVolume() {
    // Check self volume
    if (state.localAnalyser && !state.isMicMuted) {
      state.localAnalyser.getByteFrequencyData(localData);
      const avg = localData.reduce((a, b) => a + b, 0) / localData.length;
      if (avg > 15) {
        selfRing.classList.add('speaking');
      } else {
        selfRing.classList.remove('speaking');
      }
    } else {
      selfRing.classList.remove('speaking');
    }

    // Check partner volume
    if (state.remoteAnalyser && !state.partnerMicMuted) {
      state.remoteAnalyser.getByteFrequencyData(remoteData);
      const avg = remoteData.reduce((a, b) => a + b, 0) / remoteData.length;
      if (avg > 15) {
        partnerRing.classList.add('speaking');
      } else {
        partnerRing.classList.remove('speaking');
      }
    } else {
      partnerRing.classList.remove('speaking');
    }

    requestAnimationFrame(checkVolume);
  }

  requestAnimationFrame(checkVolume);
}

// ==========================================
// 5. PLAYLIST, SETTINGS & EVENT LISTENERS
// ==========================================
function renderPlaylist() {
  playlistItems.innerHTML = '';
  state.episodes.forEach((ep, idx) => {
    const item = document.createElement('div');
    item.className = `playlist-item ${idx === state.currentEpisodeIndex ? 'active' : ''}`;
    item.innerHTML = `
      <div class="playlist-item-left">
        <span class="episode-num">${idx + 1}</span>
        <span class="episode-name">${ep.title}</span>
      </div>
      <span class="episode-badge">${ep.quality || 'HD'}</span>
    `;
    item.addEventListener('click', () => {
      loadEpisode(idx, true);
      sendData({ type: 'SYNC_EPISODE', index: idx });
      playlistDrawer.classList.remove('open');
    });
    playlistItems.appendChild(item);
  });
}

function setupEventListeners() {
  // Play/Pause button
  btnPlayPause.addEventListener('click', () => {
    if (video.paused) video.play();
    else video.pause();
  });

  // Video click toggle
  video.addEventListener('click', () => {
    if (video.paused) video.play();
    else video.pause();
  });

  // Rewind & Forward
  btnRewind.addEventListener('click', () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
    sendData({ type: 'SYNC_SEEK', time: video.currentTime });
    showActionHud('fa-rotate-left', '-10s');
  });

  btnForward.addEventListener('click', () => {
    video.currentTime = Math.min(video.duration || 0, video.currentTime + 10);
    sendData({ type: 'SYNC_SEEK', time: video.currentTime });
    showActionHud('fa-rotate-right', '+10s');
  });

  // Progress Bar Seek
  progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * (video.duration || 0);
    video.currentTime = seekTime;
    sendData({ type: 'SYNC_SEEK', time: seekTime });
  });

  // Progress Bar Hover Preview
  progressContainer.addEventListener('mousemove', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const hoverTime = pos * (video.duration || 0);
    progressHover.style.display = 'block';
    progressHover.style.left = `${e.clientX - rect.left}px`;
    progressHover.textContent = formatTime(hoverTime);
  });

  progressContainer.addEventListener('mouseleave', () => {
    progressHover.style.display = 'none';
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

  // Playback Speed
  speedMenu.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      const speed = parseFloat(item.dataset.speed);
      video.playbackRate = speed;
      btnSpeed.textContent = `${speed}x`;
      speedMenu.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Fullscreen & PiP
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      videoWrapper.requestFullscreen().catch(() => {});
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
    } catch (err) {
      console.warn(err);
    }
  });

  // Mic Toggle Button
  btnToggleMic.addEventListener('click', toggleMicrophone);

  // Share / Copy Room Invite
  btnShareRoom.addEventListener('click', () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast('📋 Đã sao chép link phòng! Gửi ngay cho người ấy.');
    }).catch(() => {
      prompt('Sao chép đường link này để gửi cho người ấy:', shareUrl);
    });
  });

  // Playlist Drawer
  btnTogglePlaylist.addEventListener('click', () => {
    playlistDrawer.classList.toggle('open');
  });
  btnClosePlaylist.addEventListener('click', () => {
    playlistDrawer.classList.remove('open');
  });

  // Settings Modal
  btnSettings.addEventListener('click', openSettings);
  btnCloseSettings.addEventListener('click', () => settingsModal.classList.remove('open'));
  btnSaveSettings.addEventListener('click', saveSettings);
  btnResetSettings.addEventListener('click', resetSettings);

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (video.paused) video.play();
      else video.pause();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      video.currentTime = Math.max(0, video.currentTime - 10);
      sendData({ type: 'SYNC_SEEK', time: video.currentTime });
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      video.currentTime = Math.min(video.duration || 0, video.currentTime + 10);
      sendData({ type: 'SYNC_SEEK', time: video.currentTime });
    } else if (e.key.toLowerCase() === 'f') {
      e.preventDefault();
      btnFullscreen.click();
    } else if (e.key.toLowerCase() === 'm') {
      e.preventDefault();
      btnToggleMic.click();
    }
  });
}

function openSettings() {
  inputSelfName.value = state.selfName;
  inputPartnerName.value = state.partnerName;
  selectPriorityRole.value = state.priorityRole;

  inputVideoSources.value = state.episodes.map(ep => `${ep.title}|${ep.url}`).join('\n');
  settingsModal.classList.add('open');
}

function saveSettings() {
  state.selfName = inputSelfName.value.trim() || 'Anh';
  state.partnerName = inputPartnerName.value.trim() || 'Em';
  state.priorityRole = selectPriorityRole.value;

  localStorage.setItem('cine_self_name', state.selfName);
  localStorage.setItem('cine_partner_name', state.partnerName);
  localStorage.setItem('cine_priority_role', state.priorityRole);

  // Parse episodes
  const lines = inputVideoSources.value.split('\n').filter(l => l.trim().length > 0);
  const newEpisodes = [];
  lines.forEach((line, i) => {
    const parts = line.split('|');
    if (parts.length >= 2) {
      newEpisodes.push({
        title: parts[0].trim(),
        url: parts[1].trim(),
        quality: 'Custom'
      });
    } else {
      newEpisodes.push({
        title: `Tập ${i + 1}`,
        url: parts[0].trim(),
        quality: 'Custom'
      });
    }
  });

  if (newEpisodes.length > 0) {
    state.episodes = newEpisodes;
    localStorage.setItem('cine_episodes', JSON.stringify(newEpisodes));
    renderPlaylist();
    loadEpisode(0, false);
  }

  updateProfileUI();
  settingsModal.classList.remove('open');
  showToast('💾 Đã lưu cài đặt thành công!');
}

function resetSettings() {
  localStorage.removeItem('cine_episodes');
  state.episodes = DEFAULT_EPISODES;
  renderPlaylist();
  loadEpisode(0, false);
  inputVideoSources.value = state.episodes.map(ep => `${ep.title}|${ep.url}`).join('\n');
  showToast('🔄 Đã khôi phục danh sách tập mặc định');
}

function showToast(msg) {
  const toastBox = document.getElementById('toastBox');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-bell"></i> <span>${msg}</span>`;
  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Start application
window.addEventListener('DOMContentLoaded', init);
