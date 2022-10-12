import { registerEnumType } from '@nestjs/graphql';

export enum Super_contest_combosScalarFieldEnum {
    first_move_id = "first_move_id",
    second_move_id = "second_move_id"
}


registerEnumType(Super_contest_combosScalarFieldEnum, { name: 'Super_contest_combosScalarFieldEnum', description: undefined })
