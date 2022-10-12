import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { pokeathlon_stats } from '../pokeathlon-stats/pokeathlon-stats.model';

@ObjectType()
export class pokeathlon_stat_names {

    @Field(() => Int, {nullable:false})
    pokeathlon_stat_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => pokeathlon_stats, {nullable:false})
    pokeathlon_stats?: pokeathlon_stats;
}
