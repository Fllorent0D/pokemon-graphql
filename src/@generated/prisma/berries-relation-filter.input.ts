import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesWhereInput } from '../berries/berries-where.input';

@InputType()
export class BerriesRelationFilter {

    @Field(() => berriesWhereInput, {nullable:true})
    is?: berriesWhereInput;

    @Field(() => berriesWhereInput, {nullable:true})
    isNot?: berriesWhereInput;
}
