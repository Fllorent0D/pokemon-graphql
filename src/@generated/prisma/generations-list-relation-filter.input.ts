import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereInput } from '../generations/generations-where.input';

@InputType()
export class GenerationsListRelationFilter {

    @Field(() => generationsWhereInput, {nullable:true})
    every?: generationsWhereInput;

    @Field(() => generationsWhereInput, {nullable:true})
    some?: generationsWhereInput;

    @Field(() => generationsWhereInput, {nullable:true})
    none?: generationsWhereInput;
}
