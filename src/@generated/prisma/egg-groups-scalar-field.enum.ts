import { registerEnumType } from '@nestjs/graphql';

export enum Egg_groupsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Egg_groupsScalarFieldEnum, { name: 'Egg_groupsScalarFieldEnum', description: undefined })
