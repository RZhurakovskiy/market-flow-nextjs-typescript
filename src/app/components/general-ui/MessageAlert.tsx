type MyComponentProps = {
	messageAlertColors: string
	messageAlertText: string
}
const MessageAlert: React.FC<MyComponentProps> = ({
	messageAlertColors,
	messageAlertText,
}) => {
	return (
		<div
			className='w-4xs h-16 absolute bottom-0 right-0 transition-opacity flex justify-center items-center p-2 duration-500 ease-in-out'
			style={{ backgroundColor: messageAlertColors }}
		>
			<span className='text-m text-white'>{messageAlertText}</span>
		</div>
	)
}

export default MessageAlert
