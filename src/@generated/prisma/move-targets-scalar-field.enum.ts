import { registerEnumType } from '@nestjs/graphql';

export enum Move_targetsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Move_targetsScalarFieldEnum, { name: 'Move_targetsScalarFieldEnum', description: undefined })
