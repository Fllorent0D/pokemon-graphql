import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Version_groupsCount {

    @Field(() => Int, {nullable:false})
    ability_changelog!: number;

    @Field(() => Int, {nullable:false})
    ability_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    encounter_slots!: number;

    @Field(() => Int, {nullable:false})
    item_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    machines!: number;

    @Field(() => Int, {nullable:false})
    move_changelog!: number;

    @Field(() => Int, {nullable:false})
    move_effect_changelog!: number;

    @Field(() => Int, {nullable:false})
    move_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    pokemon_forms!: number;

    @Field(() => Int, {nullable:false})
    version_group_regions!: number;

    @Field(() => Int, {nullable:false})
    versions!: number;
}
