import { registerEnumType } from '@nestjs/graphql';

export enum Move_meta_stat_changesScalarFieldEnum {
    move_id = "move_id",
    stat_id = "stat_id",
    change = "change"
}


registerEnumType(Move_meta_stat_changesScalarFieldEnum, { name: 'Move_meta_stat_changesScalarFieldEnum', description: undefined })
