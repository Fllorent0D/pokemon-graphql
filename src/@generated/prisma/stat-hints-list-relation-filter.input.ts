import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsWhereInput } from '../stat-hints/stat-hints-where.input';

@InputType()
export class Stat_hintsListRelationFilter {

    @Field(() => stat_hintsWhereInput, {nullable:true})
    every?: stat_hintsWhereInput;

    @Field(() => stat_hintsWhereInput, {nullable:true})
    some?: stat_hintsWhereInput;

    @Field(() => stat_hintsWhereInput, {nullable:true})
    none?: stat_hintsWhereInput;
}
