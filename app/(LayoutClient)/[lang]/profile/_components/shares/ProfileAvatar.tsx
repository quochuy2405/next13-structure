import Image from "next/image";
import React from "react";

const ProfileAvatar = () => {
	// img 4K
	return (
		<Image
			className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
			src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYSJ0qw7OjnK-K4UqOtjFAu8tKhjxkWS_F96GiQJA&s"
			alt="Bordered avatar"
			placeholder="blur"
			blurDataURL="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg"
			quality={100}
			width={40}
			height={40}
			sizes="(min-width: 30px) 60px, 80px"
			style={{
				objectFit: "cover", // cover, contain, none
			}}
		/>
	);
};

export default ProfileAvatar;
