import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesWhereInput } from '../abilities/abilities-where.input';

@InputType()
export class AbilitiesRelationFilter {

    @Field(() => abilitiesWhereInput, {nullable:true})
    is?: abilitiesWhereInput;

    @Field(() => abilitiesWhereInput, {nullable:true})
    isNot?: abilitiesWhereInput;
}
