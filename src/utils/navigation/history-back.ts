import routes from '@/routes';

export function historyBack(escapePath?: string) {
  // 履歴が存在したら戻る
  if (history.length > 2) {
    history.back();
    return;
  }

  // 履歴が存在しなかったら引数に渡されたページへ遷移
  if (escapePath) {
    swup.goto(escapePath);
    return;
  }

  const { pathname, hash, search } = location;
  if (hash) {
    swup.goto(pathname + search);
    return;
  }

  if (search) {
    swup.goto(pathname);
    return;
  }

  // 引数に渡されたページが存在しなかったらトップページへ遷移
  swup.goto(routes.top.href);
}
