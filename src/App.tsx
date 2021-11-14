import { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "react-spring";

function App() {
	const [password, setPassword] = useState("");
	const [expanded, setExpanded] = useState(false);

	const [route, setRoute] = useState("users");

	const users: Array<{ avatar: string; username: string }> = [
		{
			avatar: "https://i.ibb.co/zXXyRg3/beidou.jpg",
			username: "Luis Bizarro",
		},
		{
			avatar: "https://avatarfiles.alphacoders.com/280/thumb-280977.png",
			username: "Ningguang",
		},
		{
			avatar: "https://avatarfiles.alphacoders.com/280/thumb-280958.png",
			username: "Zhongli",
		},
		{
			avatar: "https://pbs.twimg.com/media/EwOclF2XEAUY_Yl.png",
			username: "Diluc",
		},
	];

	const desktops: Array<{ logo: string; name: string }> = [
		{
			logo: "kde.svg",
			name: "KDE Plasma",
		},
		{
			logo: "gnome.svg",
			name: "Gnome",
		},
		{
			logo: "i3wm.svg",
			name: "I3WM",
		},
		{
			logo: "awesomewm.svg",
			name: "AwesomeWM",
		},
		{
			logo: "sway.svg",
			name: "Sway",
		},
	];

	const [currentUser, setCurrentUser] = useState(0);
	const [currentDesktop, setCurrentDesktop] = useState(0);

	const [ref, { width }] = useMeasure();
	const expandedProps = useSpring({
		to: {
			right: !expanded ? -width : 0,
			config: { duration: 350 },
		},
		from: { right: -width },
	});

	return (
		<div className="text-white h-full w-full absolute inset-0 overflow-hidden select-none">
			<img
				src="https://i.ibb.co/zXXyRg3/beidou.jpg"
				alt="Background"
				className="absolute inset-0 h-full w-full object-cover object-center z-0 filter blur transform scale-105"
			/>
			<div className="absolute inset-0 h-full w-full z-10 flex justify-between items-center mx-auto">
				<form className="flex flex-col justify-center items-center gap-4 mx-auto pr-14">
					<img
						src={users[currentUser].avatar}
						alt={users[currentUser].username}
						className="h-36 w-36 object-cover object-center rounded-full"
					/>
					<div className="font-sans font-medium text-lg text-center">
						{users[currentUser].username}
					</div>
					<div className="flex gap-3">
						<input
							type="password"
							value={password}
							onChange={({ currentTarget }) =>
								setPassword(currentTarget.value)
							}
							placeholder="Enter password"
							className="outline-none w-48 py-1.5 px-3 rounded font-normal text-base bg-black bg-opacity-10 placeholder-white placeholder-opacity-75"
							autoComplete="ego-password"
						/>
						<button
							type="button"
							className="outline-none py-1.5 px-2 rounded font-normal text-base bg-black bg-opacity-10 transition-colors text-white text-opacity-70 hover:text-white hover:bg-black hover:bg-opacity-20"
						>
							<svg
								width="20"
								height="20"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M13.75 6.75L19.25 12L13.75 17.25"
								></path>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M19 12H4.75"
								></path>
							</svg>
						</button>
					</div>
				</form>
				<animated.div
					className="absolute inset-y-0 h-full"
					style={expandedProps}
				>
					<div className="flex bg-black bg-opacity-20 h-full backdrop-filter backdrop-blur-xl">
						<div className="h-full py-3 px-2">
							<div className="flex flex-col justify-between h-full">
								{(users.length !== 1 ||
									desktops.length !== 1) && (
									<button
										className="p-2 rounded transition-colors bg-transparent hover:bg-white hover:bg-opacity-5"
										onClick={() => setExpanded(!expanded)}
									>
										<svg
											width="24"
											height="24"
											fill="none"
											viewBox="0 0 24 24"
											className={`transition-transform transform ${
												expanded && "rotate-180"
											}`}
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												d="M13.25 8.75L9.75 12L13.25 15.25"
											></path>
										</svg>
									</button>
								)}
								<div className="flex flex-col gap-1.5 mt-auto">
									{users.length !== 1 && (
										<button
											className={`p-2 rounded transition-colors ${
												expanded && route === "users"
													? "bg-white bg-opacity-10"
													: "bg-transparent hover:bg-white hover:bg-opacity-5"
											}`}
											onClick={() => {
												setRoute("users");
												setExpanded(true);
											}}
										>
											<svg
												width="24"
												height="24"
												fill="none"
												viewBox="0 0 24 24"
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M5.78168 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.804 16.7012 12.7897 14 9.5 14C6.21031 14 5.19605 16.7012 4.88549 18.2285C4.773 18.7817 5.21718 19.25 5.78168 19.25Z"
												></path>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M15.75 14C17.8288 14 18.6802 16.1479 19.0239 17.696C19.2095 18.532 18.5333 19.25 17.6769 19.25H16.75"
												></path>
												<circle
													cx="9.5"
													cy="7.5"
													r="2.75"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
												></circle>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"
												></path>
											</svg>
										</button>
									)}
									{desktops.length !== 1 && (
										<button
											className={`p-2 rounded transition-colors ${
												expanded && route === "desktops"
													? "bg-white bg-opacity-10"
													: "bg-transparent hover:bg-white hover:bg-opacity-5"
											}`}
											onClick={() => {
												setRoute("desktops");
												setExpanded(true);
											}}
										>
											<svg
												width="24"
												height="24"
												fill="none"
												viewBox="0 0 24 24"
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M4.75 8L12 4.75L19.25 8L12 11.25L4.75 8Z"
												></path>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M4.75 16L12 19.25L19.25 16"
												></path>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M19.25 8V16"
												></path>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M4.75 8V16"
												></path>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M12 11.5V19"
												></path>
											</svg>
										</button>
									)}
									<button className="p-2 rounded transition-colors bg-transparent hover:bg-white hover:bg-opacity-5">
										<svg
											width="24"
											height="24"
											fill="none"
											viewBox="0 0 24 24"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												d="M18.2813 12.0313L11.9687 5.7187C11.4896 5.23964 10.6829 5.36557 10.3726 5.96785L6.75 13L11 17.25L18.0321 13.6274C18.6344 13.3171 18.7604 12.5104 18.2813 12.0313Z"
											></path>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												d="M4.75 19.25L8.5 15.5"
											></path>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												d="M13.75 7.25L16.25 4.75"
											></path>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												d="M16.75 10.25L19.25 7.75"
											></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div
							className="h-full py-3 pr-2 w-92 grid grid-cols-2 grid-rows-none gap-3 auto-rows-44"
							ref={ref}
						>
							{route === "users" ? (
								<>
									{users.map((user, idx) => (
										<button
											key={`user-${idx}`}
											disabled={idx === currentUser}
											className={`rounded transition-all ${
												idx === currentUser
													? "bg-black bg-opacity-25"
													: "bg-black bg-opacity-10 hover:bg-white hover:bg-opacity-5 opacity-75 hover:opacity-100"
											} h-44 w-44 flex flex-col items-center justify-center p-3`}
											onClick={() => setCurrentUser(idx)}
										>
											<img
												src={user.avatar}
												alt={user.username}
												className="h-24 w-24 object-cover object-center rounded-full"
											/>
											<div className="font-sans font-medium text-base text-center mt-3">
												{user.username}
											</div>
										</button>
									))}
								</>
							) : (
								route === "desktops" && (
									<>
										{desktops.map((desktop, idx) => (
											<button
												key={`desktop-${idx}`}
												disabled={
													idx === currentDesktop
												}
												className={`rounded transition-all ${
													idx === currentDesktop
														? "bg-black bg-opacity-25"
														: "bg-black bg-opacity-10 hover:bg-white hover:bg-opacity-5 opacity-75 hover:opacity-100"
												} h-44 w-44 flex flex-col items-center justify-center p-3`}
												onClick={() =>
													setCurrentDesktop(idx)
												}
											>
												<img
													src={`/desktops/${desktop.logo}`}
													alt={desktop.name}
													className="h-16 w-16 object-contain object-center"
												/>
												<div className="font-sans font-medium text-base text-center mt-3">
													{desktop.name}
												</div>
											</button>
										))}
									</>
								)
							)}
						</div>
					</div>
				</animated.div>
			</div>
		</div>
	);
}

export default App;
