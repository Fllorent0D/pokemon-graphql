import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hint_namesWhereInput } from '../stat-hint-names/stat-hint-names-where.input';
import { Type } from 'class-transformer';
import { stat_hint_namesOrderByWithRelationInput } from '../stat-hint-names/stat-hint-names-order-by-with-relation.input';
import { stat_hint_namesWhereUniqueInput } from '../stat-hint-names/stat-hint-names-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatestatHintNamesArgs {

    @Field(() => stat_hint_namesWhereInput, {nullable:true})
    @Type(() => stat_hint_namesWhereInput)
    where?: stat_hint_namesWhereInput;

    @Field(() => [stat_hint_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<stat_hint_namesOrderByWithRelationInput>;

    @Field(() => stat_hint_namesWhereUniqueInput, {nullable:true})
    cursor?: stat_hint_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
