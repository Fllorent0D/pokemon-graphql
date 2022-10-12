import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereInput } from '../types/types-where.input';

@InputType()
export class TypesListRelationFilter {

    @Field(() => typesWhereInput, {nullable:true})
    every?: typesWhereInput;

    @Field(() => typesWhereInput, {nullable:true})
    some?: typesWhereInput;

    @Field(() => typesWhereInput, {nullable:true})
    none?: typesWhereInput;
}
