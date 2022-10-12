import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesWhereInput } from '../abilities/abilities-where.input';

@InputType()
export class AbilitiesListRelationFilter {

    @Field(() => abilitiesWhereInput, {nullable:true})
    every?: abilitiesWhereInput;

    @Field(() => abilitiesWhereInput, {nullable:true})
    some?: abilitiesWhereInput;

    @Field(() => abilitiesWhereInput, {nullable:true})
    none?: abilitiesWhereInput;
}
