import { BoardType, CommentType, getBoardComments, getBoardId } from '@/api/boards.api';
import Board from '@/components/board/Board';
import Comments from '@/components/board/Comments';
import HeaderSpace from '@/components/common/HeaderSpace';
import Header from '@/components/navigation/Header';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface BoardPageProps {
	initialBoard: BoardType;
	initialComments: CommentType[];
}

const BoardPage: React.FC<BoardPageProps> = ({ initialBoard, initialComments }) => {
	const { id } = useRouter().query;
	const [board, setBoard] = useState<BoardType>(initialBoard);
	const [comments, setComments] = useState<CommentType[]>(initialComments);

	useEffect(() => {
		const handleLoad = async () => {
			if (!id) return;

			const board = await getBoardId(id as string);
			const comments = await getBoardComments(id as string);

			setBoard(board);
			setComments(comments);
		};

		handleLoad();
	}, [id]);

	return (
		<main>
			<Header />
			<HeaderSpace />
			<Board board={board} />
			<Comments comments={comments} />
		</main>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;
	const initialBoard = await getBoardId(id as string);
	const initialComments = await getBoardComments(id as string);
	return {
		props: {
			initialBoard,
			initialComments,
		},
	};
};

export default BoardPage;
