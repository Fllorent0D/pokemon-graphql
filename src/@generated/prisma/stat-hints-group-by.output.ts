import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Stat_hintsCountAggregate } from './stat-hints-count-aggregate.output';
import { Stat_hintsAvgAggregate } from './stat-hints-avg-aggregate.output';
import { Stat_hintsSumAggregate } from './stat-hints-sum-aggregate.output';
import { Stat_hintsMinAggregate } from './stat-hints-min-aggregate.output';
import { Stat_hintsMaxAggregate } from './stat-hints-max-aggregate.output';

@ObjectType()
export class Stat_hintsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    gene_mod_5!: number;

    @Field(() => Stat_hintsCountAggregate, {nullable:true})
    _count?: Stat_hintsCountAggregate;

    @Field(() => Stat_hintsAvgAggregate, {nullable:true})
    _avg?: Stat_hintsAvgAggregate;

    @Field(() => Stat_hintsSumAggregate, {nullable:true})
    _sum?: Stat_hintsSumAggregate;

    @Field(() => Stat_hintsMinAggregate, {nullable:true})
    _min?: Stat_hintsMinAggregate;

    @Field(() => Stat_hintsMaxAggregate, {nullable:true})
    _max?: Stat_hintsMaxAggregate;
}
