import { DataTypes, Model } from 'denoDB';

export class TestModel extends Model {
	static table = 'tableName';
	static fields = {
		id: DataTypes.INTEGER,
		name: DataTypes.STRING,
	};
	static timestamps = true;
}

export class Business extends Model {
	static table = 'Business';
	static fields = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		// If we need to set the length for `name`, we can also use
		// an object
		name: {
			type: DataTypes.STRING,
			length: 25,
		},
	};
}
