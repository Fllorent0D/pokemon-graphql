import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Encounter_conditionsCount {

    @Field(() => Int, {nullable:false})
    encounter_condition_prose!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_values!: number;
}
