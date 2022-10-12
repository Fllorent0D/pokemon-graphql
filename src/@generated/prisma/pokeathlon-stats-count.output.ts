import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokeathlon_statsCount {

    @Field(() => Int, {nullable:false})
    nature_pokeathlon_stats!: number;

    @Field(() => Int, {nullable:false})
    pokeathlon_stat_names!: number;

    @Field(() => Int, {nullable:false})
    pokemon_form_pokeathlon_stats!: number;
}
