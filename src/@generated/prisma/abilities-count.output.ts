import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AbilitiesCount {

    @Field(() => Int, {nullable:false})
    ability_changelog!: number;

    @Field(() => Int, {nullable:false})
    ability_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    ability_names!: number;

    @Field(() => Int, {nullable:false})
    ability_prose!: number;

    @Field(() => Int, {nullable:false})
    pokemon_abilities!: number;
}
