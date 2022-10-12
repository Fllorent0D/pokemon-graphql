import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Move_meta_categoriesCountAggregate } from './move-meta-categories-count-aggregate.output';
import { Move_meta_categoriesAvgAggregate } from './move-meta-categories-avg-aggregate.output';
import { Move_meta_categoriesSumAggregate } from './move-meta-categories-sum-aggregate.output';
import { Move_meta_categoriesMinAggregate } from './move-meta-categories-min-aggregate.output';
import { Move_meta_categoriesMaxAggregate } from './move-meta-categories-max-aggregate.output';

@ObjectType()
export class AggregateMove_meta_categories {

    @Field(() => Move_meta_categoriesCountAggregate, {nullable:true})
    _count?: Move_meta_categoriesCountAggregate;

    @Field(() => Move_meta_categoriesAvgAggregate, {nullable:true})
    _avg?: Move_meta_categoriesAvgAggregate;

    @Field(() => Move_meta_categoriesSumAggregate, {nullable:true})
    _sum?: Move_meta_categoriesSumAggregate;

    @Field(() => Move_meta_categoriesMinAggregate, {nullable:true})
    _min?: Move_meta_categoriesMinAggregate;

    @Field(() => Move_meta_categoriesMaxAggregate, {nullable:true})
    _max?: Move_meta_categoriesMaxAggregate;
}
