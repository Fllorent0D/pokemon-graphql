import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsWhereInput } from '../berry-flavors/berry-flavors-where.input';

@InputType()
export class Berry_flavorsListRelationFilter {

    @Field(() => berry_flavorsWhereInput, {nullable:true})
    every?: berry_flavorsWhereInput;

    @Field(() => berry_flavorsWhereInput, {nullable:true})
    some?: berry_flavorsWhereInput;

    @Field(() => berry_flavorsWhereInput, {nullable:true})
    none?: berry_flavorsWhereInput;
}
