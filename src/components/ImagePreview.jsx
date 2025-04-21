import Loading from "./Loading";

const ImagePreview = (props) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = props.enhanced;
    link.download = "enhanced-image.jpg";
    link.click();
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
      {/* Original Image */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-700 text-white py-3">
          Original Image
        </h2>
        
        {props.uploaded ? (
          <div className="relative h-96">
            <img
              src={props.uploaded}
              alt="Original"
              className="w-full h-full object-contain p-2"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-96 bg-gray-100">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p className="mt-4 text-gray-500 font-medium">No Image Selected</p>
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-xl font-bold text-center bg-gradient-to-r from-blue-800 to-blue-600 text-white py-3">
          Enhanced Image
        </h2>
        
        {props.enhanced && !props.loading ? (
          <div className="relative h-96">
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="w-full h-full object-contain p-2"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex justify-center">
              <button
                onClick={downloadImage}
                className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <span>Download Enhanced Image</span>
              </button>
            </div>
          </div>
        ) : props.loading ? (
          <div className="h-96">
            <Loading />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-96 bg-gray-100">
            <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
            <p className="mt-4 text-gray-500 font-medium">Enhanced Image Will Appear Here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;