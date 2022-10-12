import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesWhereInput } from '../natures/natures-where.input';

@InputType()
export class NaturesRelationFilter {

    @Field(() => naturesWhereInput, {nullable:true})
    is?: naturesWhereInput;

    @Field(() => naturesWhereInput, {nullable:true})
    isNot?: naturesWhereInput;
}
