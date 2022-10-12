import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Move_damage_classesRelationFilter } from '../prisma/move-damage-classes-relation-filter.input';
import { Move_meta_stat_changesListRelationFilter } from '../prisma/move-meta-stat-changes-list-relation-filter.input';
import { NaturesListRelationFilter } from '../prisma/natures-list-relation-filter.input';
import { Pokemon_statsListRelationFilter } from '../prisma/pokemon-stats-list-relation-filter.input';
import { Stat_hintsListRelationFilter } from '../prisma/stat-hints-list-relation-filter.input';
import { Stat_namesListRelationFilter } from '../prisma/stat-names-list-relation-filter.input';

@InputType()
export class statsWhereInput {

    @Field(() => [statsWhereInput], {nullable:true})
    AND?: Array<statsWhereInput>;

    @Field(() => [statsWhereInput], {nullable:true})
    OR?: Array<statsWhereInput>;

    @Field(() => [statsWhereInput], {nullable:true})
    NOT?: Array<statsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    damage_class_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_battle_only?: BoolFilter;

    @Field(() => Move_damage_classesRelationFilter, {nullable:true})
    move_damage_classes?: Move_damage_classesRelationFilter;

    @Field(() => Move_meta_stat_changesListRelationFilter, {nullable:true})
    move_meta_stat_changes?: Move_meta_stat_changesListRelationFilter;

    @Field(() => NaturesListRelationFilter, {nullable:true})
    natures_natures_increased_stat_idTostats?: NaturesListRelationFilter;

    @Field(() => NaturesListRelationFilter, {nullable:true})
    natures_natures_decreased_stat_idTostats?: NaturesListRelationFilter;

    @Field(() => Pokemon_statsListRelationFilter, {nullable:true})
    pokemon_stats?: Pokemon_statsListRelationFilter;

    @Field(() => Stat_hintsListRelationFilter, {nullable:true})
    stat_hints?: Stat_hintsListRelationFilter;

    @Field(() => Stat_namesListRelationFilter, {nullable:true})
    stat_names?: Stat_namesListRelationFilter;
}
