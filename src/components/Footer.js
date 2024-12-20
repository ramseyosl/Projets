import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <div className="container text-center">
                <p className="mb-0">&copy; Your E-Shop 2024. All rights reserved.</p>
                <div className="mt-2">
                    <a href="#" className="text-light mx-2">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-light mx-2">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-light mx-2">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
