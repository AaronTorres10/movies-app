export interface MovieDBCreditsResponse {
  id: number;
  cast: MovieDBCast[];
}

export interface MovieDBCast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}
