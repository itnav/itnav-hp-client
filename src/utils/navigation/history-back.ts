import routes from '@/routes';

export function historyBack(escapePath?: string) {
  // 履歴が存在したら戻る
  if (history.length > 2) {
    history.back();
    return;
  }

  // 履歴が存在しなかったら引数に渡されたページへ遷移
  if (escapePath) {
    swup.navigate(escapePath);
    return;
  }

  const { pathname, hash, search } = location;
  if (hash) {
    swup.navigate(pathname + search);
    return;
  }

  if (search) {
    swup.navigate(pathname);
    return;
  }

  // 引数に渡されたページが存在しなかったらトップページへ遷移
  swup.navigate(routes.top.href);
}
