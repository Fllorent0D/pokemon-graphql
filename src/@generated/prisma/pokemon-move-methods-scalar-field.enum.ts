import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_move_methodsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Pokemon_move_methodsScalarFieldEnum, { name: 'Pokemon_move_methodsScalarFieldEnum', description: undefined })
