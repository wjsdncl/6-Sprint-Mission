import iconHeart from '@/assets/images/items/ic_heart.svg';

import styles from '@/styles/Items/product.module.css';
import Image from 'next/image';

import Link from 'next/link';

interface ProductType {
	id: string;
	images: string;
	name: string;
	price: number;
	favoriteCount: number;
}

interface ProductProps {
	product: ProductType;
	isAllSection: boolean;
}

const Product: React.FC<ProductProps> = ({ product, isAllSection }) => {
	return (
		<Link href={`./${product.id}`} className={styles.product_wrap}>
			{isAllSection ? (
				<>
					<Image className={styles.all_img} src={product.images} alt={product.name}></Image>
					<div className={styles.all_name}>{product.name}</div>
					<div className={styles.all_price}>{product.price}원</div>
					<div className={styles.all_heart}>
						<Image className={styles.all_heart_icon} src={iconHeart} alt='icon_heart'></Image>
						<span className={styles.all_heart_count}>{product.favoriteCount}</span>
					</div>
				</>
			) : (
				<>
					<Image className={styles.best_img} src={product.images} alt={product.name}></Image>
					<div className={styles.best_name}>{product.name}</div>
					<div className={styles.best_price}>{product.price}원</div>
					<div className={styles.best_heart}>
						<Image className={styles.best_heart_icon} src={iconHeart} alt='icon_heart'></Image>
						<span className={styles.best_heart_count}>{product.favoriteCount}</span>
					</div>
				</>
			)}
		</Link>
	);
};

export default Product;
