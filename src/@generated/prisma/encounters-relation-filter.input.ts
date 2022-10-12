import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereInput } from '../encounters/encounters-where.input';

@InputType()
export class EncountersRelationFilter {

    @Field(() => encountersWhereInput, {nullable:true})
    is?: encountersWhereInput;

    @Field(() => encountersWhereInput, {nullable:true})
    isNot?: encountersWhereInput;
}
