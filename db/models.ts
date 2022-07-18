import { DataTypes, Model } from 'denoDB';

export class TestModel extends Model {
	static table = 'tableName';
	static fields = {
		id: DataTypes.INTEGER,
		name: DataTypes.STRING,
	};
	static timestamps = true;
}
