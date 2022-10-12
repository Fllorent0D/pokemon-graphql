import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereInput } from '../generations/generations-where.input';

@InputType()
export class GenerationsRelationFilter {

    @Field(() => generationsWhereInput, {nullable:true})
    is?: generationsWhereInput;

    @Field(() => generationsWhereInput, {nullable:true})
    isNot?: generationsWhereInput;
}
