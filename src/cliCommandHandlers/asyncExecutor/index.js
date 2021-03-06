const defaultSuccessMessage = 'Successfully executed';
const defaultErrorMessage = 'Error in asyncExecutor';
const asyncExecutor = async (
	fn, 
	successMsg = defaultSuccessMessage,
	errMsg = defaultErrorMessage,
	...args
) => {
	if(fn){
		try {
			const successMessage = typeof successMsg === 'function'  ? successMsg() : successMsg;
			const fnResult = fn(...args);
			const resolvedValue =  fnResult instanceof Promise ? await fnResult : fnResult;
			console.log(successMessage);
			return resolvedValue;
		} catch(e) {
			const errorMessage = typeof errMsg === 'function'  ? errMsg(e) : errMsg;
			console.log(errorMessage);
		}
	}
};

module.exports = {
	asyncExecutor 
};