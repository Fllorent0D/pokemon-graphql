import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokeathlon_stats } from '../pokeathlon-stats/pokeathlon-stats.model';
import { natures } from '../natures/natures.model';

@ObjectType()
export class nature_pokeathlon_stats {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    pokeathlon_stat_id!: number;

    @Field(() => Int, {nullable:false})
    max_change!: number;

    @Field(() => pokeathlon_stats, {nullable:false})
    pokeathlon_stats?: pokeathlon_stats;

    @Field(() => natures, {nullable:false})
    natures?: natures;
}
