import { registerEnumType } from '@nestjs/graphql';

export enum Item_pocketsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Item_pocketsScalarFieldEnum, { name: 'Item_pocketsScalarFieldEnum', description: undefined })
