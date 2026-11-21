import transcriptsData from "@/data/video-transcripts.json";

export type VideoStep = {
  seconds: number;
  timestamp: string;
  label: string;
};

export type TranscriptLine = {
  seconds: number;
  timestamp: string;
  text: string;
};

export type VideoMeta = {
  videoId: string;
  title: string;
  author: string;
  duration: string;
  durationSeconds: number;
  language: string | null;
  steps: VideoStep[];
  transcript: TranscriptLine[];
};

const transcriptsMap = transcriptsData as Record<string, VideoMeta>;

export function getVideoMeta(videoId: string): VideoMeta | null {
  return transcriptsMap[videoId] ?? null;
}
