import { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchRoute } from '@/routes/utils/util';
import { WhiteList } from '@/config/config';
import { getToken } from '@/utils/auth';
import { updateTags } from '@/store/modules/tagsViews';

function AuthRouter({ children }) {
  try {
    const dispatch = useDispatch();
    const location = useLocation();
    const router = searchRoute(location.pathname, location);
    useEffect(() => {
      dispatch(updateTags(router));
    }, [router]);
    if (!getToken() && WhiteList.indexOf(location.pathname) < 0)
      return <Navigate to="/login" replace />;
    if (WhiteList.indexOf(location.pathname) > -1) return children;

    if (!router) return <Navigate to="/404" replace />;
    if (router.redirect) return <Navigate to={router.redirect} />;

    return children;
  } catch (error) {
    return <Navigate to="/404" replace />;
  }
}
export default AuthRouter;
