import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_method_proseWhereInput } from '../encounter-method-prose/encounter-method-prose-where.input';

@InputType()
export class Encounter_method_proseListRelationFilter {

    @Field(() => encounter_method_proseWhereInput, {nullable:true})
    every?: encounter_method_proseWhereInput;

    @Field(() => encounter_method_proseWhereInput, {nullable:true})
    some?: encounter_method_proseWhereInput;

    @Field(() => encounter_method_proseWhereInput, {nullable:true})
    none?: encounter_method_proseWhereInput;
}
