import AllArticles from '@/components/boards/AllArticles';
import BestArticles from '@/components/boards/BestArticles';
import HeaderSpace from '@/components/common/HeaderSpace';
import Header from '@/components/navigation/Header';
import { GetServerSideProps } from 'next';
import { getBoards, BoardType, GetBoardsResponse } from '@/api/boards.api';
import useDeviceSize from '@/hooks/useDeviceSize';

interface BoardsPageProps {
	initialBestBoards: BoardType[];
	initialAllBoards: BoardType[];
}

const BoardsPage: React.FC<BoardsPageProps> = ({ initialBestBoards, initialAllBoards }) => {
	return (
		<main>
			<Header />
			<HeaderSpace />
			<BestArticles initialBoards={initialBestBoards} />
			<AllArticles initialBoards={initialAllBoards} />
		</main>
	);
};

const deviceSize = () => {
	const getDeviceSize = useDeviceSize();

	if (getDeviceSize === 'mobile') {
		return 1;
	} else if (getDeviceSize === 'tablet') {
		return 2;
	}
	return 3;
};

/**
 * 서버사이드 렌더링을 위한 함수
 * @async getServerSideProps
 * @returns {object} 서버사이드 렌더링을 위한 초기 데이터
 */
export const getServerSideProps: GetServerSideProps = async () => {
	const bestBoardsResponse = await getBoards({ orderBy: 'like', page: 1, pageSize: 3 });
	const allBoardsResponse = await getBoards({ orderBy: 'recent', page: 1, pageSize: 10 });

	return {
		props: {
			initialBestBoards: bestBoardsResponse.list || [],
			initialAllBoards: allBoardsResponse.list || [],
		},
	};
};

export default BoardsPage;
