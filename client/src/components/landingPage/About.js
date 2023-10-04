import Footer from "./Footer";
import Navbar from "./Navbar";
import name from "../../assets/img/dashboard/admin-user.png";
import email from "../../assets/img/dashboard/admin-email.png";
import admin_1 from "../../assets/img/dashboard/admin-1.jpg";
import admin_git from "../../assets/img/dashboard/admin-git.png";
import admin_insta from "../../assets/img/dashboard/admin-insta-2.png";
import admin_linkedin from "../../assets/img/dashboard/admin-linkedin.png";
import admin_card_profile from "../../assets/img/dashboard/Niranjan Photo.jpg";
const About = () => {
	return (
		<div className="body lg:overflow-hidden lg:h-screen max-h-min flex flex-col h-screen">
			<Navbar></Navbar>

			<div className="bg-secoundry font-poppins over">
				<div className="flex justify-center">
					<h1 className="p-4 px-8 font-bold text-3xl">About us</h1>
				</div>
				<div className="">
					<div>
						<h1 className="flex justify-center font-bold text-xl">
							-- Developers --
						</h1>
						<div className="flex justify-center">
							{" "}
							{/* Added flex container */}
							<div className="shadow-sm border-2 mt-6 p-4 rounded-md w-9/12 hover:shadow-xl">
								<div className="flex justify-center">
									<img
										src={admin_card_profile}
										alt="admin_profile"
										className="h-40 w-40 rounded-full border-2"
									></img>
								</div>
								<div className="p-6">
									<div className="flex justify-center">
										<img src={name} className="h-4 w-4 mt-1 " alt="name"></img>
										<h1 className="ml-2">Niranjan Langade</h1>
									</div>
									<div className="flex justify-center mt-2">
										<img src={email} className="h-4 w-4 mt-1" alt="email"></img>
										<h4 className="ml-2">niranjanlangade@gmail.com</h4>
									</div>
									<div className="flex justify-center gap-10 mt-6">
										<a href="https://www.instagram.com/imvivek_naik_9927/">
											<img
												src={admin_insta}
												className="h-5 w-5"
												alt="insta"
											></img>
										</a>
										<a href="https://github.com/NiranjanLangade">
											<img src={admin_git} className="h-5 w-5" alt="git"></img>
										</a>
										<a href="https://www.linkedin.com/in/niranjan45/">
											<img
												src={admin_linkedin}
												className="h-5 w-5 "
												alt="linkedin"
											></img>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default About;
