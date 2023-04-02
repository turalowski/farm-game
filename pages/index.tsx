import { useGame } from '@/hooks/useGame';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '@/utils';

export default function App() {
  const { canvasRef } = useGame();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />;
    </div>
  );
}
