import { registerEnumType } from '@nestjs/graphql';

export enum Contest_effectsScalarFieldEnum {
    id = "id"
}


registerEnumType(Contest_effectsScalarFieldEnum, { name: 'Contest_effectsScalarFieldEnum', description: undefined })
