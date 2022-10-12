import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { stats } from '../stats/stats.model';
import { pokemon } from '../pokemon/pokemon.model';

@ObjectType()
export class pokemon_stats {

    @HideField()
    pokemon_id!: number;

    @HideField()
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    base_stat!: number;

    @Field(() => Int, {nullable:false})
    effort!: number;

    @Field(() => stats, {nullable:false})
    stats?: stats;

    @Field(() => pokemon, {nullable:false})
    pokemon?: pokemon;
}
