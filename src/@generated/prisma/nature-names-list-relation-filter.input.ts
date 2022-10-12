import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesWhereInput } from '../nature-names/nature-names-where.input';

@InputType()
export class Nature_namesListRelationFilter {

    @Field(() => nature_namesWhereInput, {nullable:true})
    every?: nature_namesWhereInput;

    @Field(() => nature_namesWhereInput, {nullable:true})
    some?: nature_namesWhereInput;

    @Field(() => nature_namesWhereInput, {nullable:true})
    none?: nature_namesWhereInput;
}
