import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereInput } from '../types/types-where.input';

@InputType()
export class TypesRelationFilter {

    @Field(() => typesWhereInput, {nullable:true})
    is?: typesWhereInput;

    @Field(() => typesWhereInput, {nullable:true})
    isNot?: typesWhereInput;
}
