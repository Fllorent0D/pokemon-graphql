import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { types } from '../types/types.model';

@ObjectType()
export class type_efficacy {

    @Field(() => Int, {nullable:false})
    damage_type_id!: number;

    @Field(() => Int, {nullable:false})
    target_type_id!: number;

    @Field(() => Int, {nullable:false})
    damage_factor!: number;

    @Field(() => types, {nullable:false})
    types_type_efficacy_target_type_idTotypes?: types;

    @Field(() => types, {nullable:false})
    types_type_efficacy_damage_type_idTotypes?: types;
}
