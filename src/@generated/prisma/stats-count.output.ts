import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StatsCount {

    @Field(() => Int, {nullable:false})
    move_meta_stat_changes!: number;

    @Field(() => Int, {nullable:false})
    natures_natures_increased_stat_idTostats!: number;

    @Field(() => Int, {nullable:false})
    natures_natures_decreased_stat_idTostats!: number;

    @Field(() => Int, {nullable:false})
    pokemon_stats!: number;

    @Field(() => Int, {nullable:false})
    stat_hints!: number;

    @Field(() => Int, {nullable:false})
    stat_names!: number;
}
