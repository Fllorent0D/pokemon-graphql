import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Encounter_condition_value_mapAvgAggregate {

    @Field(() => Float, {nullable:true})
    encounter_id?: number;

    @Field(() => Float, {nullable:true})
    encounter_condition_value_id?: number;
}
