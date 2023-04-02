import { CANVAS_HEIGHT, CANVAS_WIDTH, Game, Player } from '@/utils';
import { useState } from 'react';

export function usePlayer(game: Game) {
  const [player] = useState<Player>({
    x: 0,
    y: 0,
  });

  function drawPlayer(ctx: CanvasRenderingContext2D) {
    const playerAsset = game.playerImage;
    if (playerAsset) {
      ctx.drawImage(
        playerAsset,
        player.x,
        player.y,
        playerAsset.width / 4,
        playerAsset.height,
        CANVAS_WIDTH / 2 - playerAsset.width / 2,
        CANVAS_HEIGHT / 2 - playerAsset.height / 2,
        playerAsset.width / 4,
        playerAsset.height
      );
    }
  }
  return { drawPlayer };
}
