import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereInput } from '../encounters/encounters-where.input';

@InputType()
export class EncountersListRelationFilter {

    @Field(() => encountersWhereInput, {nullable:true})
    every?: encountersWhereInput;

    @Field(() => encountersWhereInput, {nullable:true})
    some?: encountersWhereInput;

    @Field(() => encountersWhereInput, {nullable:true})
    none?: encountersWhereInput;
}
