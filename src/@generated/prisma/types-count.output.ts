import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TypesCount {

    @Field(() => Int, {nullable:false})
    berries!: number;

    @Field(() => Int, {nullable:false})
    move_changelog!: number;

    @Field(() => Int, {nullable:false})
    moves!: number;

    @Field(() => Int, {nullable:false})
    pokemon_types!: number;

    @Field(() => Int, {nullable:false})
    type_efficacy_type_efficacy_target_type_idTotypes!: number;

    @Field(() => Int, {nullable:false})
    type_efficacy_type_efficacy_damage_type_idTotypes!: number;

    @Field(() => Int, {nullable:false})
    type_names!: number;
}
