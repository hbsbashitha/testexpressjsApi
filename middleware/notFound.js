const notFoundMiddleware=(req,res)=>{
    res.status(404).send("not middleware not found")
};

export default notFoundMiddleware;