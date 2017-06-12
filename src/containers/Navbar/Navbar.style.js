import styled from 'styled-components';

export const Nav = styled.nav`
	z-index: 20;
	background-color: transparent!important;
	border: 0;
	border-radius: 0;
	border-bottom: none!important;
	padding-top: 25px!important;
	transition: all ease-in-out .5s;
	@media screen and (max-width: 767px) {
		&{
			padding-top: 5px!important;
			border-bottom: none!important;
		}
	}

`;

export const DivHeader = styled.div`
	width: 130px!important;
	height: 50px!important;
	transition: all ease-in-out .5s;

	@media screen and (max-width: 767px) {
		&{
			width: auto!important;
		}
	}
`;

export const DivImg = styled.div`
	width: 100%;
	margin: 0px 0% 0px 0%';
	padding: 0px 0;
	transition: all ease-in-out .5s;

	@media screen and (max-width: 767px) {
		&{
			width: 85px;
		}
	}

	@media screen and (max-width: 767px) and (orientation: landscape) {
		&{
			width: 85px;
		}
	}
`;

export const Img = styled.img`
	width: 100%;
	height: auto;
	margin-left: 40px;
	margin-top: -40px;
	transition: all ease-in-out .5s;

	@media screen and (min-width: 768px) and (max-width: 768px) {
		&{
			margin-top: -40px;
			margin-left: 0px;
		}
	}

	@media screen and (max-width: 767px) {
		&{
			margin-top: -20px;
			margin-left: 0px;
		}
	}

	@media screen and (max-width: 767px) and (orientation: landscape) {
		&{
			margin-top: -20px;
			margin-left: 0px;
		}
	}
`;

export const Ul = styled.ul`
	margin-right: 0px!important;
	@media screen and (max-width: 767px) {
	    &{
	    	overflow-y: hidden;
	        background-color: #111;
	        width: cover;
	        padding-left: 0px;
	        //opacity: .95;
	    }
	}
`;

export const Div1 = styled.div`
	padding-right: 50px!important;
	color: #EEEEEE;
	-webkit-transition: .5s;
	-moz-transition: .5s;
	-o-transition:  .5s;
	transition: all ease-in-out .5s;
	border-top: none!important;
	box-shadow: none!important;
	a:hover{
		color: white;
		text-shadow: 0px 0px 0px black;
	}

	@media screen and (max-width: 870px) {
		&{
			padding-right: 0px!important;
		}
	}
`;


export const Li = styled.li`
	@media screen and (max-width: 767px) {
	    &{
	    	padding-bottom: 0px;
	    	padding-top: 0px;
	    	border-bottom: 1px solid #464646;
	    }
	    &:last-child{
	    	padding-bottom: 5px;
	    	border-bottom: none;
	    }
	    &:first-child{
	    	padding-top: 5px;
	    }
	}
	a{
		-webkit-transition: 0.5s;
		-moz-transition: 0.5s;
		-o-transition:  0.5s;
		transition: all ease-in-out 0.5s;
		cursor: pointer;
		padding: 20px;
		font-weight: 700;
	}

	a:before, a:after {
		position: absolute;
		left: 0;
		width: 100%;
		height: 2px;
		background: #0080E4;
		content: '';
		opacity: 0;
		-webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
		-moz-transition: opacity 0.5s, -moz-transform 0.5s;
		transition: opacity 0.5s, transform 0.5s;
		-webkit-transform: translateY(-10px);
		-moz-transform: translateY(-10px);
		transform: translateY(-10px);
	}

	a:before {
		top: 0;
		-webkit-transform: translateY(-10px);
		-moz-transform: translateY(-10px);
		transform: translateY(-10px);
	}

	a:after {
		bottom: 0;
		-webkit-transform: translateY(10px);
		-moz-transform: translateY(10px);
		transform: translateY(10px);
	}

	

	a:hover:before, a:hover:after{
		opacity: 1;
		-webkit-transform: translateY(0px);
		-moz-transform: translateY(0px);
		transform: translateY(0px);
	}
`;

export const DivContainer = styled.div`
	padding-left: 50px;
	a{
		margin-right: 2px;
	}
	@media screen and (max-width: 767px) {
	    &{
	    	padding-left: 0px;
	    }
`;

export const DivButton = styled.button`
	border: none!important;
	margin-right: 25px;
	margin-top: 20px!important;
	margin-bottom: 0px!important;
	padding-top: 0px!important;
	padding-right: 0px!important;
	background: transparent !important;
	transition: all ease-in-out .5s;

	&:hover {
	  background: transparent !important;
	}

	.icon-bar {
		width: 25px!important;
		height: 3px!important;
		transition: all ease-in-out 0.3s;
	}

	.top-bar {
		background-color: #CECECE!important;
		transform: translateY(7px) rotate(135deg);
		-moz-transform: translateY(7px) rotate(135deg);
		-webkit-transform: translateY(7px) rotate(135deg);
		-o-transform: translateY(7px) rotate(135deg);
	}

	.middle-bar {
		background-color: #CECECE!important;
		-moz-transform: scale(0);
		-webkit-transform: scale(0);
		-o-transform: scale(0);
		transform: scale(0);
	}

	.bottom-bar {
		background-color: #CECECE!important;
		transform: translateY(-7px) rotate(-135deg);
		-moz-transform: translateY(-7px) rotate(-135deg);
		-webkit-transform: translateY(-7px) rotate(-135deg);
		-o-transform: translateY(-7px) rotate(-135deg);
	}

	&.collapsed {
		.top-bar {
			transform: rotate(0)!important;
			-moz-transform: rotate(0)!important;
			-webkit-transform: rotate(0)!important;
			-o-transform: rotate(0)!important;
		}
		.middle-bar {
			-o-transform: scale(1);
			-moz-transform: scale(1);
			-webkit-transform: scale(1);
			transform: scale(1);
		}
		.bottom-bar {
			transform: rotate(0);
			-moz-transform: rotate(0);
			-webkit-transform: rotate(0);
			-o-transform: rotate(0);
		}
	}
`;

