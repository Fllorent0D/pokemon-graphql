import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesWhereInput } from '../type-names/type-names-where.input';

@InputType()
export class Type_namesListRelationFilter {

    @Field(() => type_namesWhereInput, {nullable:true})
    every?: type_namesWhereInput;

    @Field(() => type_namesWhereInput, {nullable:true})
    some?: type_namesWhereInput;

    @Field(() => type_namesWhereInput, {nullable:true})
    none?: type_namesWhereInput;
}
