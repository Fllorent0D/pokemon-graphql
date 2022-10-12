import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Encounter_condition_valuesMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    encounter_condition_id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Boolean, {nullable:true})
    is_default?: boolean;
}
