import { registerEnumType } from '@nestjs/graphql';

export enum Item_categoriesScalarFieldEnum {
    id = "id",
    pocket_id = "pocket_id",
    identifier = "identifier"
}


registerEnumType(Item_categoriesScalarFieldEnum, { name: 'Item_categoriesScalarFieldEnum', description: undefined })
