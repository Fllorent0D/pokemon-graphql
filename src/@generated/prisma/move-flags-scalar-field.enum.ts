import { registerEnumType } from '@nestjs/graphql';

export enum Move_flagsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Move_flagsScalarFieldEnum, { name: 'Move_flagsScalarFieldEnum', description: undefined })
