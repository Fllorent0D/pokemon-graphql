import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Super_contest_effectsRelationFilter } from '../prisma/super-contest-effects-relation-filter.input';
import { Contest_effectsRelationFilter } from '../prisma/contest-effects-relation-filter.input';
import { Contest_typesRelationFilter } from '../prisma/contest-types-relation-filter.input';
import { Move_effectsRelationFilter } from '../prisma/move-effects-relation-filter.input';
import { Move_damage_classesRelationFilter } from '../prisma/move-damage-classes-relation-filter.input';
import { Move_targetsRelationFilter } from '../prisma/move-targets-relation-filter.input';
import { TypesRelationFilter } from '../prisma/types-relation-filter.input';
import { GenerationsRelationFilter } from '../prisma/generations-relation-filter.input';
import { Contest_combosListRelationFilter } from '../prisma/contest-combos-list-relation-filter.input';
import { MachinesListRelationFilter } from '../prisma/machines-list-relation-filter.input';
import { Move_changelogListRelationFilter } from '../prisma/move-changelog-list-relation-filter.input';
import { Move_flag_mapListRelationFilter } from '../prisma/move-flag-map-list-relation-filter.input';
import { Move_flavor_summariesListRelationFilter } from '../prisma/move-flavor-summaries-list-relation-filter.input';
import { Move_flavor_textListRelationFilter } from '../prisma/move-flavor-text-list-relation-filter.input';
import { Move_metaRelationFilter } from '../prisma/move-meta-relation-filter.input';
import { Move_meta_stat_changesListRelationFilter } from '../prisma/move-meta-stat-changes-list-relation-filter.input';
import { Move_namesListRelationFilter } from '../prisma/move-names-list-relation-filter.input';
import { Pokemon_evolutionListRelationFilter } from '../prisma/pokemon-evolution-list-relation-filter.input';
import { Super_contest_combosListRelationFilter } from '../prisma/super-contest-combos-list-relation-filter.input';

@InputType()
export class movesWhereInput {

    @Field(() => [movesWhereInput], {nullable:true})
    AND?: Array<movesWhereInput>;

    @Field(() => [movesWhereInput], {nullable:true})
    OR?: Array<movesWhereInput>;

    @Field(() => [movesWhereInput], {nullable:true})
    NOT?: Array<movesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    target_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    damage_class_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    effect_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    effect_chance?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    contest_type_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    contest_effect_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    super_contest_effect_id?: IntNullableFilter;

    @Field(() => Super_contest_effectsRelationFilter, {nullable:true})
    super_contest_effects?: Super_contest_effectsRelationFilter;

    @Field(() => Contest_effectsRelationFilter, {nullable:true})
    contest_effects?: Contest_effectsRelationFilter;

    @Field(() => Contest_typesRelationFilter, {nullable:true})
    contest_types?: Contest_typesRelationFilter;

    @Field(() => Move_effectsRelationFilter, {nullable:true})
    move_effects?: Move_effectsRelationFilter;

    @Field(() => Move_damage_classesRelationFilter, {nullable:true})
    move_damage_classes?: Move_damage_classesRelationFilter;

    @Field(() => Move_targetsRelationFilter, {nullable:true})
    move_targets?: Move_targetsRelationFilter;

    @Field(() => TypesRelationFilter, {nullable:true})
    types?: TypesRelationFilter;

    @Field(() => GenerationsRelationFilter, {nullable:true})
    generations?: GenerationsRelationFilter;

    @Field(() => Contest_combosListRelationFilter, {nullable:true})
    contest_combos_contest_combos_second_move_idTomoves?: Contest_combosListRelationFilter;

    @Field(() => Contest_combosListRelationFilter, {nullable:true})
    contest_combos_contest_combos_first_move_idTomoves?: Contest_combosListRelationFilter;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: MachinesListRelationFilter;

    @Field(() => Move_changelogListRelationFilter, {nullable:true})
    move_changelog?: Move_changelogListRelationFilter;

    @Field(() => Move_flag_mapListRelationFilter, {nullable:true})
    move_flag_map?: Move_flag_mapListRelationFilter;

    @Field(() => Move_flavor_summariesListRelationFilter, {nullable:true})
    move_flavor_summaries?: Move_flavor_summariesListRelationFilter;

    @Field(() => Move_flavor_textListRelationFilter, {nullable:true})
    move_flavor_text?: Move_flavor_textListRelationFilter;

    @Field(() => Move_metaRelationFilter, {nullable:true})
    move_meta?: Move_metaRelationFilter;

    @Field(() => Move_meta_stat_changesListRelationFilter, {nullable:true})
    move_meta_stat_changes?: Move_meta_stat_changesListRelationFilter;

    @Field(() => Move_namesListRelationFilter, {nullable:true})
    move_names?: Move_namesListRelationFilter;

    @Field(() => Pokemon_evolutionListRelationFilter, {nullable:true})
    pokemon_evolution?: Pokemon_evolutionListRelationFilter;

    @Field(() => Super_contest_combosListRelationFilter, {nullable:true})
    super_contest_combos_movesTosuper_contest_combos_second_move_id?: Super_contest_combosListRelationFilter;

    @Field(() => Super_contest_combosListRelationFilter, {nullable:true})
    super_contest_combos_movesTosuper_contest_combos_first_move_id?: Super_contest_combosListRelationFilter;
}
