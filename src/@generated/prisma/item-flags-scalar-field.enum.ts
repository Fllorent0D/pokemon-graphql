import { registerEnumType } from '@nestjs/graphql';

export enum Item_flagsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Item_flagsScalarFieldEnum, { name: 'Item_flagsScalarFieldEnum', description: undefined })
