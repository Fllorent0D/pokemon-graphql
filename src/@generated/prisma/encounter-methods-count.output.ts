import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Encounter_methodsCount {

    @Field(() => Int, {nullable:false})
    encounter_method_prose!: number;

    @Field(() => Int, {nullable:false})
    encounter_slots!: number;

    @Field(() => Int, {nullable:false})
    location_area_encounter_rates!: number;
}
