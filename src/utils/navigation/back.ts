import routes from '@/routes';
import { removeUrlFragment } from './fragment';
// import { removeAllSearchParams } from './search-params';

export function safelyNavigateBack(escapePathname?: string) {
  // 履歴が存在したら戻る
  if (history.length > 2) {
    history.back();
    return;
  }

  // 履歴が存在しなかったら引数に渡されたページへ遷移
  if (escapePathname) {
    swup.navigate(escapePathname);
    return;
  }

  // QueryParameter が存在したら削除する
  if (location.hash) return removeUrlFragment();
  // if (location.search) return removeAllSearchParams();

  // 引数に渡されたページが存在しなかったらトップページへ遷移
  swup.navigate(routes.top.href);
}
