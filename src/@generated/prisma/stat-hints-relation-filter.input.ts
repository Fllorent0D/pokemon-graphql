import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsWhereInput } from '../stat-hints/stat-hints-where.input';

@InputType()
export class Stat_hintsRelationFilter {

    @Field(() => stat_hintsWhereInput, {nullable:true})
    is?: stat_hintsWhereInput;

    @Field(() => stat_hintsWhereInput, {nullable:true})
    isNot?: stat_hintsWhereInput;
}
