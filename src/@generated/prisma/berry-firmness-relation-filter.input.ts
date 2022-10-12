import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmnessWhereInput } from '../berry-firmness/berry-firmness-where.input';

@InputType()
export class Berry_firmnessRelationFilter {

    @Field(() => berry_firmnessWhereInput, {nullable:true})
    is?: berry_firmnessWhereInput;

    @Field(() => berry_firmnessWhereInput, {nullable:true})
    isNot?: berry_firmnessWhereInput;
}
