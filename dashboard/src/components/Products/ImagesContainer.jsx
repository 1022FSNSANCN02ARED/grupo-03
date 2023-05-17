import React from "react";
function ImagesContainer({ product }) {
    return (
        <div className="justify-content-center p-0 d-flex flex-wrap">
            {product &&
                product.images.map((image, i) => {
                    return (
                        <div
                            className="position-relative rounded-4 m-1 overflow-hidden d-flex  justify-content-center align-items-center"
                            key={product.name + i}
                            style={{
                                height: "25vw",
                                width: "25%",
                                maxHeight: "300px",
                            }}
                        >
                            <img
                                className="p-0 rounded-4 position-absolute"
                                src={image}
                                alt={`imágen número ${i} de ${product.name}`}
                                style={{
                                    height: "30vw",
                                    maxHeight: "300px",
                                }}
                            />
                        </div>
                    );
                })}
        </div>
    );
}

export default ImagesContainer;
