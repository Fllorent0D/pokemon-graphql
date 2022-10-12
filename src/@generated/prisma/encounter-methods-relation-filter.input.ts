import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsWhereInput } from '../encounter-methods/encounter-methods-where.input';

@InputType()
export class Encounter_methodsRelationFilter {

    @Field(() => encounter_methodsWhereInput, {nullable:true})
    is?: encounter_methodsWhereInput;

    @Field(() => encounter_methodsWhereInput, {nullable:true})
    isNot?: encounter_methodsWhereInput;
}
