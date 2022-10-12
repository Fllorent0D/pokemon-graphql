import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Encounter_condition_valuesCount {

    @Field(() => Int, {nullable:false})
    encounter_condition_value_map!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_value_prose!: number;
}
