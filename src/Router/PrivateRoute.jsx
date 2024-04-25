import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    // if (loading) {
    //     return <>
    //         <div className="flex items-center justify-center mt-[15vh]">
    //             <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 ">
    //                 <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse ">loading...</div>
    //             </div>
    //         </div>
    //     </>
    // }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}