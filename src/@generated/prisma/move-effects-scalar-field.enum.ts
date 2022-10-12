import { registerEnumType } from '@nestjs/graphql';

export enum Move_effectsScalarFieldEnum {
    id = "id"
}


registerEnumType(Move_effectsScalarFieldEnum, { name: 'Move_effectsScalarFieldEnum', description: undefined })
