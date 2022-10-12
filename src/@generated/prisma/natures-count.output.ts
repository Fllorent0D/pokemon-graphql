import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NaturesCount {

    @Field(() => Int, {nullable:false})
    nature_battle_style_preferences!: number;

    @Field(() => Int, {nullable:false})
    nature_names!: number;

    @Field(() => Int, {nullable:false})
    nature_pokeathlon_stats!: number;
}
