import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CatchAllPage() {
  const router = useRouter();

  useEffect(() => {
    // 处理刷新页面时的重定向逻辑
    router.replace(router.asPath);
  }, []);

  return <div>Loading...</div>;
}