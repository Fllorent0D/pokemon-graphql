import { registerEnumType } from '@nestjs/graphql';

export enum Move_metaScalarFieldEnum {
    move_id = "move_id",
    meta_category_id = "meta_category_id",
    meta_ailment_id = "meta_ailment_id",
    min_hits = "min_hits",
    max_hits = "max_hits",
    min_turns = "min_turns",
    max_turns = "max_turns",
    recoil = "recoil",
    healing = "healing",
    crit_rate = "crit_rate",
    ailment_chance = "ailment_chance",
    flinch_chance = "flinch_chance",
    stat_chance = "stat_chance"
}


registerEnumType(Move_metaScalarFieldEnum, { name: 'Move_metaScalarFieldEnum', description: undefined })
