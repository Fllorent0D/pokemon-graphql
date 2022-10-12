import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesWhereInput } from '../generation-names/generation-names-where.input';

@InputType()
export class Generation_namesListRelationFilter {

    @Field(() => generation_namesWhereInput, {nullable:true})
    every?: generation_namesWhereInput;

    @Field(() => generation_namesWhereInput, {nullable:true})
    some?: generation_namesWhereInput;

    @Field(() => generation_namesWhereInput, {nullable:true})
    none?: generation_namesWhereInput;
}
