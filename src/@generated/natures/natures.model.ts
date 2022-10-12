import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { contest_types } from '../contest-types/contest-types.model';
import { stats } from '../stats/stats.model';
import { nature_battle_style_preferences } from '../nature-battle-style-preferences/nature-battle-style-preferences.model';
import { nature_names } from '../nature-names/nature-names.model';
import { nature_pokeathlon_stats } from '../nature-pokeathlon-stats/nature-pokeathlon-stats.model';
import { NaturesCount } from '../prisma/natures-count.output';

@ObjectType()
export class natures {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    decreased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    increased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    hates_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    likes_flavor_id!: number;

    @Field(() => contest_types, {nullable:false})
    contest_types_contest_typesTonatures_likes_flavor_id?: contest_types;

    @Field(() => contest_types, {nullable:false})
    contest_types_contest_typesTonatures_hates_flavor_id?: contest_types;

    @Field(() => stats, {nullable:false})
    stats_natures_increased_stat_idTostats?: stats;

    @Field(() => stats, {nullable:false})
    stats_natures_decreased_stat_idTostats?: stats;

    @Field(() => [nature_battle_style_preferences], {nullable:true})
    nature_battle_style_preferences?: Array<nature_battle_style_preferences>;

    @Field(() => [nature_names], {nullable:true})
    nature_names?: Array<nature_names>;

    @Field(() => [nature_pokeathlon_stats], {nullable:true})
    nature_pokeathlon_stats?: Array<nature_pokeathlon_stats>;

    @Field(() => NaturesCount, {nullable:false})
    _count?: NaturesCount;
}
