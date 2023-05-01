import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Outlet, useLocation }from "react-router-dom";
import "../../styles/style.css";

function Root() {
    const location = useLocation();
    const { nodeRef } = location.pathname;
    return (
        <SwitchTransition>
            <CSSTransition nodeRef={nodeRef} key={location.pathname} timeout={600} classNames="page" unmountOnExit>
                <div className="page">
                    {<Outlet />}
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
}
  
export default Root;