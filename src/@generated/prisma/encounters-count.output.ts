import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EncountersCount {

    @Field(() => Int, {nullable:false})
    encounter_condition_value_map!: number;
}
