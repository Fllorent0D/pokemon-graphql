import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Encounter_condition_value_proseSumAggregate {

    @Field(() => Int, {nullable:true})
    encounter_condition_value_id?: number;

    @Field(() => Int, {nullable:true})
    local_language_id?: number;
}
