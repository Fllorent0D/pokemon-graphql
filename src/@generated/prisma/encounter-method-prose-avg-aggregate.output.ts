import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Encounter_method_proseAvgAggregate {

    @Field(() => Float, {nullable:true})
    encounter_method_id?: number;

    @Field(() => Float, {nullable:true})
    local_language_id?: number;
}
