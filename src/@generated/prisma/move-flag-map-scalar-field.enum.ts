import { registerEnumType } from '@nestjs/graphql';

export enum Move_flag_mapScalarFieldEnum {
    move_id = "move_id",
    move_flag_id = "move_flag_id"
}


registerEnumType(Move_flag_mapScalarFieldEnum, { name: 'Move_flag_mapScalarFieldEnum', description: undefined })
