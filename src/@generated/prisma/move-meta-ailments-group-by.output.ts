import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Move_meta_ailmentsCountAggregate } from './move-meta-ailments-count-aggregate.output';
import { Move_meta_ailmentsAvgAggregate } from './move-meta-ailments-avg-aggregate.output';
import { Move_meta_ailmentsSumAggregate } from './move-meta-ailments-sum-aggregate.output';
import { Move_meta_ailmentsMinAggregate } from './move-meta-ailments-min-aggregate.output';
import { Move_meta_ailmentsMaxAggregate } from './move-meta-ailments-max-aggregate.output';

@ObjectType()
export class Move_meta_ailmentsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Move_meta_ailmentsCountAggregate, {nullable:true})
    _count?: Move_meta_ailmentsCountAggregate;

    @Field(() => Move_meta_ailmentsAvgAggregate, {nullable:true})
    _avg?: Move_meta_ailmentsAvgAggregate;

    @Field(() => Move_meta_ailmentsSumAggregate, {nullable:true})
    _sum?: Move_meta_ailmentsSumAggregate;

    @Field(() => Move_meta_ailmentsMinAggregate, {nullable:true})
    _min?: Move_meta_ailmentsMinAggregate;

    @Field(() => Move_meta_ailmentsMaxAggregate, {nullable:true})
    _max?: Move_meta_ailmentsMaxAggregate;
}
