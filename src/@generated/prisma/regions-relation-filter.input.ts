import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsWhereInput } from '../regions/regions-where.input';

@InputType()
export class RegionsRelationFilter {

    @Field(() => regionsWhereInput, {nullable:true})
    is?: regionsWhereInput;

    @Field(() => regionsWhereInput, {nullable:true})
    isNot?: regionsWhereInput;
}
