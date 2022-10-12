import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesWhereInput } from '../natures/natures-where.input';

@InputType()
export class NaturesListRelationFilter {

    @Field(() => naturesWhereInput, {nullable:true})
    every?: naturesWhereInput;

    @Field(() => naturesWhereInput, {nullable:true})
    some?: naturesWhereInput;

    @Field(() => naturesWhereInput, {nullable:true})
    none?: naturesWhereInput;
}
