import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_meta_category_proseCountAggregate } from './move-meta-category-prose-count-aggregate.output';
import { Move_meta_category_proseAvgAggregate } from './move-meta-category-prose-avg-aggregate.output';
import { Move_meta_category_proseSumAggregate } from './move-meta-category-prose-sum-aggregate.output';
import { Move_meta_category_proseMinAggregate } from './move-meta-category-prose-min-aggregate.output';
import { Move_meta_category_proseMaxAggregate } from './move-meta-category-prose-max-aggregate.output';

@ObjectType()
export class AggregateMove_meta_category_prose {

    @Field(() => Move_meta_category_proseCountAggregate, {nullable:true})
    _count?: Move_meta_category_proseCountAggregate;

    @Field(() => Move_meta_category_proseAvgAggregate, {nullable:true})
    _avg?: Move_meta_category_proseAvgAggregate;

    @Field(() => Move_meta_category_proseSumAggregate, {nullable:true})
    _sum?: Move_meta_category_proseSumAggregate;

    @Field(() => Move_meta_category_proseMinAggregate, {nullable:true})
    _min?: Move_meta_category_proseMinAggregate;

    @Field(() => Move_meta_category_proseMaxAggregate, {nullable:true})
    _max?: Move_meta_category_proseMaxAggregate;
}
