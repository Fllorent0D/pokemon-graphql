import { registerEnumType } from '@nestjs/graphql';

export enum Contest_combosScalarFieldEnum {
    first_move_id = "first_move_id",
    second_move_id = "second_move_id"
}


registerEnumType(Contest_combosScalarFieldEnum, { name: 'Contest_combosScalarFieldEnum', description: undefined })
