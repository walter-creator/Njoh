

// eslint-disable-next-line react/prop-types
const CardListLayout = ({ children }) => {
    return (
        <div className="container">
            <div className="tab-content">
                <div className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CardListLayout;